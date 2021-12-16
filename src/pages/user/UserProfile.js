import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import Navbar from "../../components/Navbar";
import logo from "../../assets/img/logo.svg";

export default function UserProfile() {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="admin-list">
        <img className="m-3" src={logo} alt="logo placeholder" />
        <div>{loggedInUser.user.name}</div>
      </div>
    </>
  );
}
