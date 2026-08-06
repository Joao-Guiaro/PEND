function hora(){
    console.log(`Hora atual: ${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}:${String(data.getSeconds()).padStart(2, '0')}`);
}
hora();

function SomaMedia(x, y){
    console.log(`A soma de ${x} e ${y} resulta em: ${x + y}`);
    console.log(`A média de ${x} e ${y} resulta em: ${(x + y)/2}`);
}
let n1 = Number(prompt("Digite um número:"));
let n2 = Number(prompt("Digite outro número:"));
SomaMedia(n1, n2);


function receba(nome){
    console.log(`Olá ${nome} o seu nome tem ${nome.length} letras`);
    console.log(`E o seu nome em letras maiúsculas é: ${nome.toUpperCase()}`);
}

receba(prompt("Digite o seu nome:"));

function verifica(frase){
    if(frase.includes("HTML") == true){
        console.log(`A frase, "${frase}", que você digitou, contém a palavra HTML`);
    }else{
        console.log(`A frase, "${frase}", que você digitou, não contém HTML`);
    }
}

verifica(prompt("Digite uma frase:").toUpperCase());