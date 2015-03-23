var http = require('http');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'localhost',
    auth: {
        user: 'text@example.com',
        pass: 'password'
    }
});

var mailOptions = {
    from: 'Fred Foo ? <foo@blurdybloop.com>', // sender address
    to: 'alex.vinober@gmail.com', // list of receivers
    subject: 'Hello ?', // Subject line
    text: 'Hello world ?', // plaintext body
};


http.createServer(function(req, res) {
   transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
   });
   res.writeHead(200, {'content-type': 'text/plain'});
   
   res.end('Hello, world!\n');
}).listen(3000);

console.log('server is running on 3000');