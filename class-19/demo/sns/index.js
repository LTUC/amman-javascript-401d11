'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
// connect to SNS 
const sns = new AWS.SNS();
// add a message

const topic = 'arn:aws:sns:us-east-1:941965416614:401d11sns';
const msg = {
    title: 'msg2',
    content: 'how r u?'
};

const params = {
    TopicArn: topic,
    Message: JSON.stringify(msg)
}

sns.publish(params).promise().then(data=> {
    console.log(data)
}).catch(err=> {
    console.log(err)
});
