//CSS
import "./LateralMenu.css";
//react
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//authUser
import { useAuth } from "../../hooks/useAuth";
//Slices
import { logout, reset } from "../../slices/authSlice";
//redux
import { useSelector, useDispatch } from "react-redux";

const LateralMenu = ({ OpenMenu }) => {
  //initial States Search
  const [Query, setQuery] = useState("");
  //redirect Home
  const navigate = useNavigate();

  //Redux
  const dispatch = useDispatch();

  //Auth User
  const { auth, loading } = useAuth();

  //close Menu
  function CloseMenu() {
    OpenMenu();
  }

  //Search
  const HandleSearch = (e) => {
    e.preventDefault();

    if (Query) {
      return navigate(`/search?q=${Query}`);
    }
  };

  //Logout
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <div className="LateralMenu">
      <div className="LateralMenu-container">
        <div className="LateralMenu-box-Link">
          <div className="LateralMenu-box-Links-list">
            <ul
              className="LateralMenu-box-Links-list-length"
              onClick={CloseMenu}
            >
              {auth && (
                <li className="LateralMenu-box-Links-list-length-items">
                  <NavLink to="/">Inicio</NavLink>
                </li>
              )}

              {auth && (
                <li className="LateralMenu-box-Links-list-length-items">
                  <NavLink to="/profile">Perfil</NavLink>
                </li>
              )}

              {!auth && (
                <li className="LateralMenu-box-Links-list-length-items">
                  <NavLink to="/auth">Entrar</NavLink>
                </li>
              )}

              {auth && (
                <>
                  <li
                    className="LateralMenu-box-Links-list-length-items"
                    onClick={handleLogout}
                  >
                    <NavLink to="#">Sair</NavLink>
                  </li>
                </>
              )}
            </ul>

            {auth && (
              <form
                className="LateralMenu-box-Links-list-Search"
                onSubmit={HandleSearch}
              >
                <input
                  type="text"
                  placeholder="Search Post"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LateralMenu;
