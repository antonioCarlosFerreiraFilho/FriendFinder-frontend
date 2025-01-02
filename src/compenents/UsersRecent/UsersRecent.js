//css
import "./UsersRecent.css";
//react
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
//API
import { uploads } from "../../utils/config";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { allUsers } from "../../slices/userSlice";
//Components
import LoadingUsers from "../LoadingUsers/LoadingUsers";

const UsersRecent = () => {
  //slices
  const { users, loading } = useSelector((state) => state.user);

  //redux
  const dispatch = useDispatch();

  //Rederizando
  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <div className="UsersRecent">
      {loading ? (
        <>
          <LoadingUsers />
        </>
      ) : (
        <div className="UsersRecent-container">
          <div className="UsersRecent-boxFriendFinder">
            <div className="UsersRecent-boxFriendFinder-box">
              <h1>
                Usuarios Recentes na <strong>FriendFinder</strong>
              </h1>
            </div>
          </div>

          <div className="UsersRecent-content">
            {users.map((user) => (
              <div className="UsersRecent-box" key={user._id}>
                <div className="UsersRecent-box-imageUser">
                  {user.imageProfile ? (
                    <img
                      src={`${uploads}/Users/${user.imageProfile}`}
                      alt={user.firstName}
                    />
                  ) : (
                    <img
                      src="/ImageDefault/vecteezy_man_1206101.png"
                      alt="image user Default"
                    />
                  )}
                </div>
                <div className="UsersRecent-box-InfoUser">
                  <NavLink to={`/getUser/${user._id} `}>
                    {user.firstName} {user.lastName}
                  </NavLink>
                  <p> {user.participationDate} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersRecent;
