var random_number_1=1+Math.floor(Math.random()*6);
var random_number_2=1+Math.floor(Math.random()*6);
var random_dice_image_1="images/dice"+random_number_1+".png";
var random_dice_image_2="images/dice"+random_number_2+".png";
document.querySelector(".img1").setAttribute("src",random_dice_image_1);
document.querySelector(".img2").setAttribute("src",random_dice_image_2);
if(random_number_1>random_number_2)
{
    document.querySelector("h1").innerHTML="🚩Player1 Wins."
}
else if(random_number_1<random_number_2)
{
    document.querySelector("h1").innerHTML="Player2 Wins.🚩"
}
else
{
    document.querySelector("h1").innerHTML="DRAW."
}
