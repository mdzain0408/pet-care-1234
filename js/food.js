class food {

constructor(){

    
    this.image = loadImage("images/Milk.png")
    this.foodStock =0
}

referFood(){

    var refer = database.ref('food')
    refer.on("value",function(data){
    
   foodS = data.val();
    
    })





}




updateFoodStock(foodStock){
this.foodStock = foodStock

}
deductfood(){
if(this.foodStock >0){
this.foodStock = this.foodStock-1;

}

}


getFoodStock(){
return this.foodStock

}

display(){

var x = 500,y = 200

imageMode(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock != 0){
  for(var i = 0;i<this.foodStock;i = i++){
     if(i%5 === 0){

x = 80;
y = y+50

     }

     image(this.image,x,y,50,50);
     x = x+30



  }
  


}

}




}