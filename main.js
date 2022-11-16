x = 0;
y = 0;
speakData= "";;
drawApple = "";
to_number= "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function preload() {
  load= loadImage("apple.png");
  apple= loadImage();
}
function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 console.log(event); 
 to_number= Number(content);
 if(Number.isInteger(to_number)) {
  document.getElementById("status").innerHTML= "Desenhando maçã";
  drawApple= "set";
 }
 else {
  document.getElementById("status").innerHTML= "Não entendi. REPETE";
}
 content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
}

function setup() {
  screen_width= window.innerWidth;
  screen_height= window.innerHeight;
  canvas= createCanvas(screen_width, screen_height-150);
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
  }
  for(var i= 1; i <= to_number; i++) {
    x= Math.floor(Math.random() * 700);
    y= Math.floor(Math.random() * 400);
    Image(apple, x, y, 50, 50);
  }
  speak();
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}