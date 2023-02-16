import { Fragment, useContext, useRef } from "react";
import "../resources/CSS/style.css";
import { AppContext } from "../context/app-context";
import { useNavigate } from "react-router-dom";

let OnboardingPage = () => {
  let nameRef = useRef();
  let valueRef = useRef();

  let appContext = useContext(AppContext);
  let navigate = useNavigate();
  let onSubmitHandler = (event) => {
    event.preventDefault();

    if (checkData()) {
      appContext.setUserName(nameRef.current.value);
      appContext.setOriginalNamber(valueRef.current.value);
      navigate("/guess");
      clear();
    }
  };
  let checkData = () => {
    if (nameRef.current.value !== "" && valueRef.current.value !== "") {
      return true;
    }

    alert("Enter required info");
    return false;
  };

  let clear = () => {
    nameRef.current.value = "";
    valueRef.current.value = "";
  };
  return (
    <Fragment>
      <div className="content-wrapper">
        <h1>Onboarding Page</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                ref={nameRef}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="value">Value</label>
              <input
                type="number"
                name="value"
                id="value"
                placeholder="Value"
                ref={valueRef}
              />
            </div>
          </div>
          <div className="box-section">
            <button className="save-btn" type="submit">
              Get Staarted
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default OnboardingPage;
