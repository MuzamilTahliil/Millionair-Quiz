import React, { useEffect, useState } from 'react';
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import Quiz from "../components/Quiz";
import "../QuizPage.css";
import { data, prizeMoney } from "../components/Date";
import Timer from "../components/Time";
import Start from "../components/Start";

function QuizPage() {
  const [name, setName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  useEffect(() => {
    if (questionNumber > 1) {
      const earnedAmount = prizeMoney.find((item) => item.id === questionNumber - 1).amount;
      setEarned(earnedAmount);
    }
  }, [questionNumber]);

  return (
    <div className="App">
      {!name ? (
        <Start setName={setName} setTimeOut={setTimeOut} />
      ) : (
        <div className="main">
          <div className="quiz">
            {timeOut ? (
              <h1 className="earned">You Earned Total: {earned}</h1>
            ) : (
              <>
                <div className="timer">
                  <Timer setTimeOut={setTimeOut} questionNumber={questionNumber} />
                </div>
                <div className="question-box">
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="money">
            <MDBListGroup className="money-list">
              <div className="sidebar-buttons">
                <MDBBtn
                  className="btn"
                  color="light"
                  onClick={() => setTimeOut(true)}
                >
                  Quit
                </MDBBtn>
                <MDBBtn
                  className="btn"
                  onClick={() => {
                    setName(null);
                    setQuestionNumber(1);
                    setEarned("₹ 0");
                  }}
                >
                  Exit
                </MDBBtn>
              </div>
              <div className="name-earned">
                <div>Name: {name}</div>
                <div>Total Earned: {earned}</div>
              </div>
              <hr />
              {prizeMoney.map((item) => (
                <li
                  key={item.id}
                  className={questionNumber === item.id ? "item active" : "item"}
                >
                  <h5 className="amount">{item.amount}</h5>
                </li>
              ))}
            </MDBListGroup>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
