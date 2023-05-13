var setadireita = window.document.getElementById("setadi")
var leo = window.document.getElementById("leo")
var bruna = window.document.getElementById("bruna")
var samanta = window.document.getElementById("samanta")
var setaesquerda = window.document.getElementById("setaesq")

function RolarParaDireita() {
    leo.style ="display:none"
    samanta.style ="display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:55px"   
}

function RolarParaEsquerda() {
    samanta.style = "display:none"
    leo.style = "display:flex"
     setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}