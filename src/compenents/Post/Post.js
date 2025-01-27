//css
import "./Post.css";
//react icons
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
//react
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//API
import { uploads } from "../../utils/config";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import {
  getPost,
  commentsPost,
  likePositive,
  likeNegative,
  reset,
} from "../../slices/postSlice";
//components
import MessageError from "../MessageError/MessageError";
import LoadingPost from "../LoadingPostsUser/LoadingPostsUser";

const Post = () => {
  //react
  const { id } = useParams();

  //INITIAL STAGES
  const [commentText, setCommentText] = useState("");

  //redux
  const dispatch = useDispatch();
  const { post, error, loading, message } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.user);

  function EventFormEdit() {
    const buttonEvent = document.querySelector(
      ".Post-box-InfoUser-edit_info-post-boxEvent-button"
    );

    const ArrowDown = document.querySelector(".iconArrowDown");
    const ArrowUp = document.querySelector(".iconArrowUp");

    const boxVisibile = document.querySelector(
      ".Post-box-InfoUser-edit_info-post-content"
    );

    buttonEvent.addEventListener("click", () => {
      ArrowDown.classList.toggle("iconArrowDownJS");
      ArrowUp.classList.toggle("iconArrowUpJS");
      boxVisibile.classList.toggle(
        "Post-box-InfoUser-edit_info-post-contentJS"
      );
    });
  }

  //submit Comment
  function HandleComment(e) {
    e.preventDefault();

    const commenData = {
      comments: commentText,
      id: post._id,
    };

    dispatch(commentsPost(commenData));

    setCommentText("");

    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  }

  //Like Positive
  const likePositiveTrue = () => {
    const Like = document.querySelector(
      ".Post-box-UserInfo-Likes-box-Like-icon"
    );

    Like.addEventListener("click", () => {
      dispatch(likePositive(id));

      setTimeout(() => {
        dispatch(reset());
        window.location.reload(true);
      }, 3000);
    });
  };

  //Like Negative
  const likeNegativeFalse = () => {
    const Like = document.querySelector(
      ".Post-box-UserInfo-Likes-box-Like-iconNegative"
    );

    Like.addEventListener("click", () => {
      dispatch(likeNegative(id));

      setTimeout(() => {
        dispatch(reset());
        window.location.reload(true);
      }, 3000);
    });
  };

  //renderizando
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  //Start Functions
  useEffect(() => {
    const Timer = setTimeout(() => {
      likePositiveTrue();
      likeNegativeFalse();
      EventFormEdit();
    }, 1000);
    return () => clearTimeout(Timer);
  }, []);

  return (
    <div className="Post">
      {loading ? (
        <LoadingPost />
      ) : (
        <div className="Post-container">
          <div className="Post-content">
            <div className="Post-box">
              <div className="Post-box-imagePost">
                {post.imagePost && (
                  <img src={`${uploads}/Posts/${post.imagePost}`} alt="post" />
                )}
              </div>
              <div className="Post-box-InfoUser-Likebox">
                <div className="Post-box-UserInfo">
                  <div className="Post-box-UserInfo-ImageUser">
                    {post.userImage ? (
                      <img
                        src={`${uploads}/Users/${post.userImage}`}
                        alt="Image User"
                      />
                    ) : (
                      <img
                        src="/ImageDefault/vecteezy_man_1206101.png"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="Post-box-UserInfo-infoUser">
                    <h1>{post.userName}</h1>
                    <p>{post.dataPost}</p>
                  </div>
                </div>
                <div className="Post-box-UserInfo-Likes">
                  <div className="Post-box-UserInfo-Likes-box">
                    <div className="Post-box-UserInfo-Likes-box-Like">
                      <AiOutlineLike className="Post-box-UserInfo-Likes-box-Like-icon LikeActive" />
                      <p>{post.likePositive && post.likePositive.length}</p>
                    </div>
                    <div className="Post-box-UserInfo-Likes-box-DesLike">
                      <AiOutlineDislike className="Post-box-UserInfo-Likes-box-Like-iconNegative" />
                      <p>{post.likeNegative && post.likeNegative.length}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Post-box-InfoUser-DescriptionPost">
                <div className="Post-box-InfoUser-DescriptionPost-box">
                  <p>{post.description}</p>
                </div>
              </div>
              <div className="Post-box-InfoUser-edit_info-post">
                <div className="Post-box-InfoUser-edit_info-post-boxEvent">
                  <div className="Post-box-InfoUser-edit_info-post-boxEvent-button">
                    <div className="Post-box-InfoUser-edit_info-post-boxEvent-info">
                      <p>Editar Postagem</p>
                    </div>
                    <div className="Post-box-InfoUser-edit_info-post-boxEvent-iconArrow">
                      <IoIosArrowDown className="iconArrowDown" />
                      <IoIosArrowUp className="iconArrowUp" />
                    </div>
                  </div>
                </div>

                <div className="Post-box-InfoUser-edit_info-post-content">
                  <div className="Post-box-InfoUser-edit_info-post-content-Visibile">
                    <form className="Post-box-InfoUser-edit_info-form">
                      {/* TITLE */}
                      <div className="Post-box-InfoUser-edit_info-form-BoxTitle">
                        <label>Titulo</label>
                        <input type="text" />
                      </div>
                      {/* DESCRIPTIN */}
                      <div className="Post-box-InfoUser-edit_info-form-BoxDescription">
                        <label>Description</label>
                        <textarea name="" id=""></textarea>
                      </div>
                      {/* SUBMIT */}
                      <div className="Post-box-InfoUser_boxSubmit-container">
                        <div className="Post-box-InfoUser_boxSubmit-content">
                          <input type="submit" value="Salvar" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Post-container-comments">
            <div className="Post-container-comments-box">
              <div className="Post-container-comments-box-formUser">
                <div className="Post-container-comments-box-formUser-UserImage">
                  <div className="Post-container-comments-box-formUser-UserImage-box">
                    {user.imageProfile ? (
                      <img
                        src={`${uploads}/Users/${user.imageProfile}`}
                        alt={user.firstName}
                      />
                    ) : (
                      <img src="/ImageDefault/vecteezy_man_1206101.png" />
                    )}
                  </div>
                </div>

                <form
                  className="Post-container-comments-box-formUser-UserImage-Form"
                  onSubmit={HandleComment}
                >
                  <div className="Post-container-comments-box-formUser-UserImage-Form-box">
                    <label htmlFor="Comment">Deixe um commentario.</label>
                    <textarea
                      name=""
                      id=""
                      placeholder="Comentario"
                      onChange={(e) => setCommentText(e.target.value)}
                      value={commentText || ""}
                    ></textarea>
                  </div>
                  <div className="Post-container-comments-box-formUser-UserImage-Form-box-submit">
                    <input type="submit" />
                  </div>
                </form>

                {error && (
                  <div className="Post-container-comments-box-MessageError">
                    <div className="Post-container-comments-box-MessageError-container">
                      <MessageError error={error} type="error" />
                    </div>
                  </div>
                )}

                {message && (
                  <div className="Post-container-comments-box-MessageError">
                    <div className="Post-container-comments-box-MessageError-container">
                      <MessageError error={message} type="success" />
                    </div>
                  </div>
                )}
              </div>

              <div className="Post-container-comments-box-commentsArray">
                {post.comments && post.comments.length === 0 && (
                  <>
                    <p>Não há comentarios....</p>
                  </>
                )}

                {post.comments &&
                  post.comments.map((comment) => (
                    <div
                      className="Post-container-comments-box-commentsArray-box"
                      key={comment.idComment}
                    >
                      <div className="Post-container-comments-box-commentsArray-boxImageNameUser">
                        <div className="Post-container-comments-box-commentsArray-box-ImageUser">
                          {comment.userImage ? (
                            <img
                              src={`${uploads}/Users/${comment.userImage}`}
                            />
                          ) : (
                            <img src="/ImageDefault/vecteezy_man_1206101.png" />
                          )}
                        </div>
                        <div className="Post-container-comments-box-commentsArray-box-ImageUser-boxName">
                          <h1> {comment.userName} </h1>
                          <p>{comment.dataComment}</p>
                        </div>
                      </div>

                      <div className="Post-container-comments-box-commentsArray-box-comment">
                        <div className="Post-container-comments-box-commentsArray-box-comment-box">
                          <p>{comment.comments}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
