var EasyFtp = require('easy-ftp');
var ftp = new EasyFtp();
var config = {
    host: '160.153.128.40',
    port: 21,
    username: 'bjv7ygkux7u0',
    password: 'Lavamat1!',
    type : 'ftp'
};

ftp.connect(config);
ftp.ls('/public_html/', function(err,list){
    //console.log(err, list);
});

//ftp.rm("/public_html/**", function(err){});

//ftp.cd("/public_html/", function(err, path){
  //  console.log(path);
//});	

ftp.pwd(function(err, path){
    console.log(path);
});	

ftp.upload("C:/wamp64/www/shiny-winner/build/**", "/public_html/", function(err){
    console.log(err);
    ftp.close();
});