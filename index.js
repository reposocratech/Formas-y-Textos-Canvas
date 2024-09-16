// Referencia y contexto
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//  * RECTÁNGULOS ↓

// Cambia el color de relleno
ctx.fillStyle = "red";
// Dibuja un rectángulo relleno
ctx.fillRect(0, 0, 100, 100);

// Cambia el color del borde
ctx.strokeStyle = "blue";
// Cambia el grosor del borde
ctx.lineWidth = "5";
// Redondea la unión de 2 líneas
ctx.lineJoin = "round";
// Dibuja un contorno rectangular
ctx.strokeRect(150, 0, 100, 150);

// Dibuja un contorno rectangular
ctx.clearRect(25, 25, 50, 50);

// * --------------------------------------------------------------------------

// * TRAZADOS ↓

// Crea un nuevo trazo
ctx.beginPath();

// Mueve la pluma a las coordenadas especificadas por x e y
ctx.moveTo(300, 50);

// Dibuja una línea desde la posición actual de dibujo hasta la posición
// especificada por x e y
ctx.lineTo(400, 25);
ctx.lineTo(400, 75);

// Cierra el trazado creando una línea recta desde el punto actual hasta el inicio
ctx.closePath();

// Dibuja una forma sólida rellenando el área de contenido del trazado. No hay
// que usar closePath()
ctx.fill();

// Dibuja la forma trazando su contorno
ctx.stroke();

// * Trazado rectangular ↓

ctx.beginPath();
ctx.rect(600, 300, 100, 150);
ctx.fillStyle = "rgb( 0 0 0 / 50%)";
ctx.strokeStyle = "red";
ctx.fill();
ctx.stroke();
ctx.closePath();

// * --------------------------------------------------------------------------

// * ARCOS ↓

ctx.beginPath();

// arc(x, y, radius, startAngle, endAngle, counterclockwise)
// Coordenadas x e y, radio, punto inicial y punto final, counterclockwise:
// true = dibuja el arco en sentido contrario a las agujas del reloj, false =
// arco se dibuja en sentido de las agujas del reloj.
ctx.arc(400, 300, 50, 0, Math.PI * 2, true);

ctx.fillStyle = "orange";
ctx.strokeStyle = "brown";
ctx.fill();
ctx.stroke();

// Dibujo cara feliz

/* ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
ctx.stroke(); */

// * TEXTOS ↓

ctx.font = "48px arial";
ctx.fillText("Canvas", 10, 490);
// ctx.strokeText("Canvas", 10, 490);
