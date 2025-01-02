//Css
import "./GetUserInfo.css";
//API
import { uploads } from "../../utils/config";
//redux
import { useSelector, useDispatch } from "react-redux";
//REACT
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
//Slice
import { getUserDetails } from "../../slices/userSlice";
import { getUserPosts } from "../../slices/postSlice";
//Components
import LoadingPostsUser from "../LoadingPostsUser/LoadingPostsUser";

const GetUserInfo = () => {
  const { id } = useParams();

  //Redux
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { posts, loading } = useSelector((state) => state.post);

  //Initial States
  const [userID, setUserID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");

  //LOAD USER DATA
  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch]);

  //LOAD USER DATA
  useEffect(() => {
    dispatch(getUserPosts(id));
  }, [dispatch]);

  return (
    <div className="AboutProfile">
      <div className="AboutProfile-container">
        {user && (
          <>
            <div className="AboutProfile-box-background">
              <div className="AboutProfile-box-imageUser">
                {user.imageProfile && (
                  <img
                    src={`${uploads}/Users/${user.imageProfile}`}
                    alt={user.firstName}
                  />
                )}
              </div>
              <div className="AboutProfile-box-navigate">
                <div className="AboutProfile-box-navigate-container">
                  <div className="AboutProfile-box-navigate-content">
                    <div className="AboutProfile-box-navigate-content-links">
                      <div className="GetUserInfo-Event-Fllower-box">
                        <p className="GetUserInfo-Event-Fllower">Seguir</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="AboutProfile-box-ContentInfoUser-containers">
              <div className="AboutProfile-box-navigate-Mobile">
                {/* USER INFO */}
                <div className="AboutProfile-box-BaseInfoUser-GetUserInfo">
                  <div className="AboutProfile-box-BaseInfoUser-container">
                    <div className="AboutProfile-box-BaseInfoUser-container-name">
                      <h1>{user.firstName}</h1>
                    </div>
                    <div className="AboutProfile-box-BaseInfoUser-container-date">
                      <p>
                        {user.day} / {user.month} / {user.year}
                      </p>
                    </div>
                    <div className="AboutProfile-box-BaseInfoUser-container-Email">
                      <p>{user.email}</p>
                    </div>
                    <div className="AboutProfile-box-BaseInfoUser-container-date">
                      <p>{user.gender}</p>
                    </div>
                  </div>
                </div>
                {/* USER FOLLOW */}
                <div className="AboutProfile-box-navigate-Mobile-container">
                  <div className="AboutProfile-box-navigate-Mobile-content">
                    <p className="GetUserInfo-follow">Seguir</p>
                  </div>
                </div>

                <div className="AboutProfile-box-navigate-Mobile-GetUserInfo">
                  <div className="AboutProfile-box-navigate-Mobile-GetUserInfo-box">
                    <div className="AboutProfile-box-navigate-Mobile-GetUserInfo-Posts">
                      {loading ? (
                        <LoadingPostsUser />
                      ) : (
                        <>
                          <div className="AboutProfile-box-navigate-Mobile-containerEvent-Container-albun-content-GetUserInfo">
                            {posts && posts.length == 0 && (
                              <p>Ainda não ha postagens...</p>
                            )}

                            {posts &&
                              posts.length > 0 &&
                              posts.map((postagem) => (
                                <NavLink
                                  key={postagem._id}
                                  to={`/article/${postagem._id}`}
                                >
                                  {postagem.imagePost && (
                                    <img
                                      src={`${uploads}/Posts/${postagem.imagePost}`}
                                      alt={`${postagem.title}`}
                                    />
                                  )}
                                </NavLink>
                              ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GetUserInfo;
