
function interviewQuestion(job) {
  a = job;
  return function(name) {
    switch (a) {
      case "designer":
        console.log(`${name}, what is UX design?`);
        break;
      case "teacher":
        console.log(`${name}, what subject do you teach?`);
        break;
      default:
        console.log(`Hello, ${name}, what do you do?`);
    }
  };
}

let interviewDes = interviewQuestion("designer");
interviewDes("john");
interviewQuestion("teacher")("Jake");

*/

/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

var questions = [
    'Is JS the coolest programming language?',
    'What is my name?', 
    'How much is 35 + 90?'
]

let q;
let score = 0;

var Question = function (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
    this.displayQuestions = function() {
        q= queezQuestions[Math.round(Math.random() * 2)];
        console.log(`${q.question}`);
        q.answers.forEach(i => console.log(i));
        this.checkAnswer();
    };
    this.checkAnswer = function() {
        let answ = prompt('Please select the correct answer (type the number)');
        if (answ == q.correct) {
            score++; 
            console.log('correct answer!');
            console.log(score);
            question1.displayQuestions();
        } else if (answ == 'exit') {
            console.log('you exited the quiz')
            return;
        } else {
            console.log('try again!')
        }
    };
}

var question1 = new Question(questions[0], ['0: yes ', '1: no '], 0);
var question2 = new Question(questions[1], ['0: Nick ', '1: Alex ', '2: Jack '], 1);
var question3 = new Question(questions[2], ['0: 12 ', '1: 100 ', '2: 125 '], 2);

var queezQuestions = [question1, question2, question3];

question1.displayQuestions();
question1.checkAnswer();


/*
Question.prototype.displayQuestions = function() {
    console.log(`${q.question}`);
    q.answers.forEach(i => console.log(i))
};
*/

/*
Question.prototype.checkAnswer = (function() {
    let answ = prompt('Please select the correct answer (type the number)');
    if (answ == q.correct) {
        console.log('correct answer!');
        question1.displayQuestions();
    } else {
        console.log('try again!')
    }
})();
*/




/*
function arrayCalc(arr, fn) {
    queezQuestions.forEach(i => {
        return fn(arr[i]);
    });
}
*/




/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again :)')
        }
    }
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);
    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);
    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = parseInt(prompt('Please select the correct answer.'));
    questions[n].checkAnswer(answer);
})();
*/





/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/


/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);
    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);
    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();
*/
