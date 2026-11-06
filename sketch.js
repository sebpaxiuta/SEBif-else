
function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
  if (mouseX < width / 2) {
    background(20, 25, 35);  
  } else {
    background(240, 240, 245); 
  }

  let espacamento = 60;

  for (let x = 40; x < width; x += espacamento) {
    for (let y = 40; y < height; y += espacamento) {
      
      let distancia = dist(mouseX, mouseY, x, y);
      
      let tamanho = map(distancia, 0, 300, 40, 10, true);

      
      if (mouseY < height / 2) {
        fill(255, 100, 150, 200); 
      } else {
        fill(50, 200, 180, 200);  
      }

      
      if (keyIsPressed) {
        rectMode(CENTER);
        rect(x, y, tamanho * 0.8, tamanho * 0.8);
      } else {
        ellipse(x, y, tamanho, tamanho);
      }
    }
  }
}