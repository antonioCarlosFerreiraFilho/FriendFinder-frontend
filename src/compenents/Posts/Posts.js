//CSS
import "./Posts.css";
//react
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
//react icons
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
//API
import { uploads } from "../../utils/config";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { allPosts } from "../../slices/postSlice";
//componets
import LoadingPosts from "../LoadingPosts/LoadingPosts";

const Posts = () => {
  //slices
  const { posts, loading } = useSelector((state) => state.post);

  //redux
  const dispatch = useDispatch();

  //Rederizando
  useEffect(() => {
    dispatch(allPosts());
  }, [dispatch]);

  return (
    <div className="Posts">
      {loading ? (
        <LoadingPosts />
      ) : (
        <>
          <div className="Posts-container">
            <div className="Posts-content">
              {posts.map((card) => (
                <NavLink
                  to={`/article/${card._id}`}
                  className="Posts-content-card-Link"
                  key={card._id}
                >
                  <div className="Posts-content-card">
                    <div className="Posts-content-card-image">
                      <img
                        src={`${uploads}/Posts/${card.imagePost}`}
                        alt={`${card.title}`}
                      />
                    </div>
                    <div className="Posts-content-card-infoUserLikes">
                      <div className="Posts-content-card-infoUser">
                        <div className="Posts-content-card-infoUser-ImageUser">
                          {card.userImage ? (
                            <img
                              src={`${uploads}/Users/${card.userImage}`}
                              alt={`${card.userId}`}
                            />
                          ) : (
                            <img
                              src="/ImageDefault/vecteezy_man_1206101.png"
                              alt=""
                            />
                          )}
                        </div>
                        <div className="Posts-content-card-infoUser-infoPostUser">
                          <h1>{card.userName}</h1>
                          <p>{card.dataPost}</p>
                        </div>
                      </div>
                      <div className="Posts-content-card-Likes">
                        <div className="Posts-content-card-Likes-box">
                          <div className="Posts-content-card-Likes-boxLike">
                            <BiSolidLike className="Posts-content-card-Likes-boxLike-icon" />
                            <p>{card.likePositive && card.likePositive.length}</p>
                          </div>
                          <div className="Posts-content-card-Likes-boxLike">
                            <BiSolidDislike className="Posts-content-card-Likes-boxLike-icon" />
                            <p>{card.likeNegative && card.likeNegative.length}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Posts-content-card-descriptionPost">
                      <div className="Posts-content-card-descriptionPost-box">
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
