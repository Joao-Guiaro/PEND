// ---- elementos ----
const goleiro   = document.getElementById('goleiro');
const bola      = document.getElementById('bola');
const zonas     = document.querySelectorAll('.zona');
const areaBola  = document.getElementById('area-bola');
const mensagem  = document.getElementById('mensagem');
const golsEl    = document.getElementById('gols');
const defesasEl = document.getElementById('defesas');
 
const LARGURA_ZONA = 300;
 
// ---- estado ----
let posGoleiro = 1; // 0 = esquerda, 1 = centro, 2 = direita
let gols = 0;
let defesas = 0;
let travado = false; // impede novo chute durante a animação
 
// ---- funções ----
function moverGoleiro(pos) {
    posGoleiro = pos;
    goleiro.style.left = (pos * LARGURA_ZONA + 5) + 'px';
}
 
function posicaoAleatoria() {
    // totalmente aleatório: o goleiro pode acertar o canto por sorte,
    // igual um pênalti de verdade
    return Math.floor(Math.random() * 3);
}
 
function chutar(zonaEscolhida, zonaEl) {
    if (travado) return;
    travado = true;
 
    // leva a bola visualmente até o centro da zona escolhida
    zonaEl.appendChild(bola);
    bola.style.position = 'absolute';
    bola.style.top = '130px';
    bola.style.left = '130px';
 
    // só AGORA, depois do chute, o goleiro decide pra que lado pula
    const zonaGoleiro = posicaoAleatoria();
    moverGoleiro(zonaGoleiro); // dispara a animação de pulo (transition no CSS)
 
    if (zonaEscolhida === zonaGoleiro) {
        defesas++;
        defesasEl.textContent = defesas;
        mensagem.textContent = 'Defendeu!   ';
        mensagem.style.color = 'crimson';
    } else {
        gols++;
        golsEl.textContent = gols;
        mensagem.textContent = 'GOOOL!';
        mensagem.style.color = 'lightgreen';
    }
 
    setTimeout(() => {
        // devolve a bola pro ponto de partida
        areaBola.appendChild(bola);
        bola.style.position = '';
        bola.style.top = '';
        bola.style.left = '';
 
        // goleiro volta pro centro, pronto pro próximo pênalti
        moverGoleiro(1);
        mensagem.textContent = '';
        travado = false;
    }, 1200);
}
 
// ---- eventos de drag and drop ----
bola.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'bola');
    bola.classList.add('arrastando');
});
 
bola.addEventListener('dragend', () => {
    bola.classList.remove('arrastando');
});
 
zonas.forEach((zona) => {
    zona.addEventListener('dragover', (e) => {
        e.preventDefault(); // obrigatório pra permitir o drop
    });
 
    zona.addEventListener('drop', (e) => {
        e.preventDefault();
        const zonaEscolhida = Number(zona.dataset.zona);
        chutar(zonaEscolhida, zona);
    });
});
 
// ---- posição inicial ----
moverGoleiro(1);