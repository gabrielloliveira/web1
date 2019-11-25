function setCookie() {
    var valor = document.getElementById('NomeP').value
	var data = new Date()
	data.setTime(data.getTime() + 120000)
	document.cookie = "Cookie="+valor+"; expires="+data.toUTCString()+"; path=/"
}

function getCookie() {
    var user = document.cookie.split("=")
    if(user[1]){
        document.getElementById('user-name').innerHTML = user[1]
    }
}
