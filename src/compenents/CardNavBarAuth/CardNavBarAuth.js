//css
import "./CardNavBarAuth.css";
//react
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//react icons
import { PiBookOpenText } from "react-icons/pi";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdImageSearch } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
//API
import { uploads } from "../../utils/config";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { profile } from "../../slices/userSlice";
import { logout, reset } from "../../slices/authSlice";

const CardNavBarAuth = () => {
  //Redux
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  //Initial States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [followers, setFollowers] = useState("");
  const [follow, setFollow] = useState("");

  //Logout
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  //set Storage Event
  const navigate = useNavigate();
  function Storage(key, value) {
    localStorage.setItem(key, value);
  }

  function EventNavigate() {
    const Links = document.querySelectorAll(
      ".CardNavBarAuth-NavigarionBlog-contentLink"
    );

    Links.forEach((element) => {
      element.addEventListener("click", () => {
        Storage("StorageEvent", element.textContent);
        navigate("/profile");
      });
    });
  }

  function FollowersConvert() {
    const lengthFollowers = followers.length;

    setFollow(lengthFollowers);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      Storage();
      EventNavigate();
      FollowersConvert();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  //SET USER
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setFollowers(user.followers);
    }
  }, [user]);

  return (
    <div className="CardNavBarAuth">
      <div className="CardNavBarAuth-container">
        <div className="CardNavBarAuth-content">
          <div className="CardNavBarAuth-content-shadow">
            <div className="CardNavBarAuth-content-ImageUser">
              {user.imageProfile ? (
                <img
                  src={`${uploads}/Users/${user.imageProfile}`}
                  alt={user.firstName}
                />
              ) : (
                <img src="/ImageDefault/vecteezy_man_1206101.png" />
              )}
            </div>
            <div className="CardNavBarAuth-content-InfoUser">
              <div className="CardNavBarAuth-content-InfoUser-box">
                <h1>
                  {" "}
                  {user.firstName} {user.lastName}{" "}
                </h1>
                <p>
                  <strong>{follow}</strong> Seguidores
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="CardNavBarAuth-NavigarionBlog">
          <div
            className="CardNavBarAuth-NavigarionBlog-container"
            onClick={EventNavigate}
          >
            <div className="CardNavBarAuth-NavigarionBlog-container-Link">
              <PiBookOpenText className="CardNavBarAuth-NavigarionBlog-container-Link-icon" />
              <p className="CardNavBarAuth-NavigarionBlog-contentLink">
                Meus Posts
              </p>
            </div>

            <div className="CardNavBarAuth-NavigarionBlog-container-Link">
              <MdOutlinePostAdd className="CardNavBarAuth-NavigarionBlog-container-Link-icon" />
              <p className="CardNavBarAuth-NavigarionBlog-contentLink">
                Postar
              </p>
            </div>

            <div className="CardNavBarAuth-NavigarionBlog-container-Link">
              <LiaUserFriendsSolid className="CardNavBarAuth-NavigarionBlog-container-Link-icon" />
              <p className="CardNavBarAuth-NavigarionBlog-contentLink">
                Seguindo
              </p>
            </div>

            <div className="CardNavBarAuth-NavigarionBlog-container-Link">
              <GoGear className="CardNavBarAuth-NavigarionBlog-container-Link-icon" />
              <p className="CardNavBarAuth-NavigarionBlog-contentLink">
                Atualizar Perfil
              </p>
            </div>

            <div className="CardNavBarAuth-NavigarionBlog-container-Link">
              <MdOutlinePersonSearch className="CardNavBarAuth-NavigarionBlog-container-Link-icon" />
              <p className="CardNavBarAuth-NavigarionBlog-contentLink-SearchUser">
                Procurar Usuario
              </p>
            </div>

            <div className="CardNavBarAuth-NavigarionBlog-container-Link" onClick={handleLogout}>
              <IoExitOutline className="CardNavBarAuth-NavigarionBlog-container-Link-icon" />
              <p className="CardNavBarAuth-NavigarionBlog-contentLink-logout">
                Sair
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNavBarAuth;
