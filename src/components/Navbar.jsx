import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log('Logged Out Successfully!')
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="flex">
          <div className="font-semibold mx-2">{user && user.email}</div>
          <img src={userIcon} alt="" />
        </div>
        {
          user ? <button onClick={handleLogout} className="btn btn-neutral rounded-none">Log Out</button> :            
        <Link to={'/login'}><button className="btn btn-neutral rounded-none">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
