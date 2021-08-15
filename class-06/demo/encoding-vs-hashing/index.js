// encode(username:password)
const base64 = require('base-64');
const bcrypt = require('bcrypt');

const username = 'rawan';
const password = 'test@1234'
const encoded = base64.encode(`${username}:${password}`);

console.log("encoded ---------------------", encoded)

const decoded = base64.decode(encoded);

console.log("decoded ---------------------", decoded);


// encrypition and hashing

let password2 = 'test@1234';

encrypt(password2);

async function encrypt(text) {
    console.log(" text ----> ", text)
    let hashed = await bcrypt.hash(text, 5);
    console.log("hashed text ----> ", hashed);

    let p1 = '$2b$05$C8DC56tUf53maRdAggHmbeUdinvZqZI0CrNbOsQHGkAW7h0jVEpve';
    let p2 = '$2b$05$IzsGRqLB0I50uImN1cyaf.tV6yi0OVm4yysACeXZ0MZQ1qrDbDz8C';
    let p3 = '$2b$05$IzsGRqLB0I50uImN1cyaf.tV6yi0OVm4yysACeXZ0MZQ1qrDbDz8Z';

    let isValid1 = await bcrypt.compare(text, p1);
    console.log("isValid1 --->", isValid1)
    let isValid2 = await bcrypt.compare(text, p2);
    console.log("isValid2 --->", isValid2);

    let isValid3 = await bcrypt.compare(text, p3);
    console.log("isValid3 --->", isValid3);


}