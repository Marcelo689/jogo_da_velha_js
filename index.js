var x = "X";
var o = "O";

var escolheu = false;

var acabou = false;
var jogador1;
var jogador2;
var proximoAjogar;
var ultimoAJogar;
function EscolheJogador(){
    if(!escolheu)
    {
        var escolha = prompt("Escolha entre X ou O, digite (X) ou (O)");
        if(escolha.toUpperCase() == x){
            jogador1 = x;
            jogador2 = o;
            proximoAjogar = x;
            escolheu = true;
        }
        else if(escolha.toUpperCase() == o){
            jogador1 = o;
            jogador2 = x;
            proximoAjogar = o;
            escolheu = true;
        }
        else
            return false;
    }else
        return true;
}
function marcadoComX(div){
    return div.innerHTML == x;
}
function marcadoComO(div){
    return div.innerHTML == o;
}

function checkXVitoria(){
    var linha1Horizontal = marcadoComX(div1) && marcadoComX(div2) && marcadoComX(div3);
    if(linha1Horizontal)
        saida.innerHTML = "O jogador X Venceu";
    var linha2Horizontal = marcadoComX(div4) && marcadoComX(div5) && marcadoComX(div6);
    if(linha2Horizontal)
        saida.innerHTML = "O jogador X Venceu";
    var linha3Horizontal = marcadoComX(div7) && marcadoComX(div8) && marcadoComX(div9);
    if(linha3Horizontal)
        saida.innerHTML = "O jogador X Venceu";
    
    var linha1Vertical = marcadoComX(div1) && marcadoComX(div4) && marcadoComX(div7);
    if(linha1Vertical)
        saida.innerHTML = "O jogador X Venceu";
    var linha2Vertical = marcadoComX(div2) && marcadoComX(div5) && marcadoComX(div8);
    if(linha2Vertical)
        saida.innerHTML = "O jogador X Venceu";
    var linha3Vertical = marcadoComX(div3) && marcadoComX(div6) && marcadoComX(div9);
    if(linha3Vertical)
        saida.innerHTML = "O jogador X Venceu";

    var diagonal1 = marcadoComX(div1) && marcadoComX(div5) && marcadoComX(div9);
    if(diagonal1)
        saida.innerHTML = "O jogador X Venceu";
    var diagonal2 = marcadoComX(div7) && marcadoComX(div5) && marcadoComX(div3);
    if(diagonal2)
        saida.innerHTML = "O jogador X Venceu";
        
    if(linha1Horizontal || linha2Horizontal || linha3Horizontal 
        || linha1Vertical || linha2Vertical || linha3Vertical
        || diagonal1 || diagonal2
    )
        acabou = true;
}

function checkOVitoria(){
    var linha1Horizontal = marcadoComO(div1) && marcadoComO(div2) && marcadoComO(div3);
    if(linha1Horizontal)
        saida.innerHTML = "O jogador (O) Venceu";
    var linha2Horizontal = marcadoComO(div4) && marcadoComO(div5) && marcadoComO(div6);
    if(linha2Horizontal)
        saida.innerHTML = "O jogador (O) Venceu";
    var linha3Horizontal = marcadoComO(div7) && marcadoComO(div8) && marcadoComO(div9);
    if(linha3Horizontal)
        saida.innerHTML = "O jogador (O) Venceu";
    
    var linha1Vertical = marcadoComO(div1) && marcadoComO(div4) && marcadoComO(div7);
    if(linha1Vertical)
        saida.innerHTML = "O jogador (O) Venceu";
    var linha2Vertical = marcadoComO(div2) && marcadoComO(div5) && marcadoComO(div8);
    if(linha2Vertical)
        saida.innerHTML = "O jogador (O) Venceu";
    var linha3Vertical = marcadoComO(div3) && marcadoComO(div6) && marcadoComO(div9);
    if(linha3Vertical)
        saida.innerHTML = "O jogador (O) Venceu";

    var diagonal1 = marcadoComO(div1) && marcadoComO(div5) && marcadoComO(div9);
    if(diagonal1)
        saida.innerHTML = "O jogador (O) Venceu";
    var diagonal2 = marcadoComO(div7) && marcadoComO(div5) && marcadoComO(div3);
    if(diagonal2)
        saida.innerHTML = "O jogador (O) Venceu";

    if(linha1Horizontal || linha2Horizontal || linha3Horizontal 
        || linha1Vertical || linha2Vertical || linha3Vertical
        || diagonal1 || diagonal2
    )
        acabou = true;
}

function checkaVitoria(){
    checkOVitoria();
    checkXVitoria();
}

function PreencheDiv(div){
    if(!(div.innerHTML.trim() == "&nbsp;"))
    {
        return;
    }
    if(acabou)
        return;
   EscolheJogador();
    switch(proximoAjogar){
        case x:
            div.innerHTML = x;
            proximoAjogar = o;
            break;
        case o:
            div.innerHTML = o
            proximoAjogar = x;
            break;
   }

   this.onclick = () =>{};
   if(checkaVitoria())
   {
    acabou = true;
   }
    console.log("venceu");
}