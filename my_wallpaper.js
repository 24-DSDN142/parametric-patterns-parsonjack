//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(200, 150, 120); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);

   // draws a line from the mouse pointer, to where the mouse pointer previously was
 drawborder(0,0);
  drawsquare1(0,0);
  drawline(100,100,20,20)
  let bcx = 100
   let bcy = 100
   drawbigcircle(bcx,bcy);


   let sq2x = 136
   let sq2y = 53
   //x is 36 from centre

  drawsquare2(sq2x,sq2y);
  //drawsquare2(sq2x+50,100);
  //drawsquare2(sq2x-50,100);
  drawsquare2(sq2x,147);


  let ex = 100;
  let ey = 100;
  let HEISWATCHING = true;
  if(HEISWATCHING){
    // if statement that just gets rid of the eye
   draweyeball(ex,ey);
  }

//origin
   let hx=10
   let hy=10
   drawhole(hx,hy)
//for border
   drawhole(hx,hy+20)
   drawhole(hx,hy+40)
   drawhole(hx,hy+60)
   drawhole(hx,hy+80)
   drawhole(hx,hy+100)
   drawhole(hx,hy+120)
   drawhole(hx,hy+140)
   drawhole(hx,hy+160)
   drawhole(hx,hy+180)

   drawhole(hx+180,hy+20)
   drawhole(hx+180,hy+40)
   drawhole(hx+180,hy+60)
   drawhole(hx+180,hy+80)
   drawhole(hx+180,hy+100)
   drawhole(hx+180,hy+120)
   drawhole(hx+180,hy+140)
   drawhole(hx+180,hy+160)
   drawhole(hx+180,hy+180)

   drawhole(hx+20,hy)
   drawhole(hx+40,hy)
   drawhole(hx+60,hy)
   drawhole(hx+80,hy)
   drawhole(hx+100,hy)
   drawhole(hx+120,hy)
   drawhole(hx+140,hy)
   drawhole(hx+160,hy)
   drawhole(hx+180,hy)

   drawhole(hx+20,hy+180)
   drawhole(hx+40,hy+180)
   drawhole(hx+60,hy+180)
   drawhole(hx+80,hy+180)
   drawhole(hx+100,hy+180)
   drawhole(hx+120,hy+180)
   drawhole(hx+140,hy+180)
   drawhole(hx+160,hy+180)
   drawhole(hx+180,hy+180)

   //for circle
   let h2x=10
   let h2y=10
   //drawhole2(h2x,h2y)

   drawhole2(h2x+20+17,h2y+143)
   drawhole2(h2x+143,h2y+143)
   drawhole2(h2x+20+17,h2y+37)
   drawhole2(h2x+143,h2y+37)

   drawhole2(h2x+90,h2y+15)
   drawhole2(h2x+90,h2y+165)
   drawhole2(h2x+15,h2y+90)
   drawhole2(h2x+165,h2y+90)

   drawhole2(h2x+20,h2y+62.5)
   drawhole2(h2x+160,h2y+62.5)
   drawhole2(h2x+21,h2y+120)
   drawhole2(h2x+159,h2y+120)

   drawhole2(h2x+60,h2y+21.5)
   drawhole2(h2x+120,h2y+21.5)
   drawhole2(h2x+60,h2y+158.5)
   drawhole2(h2x+120,h2y+158.5)

   let h3x=70.5
   let h3y=70.5
   drawhole3(h3x,h3y)
   drawhole3(h3x+58,h3y)
   drawhole3(h3x,h3y+58)
   drawhole3(h3x+58,h3y+58)

   let sq3x = 63.5
   let sq3y =100

  drawsquare3(sq3x,sq3y);
  drawsquare3(sq3x+95,sq3y);
 }
 function draweyeball(eyeballx,eyebally){
 
 //let pupilx =225;
   //let pupily =300;
 
   strokeWeight(5);
   stroke(110,120,130);
   fill(250);
   
   beginShape();
   let eyeballsize =50;
   let pupilsize =20;
   let offsetx = 0
   let offsety = 0
   ellipse(eyeballx, eyebally, eyeballsize, eyeballsize);
   fill(0);
   strokeWeight(4);
   stroke(140,170,200);
   ellipse(eyeballx+offsetx, eyebally+offsety, pupilsize, pupilsize);
 //to move pupil go to "let offset =" ^ and change offsetx/offsety with + or -
 }
 function drawsquare1(sq1x,sq1y){
 
   strokeWeight(0);
   stroke(0);
   fill(100,50,30);
 
 beginShape();
 
 quad(20,20,180,20,180,180,20,180);
 //fill(130,30,60);
 //quad(60,60,110,60,110,200,60,200);
 
 }
 function drawsquare2(sq2x,sq2y){
 
   strokeWeight(2);
   stroke(100,110,120);
   fill(200, 150, 120);
 
 beginShape();
 
 let pupil2size =17;
 // positive number decreases size because fuck me
 let pupil2size2 = 55;
 //this ones normal

 quad(sq2x, sq2y, sq2x-36, sq2y+12, sq2x-72, sq2y, sq2x-36, sq2y-12);
 fill(100,50,30);
 quad(sq2x-pupil2size, sq2y, sq2x-36, sq2y+12, sq2x-pupil2size2, sq2y, sq2x-36, sq2y-12)
 fill(300);
 quad(sq2x-pupil2size-17, sq2y, sq2x-36, sq2y+12, sq2x-pupil2size2+17, sq2y, sq2x-36, sq2y-12)
 
 }
 function drawsquare3(sq3x,sq3y){
 
  strokeWeight(2);
   stroke(100,110,120);
  fill(200, 150, 120);

beginShape();

let pupil3size =17;

quad(sq3x, sq3y, sq3x-12, sq3y+36, sq3x-24,sq3y, sq3x-12, sq3y-36);
fill(100,50,30);
quad(sq3x, sq3y, sq3x-12, sq3y+pupil3size, sq3x-24, sq3y, sq3x-12, sq3y-pupil3size)
//"pupil" width = 17
fill(300);
quad(sq3x, sq3y, sq3x-12, sq3y+pupil3size-15, sq3x-24, sq3y, sq3x-12, sq3y-pupil3size+15)
}
 function drawborder(brdrx,brdry){
 
  strokeWeight(0);
  stroke(80,90,100);
  fill(190, 140, 110);

beginShape();

//quad(86, 50, 50, 62, 14, 50, 50, 38);
//20,20,180,20,180,180,20,180
//quad(brdrx, brdry, brdrx-36, brdry+12, brdrx-72, brdry, brdrx-36, brdry-12);
quad(0,0,200,0,200,200,0,200);
strokeWeight(10);
  stroke(80,90,100);
  fill(80, 50, 40);
quad(10,10,190,10,190,190,10,190);

 }
 function drawhole(holex,holey){

  strokeWeight(1);
  stroke(60,65,70);
fill(200+30, 150+30, 120+30);

beginShape();

let holesize=8
ellipse(holex,holey,holesize,holesize);
 }
 function drawhole2(hole2x,hole2y){

  strokeWeight(1);
  stroke(60,65,70);
fill(200+30, 150+30, 120+30);

beginShape();

let hole2size=8
ellipse(hole2x,hole2y,hole2size,hole2size);
 }
 function drawhole3(hole3x,hole3y){

  strokeWeight(3);
  stroke(100,110,120);
fill(200+30, 150+30, 120+30);

beginShape();

let hole3size=8
ellipse(hole3x,hole3y,hole3size,hole3size);
 }

 function drawbigcircle(bigcirclex,bigcircley){

  strokeWeight(10);
  stroke(80,90,100);
fill(100, 50, 30);

beginShape();

let bcsize=150
ellipse(bigcirclex,bigcircley,bcsize,bcsize);
 }
 function drawline(linex,liney){

  strokeWeight(2);
  stroke(300);
fill(300);

beginShape();

line(100,100,20,20);
line(100,100,40,20);
line(100,100,60,20);
line(100,100,80,20);
line(100,100,20,40);
line(100,100,20,60);
line(100,100,20,80);

line(100,100,180,20);
line(100,100,160,20);
line(100,100,140,20);
line(100,100,120,20);
line(100,100,20,160);
line(100,100,20,140);
line(100,100,20,120);

line(100,100,20,180);
line(100,100,40,180);
line(100,100,60,180);
line(100,100,80,180);
line(100,100,180,40);
line(100,100,180,60);
line(100,100,180,80);

line(100,100,180,180);
line(100,100,180,160);
line(100,100,180,140);
line(100,100,180,120);
line(100,100,160,180);
line(100,100,140,180);
line(100,100,120,180);
 }
