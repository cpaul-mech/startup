import React from 'react';
import './yourStats.css';

export function YourStats() {
    const [qaList, setQAList] = React.useState([]);

    React.useEffect(()=> {
        const qaText = localStorage.getItem(localStorage.getItem('userName'));
        if(qaText) {
            setQAList(JSON.parse(qaText))
        }
    }, [])

    const qaRows = [];
    if(qaList.length) {
        for(const [i, qa] of qaList.entries()){
            qaRows.push(
                <tr key={i}>
                    <td>{qa.question}</td>
                    <td>{qa.answer}</td>                    
                </tr>
            )
        }
    } else {
        qaRows.push(
            <tr key='0'>
                <td colSpan='2'>Ask your first question!</td>
            </tr>
        );
    }

    function calcNumQuestions(){
        let uniqueQuestions = [];
        if(qaList.length){
            for (const [i, qa] of qaList.entries()) {
                //now I need to check it against a list of entries that 
                if(!uniqueQuestions.includes(qa.question)){
                    uniqueQuestions.push(qa.question);
                }
            }
            return uniqueQuestions.length;
        }else{
            return 0;
        }
    }

    function calcNumAnswers(){
        let uniqueAnswers = [];
        if(qaList.length){
            for (const [i, qa] of qaList.entries()) {
                //now I need to check it against a list of entries that 
                if(!uniqueAnswers.includes(qa.answer)){
                    uniqueAnswers.push(qa.answer);
                }
            }
            return uniqueAnswers.length;
        }else{
            return 0;
        }
    }

  return (
    <main className="container-fluid">
        <img id="eightBallImg" src="Chris_Cosmic_8_Ball.png" alt="Cosmic 8 Ball smaller"
            width="100"></img>
        <h3>{localStorage.getItem('userName')} has asked: {calcNumQuestions()} unique questions of the 8 ball</h3>
        <h3>{localStorage.getItem('userName')} has received: {calcNumAnswers()} different types of wisdom</h3>
            <table className="table-bordered">
                <thead>
                    <tr>
                    <th>Your questions</th>
                    <th>Answers</th>
                    </tr>
                </thead>
                <tbody id='qaList'>{qaRows}
                </tbody>
            </table>
    </main>
  );
}