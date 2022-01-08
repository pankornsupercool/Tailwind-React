import { VscGithubInverted } from "react-icons/vsc"


const NavBar = () =>{
    return (
      <div className="">
      </div>
    );
}

const NavBarIcon = ({icon , text }) => (
  <div className="navbar-icon">
    {icon}
    <span className="navbar-tooltip">
      {text}
    </span>
  </div>
);

export default NavBar;