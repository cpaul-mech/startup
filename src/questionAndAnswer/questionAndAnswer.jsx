import React from 'react';
import './questionAndAnswer.css';
export function QuestionAndAnswer() {
    const [answerText, setAnswerText] = React.useState("");
    const [question, setQuestion] = React.useState("");

    const standInAnswers = getExternalAnswers();
    const userQuestionInput = document.getElementById("UserQuestion");

    function getExternalAnswers() {
        //this will be replaced with a 3rd party service call
        return ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
    }
    async function saveQA(question, answer) {
        const newQA = {question: question, answer: answer}
        sendQuestionAnswerServer(newQA);
    }

    function getRandomAnswer (array) {
        const randomIndex = Math.floor(Math.random()*array.length)
        return array[randomIndex]
    }

    function handleInputChange(event) {
        setQuestion(event.target.value);
    }

    setInterval(() => {
        // This will be replaced with WebSocket messages
        const userName = `User-${Math.floor(Math.random() * 100)}`;
        console.log({ userName: userName, string: "Received an answer" });
    }, 1000);
    

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            event.preventDefault();
            const question = userQuestionInput.value;
            const answer = getRandomAnswer(standInAnswers);
            setAnswerText(answer);
            saveQA(question, answer);
            console.log({question}, {answer})
            setQuestion("");
            //need to display the answer here!
        }
    }

    function FormatAnswer() {
        if(answerText === ""){
            return <h3>The Cosmic 8 Ball will respond here</h3>
        }else {
            return <h4>The answer is: {answerText}</h4>
        }
    }

    function updateQALocal(newQA) {
        let qa = [];
        const qaString = localStorage.getItem('qaList');
        if(qaString) {
            qa = JSON.parse(qaString);
        }
        qa.push(newQA);
        localStorage.setItem('qaList',JSON.stringify(qa))
    }
    
    async function sendQuestionAnswerServer(newQA){
        const response = await fetch('api/auth/newQuestionAnswerPair', {
            method: 'post',
            body: JSON.stringify(newQA),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            updateQALocal(newQA);
        } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

  return (
    <main className="container-fluid">
        <h1>The wisdom of the Great and Magical Cosmic 8 Ball is at your disposal</h1>
        <img id="eightBallImgLooming" src="Chris_Cosmic_8_Ball_looming.png" alt="Cosmic 8 Ball placeholder, Generated with Dall-E 3"
            width="800"></img>
        <h2>Ask, {localStorage.getItem('userName')}, and you shall receive your answer</h2>
        <form onSubmit={(e) => e.preventDefault()}>
            {/* <!-- #TODO: fill out what this does with react and javascript. --> */}
            <div className="input-group mb-3">
                <input className="form-control" id="UserQuestion" type-="text" value={question} placeholder="Ask your Question" onChange={handleInputChange} onKeyUp={handleKeyPress} />
            </div>
        </form>
        <FormatAnswer></FormatAnswer>
        <div id='otherQuestions'>Other Player messages will be receivfed here</div>
    </main>
  );
}