import { Fragment } from "react";

let UserSection = ({name}) => {
    return(
    <Fragment>
        <section className="userSection">
        <div className="aside-avatar"></div>
          <span>{name}</span>
      </section>
    </Fragment>);
}
export default UserSection;
