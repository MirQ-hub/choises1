/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name : Mirva Väänänen
 * Started date :
 * Ended   date :
 * 
 */

function v01() {
    let byear = document.getElementById("year").value;
    let date = new Date();
    let year= date.getFullYear();
    let age = year - byear

    if(age <= 18){
        document.getElementById("allow").innerHTML="Liian nuori"
    }
    else {
        document.getElementById("allow").innerHTML="Tervetuloa"
    }


}

function v02() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    if(num1 < num2){
        document.getElementById("smaller").innerHTML=num1;
     }
     else{
        document.getElementById("smaller").innerHTML=num2;
     }

}

function v03() {
    const NEG = "One of the numbers is negative."
    const POS = "Both numbers are either positive or negative."
let num1 = document.
getElementById("number1").
value;
let num2 = document.
getElementById("number2").
value;
let negative = num1 * num2

if(
    negative < 0){
        document.getElementById("negative").innerHTML=NEG
    }
    else{
        document.getElementById("negative").innerHTML=POS
    }



    
}

function v04() {
    const REC = "rectangle";
    const SQ = "square";

    let side1 = document.getElementById("side1").value;
    let side2 = document.
    getElementById("side2").
    value;
    let sum = side1 * side2;

    if(side1 == side2){
        document.getElementById("square").innerHTML=SQ
    }
    else{
        document.getElementById("square").innerHTML=REC;
    }

}

function v05() {
    const EVEN = "even";
    const ODD = "odd";

    let num3 = document.getElementById("number3").value;

    if(num3 % 2 == 0){
        document.getElementById("even").innerHTML=EVEN;
    }
    else{
        document.getElementById("even").innerHTML=ODD
    }
}

function v06() {
    const zero = "zero"
    const positive = " positive"
    const negative = "negative"

    let num3 = document.
    getElementById("number3").
    value;

    if(num3 < 0){
        document.getElementById("positive").innerHTML=negative;
    }
    else if(num3 == 0){
        document.getElementById("positive").innerHTML=zero;
    }
    else{
        document.getElementById("positive").innerHTML=positive;
    }

}

function v07() {

  let smallest = document.getElementById("digit_a").value;
  let digB = document.getElementById("digit_b").value;
  let digC = document.getElementById("digit_c").value;
  let digD = document.getElementById("digit_d").value;
  
 



   document.getElementById("smallest").innerHTML=smallest;

   




}

function v08() {

}

function v09() {
	const FLOWER1 = '<img alt="flower1" src="img/flower1.png">';
	const FLOWER2 = '<img alt="flower2" src="img/flower2.png">';
	const FLOWER3 = '<img alt="flower3" src="img/flower3.png">';
	const FLOWER4 = '<img alt="flower4" src="img/flower4.png">';  

}
