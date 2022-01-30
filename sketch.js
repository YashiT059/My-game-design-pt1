var gamestate  =  0;
var firstImg, secondImg, diverImg, pearlImg, gemImg, fishBImg, fishYImg, bgImg
var sea
var diver



function preload (){
firstImg = loadImage("assets/seaImage.jpeg")

secondImg = loadImage("assets/InstructionOceanImages.jpeg")

driverImg = loadImage("assets/scuba diver.png")

pearlImg = loadImage("assets/pearl.png")

gemImg = loadImage("assets/gem.gif")

fishBImg = loadImage ("assets/blackfish.png")

fishYImg = loadImage ("assets/yellowfish.png")

bgImg = loadImage ("assets/scrolling.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode('CENTER')

  sea = createSprite (600,200)
  sea.addImage("sea",bgImg)
  sea.visible = false
  sea.scale= 2
}

function draw() {
  background(255,255,255);  

  if (gamestate == 0){
  background(firstImg)
  textSize(45)
  fill ("white")
  text ("Welcome to Mysterious Explorers", windowWidth/2-350, windowHeight/2-100)

  textSize(30 )
  text ("Click space bar to start",windowWidth/2-150,  windowHeight/2)

  if (keyDown("space")){
    gamestate  =1
  }
  }

  if (gamestate == 1){
       background(secondImg)

       textSize (70)
       fill ("#ffd77a")
       text("Instructions to play",windowWidth/2-225, 100)


      textSize(45)
       text ("Your objective is to get to the shore before your stuck", windowWidth/2, 250)

       textSize(30 )
        text ("Click right arrow to start",windowWidth/2-150,  windowHeight/2)

       if (keyDown(RIGHT_ARROW)){
        gamestate  =2
      }
  }

  if (gamestate == 2){
    gameplay()
  }


  drawSprites();
}

function gameplay(){
  sea.visible = true 
  sea.velocityY=10
  if (  sea.y > 1000){
    sea.y = sea.height/2
  }
}