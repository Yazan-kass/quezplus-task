import { Fragment } from "react";

let NumberList = ({num}) => {
    return(
    <Fragment>
        <section className="list-section">
        <div className="list-box">
            <span>{num}</span>
        </div>
        </section>
          
      
    </Fragment>);
}
export default NumberList;