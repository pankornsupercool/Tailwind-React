import { VscGithubInverted } from "react-icons/vsc"


const NavBar = () =>{
    return (
      <div className="fixed top-0 left-0 h-screen w-48 m-0 justify-between
      flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <NavBarIcon icon={<VscGithubInverted size="28"/>} text={"Home"}/>
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