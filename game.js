var user = prompt("Hello there!  What is your name");
console.log("The variable user is their name which is "+user);
alert("Nice to meet you "+user+"! I hope your day is exciting and fun. Let's play a 'yes or no' game about Nadia to add fun to your day!");
var n = 0;
var tracker = 0;

var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');
var pass3 = document.getElementById('pass3');
var pass4 = document.getElementById('pass4');
var pass5 = document.getElementById('pass5');
var pass6 = document.getElementById('pass6');

function qst1 (){
  while(n===0){
  var response1 = prompt("Was Nadia born in Seattle?").toLowerCase();
  var answer1 = "no";
  if(answer1===response1 || response1==='n'){
    pass1.textContent = ("Congrats "+user+"! That is correct. Nadia was born in California.");
    tracker++;
    n++;
  }else if(response1==="yes" || response1==='y'){
    pass1.textContent = ("Sorry "+user+". Nadia was not born in Seattle, she was born in California!");
    n++;
  }else{
    pass1.textContent = ("That response isn't recognized.  Please try again using 'yes' or 'no'.")
  }
  console.log(user+" gave the response "+response1+". The actual answer is "+ answer1);
  }
}

function qst2(){
  while(n===1){
  var response2 = prompt("Did Nadia study molecular biology in college?").toLowerCase();
  var answer2 = "yes";
  if(answer2===response2 || response2 ==='y'){
    pass2.textContent = ("Congrats "+user+"! That is correct. Nadia study molecular biology at the University of Washington.");
    tracker++;
    n++;
  }else if(response2==="no" || response2 ==='n'){
    pass2.textContent = ("Sorry "+user+". That is incorrect. Nadia study molecular biology at the University of Washington.");
    n++;
  }else{
    pass2.textContent = ("That response isn't recognized.  Please try again using 'yes' or 'no'.")
  }
  console.log(user+" gave the response "+response2+". The actual answer is "+ answer2);
  }
}

function qst3(){
  while(n===2){
  var response3 = prompt("Is Nadia really into D.C. comics?").toLowerCase();
  var answer3 = "no";
  if(answer3===response3 ||response3 ==='n'){
    pass3.textContent = ("Congrats "+user+"! That is correct.  Nadia is really into Marvel comics not D.C. comics");
    tracker++;
    n++;
  }else if(response3==="yes" || response3==='y'){
    pass3.textContent = ("Sorry "+user+". That is incorrect. Nadia is really into Marvel comics not D.C. comics");
    n++;
  }else{
    pass3.textContent = ("That response isn't recognized.  Please try again using 'yes' or 'no'.")
  }
  console.log(user+" gave the response "+response3+". The actual answer is "+ answer3);
  }
}

function qst4(){
  while(n===3){
    var response4 = prompt("Did Nadia dress as She-Hulk for Halloween?").toLowerCase();
    var answer4 = "yes";
    if(answer4===response4 || response4 ==='y'){
      pass4.textContent = ("Congrats "+user+"! That is correct. Nadia did dress up as She-Hulk for Halloween.");
      tracker++;
      n++;
    }else if(response4==="no" || response4==='n'){
      pass4.textContent = ("Sorry "+user+". That is incorrect. Nadia did dress up as She-Hulk for Halloween.");
      n++;
    }else{
      pass4.textContent = ("That response isn't recognized.  Please try again using 'yes' or 'no'.")
    }
    console.log(user+" gave the response "+response4+". The actual answer is "+ answer4);
  }
}

function qst5(){
  var response5 = prompt("What is Nadia's age?");
  var answer5 = 29;
  do{
    response5 = parseInt(response5);
    if(answer5>response5 && typeof response5 === 'number'){
      pass5.textContent = ("Sorry "+user+"! You said " + response5+". That is too low.");
      var response5 = prompt("Guess again!");
    }else if(answer5<response5 && typeof response5 ==='number'){
      pass5.textContent = ("Sorry "+user+"! You said " + response5+". That is too high.");
      var response5 = prompt("Guess again!");
    }else if(response5===answer5 && typeof response5==='number'){
      pass5.textContent = ("Correct!  Nadia's age is "+answer5+". You put "+response5+".");
    }else{
      var response5 = prompt("Your response isn't recognized.  Please guess again using a number.");
    }
  }while(response5 !==answer5);
}

function qst6(){
  var answer6 = ['dog','fish','bird','rabbit', 'mammal'];
  var check;
  var response6 = prompt("What was a type of animal Nadia had as a pet?").toLowerCase();
  for(i=0; i<answer6.length; i++){
  if(answer6[i]===response6 || answer6[i]+'s'===response6){
    pass6.textContent = ("Yes Nadia had a "+response6+" for a pet!");
    check = true;
    break;
  }else{
    check = false;
  }
  };
  if(check===false){
    pass6.textContent = ("No, Nadia did not have a "+response6+" for a pet.");
  }
}

qst1();
qst2();
qst3();
qst4();
qst5();
qst6();

alert(user+" you got "+tracker+"/4 of the 'yes or no' questions correct.");
alert("Wasn't that fun? Feel free to read more about Nadia on this page.  Otherwise have a good day!");
