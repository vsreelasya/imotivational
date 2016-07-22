
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
    "Hello, my name is Sam. Thank you for agreeing to participate in this discussion. I hope that some of the things we discuss today can be beneficial to you.",
    "I want to spend a few minutes discussing typical drinking habits in college students, and then discuss some of the goals you might be attempting to accomplish over the next few years in college. My role during this time will simply be to provide you with information and ask questions for you to reflect on. Occasionally, I may ask you to respond to a question using the text box below.",
    "In order to begin, I would like to first ask you a few questions about your alcohol use. Please fill out the following table.For the past month, fill in for each calendar day the number of standard drinks you usually drink on that day during a typical week",
    "1.Monday",
	"2.Tuesday",
	"3.Wednesday",
	"4.Thursday",
	"5.Friday",
	"6.Saturday",
	"7.SUnday",
	"Thank you for filling out the questionnaire. First, I would like to ask you about college drinking norms. On average, how many alcoholic drinks per week do you think the average college student drinks?",
	"Thanks for your guess. Several nationwide studies have examined this in college students, and have found that most male students drink an average of 8 drinks per week; 2 nights and 3-4 drinks.<br/> Females students typically drink...What  are your reactions to this? Please use the text box below to answer this question",
	"Sometimes it can seem like everyone drinks a lot in college, when it may actually only be a small number of people who actually do.This information is particularly relevant when trying to understand how much you drink compared to others. We added up the numbers you reported at the beginning of the session. You reported drinking around X drinks in a typical week.",
	"We can also compare your average with other college students. Based on recent studies, your percentile rank is 90, which means you drink more than 89% of male college students in the U.S. Only about 10% of males drink more than you do.What is your reaction to learning this? How might you use this information? How does this information match your perception of drinking?",
	"Where would you like your drinking level to stand relative to others? ",
	"Thank you for sharing that information with me. I would like to move to a new topic related to your aspirations and goals for the future. Many people come to college with a specific goal in mind. For example, someone might come to college to become an accountant, or to do well enough to get into graduate school.",
	"What are some of the goals that you have for college? <br/> Carrer/College goal 1:",
	"Great! We will discuss that in more detail later. People also often have a personal goal they are trying to accomplish. What would you like to personally accomplish over the next few years? This can be something you have already been working on or something you have been thinking about, from exercise goals to learning how to play a new instrument.",
	"Thanks! We will discuss this in a few minutes. I wanted to gain a little more information before we move forward. ",
	"This part of the session is designed to highlight the way you spend time. In order to move forward, I would like to ask you a few questions about how you spend your time every week.",
	"Please estimate the total number of hours you spend in each of the following activities during a typical week in the past month.  For example, if you typically worked 2 hours per day five days a week, record 10 hours in the employment column.",
	"How many hours per week have you spent…Attending class or required labs/research hours hours actually attended, not just what you are registered for ________ ",
	"Doing homework, studying, reading, going to the library, or any other school work outside of class.  _______ ",
	"Participating in social fraternity or sorority activities. ___________ ",
	"Participating in other university organizations or programs attending meetings, volunteering, etc. excluding fraternities or sororities______ ",
	"Participating in an internship or volunteer activity related to your major or possible career ___ ",
	"Participating in a community or civic organization or activity __________ ",
	"Paid Employment ___________ ",
	"Exercise or sports___________ ",
	"Family time e.g., talking with parents, siblings, children, etc., in person or on phone______ ",
	"Religious activity e.g., church services, bible study, scripture reading, etc.______ ",
	"Time spent obtaining, consuming, or recovering from alcohol ________ ",
	"Time spent using marijuana or other illicit drugs excluding  alcohol e.g. other prescription drugs that are not prescribed to you; illegal drugs such as cocaine or heroin________",
	"Time spent using the internet for social media______ ",
	"Time spent using the internet for school or work__________",
	"The graph below was created by compiling the questions you just answered. ",
	"What categories would you like to spend more or less time participating in?",
	"Earlier, I had asked about the goals you have set for your future. What changes would make your time more consistent with those goals?",
	"For the next part of our session, I would like to revisit the goals you identified earlier. This is a basic goal setting exercise to help you better map out some concrete steps you may need to accomplish your goals.",
	"Here are the goals you listed earlier:1.<br> 2. <br>3. <br> 4.",
	"Goal setting research suggests that three aspects of a concrete goal help you to better achieve them. Goals should be: 1.Proximal <br> 2.Specific <br> 3.The right amount of challenging For example, if you wanted to get better grades, you may set a goal to study 2 hours a day, 4 days a week. This is a very specific set an amount of time, short-term goal, that may be fairly difficult to achieve, but not impossible either. ",
	"Looking back on your own goals, what are some specific, short-term things you can do this semester or year to accomplish your goals? We can start with the first goal: <br> 1. ",
	"Looking back on your own goals, what are some specific, short-term things you can do this semester or year to accomplish your goals? We can start with the first goal: <br> 2. ",
	"Looking back on your own goals, what are some specific, short-term things you can do this semester or year to accomplish your goals? We can start with the first goal: <br> 3. ",
	"What might be some of the barriers to achieving these goals?",
	"In addition, I would like to briefly revisit the discussion we had about alcohol. I am curious, how might your drinking habits influence your ability to accomplish these goals?",
	"How will you know if your plan is working?",
	"This is the last part of our session here today. We have now spent time setting goals, and then looking at concrete ways these goals can be accomplished. I am curious about what this may actually look like",
	"Visualize your life 3 months into the future. Think about aspects of your life that matter to you. This could relate to your goals, or it could be how you want to grow mentally, spiritually, or physically. ",
	"Think about how you would want your body and physical fitness to be, or what new skills or hobbies you may want to learn, or what new career building skills you would want to develop, or anything that gives you a sense of meaning, mission, or purpose. Pick any of these categories that matter to you and are important in your life and take a minute to visualize and imagine what this could look and feel like in your life 3 months from today. Take the next 5 minutes to write about a specific type of positive experience you are looking forward to have in your life.",
	"What would it be like for this event to actually come true in the future?"

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