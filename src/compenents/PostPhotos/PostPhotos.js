//CSS
import "./PostPhotos.css";
//react icons
import { GrDocumentImage } from "react-icons/gr";
//react
import { useEffect, useState } from "react";
//components
import MessageError from "../../compenents/MessageError/MessageError";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { publishPhoto, reset } from "../../slices/postSlice";
import { profile } from "../../slices/userSlice";

const PostPhotos = () => {
  //Redux
  const { error, loading, message } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  //Initial State Form
  const [postImage, setPostImage] = useState("");
  const [previewPost, setPreviewPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorImageFormat, setErrorImageFormat] = useState("");

  //imagem user Escolhida
  const HandleFilePost = (e) => {
    let ButtonSubmit = document.querySelector(".InputPostPhotos");
    const image = e.target.files[0];

    if (image == "") {
      setPreviewPost("");
    } else {
      setPreviewPost(image);
    }

    if (image.type == "image/png") {
      setPostImage(image);
    } else {
      ButtonSubmit.disabled = true;

      setErrorImageFormat("So aceitamos imagems no formato: (.png)");
      setTimeout(() => {
        setPreviewPost("");
        setErrorImageFormat("");

        ButtonSubmit.disabled = false;
      }, 3000);
    }
  };

  //SUBMIT NEWPOST
  const newPost = async (e) => {
    e.preventDefault();

    const photoData = {
      imagePost: postImage,
      title,
      description,
    };

    // build form data
    const formData = new FormData();

    const photoFormData = Object.keys(photoData).forEach((key) =>
      formData.append(key, photoData[key])
    );

    formData.append("post", photoFormData);

    await dispatch(publishPhoto(formData));

    setTimeout(() => {
      dispatch(reset());
    }, 4000);

    setTitle("");
    setDescription("");
  };

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  return (
    <div className="PostPhotos">
      <div className="PostPhotos-container">
        <div className="PostPhotos-container-Title">
          <h1>
            <strong>Compartilhe</strong> algum Momento seu:
          </h1>
        </div>

        <div className="PostPhotos-container-form">
          <form className="PostPhotos-form" onSubmit={newPost}>
            {/* TITLE */}
            <div>
              <div className="PostPhotos-form-box-title">
                <label htmlFor="titlePost">Titulo :</label>
                <input
                  id="titlePost"
                  type="text"
                  placeholder="Insira um Titulo"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title || ""}
                />
              </div>
            </div>
            {/* SET IMAGE */}
            <div>
              <div className="PostPhotos-form-box-File">
                <div className="PostPhotos-form-box-File-container">
                  {previewPost && (
                    <img src={URL.createObjectURL(previewPost)} />
                  )}
                </div>
                <div className="PostPhotos-form-box-File-Input">
                  <label htmlFor="UploadPhoto">
                    <GrDocumentImage className="PostPhotos-form-box-File-Input-icon" />
                    <p>Escolher</p>
                  </label>
                  <input
                    type="file"
                    id="UploadPhoto"
                    onChange={HandleFilePost}
                  />
                </div>
              </div>
            </div>
            {/* SET DESCRIPTION */}
            <div>
              <div className="PostPhotos-form-box-description">
                <textarea
                  name=""
                  id=""
                  placeholder="Descrição...."
                  onChange={(e) => setDescription(e.target.value)}
                  value={description || ""}
                ></textarea>
              </div>
            </div>
            {/* SUBMIT */}
            <div>
              <div className="PostPhotos-form-box-File-InputSubmit">
                {!loading && (
                  <input
                    type="submit"
                    value="postar"
                    className="InputPostPhotos"
                  />
                )}
                {loading && (
                  <input type="submit" value="Aguarde...." disabled />
                )}
              </div>
            </div>
          </form>

          {error && (
            <div className="Profile_edit-content-form-content-MessageError">
              <div className="Profile_edit-content-form-content-MessageError-Container">
                <MessageError error={error} type="error" />
              </div>
            </div>
          )}

          {errorImageFormat && (
            <div className="Profile_edit-content-form-content-MessageError">
              <div className="Profile_edit-content-form-content-MessageError-Container">
                <MessageError error={errorImageFormat} type="error" />
              </div>
            </div>
          )}

          {message && (
            <div className="PostPhotos-container-MessageError">
              <div className="PostPhotos-container-MessageError-container">
                <MessageError error={message} type="success" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPhotos;
