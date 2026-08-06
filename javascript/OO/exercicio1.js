//Objeto: Computador

//Atributo: Processador, Placa Mãe, Placa de Vídeo, Armanezamento

//Método: ligar(), desligar(), reiniciar(), suspender()

class Computador{
    constructor(processador, placa_mãe, placa_vídeo, armazenamento){

   
        this.processador = processador;
        this.placa_mãe = placa_mãe;
        this.placa_vídeo = placa_vídeo;
        this.armazenamento = armazenamento;
    }

    ligar(){
        console.log("O computador ligou");
    }
    desligar(){
        console.log("O computador desligou");
    }
    reiniciar(){
        console.log("O computador está reiniciando")
    }
    suspender(){
        console.log(`O computador ${this.processador}  está suspenso`)
    }
}

const computador1 = new Computador("Ryzen 5 5600", "Auros B550M", "RTX 3060 12Gb", "SSD Kingston 1Tb")
const computador2 = new Computador("Intel Core i5", "Gigabyte B760M", "RTX 4060 8Gb", "SSD NVMe 1Tb")
const computador3 = new Computador("Ryzen 7 7800X3D", "MSI B650M", "RX 7900 XT 20Gb", "SSD NVMe 2Tb")

console.log(computador1)
console.log(" ")
console.log("------------------------------");
console.log(" ")
console.log("Atributos do Computador 1:")
console.log("- ", computador1.processador);
console.log("- ", computador1.placa_mãe);
console.log("- ", computador1.placa_vídeo);
console.log("- ", computador1.armazenamento);

console.log(computador2)
console.log(" ")
console.log("------------------------------");
console.log(" ")
console.log("Atributos do Computador 2:")
console.log("- ", computador2.processador);
console.log("- ", computador2.placa_mãe);
console.log("- ", computador2.placa_vídeo);
console.log("- ", computador2.armazenamento);

console.log(computador3)
console.log(" ")
console.log("------------------------------");
console.log(" ")
console.log("Atributos do Computador 3:")
console.log("- ", computador3.processador);
console.log("- ", computador3.placa_mãe);
console.log("- ", computador3.placa_vídeo);
console.log("- ", computador3.armazenamento);

computador1.ligar();
computador1.reiniciar();
computador1.suspender();
computador1.desligar();

computador2.suspender();

computador3.suspender();