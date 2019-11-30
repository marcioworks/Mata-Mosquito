var largura = 0
var altura = 0
var vidas = 1

function ajustarTamanhoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,altura)
}

ajustarTamanhoPalco()

function posicaoRandomica(){
var posicaoX = Math.floor(Math.random() * largura)- 90
var posicaoY = Math.floor(Math.random() * altura)- 90


posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX,posicaoY)

//remover elemento anterior caso exista
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()   

    if(vidas > 3){
       window.location.href = "fim_de_jogo.html"
    }
    else{
        console.log('coracao afetado '+ vidas)
        document.getElementById('v'+vidas).src = "imagens/coracao_vazio.png"

        vidas++
    }
}

//criar elemento html
var mosquito = document.createElement('img')
mosquito.src = 'imagens/Mosquito.png'
mosquito.className =tamanhoAleatorio()+ ' '+ ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute' 
mosquito.id ='mosquito'
mosquito.onclick = function(){
    this.remove()
}
document.body.appendChild(mosquito)


}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)
    console.log(classe)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var lado = Math.floor(Math.random()*2)

    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}


