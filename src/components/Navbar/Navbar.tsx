import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

interface IGetActiveLinkParameters {
  isActive: boolean;
}

const getActiveLink = ({ isActive }: IGetActiveLinkParameters): string => {
  const classesArray = [classes.link];
  if (isActive) classesArray.push(classes.activeLink);
  return classesArray.join(" ");
};

const Navbar = () => {
  return (
    <nav className={classes.root}>
      <div className="nav-wrapper teal lighten-2">
        <a className={classes.logo + " " + "brand-logo"}>Body App</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/" className={getActiveLink}>
              {" "}
              Вес
            </NavLink>
          </li>
          <li>
            <NavLink to="/calories" className={getActiveLink}>
              {" "}
              Калории
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
