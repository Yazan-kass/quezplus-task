import { Fragment, useContext } from "react";
import UserSection from "../components/UserSection";
import NumberBox from "../components/NumberBox";
import NumberList from "../components/NumberList";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/app-context";

let Resultpage = () => {
  let appContext = useContext(AppContext);
  let navigate = useNavigate();
  // console.log();
  let durationInMilliseconds = appContext.endTime - appContext.startTime;
  const minutes = Math.floor(durationInMilliseconds / 60000);
  const seconds = Math.floor((durationInMilliseconds % 60000) / 1000);
  console.log(`Duration: ${minutes} minutes, ${seconds} seconds`);
  return (
    <Fragment>
      <div className="content-wrapper">
        <UserSection name={appContext.userName} />
        <section className="result-section box-section">
          <div className="time-section box-section">
            <span>Time</span>
            <NumberBox number={`${minutes} m:${seconds} s`} />
          </div>
          <div className="correct-section box-section">
            <span>correct number</span>
            <NumberBox number={appContext.originalNamber} />
          </div>
        </section>
        <section>
          <span className="test">List of guessed numbers:</span>
          {[...new Set(appContext.guess)].map((item) => {
            return <NumberList num={item} key={item} />;
          })}
        </section>
        <div className="box-section">
          <button
            className="save-btn "
            onClick={() => {
              navigate("/");
            }}
          >
            Restart
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default Resultpage;
