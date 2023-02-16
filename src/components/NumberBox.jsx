import { Fragment } from "react";

let NumberBox = ({number}) => {
    return(
    <Fragment>
        <section className="box-section">
        <div className="number-box">
            <span>{number}</span>
        </div>
        </section>
          
      
    </Fragment>);
}
export default NumberBox;
