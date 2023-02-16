import { Fragment, useContext, useEffect, useState } from "react";
import UserSection from "../components/UserSection";
import NumberBox from "../components/NumberBox";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/app-context";

let Guesspage = () => {
  let appContext = useContext(AppContext);
  appContext.startTime == 0 && appContext.setStartTime(Date.now());
  let [currntNum, setCurrntNum] = useState();
  let [smallNum, setSmallNum] = useState(0);
  let [biggerNum, setBiggerNum] = useState(100);
  let navigate = useNavigate();
  let [minNum, setMinNum] = useState([]);
  let [maxNum, setMaxNum] = useState([]);



 

 
  function getRandomInt(max = 100, min = 0) {
   
    if (max == min && currntNum != appContext.originalNamber) {
      max = Math.max(...maxNum);
      min = Math.min(...minNum);
    }
    const v = Math.floor(Math.random() * (max - min + 1)) + min;
    setCurrntNum(v);
    

    appContext.setGuess([v, ...appContext.guess]);
  }
 
  useEffect(() => {
    getRandomInt();

   
  }, []);

 
  return (
    <Fragment>
      <div className="content-wrapper">
        <UserSection name={appContext.userName} />
        <NumberBox number={currntNum} />
        <div className="button-group box-section">
          <button
            className="save-btn"
            onClick={() => {
              
              setMaxNum([currntNum, ...maxNum]);
              setBiggerNum(currntNum);
              getRandomInt(currntNum, smallNum);
            }}
          >
            less than
          </button>
          <button
            className="save-btn"
            onClick={() => {
              if (currntNum == appContext.originalNamber) {
               
                appContext.endTime == 0 && appContext.setEndTime(Date.now());
                navigate("/result");
              } else {
                alert("The Number Incorrect");
              }
            }}
          >
            equal
          </button>
          <button
            className="save-btn"
            onClick={() => {
              setSmallNum(currntNum);
              setMinNum([currntNum, ...minNum]);
            
              getRandomInt(biggerNum, currntNum);

              
            }}
          >
            greater than
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default Guesspage;
