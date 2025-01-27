//CSS
import "./NavBarAuth.css";
//react
import { useState, useEffect } from "react";
//API
import { uploads } from "../../utils/config";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { profile } from "../../slices/userSlice";

const NavBarAuth = () => {
  //Redux
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  //Initial States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [followers, setFollowers] = useState("");
  const [follow, setFollow] = useState("");

  function FollowersConvert() {
    const lengthFollowers = followers.length;

    setFollow(lengthFollowers);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
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
    <div className="NavBarAuth">
      <div className="NavBarAuth-container">
        <div className="NavBarAuth-content">
          <div className="NavBarAuth-content-shadow">
            <div className="NavBarAuth-content-imageUser">
              {user.imageProfile ? (
                <img
                  src={`${uploads}/Users/${user.imageProfile}`}
                  alt={user.firstName}
                />
              ) : (
                <img src="/ImageDefault/vecteezy_man_1206101.png" />
              )}
            </div>
            <div className="NavBarAuth-content-infoUser">
              <div className="NavBarAuth-content-infoUser-content">
                <p>{user.firstName} {user.lastName}</p>
                <p>
                  <strong>{follow}</strong> Seguidores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarAuth;
