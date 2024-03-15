function setup() {
    createCanvas(1000, 1000);
     background(color(30,0,0));
    cor = color(random(0,255), random(0,255), random(0,255));
    posicaoHorizontal = 200;
    posicaoVertical = 200;
  }
  
  
  function draw() {
   
    fill(cor);
    circle(posicaoHorizontal,posicaoVertical,200);
   
   
   
    if (mouseX < posicaoHorizontal){
      posicaoHorizontal =  posicaoHorizontal - 1;
    }
   
    if (mouseX > posicaoHorizontal){
      posicaoHorizontal =  posicaoHorizontal + 1;
    }
   
    if (mouseY < posicaoVertical){
      posicaoVertical--;
    }
     
    if (mouseY > posicaoVertical){
      posicaoVertical++;
    }
   
    if (mouseIsPressed){
      cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
    }
     
  }
  