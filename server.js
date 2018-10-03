
var express = require("express");
//The Express is the webserver framework used here. It runs as the backbone of our webserver.
//View https://www.npmjs.com/package/express for more information.

var app = express();
//Start Express under the variable name "app".

var http = require("http").Server(app);
//Make a new http server by grabbing the function and directly starting up a server using express.

var io = require("socket.io")(http);

http.listen(80, function(){
	//Start the server on port 80. This section will write to the console about information regarding
	//the start time of the server (to keep track of when this log was made).

	console.log("The server is now running on port 80\n");
	//Once the server has started, notify the console of the new process.

});

app.get("/", function(request, response){
	response.sendFile(__dirname + "/");
	//By default, node does not allow the client to access any files. Because of that, we
	//have to define the file that is allowed to be interacted with by the client. The
	//'public' folder is the folder for the frontend, which is the file sent to the client.
});

app.use(express.static(__dirname + "/"));
//Just another serving method, we will use express.static to send the files to the client.
