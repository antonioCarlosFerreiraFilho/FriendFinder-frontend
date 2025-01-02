//css
import "./NavBar.css";
//react-icons
import { GiHamburgerMenu } from "react-icons/gi";
//react
import { useState, useEffect } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
//Components
import LateralMenu from "../LateralMenu/LateralMenu";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { profile } from "../../slices/userSlice";
//authUser
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  //user auth
  const { auth, loading } = useAuth();
  //Redux
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  //initial States Search
  const [Query, setQuery] = useState("");

  //Menu Event Open
  function OpenMenu() {
    const BackgroundStyle = document.querySelector(".NavBar-content");
    const Menu = document.querySelector(".LateralMenu-box-Link");
    BackgroundStyle.classList.toggle("NavBar-contentStyleJS");
    Menu.classList.toggle("LateralMenu-box-LinkJS");
  }

  //redirect Home
  const navigate = useNavigate();

  function HandleRedirect() {
    navigate("/");
  }

  //Search
  const HandleSearch = (e) => {
    e.preventDefault();

    if (Query) {
      return navigate(`/search?q=${Query}`);
    }
  };

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  return (
    <div className="NavBar">
      <div className="NavBar-content">
        <div className="NavBar-box">
          <div className="NavBar-box-image" onClick={HandleRedirect}>
            <img src="/Logo/logo.png" alt="" />
          </div>
          {auth && (
            <div className="NavBar-box-icon" onClick={OpenMenu}>
              <GiHamburgerMenu className="NavBar-icon" />
            </div>
          )}

          {auth && (
            <div className="NavBar-box-Link-desck">
              <div className="NavBar-box-Link-desck-box-Search">
                <form
                  className="NavBar-box-Link-desck-box-Search-container"
                  onSubmit={HandleSearch}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </form>
              </div>

              <div className="NavBar-box-Link-desck-container">
                <div>
                  <NavLink to="/">Home</NavLink>
                </div>
                <div>
                  <NavLink to="/profile">Profile</NavLink>
                </div>
                {!auth && (
                  <div>
                    <NavLink to="/auth">Logar</NavLink>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="NavBar-LateralMenu">
        <LateralMenu OpenMenu={OpenMenu} />
      </div>
    </div>
  );
};

export default NavBar;
