//CSS
import { NavLink } from "react-router-dom";
import "./AboutProfile.css";
//REACT
import { useState, useEffect } from "react";
//COMPONENTS
import FormUpdateUser from "../FormUpdateUser/FormUpdateUser";
import PostPhotos from "../PostPhotos/PostPhotos";
import FriendsFollowing from "../FriendsFollowing/FriendsFollowing";
import LoadingPostsUser from "../LoadingPostsUser/LoadingPostsUser";
//API
import { uploads } from "../../utils/config";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { profile } from "../../slices/userSlice";
import { getUserPosts } from "../../slices/postSlice";

const AboutProfile = () => {
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

  //container transition
  function NavEventAction() {
    //Bottons Links
    const Buttons = document.querySelectorAll(".navigate-Link-Event");
    //All containers
    const Containers = document.querySelectorAll(
      ".AboutProfile-box-navigate-Mobile-containerEvent-Container"
    );

    //Content Container
    const Container0 = document.querySelector(".Container0");
    const Container1 = document.querySelector(".Container1");
    const Container2 = document.querySelector(".Container2");
    const Container3 = document.querySelector(".Container3");

    Buttons.forEach((elemen) => {
      elemen.classList.remove("active");
    });

    Buttons.forEach((button) => {
      Containers.forEach((containerAll) => {
        containerAll.classList.remove("active");
      });

      //Verifi Value Navigate
      if (localStorage.getItem("StorageEvent") === "Atualizar Perfil") {
        Buttons.forEach((elemen) => {
          if (elemen.textContent === localStorage.getItem("StorageEvent")) {
            elemen.classList.add("active");
          }
        });
        Container0.classList.add("active");
      } else if (localStorage.getItem("StorageEvent") === "Postar") {
        Buttons.forEach((elemen) => {
          if (elemen.textContent === localStorage.getItem("StorageEvent")) {
            elemen.classList.add("active");
          }
        });
        Container1.classList.add("active");
      } else if (localStorage.getItem("StorageEvent") === "Seguindo") {
        Buttons.forEach((elemen) => {
          if (elemen.textContent === localStorage.getItem("StorageEvent")) {
            elemen.classList.add("active");
          }
        });
        Container3.classList.add("active");
      } else if (localStorage.getItem("StorageEvent") === "Meus Posts") {
        Buttons.forEach((elemen) => {
          if (elemen.textContent === localStorage.getItem("StorageEvent")) {
            elemen.classList.add("active");
          }
        });
        Container2.classList.add("active");
      }
    });

    setTimeout(() => {
      localStorage.removeItem("StorageEvent");
    }, 1000);

    setTimeout(() => {
      localStorage.setItem("StorageEvent", "Atualizar Perfil");
    }, 2000);
  }

  //ShowBox Mobile
  function ShowBox() {
    const Buttons = document.querySelectorAll(".AboutProfile-Event");
    const Containers = document.querySelectorAll(
      ".AboutProfile-box-navigate-Mobile-containerEvent-Container"
    );

    //containers
    const Container0 = document.querySelector(".Container0");
    const Container1 = document.querySelector(".Container1");
    const Container2 = document.querySelector(".Container2");
    const Container3 = document.querySelector(".Container3");

    Buttons.forEach((button) => {
      button.addEventListener("click", () => {
        Buttons.forEach((elemen) => {
          elemen.classList.remove("active");
        });

        let ValueLink = button.textContent;

        button.classList.add("active");

        Containers.forEach((containerAll) => {
          containerAll.classList.remove("active");
        });

        if (ValueLink == "Editar") {
          Container0.classList.add("active");
        } else if (ValueLink == "Postar") {
          Container1.classList.add("active");
        } else if (ValueLink == "Meus Posts") {
          Container2.classList.add("active");
        } else if (ValueLink == "Seguindo") {
          Container3.classList.add("active");
        }
      });
    });
  }

  //ShowBox Desktop
  function ShowBoxDesktop() {
    //Bottons Links
    const Buttons = document.querySelectorAll(".navigate-Link-Event");
    //All containers
    const Containers = document.querySelectorAll(
      ".AboutProfile-box-navigate-Mobile-containerEvent-Container"
    );

    //Content Container
    const Container0 = document.querySelector(".Container0");
    const Container1 = document.querySelector(".Container1");
    const Container2 = document.querySelector(".Container2");
    const Container3 = document.querySelector(".Container3");

    Buttons.forEach((button) => {
      button.addEventListener("click", () => {
        Buttons.forEach((elemen) => {
          elemen.classList.remove("active");
        });

        let ValueLink = button.textContent;

        button.classList.add("active");

        Containers.forEach((containerAll) => {
          containerAll.classList.remove("active");
        });

        if (ValueLink == "Atualizar Perfil") {
          Container0.classList.add("active");
        } else if (ValueLink == "Postar") {
          Container1.classList.add("active");
        } else if (ValueLink == "Meus Posts") {
          Container2.classList.add("active");
        } else if (ValueLink == "Seguindo") {
          Container3.classList.add("active");
        }
      });
    });
  }

  //Start Functions
  useEffect(() => {
    const Timer = setTimeout(() => {
      ShowBox();
      ShowBoxDesktop();
    }, 500);
    return () => clearTimeout(Timer);
  }, []);

  //Start Functions
  useEffect(() => {
    const Timer = setTimeout(() => {
      NavEventAction();
    }, 1000);
    return () => clearTimeout(Timer);
  }, []);

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  useEffect(() => {
    const Timer = setTimeout(() => {
      dispatch(getUserPosts(userID));
    }, 500);
    return () => clearTimeout(Timer);
  }, [user]);

  //SET USER
  useEffect(() => {
    if (user) {
      setUserID(user._id);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setDay(user.day);
      setMonth(user.month);
      setYear(user.year);
      setGender(user.gender);
    }
  }, [user]);

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
                      <p className="navigate-Link-Event active">
                        Atualizar Perfil
                      </p>
                      <p className="navigate-Link-Event">Postar</p>
                      <p className="navigate-Link-Event">Meus Posts</p>
                      <p className="navigate-Link-Event">Seguindo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="AboutProfile-box-ContentInfoUser-containers">
              <div className="AboutProfile-box-navigate-Mobile">
                <div className="AboutProfile-box-BaseInfoUser">
                  <div className="AboutProfile-box-BaseInfoUser-container">
                    <div className="AboutProfile-box-BaseInfoUser-container-name">
                      <h1>{firstName}</h1>
                    </div>
                    <div className="AboutProfile-box-BaseInfoUser-container-date">
                      <p>
                        {day} / {month} / {year}
                      </p>
                    </div>
                    <div className="AboutProfile-box-BaseInfoUser-container-Email">
                      <p>{email}</p>
                    </div>
                    <div className="AboutProfile-box-BaseInfoUser-container-date">
                      <p>{gender}</p>
                    </div>
                  </div>
                </div>

                <div className="AboutProfile-box-navigate-Mobile-container">
                  <div className="AboutProfile-box-navigate-Mobile-content">
                    <p className="AboutProfile-Event active">Editar</p>
                    <p className="AboutProfile-Event">Postar</p>
                    <p className="AboutProfile-Event">Meus Posts</p>
                    <p className="AboutProfile-Event">Seguindo</p>
                  </div>
                </div>

                <div className="AboutProfile-box-navigate-Mobile-containerEvents">
                  <div className="AboutProfile-box-navigate-Mobile-containerEvents-content">
                    <div className="AboutProfile-box-navigate-Mobile-containerEvent-Container Container0 active">
                      <FormUpdateUser />
                    </div>

                    <div className="AboutProfile-box-navigate-Mobile-containerEvent-Container Container1">
                      <PostPhotos />
                    </div>

                    <div className="AboutProfile-box-navigate-Mobile-containerEvent-Container Container2">
                      <div className="AboutProfile-box-navigate-Mobile-containerEvent-Container-albun">
                        {loading ? (
                          <LoadingPostsUser />
                        ) : (
                          <>
                            <div className="AboutProfile-box-navigate-Mobile-containerEvent-Container-albun-content">
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

                    <div className="AboutProfile-box-navigate-Mobile-containerEvent-Container Container3">
                      <FriendsFollowing />
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

export default AboutProfile;
