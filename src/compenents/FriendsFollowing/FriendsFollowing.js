import { NavLink } from "react-router-dom";
import "./FriendsFollowing.css";

const FriendsFollowing = () => {
  return (
    <div className="FriendsFollowing">
      <div className="FriendsFollowing-container">
        <div className="FriendsFollowing-box">
          <div className="FriendsFollowing-box-image">
            <img src="/Users/user-1.jpg" alt="image user" />
          </div>
          <div className="FriendsFollowing-box-InfoUsers">
            <div className="FriendsFollowing-box-info">
              <NavLink>Sophia Lee</NavLink>
              <p>18 / Agosto / 1999</p>
            </div>
            <div className="FriendsFollowing-box-Following">
              <p>Amigos</p>
            </div>
          </div>
        </div>

        <div className="FriendsFollowing-box">
          <div className="FriendsFollowing-box-image">
            <img src="/Users/user-3.jpg" alt="image user" />
          </div>
          <div className="FriendsFollowing-box-InfoUsers">
            <div className="FriendsFollowing-box-info">
              <NavLink>Sophia Lee</NavLink>
              <p>18 / Agosto / 1999</p>
            </div>
            <div className="FriendsFollowing-box-Following">
              <p>Amigos</p>
            </div>
          </div>
        </div>

        <div className="FriendsFollowing-box">
          <div className="FriendsFollowing-box-image">
            <img src="/Users/user-4.jpg" alt="image user" />
          </div>
          <div className="FriendsFollowing-box-InfoUsers">
            <div className="FriendsFollowing-box-info">
              <NavLink>Sophia Lee</NavLink>
              <p>18 / Agosto / 1999</p>
            </div>
            <div className="FriendsFollowing-box-Following">
              <p>Amigos</p>
            </div>
          </div>
        </div>

        <div className="FriendsFollowing-box">
          <div className="FriendsFollowing-box-image">
            <img src="/Users/user-6.jpg" alt="image user" />
          </div>
          <div className="FriendsFollowing-box-InfoUsers">
            <div className="FriendsFollowing-box-info">
              <NavLink>Sophia Lee</NavLink>
              <p>18 / Agosto / 1999</p>
            </div>
            <div className="FriendsFollowing-box-Following">
              <p>Amigos</p>
            </div>
          </div>
        </div>

        <div className="FriendsFollowing-box">
          <div className="FriendsFollowing-box-image">
            <img src="/Users/user-7.jpg" alt="image user" />
          </div>
          <div className="FriendsFollowing-box-InfoUsers">
            <div className="FriendsFollowing-box-info">
              <NavLink>Sophia Lee</NavLink>
              <p>18 / Agosto / 1999</p>
            </div>
            <div className="FriendsFollowing-box-Following">
              <p>Amigos</p>
            </div>
          </div>
        </div>

        <div className="FriendsFollowing-box">
          <div className="FriendsFollowing-box-image">
            <img src="/Users/user-8.jpg" alt="image user" />
          </div>
          <div className="FriendsFollowing-box-InfoUsers">
            <div className="FriendsFollowing-box-info">
              <NavLink>Sophia Lee</NavLink>
              <p>18 / Agosto / 1999</p>
            </div>
            <div className="FriendsFollowing-box-Following">
              <p>Amigos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsFollowing;
