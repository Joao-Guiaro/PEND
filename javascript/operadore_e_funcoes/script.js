console.log("Hello World !");

let a = 10;
let b = 3;
let c = 5;

console.log("Adição entre",a,"e",b,"é:", a + b);
console.log("Subtração entre",a,"e",b,"é:", a - b);
console.log("Multiplicação entre",a,"e",b,"é:",a * b);
console.log("Divisão entre",a,"e",b,"é:", a / b);
console.log("Resto da Divisão entre",a,"e",b,"é:", a % b);
console.log("Fatoração entre",a,"e",b,"é:", a**b);

let contador = 5;
contador++;
console.log(contador);

let media = (a + b + c)/3;
console.log("A média dos números",a,",",b,"e", c, " é: ",media);

let resto = a%b;
console.log("O resto da divisão de ", a, " e ",b," é: ",resto);

let x = 10;
let y = "10";

console.log("O",x,"é maior que o",y,x>y);
console.log("O",x,"é menor que o",y,x<y);
console.log("O",x,"é maior ou igual que o",y,x>=y);
console.log("O",x,"é menor ou igual que o",y,x<=y);
console.log("O",x,"é igual(valor) que o",y,x == y);
console.log("O",x,"é igual(valor e tipo) que o",y,x === y);
console.log("O",x,"é diferente(valor) que o",y,x != y);
console.log("O",x,"é diferente(valor e tipo) que o",y,x !== y);

let idade = 16
if (idade >= 18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
}

if(a>b){
    console.log(a,"é maior que",b);
}else if(a==b){
    cosole.log(a,"é igual a",b);
}else{
    console.log(a,"é menor a",b);
}

let temCarteira = true;

console.log(idade >= 18 && temCarteira);

let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva);

let ligado = false;
console.log(!ligado);

let nota = 6.5;

let frequencia = 10;

if(nota>=7 && frequencia>=75){
    console.log("O aluno foi aprovado");
}else if(nota<7 && frequencia>= 75){
    console.log("O aluno foi reprovado por nota baixa");
}else{
    console.log("O aluno foi reprovado por baixa presença");
}

let login = "Joao";
let senha = 1234;
let token = true;

if(login == "joao" && senha== 1234 || token == true){
    console.log("Acesso Aceito");
}else{
    console.log("Acesso Negado")
}