var user = prompt("Hello there!  What is your name");
console.log("The variable user is their name which is "+user);
alert("Nice to meet you "+user+"! I hope your day is exciting and fun. Let's play a 'yes or no' game about Nadia to add fun to your day!");
var n = 0;
var tracker = 0;

while(n===0){
  var response1 = prompt("Was Nadia born in Seattle?").toLowerCase();
  var answer1 = "no";
  if(answer1===response1 || response1==='n'){
    alert("Congrats "+user+"! That is correct. Nadia was born in California.");
    tracker++;
    n++;
  }else if(response1==="yes" || response1==='y'){
    alert("Sorry "+user+". Nadia was not born in Seattle, she was born in California!");
    n++;
  }else{
    alert("That response isn't recognized.  Please try again using 'yes' or 'no'.")
  }
  console.log(user+" gave the response "+response1+". The actual answer is "+ answer1);
  alert("You gave the response "+response1+".");
}

while(n===1){
  var response2 = prompt("Did Nadia study molecular biology in college?").toLowerCase();
  var answer2 = "yes";
  if(answer2===response2 || response2 ==='y'){
    alert("Congrats "+user+"! That is correct. Nadia study molecular biology at the University of Washington.");
    tracker++;
    n++;
  }else if(response2==="no" || response2 ==='n'){
    alert("Sorry "+user+". That is incorrect. Nadia study molecular biology at the University of Washington.");
    n++;
  }else{
    alert("That response isn't recognized.  Please try again using 'yes' or 'no'.")
  }
  console.log(user+" gave the response "+response2+". The actual answer is "+ answer2);
  alert("You gave the response "+response2+".");
}

while(n===2){
  var response3 = prompt("Is Nadia really into D.C. comics?").toLowerCase();
  var answer3 = "no";
  if(answer3===response3 ||response3 ==='n'){
    alert("Congrats "+user+"! That is correct.  Nadia is really into Marvel comics not D.C. comics");
    tracker++;
    n++;
  }else if(response3==="yes" || response3==='y'){
    alert("Sorry "+user+". That is incorrect. Nadia is really into Marvel comics not D.C. comics");
    n++;
  }else{
    alert("That response isn't recognized.  Please try again using 'yes' or 'no'.")
  }
  console.log(user+" gave the response "+response3+". The actual answer is "+ answer3);
  alert("You gave the response "+response3+".");
}

while(n===3){
  var response4 = prompt("Did Nadia dress as She-Hulk for Halloween?").toLowerCase();
  var answer4 = "yes";
  if(answer4===response4 || response4 ==='y'){
    alert("Congrats "+user+"! That is correct. Nadia did dress up as She-Hulk for Halloween.");
    tracker++;
    n++;
  }else if(response4==="no" || response4==='n'){
    alert("Sorry "+user+". That is incorrect. Nadia did dress up as She-Hulk for Halloween.");
    n++;
  }else{
    alert("That response isn't recognized.  Please try again using 'yes' or 'no'.")
  }
  console.log(user+" gave the response "+response4+". The actual answer is "+ answer4);
  alert("You gave the response "+response4+".");
}

  var response5 = prompt("What is Nadia's age?");
  var answer5 = 29;
do{
  response5 = parseInt(response5);
  if(answer5>response5 && typeof response5 === 'number'){
    alert("Sorry "+user+"! You said " + response5+". That is too low.");
    var response5 = prompt("Guess again!");
  }else if(answer5<response5 && typeof response5 ==='number'){
    alert("Sorry "+user+"! You said " + response5+". That is too high.");
    var response5 = prompt("Guess again!");
  }else if(response5===answer5 && typeof response5==='number'){
    alert("Correct!  Nadia's age is "+answer5+". You put "+response5+".");
  }else{
    var response5 = prompt("Your response isn't recognized.  Please guess again using a number.");
  }
}while(response5 !==answer5);


alert(user+" you got "+tracker+"/4 of the 'yes or no' questions correct.");
alert("Wasn't that fun? Feel free to read more about Nadia on this page.  Otherwise have a good day!");
