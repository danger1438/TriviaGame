
const questions = [
    {
        question: "Who was the first porn star to be CONTRACTED by an adult studio?",
        choices: ["Linda Lovelace", "Marilyn Chambers", "Ginger Lynn", "Traci Lords"],
        validAnswer: 2
    }, 
    {
        question: "What famous porn star left teaching junior high Spanish for a long and prosperous career in adult entertainment?",
        multChoice:["Janna Jameson", "Juli Ashton", "Lisa Ann", "Tera Patrick"],
        validAnswer: 1,

    },
    {
        question: "What blond hottie appeared alongside Jason Mewes in the Hollywood hit 'Zack And Miri Make A Porno'?",
        multChoice: ["Angie Savage", "Alexis Texas", "Anita Blond", "Katie Morgan"],
        validAnswer: 3
},
{
        question: "Which U.S. men's magazine was the first to show pubic hair?",
        multChoice: ["Playboy", "Hustler", "Penthouse","Stag"],
        validAnswer:2
    },
];
$(document).ready(function(){
    
    $("#startUpGame").on('click',function(){
        setupGame();
    });
});
function setupGame(){
    $.each(questions,function(i){
        var html = '';
                        html = setQuestion(this.question,i);
                        html = html.concat(setChoices(this.choices,i));
        $('#theGame').append(html);
                });
}
function setQuestion(question,questionIndex){
                var setId = "#question"+questionIndex;
    var html = '<h3 id="'+setId+'">'+question+'</h3>';
    return html;
}
function setChoices(choices,questionIndex){
    var html = '';
    $.each(choices,function(choiceIndex){
        html = html.concat('<h3 onClick="checkAnswer('+questionIndex+','+choiceIndex+');">'+this.toString()+'</h3>');
    });
    return html;
}
function checkAnswer(question,choice){
    if(choice === questions[question].validAnswer){
        //Correct Answer
console.log("Correct Answer");
    } else {
        //Incorrect Answer
console.log("Incorrect Answer");
    }
}




