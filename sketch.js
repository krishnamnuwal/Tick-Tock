var h,m,sec

function setup(){
createCanvas(450,450)

 //console.log(sec)
 angleMode(DEGREES);
}

function  draw(){
background(237,236,231)
 fill(52,89,149)
 textSize(22)
textStyle(BOLD)

text(h+':'+m+':'+sec,175,390)
textSize(28)
fill(3,206,164)
text("~Tick ",136,430)
fill(202,21,81)
text("Tock~ ",210,430)

  translate(200,200)
rotate (-90);

 h=hour();
 m=minute();
 sec=second();

strokeWeight(4);
  stroke(52,89,149);
  noFill();


  var secAngle=map(sec,0,60,0,360);
  arc(0,0,300,300,0,secAngle);

    stroke(3,206,164);
    strokeWeight(6)

  var minAngle=map(m,0,60,0,360)
   arc(0,0,275,275,0,minAngle)

  stroke(202,21,81);

strokeWeight(8)
var hAngle=map(h%12,0,12,0,360)
  arc(0,0,245,245,0,hAngle);

//console.log(secAngle)


  push();
  rotate(hAngle)
    stroke(202,21,81)		  
	strokeWeight(7);
	line(0,0,60,0)

  pop();

  push();

rotate(secAngle);
stroke(52,89,149);
strokeWeight(2);
line(0,0,100,0)
  pop();

  push();

rotate(minAngle);
stroke(3,206,164);
strokeWeight(5);
line(0,0,80,0)
  pop();


}