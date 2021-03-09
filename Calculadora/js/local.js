var displayBuffer = "";
var numero = "";
var termo = [undefined,undefined,undefined];
var resultado = undefined;

function pressNum(num){
    numero = numero.concat(num.innerHTML);
    showDisplay(num.innerHTML);
}

function pressOp(op){
    if(termo[1] == undefined){
        termo[0] = numero;
        termo[1] = op.innerHTML;
        showDisplay(op.innerHTML);
        numero = "";
}
    //fora da condicao nada acontece
}

function pressEqual(){
    if(termo[0] != undefined && termo[1] != undefined && numero != "" ){
        termo[2] = numero;
        var keepresultado;
        switch(termo[1]){
            case '+':
                resultado = Number(termo[0])+Number(termo[2]);
                    break;
            case '-':
                resultado = Number(termo[0])-Number(termo[2]);
                    break;
            case 'x':
                resultado = Number(termo[0])*Number(termo[2]);
                    break;
            case '/':
                resultado = Number(termo[0])/Number(termo[2]);
                    break;
}
    keepresultado = resultado;
    clearDisplay();
    showDisplay(resultado);
    clearMemory()
    numero = keepresultado.toString();

}
//fora da condicao nada acontece
}


function clearMemory(){
    numero = "";
    termo = [undefined,undefined,undefined];
    resultado = undefined;
}

function clearDisplay(){
    displayBuffer = "";
    var tela = document.getElementById('display');
    tela.value = displayBuffer;
}

function clearAll(){
    clearDisplay();
    clearMemory();
}

function showDisplay(conteudo){
    displayBuffer = displayBuffer.concat(conteudo);
    var tela = document.getElementById('display');
    tela.value = displayBuffer;
}