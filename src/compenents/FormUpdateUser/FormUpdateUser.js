//CSS
import "./FormUpdateUser.css";
//react icons
import { FaEdit } from "react-icons/fa";
//react
import { useEffect, useState } from "react";
//Components
import MessageError from "../MessageError/MessageError";
import LoadingPostsUser from "../LoadingPostsUser/LoadingPostsUser";
//API
import { uploads } from "../../utils/config";
//redux
import { useSelector, useDispatch } from "react-redux";
//Slice
import { profile, UpdateUser, reset } from "../../slices/userSlice";

const FormUpdateUser = () => {
  //Redux
  const dispatch = useDispatch();
  const { user, loading, error, message } = useSelector((state) => state.user);

  //Initial States UPDATE
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [errorImageFormat, setErrorImageFormat] = useState("");

  //imagem user Escolhida
  const HandleFile = (e) => {
    let ButtonSubmit = document.querySelector(".InputPostPhotos");
    const image = e.target.files[0];

    setPreviewImage(image);

    if (image.type == "image/png") {
      setProfileImage(image);
    } else {
      ButtonSubmit.disabled = true;

      setErrorImageFormat("So aceitamos imagems no formato: (.png)");
      setTimeout(() => {
        setPreviewImage("");
        setErrorImageFormat("");

        ButtonSubmit.disabled = false;
      }, 3000);
    }
  };

  //UPDATE User DATA
  const handleUpdate = async (e) => {
    e.preventDefault();

    //objeto indefinido
    let userData = {
      firstName,
      lastName,
      city,
      locality,
    };

    if (password) {
      userData.password = password;
    }

    if (profileImage) {
      userData.imageProfile = profileImage;
    }

    //upload image e data
    const userFormData = Object.keys(userData).reduce((formData, key) => {
      formData.append(key, userData[key]);
      return formData;
    }, new FormData());

    dispatch(UpdateUser(userFormData));

    setTimeout(() => {
      dispatch(reset());
    }, 3000);
  };

  function EventError() {
    setTimeout(() => {
      dispatch(profile());
    }, 3000);
  }

  function EventSuccess() {
    setTimeout(() => {
      dispatch(profile());
    }, 3000);
  }

  //LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  //SET USER
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setCity(user.city);
      setLocality(user.locality);
    }
  }, [user]);

  return (
    <div className="Profile">
      {loading ? (
        <LoadingPostsUser />
      ) : (
        <div className="Profile_edit-content">
          <div className="Profile_edit-content-form">
            <div className="Profile_edit-content-form-content">
              <form
                className="Profile_edit-content-form-content-edit"
                onSubmit={handleUpdate}
              >
                <div className="Profile-name-banner">
                  <div className="Profile_content">
                    <div className="Profile_ImageUser">
                      {(user.imageProfile || previewImage) && (
                        <img
                          src={
                            previewImage
                              ? URL.createObjectURL(previewImage)
                              : `${uploads}/Users/${user.imageProfile}`
                          }
                          alt={user.firstName}
                        />
                      )}
                    </div>

                    <div className="Profile-box-upload-image">
                      <div className="Profile-boxInputFile">
                        <label htmlFor="inFile">
                          <FaEdit className="Profile-boxInputFile-icon-update" />
                        </label>
                        <input
                          type="file"
                          id="inFile"
                          onChange={HandleFile}
                          className="Profile-InputFile"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="Profile_infos-content">
                    <div className="Profile_infos-content-nameUser">
                      <h1>{/* {user.name} */}</h1>
                    </div>
                  </div>
                </div>

                <div className="Profile-content-width-max">
                  <div className="Profile-inputs">
                    {/*NAME*/}
                    <div className="Profile_edit-content-form-box-InfoUserBox">
                      <div className="Profile_edit-content-form-box-InfoUser">
                        <p>Primeiro Nome</p>
                        <input
                          type="text"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName || ""}
                        />
                      </div>
                      <div className="Profile_edit-content-form-box-InfoUser">
                        <p>Ultimo Nome</p>
                        <input
                          type="text"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName || ""}
                        />
                      </div>
                    </div>
                    {/*Email*/}
                    <div className="Profile_edit-content-form-box-InfoUserBoxEmail">
                      <div className="Profile_edit-content-form-box-InfoUserEmail">
                        <p>Email</p>
                        <input type="text" disabled value={email || ""} />
                      </div>
                    </div>
                    {/*SENHA*/}
                    <div className="Profile_edit-content-form-box-InfoUserBoxPassword">
                      <div className="Profile_edit-content-form-box-InfoUserPassword">
                        <p>Senha</p>
                        <input
                          type="text"
                          placeholder="********"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password || ""}
                        />
                      </div>
                    </div>
                    {/*CITY*/}
                    <div className="Profile_edit-content-form-box-InfoUserBoxCITY">
                      <div className="Profile_edit-content-form-box-InfoUserCITY">
                        <p>Cidade</p>
                        <input
                          type="text"
                          onChange={(e) => setCity(e.target.value)}
                          value={city || ""}
                        />
                      </div>
                      <div className="Profile_edit-content-form-box-InfoUserCITY">
                        <p>Localidade</p>
                        <input
                          type="text"
                          onChange={(e) => setLocality(e.target.value)}
                          value={locality || ""}
                        />
                      </div>
                    </div>
                    {/*Submit*/}
                    <div className="Profile_edit-content-form-box-submit">
                      <div className="Profile_edit-content-form-box-submit-content">
                        {!loading && (
                          <input
                            type="submit"
                            value="Atualizar Dados"
                            className="InputPostPhotos"
                          />
                        )}
                        {loading && (
                          <input type="submit" value="Aguarde...." disabled />
                        )}
                      </div>
                    </div>
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

              {error && EventError()}

              {message && (
                <div className="Profile_edit-content-form-content-MessageError">
                  <div className="Profile_edit-content-form-content-MessageError-Container">
                    <MessageError error={message} type="success" />
                  </div>
                </div>
              )}

              {message && EventSuccess()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormUpdateUser;
