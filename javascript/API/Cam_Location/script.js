// ===============================
// CÂMERA
// ===============================

navigator.mediaDevices.getUserMedia({

    video: true,
    audio: true

})

.then(function(stream) {

    const video = document.querySelector("#camera");

    video.srcObject = stream;

    console.log("Câmera ativada!");

})

.catch(function(erro) {

    console.log("Erro ao acessar câmera:", erro);

});



// ===============================
// LOCALIZAÇÃO
// ===============================

const locationGood = document.querySelector("#locationGood");
const locationBad = document.querySelector("#locationBad");

const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const accuracy = document.querySelector("#accuracy");



navigator.geolocation.getCurrentPosition(

    function(posicao) {


        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precisão:", posicao.coords.accuracy);



        latitude.textContent = posicao.coords.latitude;

        longitude.textContent = posicao.coords.longitude;

        accuracy.textContent = posicao.coords.accuracy;



        locationBad.style.display = "none";

        locationGood.style.display = "block";


    },


    function(erro) {


        console.log("Não foi possível obter a localização.", erro);



        locationBad.style.display = "block";

        locationGood.style.display = "none";


    }

);