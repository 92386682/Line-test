let Table;
let x = 0;
let y = 0;
let output;
let output2;
let origin=0;
let ycoord = 200;
angleMode(DEGREES);

function setup() {
  createCanvas(400, 400, WEBGL);
  // line1 = new MovingLine;
  // line2= new MovingLine;
  setInterval(() => { 
output = -(Table.getString(x, 0));
 x++}, 1);//col1
 setInterval(() => { 
   output2 = (Table.getString(y, 1));
    y++}, 1);//col2
  
}

function preload () {
  Table = loadTable ('Funeral Suits Full.csv', 'csv', 'header');
}





function draw() {
  if (frameCount < 1200) {
  background(0);
  strokeWeight(1.3)
  stroke(255);
  text (output, 20, 20, 0)
  rotateY(frameCount * 0.01)
  push()

    for (rotation = 0; rotation < 300; rotation +=10) {
      push()
      line (0, output2*1.5, 0, 0, output*1.5, 0);
      rotateY(rotation);
      line (rotation, output2*1.5, 0, rotation, output*1.5, 0);
      rotateZ(rotation)
      if (rotation <= 100){
      rotateX(rotation * (frameCount * 0.01))}
      line (0, output2, 0, 0, output, 0);
      pop()
    
      }

  // line (100, output2, 0, 100, output, 0);

  // line (120, output2, 0, 120, output, 0);
  pop()
  rotateY(frameCount * 0.01)
  // linerepeater();


      
}

else if (frameCount > 1200) {
  setInterval(() => { 
    output = -(Table.getString(x, 0));
     x++}, 420);//col1
     setInterval(() => { 
       output2 = (Table.getString(y, 1));
        y++}, 420);//col2
  background(0);
  text(output + 'dB', 10, 20);
  text(output2+ 'dB', 10, 380);
  text(frameCount, 20, 40);
  push()
  noStroke()
  ambientLight(120, 120, 245); 

box(50);
    pop()
  push()
 rotateY(frameCount * 0.01);
 rotateX(frameCount * 0.01);

  for (origin = 0; origin < 200; origin +=10) {
  // while (origin < width) {
  push()
    line(origin, 0, ycoord, 0, output*3, 0);
    line(origin, 0, ycoord, 0, output*3, 0);
    line(origin, 0, ycoord , 0, output*3, 0);
    line(origin, 0, ycoord, 0, output2*3, 0);
    line(-origin, 0, ycoord, 0, output*3, 0);//centre screen left begins here
    line(-origin, 0, ycoord, 0, output*3);
    line(-origin,0, ycoord, 0, output2*3, 0);
    line(-origin, 0, ycoord, 0, output2*3);
    // pop() //this could be written more succintly as a loop
    line(origin, 0, -ycoord, 0, output*3, 0);
    line(origin, 0, -ycoord, 0, output*3, 0);
    line(origin, 0, -ycoord , 0, output*3, 0);
    line(origin, 0, -ycoord, 0, output2*3, 0);
    line(-origin, 0, -ycoord, 0, output*3, 0);//centre screen left begins here
    line(-origin, 0, -ycoord, 0, output*3);
    line(-origin,0, -ycoord, 0, output2*3, 0);
    line(-origin, 0, -ycoord, 0, output2*3);
    pop()
  }
  }

}

