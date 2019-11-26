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

function troca_imagem(){
    const inputs = document.getElementsByName('sexo')

    for(let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('click', ()=>{
            let input_masculino = document.getElementById('sexo-masculino')
            let input_feminino = document.getElementById('sexo-feminino')
            let div_masculino = document.getElementById('imagem-sexo-masculino')
            let div_feminino = document.getElementById('imagem-sexo-feminino')

            if(input_masculino.checked){
                div_feminino.setAttribute('style', 'display: none')
                div_masculino.setAttribute('style', 'display: absolute')
            }
            if(input_feminino.checked){
                div_masculino.setAttribute('style', 'display: none')
                div_feminino.setAttribute('style', 'display: absolute')
            }
        })
    }
}
