
const SECRET = process.env.SECRET || "mysecretkey";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserSchema = (sequelize, DataTypes) => {
    const Users = sequelize.define('class7_users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true // CONSTRAINT
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.VIRTUAL,
            get() {
                return jwt.sign({username: this.username}, SECRET);
            },
            set(tokenObj) {
               return jwt.sign(tokenObj, SECRET);
            }
        }
    });
    // Sign in findOne ---> get user 
    // {username: 'rawan', password: 'Ewws#2ssddsf', token: 'dddd'}
    // Signup ---> save user (set user) ---> {username: 'rawan', password: 'Ewws#2ssddsf', token: 'seWee221='}
    
    Users.authenticateBasic = async function (username, password) {
      
        const user = await this.findOne({ where: {username: username} });
        console.log("authenticateBasic user : ", user);
        console.log("password :", password);
        console.log("user.password : ", user.password)
        const valid = await bcrypt.compare(password, user.password);
        console.log("valid : ", valid);
        if (valid) {
            return user;
        }
        throw new Error('Invalid UserName and Password');
    }
    
    Users.authenticateToken = async function(token) {
        try {
            const parsedToken = jwt.verify(token, SECRET); // {username: rawan ... }
            const user = await this.findOne({ where: {username: parsedToken.username} });
            if(user) {
                return user;
            }
            throw new Error('invalid token')
        } catch(e) {
            throw new Error(e.message);
        }
        
    }

    return Users;
}



module.exports = UserSchema;