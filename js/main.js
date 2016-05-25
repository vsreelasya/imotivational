
// Player code
var xhttp;

function onLoad() {
    // On startup, the player load's it's content - this would normally be dynamically generated
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", "Sample.xml", false);	// Must be on the same domain
    xhttp.send();
    xmlDoc = xhttp.responseXML;
    onContentLoaded(xmlDoc)
}

var responses = [];

function onContentLoaded(xmlDoc) {
    var s = '';
    s += '<table border="0" padding="0" width="100%" height="100%"><tr>';
    s += '<td width="200" align="center">';
    s += '<div id="Movie1" style="width:200px; height:250px"></div>';
    //s += '<br/><textarea id="question" name="question">This is a test</textarea>';
    //s += '<br/><button type="button" onclick="Speak1()">Speak</button>';
    //	s += '<br/><button type="button" onclick="response1()">Ask</button>';
    //	s += '<br/><button type="button" onclick="Play1()">Play</button>';
    s += '</td>';
    s += '</tr></table>';
    document.getElementById('TopDiv').innerHTML = s;

    msAttach('Movie1', 'BenAS3HTML', ' http://www.x-in-y.com/sko2013/player/Output/BenAS3HTML_Files/', 200, 250);
}

function Speak1() {
    Speak("Movie1", $('#question').text());
}
function Speak2() {
    Speak("Movie2", talking2.value);
}

function Play1() {
    Play("Movie1", question.value);
}
function Play2() {
    Play("Movie2", talking2.value);
}

function response1() {
    response("Movie1", question.value);
}

function response2() {
    response("Movie2", talking2.value);
}


function Play(movieID, Text) {
    alert("Playing " + " " + movieID + "   " + Text + " Not implemented yet ");
    //	msPlay(movieID, Text);
}

function Speak(movieID, Text) {

    msSpeak(movieID, Text);
}
function response(movieID, Text) {
    alert("Response " + " " + movieID + "   " + Text + " Not implemented yet ");
    //	msResponse(movieID, Text);
}

function onSceneLoaded(id) {
    // CB content loaded and ready to accept commands - will get N of these where N is # of characters
}
function onPresentingChange(id, p) {
    // Presenting state changed, e.g. as a result of going idle
    //if (p == false) alert("Character idle");
}
function onFocusChange(id, f) {
    // Focus changed, e.g. as a result of navigation
}
function onExternalCommand(id, cmd, args) {
    // External Command encountered in script
    //alert("External Command cmd=" + cmd + ", args=" + args);
}
function onQueueLengthChange(id, n) {
    // msSpeakQueued queue length change
}
function onVariableChange(id, n) {
    // One or more variables changed
}

// Others
$(document).ready(function(){
    onLoad();
// Questions set
    var questions = [
    "Can you read the question and answer it accordingly?",
    "In order to begin i need to ask how much you drink on each weekday during a typical week?",
    "On an average how many alchol drinks per week do you think the avergae college students drink?"
    ];
    
    var questionCounter = 0;
    var paginator = function(counter, questionsLength){
        if (counter == 0){
            $(".previous").hide();
        } else if (counter == (questionsLength - 1)) {
            $(".next").hide();
        } else{
            $(".previous, .next").show();
        }
    };
    
    $('#question').html(questions[0])
    paginator(questionCounter, questions.length);
    var startFirstScene = function(){
        Speak("Movie1", questions[questionCounter]);
    };
    setTimeout(startFirstScene, 1000);

    $('#answer').click(function(){
        Speak("Movie1", "<bigsmile/>That is CORRECT! Great Job");
    });
    
    $(".previous").click(function(e){
        e.preventDefault;

        if (questionCounter != 0){

            questionCounter = questionCounter - 1;
            paginator(questionCounter, questions.length);
            $('#question').html(questions[questionCounter]);
            Speak("Movie1", questions[questionCounter]);
        }
        paginator(questionCounter, questions.length);
    });

    $(".next").click(function(){
        if (questionCounter != (questions.length - 1)){
            questionCounter = questionCounter + 1;
            paginator(questionCounter);
            $('#question').html(questions[questionCounter]);
            Speak("Movie1", questions[questionCounter]);
        }
        paginator(questionCounter, questions.length);
    });
});