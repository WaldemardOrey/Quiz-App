const quizData = [

{
    question: 'Qual é a idade de Waldemar?',
    a: '10',
    b: '12',
    c: '15',
    d: '18',
    correct: 'c'
},


{

    question:'What is Waldemar favourite Anime?',
    a: 'Black Clover',
    b: 'Re:zero - Starting Life in Another World',
    c: 'One Punch Man',
    d: 'Jujutsu Kaisen',
    correct: 'b'

},

{
  
    question: 'Quem é o mais forte?',
    a: 'Meruem',
    b: 'Saitama',
    c: 'Pandora',
    d: 'Donald Trump',
    correct: 'b'

},

{

   question: 'Qual a que achas melhor Waifu entre as seguíntes?',
   a: 'Armin de SNK',
   b: 'Boleth (kapa kapa kapa)',
   c: 'Emília de Re:zero',
   d: 'Nenhuma dessas!',
   correct: 'c'

},

{

     question: 'How Many people died yesterday?',
     a: '104.682',
     b: '236.902',
     c: 'I forgot!',
     d: 'None Above',
     correct: 'd'

}


]

// Get all Html Elements
const questionEl = document.getElementById("question");

const  a_text = document.getElementById("a_text"); 
const  b_text = document.getElementById("b_text"); 
const  c_text = document.getElementById("c_text"); 
const  d_text = document.getElementById("d_text"); 
const submitBtn = document.getElementById("submit");


// Variables and constants

let currentQuiz = 0 ;

let score = 0;

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");


 // functions

loadQuiz();

function loadQuiz(){
    deselectAnswers();
const currentQuizData = quizData[currentQuiz];

questionEl.innerHTML = currentQuizData.question;

a_text.innerHTML = currentQuizData.a;
b_text.innerHTML = currentQuizData.b;
c_text.innerHTML = currentQuizData.c;
d_text.innerHTML = currentQuizData.d;




}







// get selected element

function getSelected(){


let answer = undefined;

    answerEls.forEach((answerEl) =>{
if(answerEl.checked){

 answer = answerEl.id;

}

    });

return answer;

}

function deselectAnswers(){

answerEls.forEach((answerEl) => {

answerEl.checked = false;

});


}

let happiness = " ";

function kapa(){

   
    if(score === 0){happiness = " Kapa kapa kapa kapa, Vc não me conhece!"};
    if(score === 1){happiness = " Tudo bem, pelos vistos cÊ não me conhece!"};

    if(score === 2){happiness = " Achei que Vc me conhecia melhor!"};
    if(score === 3){happiness = " Mano, sério isso?!, Vc não me desapontou!"};
    if(score === 4){happiness = " Parabéns, obg por testar esta App feita por mim"};
    if(score === 5){happiness = " Kapa kapa kapa, Vc é demais, obg por testar esta App"};
};


submitBtn.addEventListener("click",() => {
const answer = getSelected();








// its all okay here


if(answer){


if(answer === quizData[currentQuiz].correct){
    score++;

    
};



    {
        currentQuiz++;
        
        if(currentQuiz < quizData.length){

            loadQuiz();
        } else{
        
            kapa();
           quiz.innerHTML = `<h2 style=" padding: 1rem;"> Voce acertou ${score} de ${quizData.length} questões.</h2> 
           <h2 style: "padding: 1rem;"> ${happiness}</h2>
           <button  onclick="location.reload()">Recarregar</button>` 
         }
        
       
 }    

 






  

}  

});

        

   