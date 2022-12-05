let canvas;
let allPixels = [];
let colP;
let pixSize;
let pixNI;
let pixNB;
let pixNum;
let pixNum2;
let dButton, eButton;
let inst = 1;
let colPixChange;
let nT;
let saveBtn;

function preload() {
  nT = loadImage("noTexture.png");
}

function setup() {
  canvas = createCanvas(650, 650);
  canvas.class("round");

  pixNI = createInput("16", "number");
  pixNI.class("inp");
  pixNI.parent("top");

  pixNB = createButton("RESIZE / CLEAR");
  pixNB.mousePressed(getPixelData);
  pixNB.class("btn");
  pixNB.parent("top");


  colP = createColorPicker();
  colP.class("colPic");
  colP.parent("bottom");

  dButton = createButton("DRAW");
  dButton.mousePressed(()=>{inst = 1;});
  dButton.parent("top");
  dButton.class("btn");
  
  eButton = createButton("ERASE");
  eButton.mousePressed(()=>{inst = 0;});
  eButton.parent("top");
  eButton.class("btn");

  saveBtn = createButton("SAVE");
  saveBtn.mousePressed(savePixels);
  saveBtn.class("btn");
  saveBtn.id("save");
  saveBtn.parent("top");


  getPixelData();
}
  
function draw() {
  background(255);

  showEditor();
  showPixels();

  if (inst === 1) {
    colPixChange = colP.value();
  } else {
    colPixChange = color(0, 0, 0, 0);
  }
}

function mouseDragged() {
  changePixColor();
}

function mousePressed() {
  changePixColor();
}

function showEditor() {
  image(nT, 0, 0, 800, 800);
}

function showPixels() {
  for(let i = 0; i < pixNum2; i++) {
    allPixels[i].show();
  }
}

function presetPixels() {
  allPixels = [];
  let num = 0;
  for(let i = 0; i < pixNum; i++) {
    for(let j = 0; j < pixNum; j++) {
      num++;
      let pixel = new Pixel(pixSize * i, pixSize * j, pixSize, num);
      allPixels.push(pixel);
    }
  }
}

function changePixColor() {
  for(let i = 0; i < pixNum2; i++) {
    let pixel = allPixels[i];
    if(allPixels[i].isTouchingMouse()){
      allPixels[i].changeColor(colPixChange);
    }
  }
}

function getPixelData() {
  pixNum = parseInt(pixNI.value());
  pixNum2 = pow(pixNum, 2);
  pixSize = width / pixNum;
  
  presetPixels();
}

function savePixels() {
  noLoop();
  background(255);
  showPixels();
  saveCanvas(canvas, "myAmasingPixels", "png");
  loop();
}
