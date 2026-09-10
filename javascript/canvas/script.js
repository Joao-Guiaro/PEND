const canvas = document.querySelector("#canvas");
const bandeira = document.querySelector("#bandeira");
const contexto = canvas.getContext("2d");
const ctx = bandeira.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(250, 0);
ctx.lineTo(500, 150);
ctx.lineTo(250, 300);
ctx.lineTo(0, 150);
ctx.closePath();
ctx.fillStyle = '#f8c414';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 150, 65, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = '#002277';
ctx.fill();
ctx.stroke();


//desenha uma linha
contexto.beginPath();
contexto.moveTo(0, 0);
contexto.lineTo(500, 500);
contexto.moveTo(0, 500);
contexto.lineTo(500, 0);
contexto.stroke();

contexto.fillRect(50, 50, 150, 100);
contexto.fillRect(300, 50, 150, 100);
contexto.stroke();

contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2);
contexto.stroke();


