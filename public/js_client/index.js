var prop = {
	"command":[
			{"go":"10"},
		  {"go":"10"},
			{"roll":"10"},
			{"go":"10"}
		],
	"id":"中村"
};
window.onload = function () {
  var send = document.getElementById('send');
  send.addEventListener('click',function (e) {
    socket.emit('message', JSON.stringify(prop));
  });
};