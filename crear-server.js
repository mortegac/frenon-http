
const http = require("http");

const server = http.createServer(function (peticion, respuesta){
   respuesta.end("<h1>Bienvenidos al Backend</h1>");
});

server.listen(3000, function(){
   console.log("tu servidor está listo en " + this.address().port);
});