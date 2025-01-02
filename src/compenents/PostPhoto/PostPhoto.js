//css
import "./PostPhoto.css";
//react icons
import { FaPaperclip } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
//react
import { useState, useEffect } from "react";
//Components
import MessageError from "../../compenents/MessageError/MessageError";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { publishPhoto, reset } from "../../slices/postSlice";
import { profile } from "../../slices/userSlice";
//API
import { uploads } from "../../utils/config";

const PostPhoto = () => {
  //Redux
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.user);

  //Initial States
  const [imageUpload, setImageUpload] = useState("");
  const [postImage, setPostImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorImageFormat, setErrorImageFormat] = useState("");

  //Validation Value
  function UploadImage() {
    const InputUpload = document.getElementById("Input-file");

    let ImageEmpty = document.getElementById(
      "PostPhoto-content-form-box-Upload-labelIcon-ImageEmpty"
    );
    let IconCheck = document.getElementById(
      "PostPhoto-content-form-box-Upload-labelIcon-ImageEmpty-icon"
    );

    let StopInterval = true;

    if (StopInterval == true) {
      setInterval(() => {
        if (InputUpload.value == "") {
          ImageEmpty.style.display = "block";
        } else {
          ImageEmpty.style.display = "none";
          IconCheck.style.display = "block";
          StopInterval = false;
        }
      }, 2000);
    }
  }

  //imagem user Escolhida
  const HandleFilePost = (e) => {
    const image = e.target.files[0];
    const InputUpload = document.getElementById("Input-file");
    let ImageEmpty = document.getElementById(
      "PostPhoto-content-form-box-Upload-labelIcon-ImageEmpty"
    );
    let IconCheck = document.getElementById(
      "PostPhoto-content-form-box-Upload-labelIcon-ImageEmpty-icon"
    );

    if (image != "") {
      if (image.type == "image/png") {
        setPostImage(image);
      } else {
        setErrorImageFormat("So aceitamos imagems no formato: (.png)");

        setTimeout(() => {
          setErrorImageFormat("");
          InputUpload.value = "";

          if (InputUpload.value == "") {
            ImageEmpty.style.display = "block";
            IconCheck.style.display = "none";
          } else {
            ImageEmpty.style.display = "none";
            IconCheck.style.display = "block";
          }
        }, 3000);
      }
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

  //Check Image
  useEffect(() => {
    const Time = setTimeout(() => {
      UploadImage();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  return (
    <div className="PostPhoto">
      <div className="PostPhoto-container">
        <div className="PostPhoto-content">
          <div className="PostPhoto-content-TitleSlogan">
            <div className="PostPhoto-content-TitleSlogan-box">
              <h1>
                <strong>Compartilhe</strong> um momento seu, sem perder{" "}
                <strong>Tempo!</strong>
              </h1>
            </div>
          </div>

          <div className="PostPhoto-content-form">
            <form className="PostPhoto-content-form-box" onSubmit={newPost}>
              <div className="PostPhoto-content-form-box-inputs">
                {/* TITLE */}
                <div className="PostPhoto-content-form-box-title">
                  <input
                    type="text"
                    placeholder="Insira um titulo"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title || ""}
                  />
                </div>
                {/* DESCRIPTION */}
                <div className="PostPhoto-content-form-box-description">
                  <textarea
                    name=""
                    id=""
                    placeholder="Insira uma descrição"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description || ""}
                  ></textarea>
                </div>
              </div>
              <div
                className="PostPhoto-content-form-box-UploadSubmit"
                onClick={UploadImage}
              >
                {/* INPUT FILE */}
                <div className="PostPhoto-content-form-box-Upload">
                  <label htmlFor="Input-file">
                    <FaPaperclip className="PostPhoto-content-form-box-Upload-labelIcon" />
                    <p id="PostPhoto-content-form-box-Upload-labelIcon-ImageEmpty">
                      Adicionar Imagem
                    </p>
                    <IoMdCheckmarkCircleOutline id="PostPhoto-content-form-box-Upload-labelIcon-ImageEmpty-icon" />
                  </label>
                  <input
                    id="Input-file"
                    type="file"
                    onChange={HandleFilePost}
                  />
                </div>
                {/* INPUT SUBMIT */}
                <div className="PostPhoto-content-form-box-Submit">
                  {!loading && <input type="submit" value="postar" />}
                  {loading && <input type="submit" value="....." disabled />}
                </div>
              </div>
              {/* IMAGE PROFILE USER */}
              <div className="PostPhoto-content-form-box-ImageUser">
                <div className="PostPhoto-content-form-box-ImageUser-box">
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
            </form>
          </div>
          {error && (
            <div className="PostPhoto-content-MessageError">
              <div className="PostPhoto-content-MessageError-container">
                <MessageError error={error} type="error" />
              </div>
            </div>
          )}

          {errorImageFormat && (
            <div className="PostPhoto-content-MessageError">
              <div className="PostPhoto-content-MessageError-container">
                <MessageError error={errorImageFormat} type="error" />
              </div>
            </div>
          )}

          {message && (
            <div className="PostPhoto-content-MessageError">
              <div className="PostPhoto-content-MessageError-container">
                <MessageError error={message} type="success" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPhoto;
