var database,dog, happyDog, sprite,sprite2, foodS, foodStock,lastFed,feed,addFood,feedButton,refilButton;

function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  sprite = createSprite(400,350);
  sprite.addImage(dog);
  feedButton = createButton("Feed");
  feedButton.mousePressed(feedDog);
  feedButton.position(550,60);

  refilButton= createButton("Refil");
  refilButton.mousePressed(addFood)
  refilButton.position(600,60)
  sprite.scale = 0.25;

  


 
  foodObj = new food();
 //foodS = 10
  

}


function draw() {  
  background("green");
 
  textSize(15);
 fill("white")
  textSize(20)
  text("remaining food: "+foodS ,290,100)
 foodObj.display();

  
  







  

  
  
   
   
   
  drawSprites();
    
}
 function feedDog(){
     sprite.addImage(happyDog)
     database.ref('/').update({
     food:foodObj.getFoodStock,
     

     })
     if(foodObj.getFoodStock()<= 0){
       foodObj.updateFoodStock(foodObj.getFoodStock()*0)
     }else {
       foodObj.updateFoodStock(foodObj.getFoodStock()-1)
     }

     

}

function addFoods(){ foodS++; database.ref('/').update({ food:foodS }) }


function readStock(data){ foodS=data.val(); foodObj.updateFoodStock(foodS); }

 







