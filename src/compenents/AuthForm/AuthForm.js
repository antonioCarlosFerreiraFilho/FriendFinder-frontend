//Css
import "./AuthForm.css";
//react
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//react icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImGooglePlus } from "react-icons/im";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
//Components
import MessageError from "../MessageError/MessageError";
//redux
import { useDispatch, useSelector } from "react-redux";
//Slices
import { register, login, reset } from "../../slices/authSlice";

const AuthForm = () => {
  //Initial State Register
  const [nameFirst, setNameFirst] = useState("");
  const [nameLast, setNameLast] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [gender, setGender] = useState(null);
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");

  //Initial State Login
  const [firsTnameLogin, setFirsTNameLogin] = useState("");
  const [lasTnameLogin, setLasTnameLogin] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  //redux
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //Function All inputs
  function eventView() {
    const Buttons = document.querySelectorAll(".buttonJS-event");
    const ButtonRegister = document.querySelector(
      ".AuthForm-box-form-actionJS-content-register"
    );
    const ButtonLogin = document.querySelector(
      ".AuthForm-box-form-actionJS-content-login"
    );

    const FormRegister = document.querySelector(
      ".AuthForm-box-form-content-register"
    );
    const FormLogin = document.querySelector(
      ".AuthForm-box-form-content-Login"
    );

    Buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (
          button.classList.contains(
            "AuthForm-box-form-actionJS-content-register"
          )
        ) {
          ButtonLogin.classList.remove("active");
          ButtonRegister.classList.add("active");

          FormLogin.classList.remove("active");
          FormRegister.classList.add("active");
        } else {
          ButtonRegister.classList.remove("active");
          ButtonLogin.classList.add("active");

          FormRegister.classList.remove("active");
          FormLogin.classList.add("active");
        }
      });
    });
  }

  function ViewOptionDay() {
    const viewOption = document.querySelector(
      ".AuthForm-box-form-containerDay-boxSelect"
    );

    viewOption.classList.toggle("AuthForm-box-form-containerDay-boxSelectJS");
  }

  function ViewOptionMonth() {
    const viewOption = document.querySelector(
      ".AuthForm-box-form-containerMONTH-boxSelect"
    );

    viewOption.classList.toggle("AuthForm-box-form-containerMONTH-boxSelectJS");
  }

  function ViewOptionYear() {
    const viewOption = document.querySelector(
      ".AuthForm-box-form-containerYEAR-boxSelect"
    );

    viewOption.classList.toggle("AuthForm-box-form-containerYEAR-boxSelectJS");
  }

  //Function input Scroll
  const closeSelectDay = () => {
    const inputsOptions = document.querySelectorAll(
      ".AuthForm-day_option input"
    );
    const selectValue = document.getElementById("AuthForm-day_select-value");

    inputsOptions.forEach((Element) => {
      Element.addEventListener("click", () => {
        selectValue.textContent = Element.value;
      });
    });
  };

  const selectValueDay = () => {
    const inputMonth = document.querySelectorAll(
      ".AuthForm-MONTH_option input"
    );

    inputMonth.forEach((elements) => {
      elements.addEventListener("click", () => {
        setMonth(elements.value);
      });
    });
  };

  const closeSelectMonth = () => {
    const inputsOptionsMonth = document.querySelectorAll(
      ".AuthForm-MONTH_option input"
    );
    let selectValue = document.getElementById("AuthForm-MONTH_select-value");

    inputsOptionsMonth.forEach((Element) => {
      Element.addEventListener("click", () => {
        selectValue.textContent = Element.value;
      });
    });
  };

  const selectValueMonth = () => {
    const inputMonth = document.querySelectorAll(
      ".AuthForm-MONTH_option input"
    );

    inputMonth.forEach((elements) => {
      elements.addEventListener("click", () => {
        setMonth(elements.value);
      });
    });
  };

  const closeSelectYear = () => {
    const inputsOptionsMonth = document.querySelectorAll(
      ".AuthForm-YEAR_option input"
    );
    let selectValue = document.getElementById("AuthForm-YEAR_select-value");

    inputsOptionsMonth.forEach((Element) => {
      Element.addEventListener("click", () => {
        selectValue.textContent = Element.value;
      });
    });
  };

  //Function subnmit REGISTER
  function RegisterSubmit(e) {
    e.preventDefault();

    const DataRegister = {
      firstName: nameFirst,
      lastName: nameLast,
      email: emailRegister,
      password: passwordRegister,
      confirmPassword,
      day,
      month,
      year,
      gender,
      city,
      locality,
    };

    dispatch(register(DataRegister));

    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  }

  //Function subnmit LOGIN
  function LoginSubmit(e) {
    e.preventDefault();

    const DataLogin = {
      firstName: firsTnameLogin,
      lastName: lasTnameLogin,
      email: emailLogin,
      password: passwordLogin,
    };

    dispatch(login(DataLogin));

    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  }

  //Starting Gender initial
  function InitialGender() {
    if (gender) {
      setGender(gender);
    } else {
      setGender("Homem");
    }
  }

  //Initial Function
  useEffect(() => {
    const Timer = setTimeout(() => {
      eventView();
      closeSelectDay();
      closeSelectMonth();
      closeSelectYear();
      selectValueMonth();
    }, 1000);

    return () => clearTimeout(Timer);
  }, []);

  return (
    <div className="AuthForm">
      <div className="AuthForm-content">
        <div className="AuthForm-box">
          <div className="AuthForm-box-intro">
            <div className="AuthForm-box-intro-box-title">
              <h1>Make Cool Friends !!!</h1>
            </div>
            <div className="AuthForm-box-intro-box-txt">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                fugiat dolor magni, quos at temporibus inventore voluptate
                inventore voluptate
              </p>
            </div>
            <div className="AuthForm-box-intro-box-now">
              <p>why are you waiting for ? Buy it now.</p>
            </div>
            <div className="AuthForm-box-intro-box-content-link">
              <div className="AuthForm-box-intro-box-link">
                <NavLink>Learn More</NavLink>
              </div>
            </div>
          </div>

          <div className="AuthForm-box-form">
            <div className="AuthForm-box-form-container">
              <div className="AuthForm-box-form-actionJS">
                <div className="AuthForm-box-form-actionJS-content">
                  <p className="AuthForm-box-form-actionJS-content-register buttonJS-event active">
                    Register
                  </p>
                  <h1>|</h1>
                  <p className="AuthForm-box-form-actionJS-content-login buttonJS-event">
                    Login
                  </p>
                </div>
              </div>

              <div className="AuthForm-box-form-content-register active">
                <div className="AuthForm-box-form-content-form">
                  <div className="AuthForm-box-form-content-form-title-slogan">
                    <h1>Register Now !!!</h1>
                    <p>Be cool and join today, Meet millions</p>
                  </div>
                  <form
                    className="AuthForm-box-form-content-formStyle"
                    onSubmit={RegisterSubmit}
                  >
                    {/* Name */}
                    <div>
                      <div className="AuthForm-box-form-content-formStyle-boxName">
                        <input
                          type="text"
                          placeholder="Frint Name"
                          onChange={(e) => setNameFirst(e.target.value)}
                          value={nameFirst || ""}
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          onChange={(e) => setNameLast(e.target.value)}
                          value={nameLast || ""}
                        />
                      </div>
                    </div>
                    {/* Email/Password */}
                    <div>
                      <div className="AuthForm-box-form-content-formStyle-boxEmailPassword">
                        <input
                          type="text"
                          placeholder="Seu Email"
                          onChange={(e) => setEmailRegister(e.target.value)}
                          value={emailRegister || ""}
                        />
                        <input
                          type="text"
                          placeholder="Criar Senha"
                          onChange={(e) => setPasswordRegister(e.target.value)}
                          value={passwordRegister || ""}
                        />
                        <input
                          type="text"
                          placeholder="Confirmar Senha"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          value={confirmPassword || ""}
                        />
                      </div>
                    </div>
                    {/* Day & Month */}
                    <div>
                      <div className="AuthForm-box-form-dataTitle">
                        <h1>Data of Birth</h1>
                      </div>

                      <div className="AuthForm-box-form-containerDayMonth">
                        <div className="AuthForm-box-form-containerDay-contentBox">
                          <div id="day-select" onClick={ViewOptionDay}>
                            <label
                              className="AuthForm-day_LabelChek"
                              htmlFor="options-view-button"
                            ></label>
                            <input
                              type="checkbox"
                              id="options-view-button"
                              className="AuthForm-day_options-view-button"
                            />

                            <div id="AuthForm-day_select-button">
                              <div id="AuthForm-day_select-value">Dia</div>
                              <div id="AuthForm-day_chevrons">
                                <IoIosArrowDown className="AuthForm-day_arrowDown" />

                                <IoIosArrowUp className="AuthForm-day_arrowUp" />
                              </div>
                            </div>
                          </div>

                          <div className="AuthForm-box-form-containerDay-boxSelect">
                            <div className="AuthForm-day_content-options">
                              <ul
                                className="AuthForm-day_options"
                                onClick={closeSelectDay}
                              >
                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 1"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    1ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 2"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    2ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 3"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    3ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 4"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    4ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 5"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    5ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 6"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    6ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 7"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    7ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 8"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    8ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 9"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    9ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 10"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    10ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 11"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    11ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 12"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    12ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 13"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    13ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 14"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    14ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 15"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    15ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 16"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    16ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 17"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    17ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 18"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    18ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 19"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    19ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 20"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    20ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 21"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    21ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 22"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    22ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 23"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    23ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 24"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    24ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 25"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    25ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 26"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    26ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 27"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    27ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 28"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    28ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 29"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    29ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 30"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    30ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>

                                <li className="AuthForm-day_option">
                                  <input
                                    type="radio"
                                    name="Day"
                                    onChange={(e) => setDay(e.target.value)}
                                    value="Dia 31"
                                    data-label="Day"
                                  />
                                  <FaCalendarAlt className="AuthForm-day_icon-user" />
                                  <span className="AuthForm-day_people">
                                    31ª
                                  </span>
                                  <FaCheck className="AuthForm-day_iconCheck" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="AuthForm-box-form-containerMONTH-contentBox">
                          <div id="MONTH-select" onClick={ViewOptionMonth}>
                            <label
                              className="AuthForm-MONTH_LabelChek"
                              htmlFor="options-view-button"
                            ></label>
                            <input
                              type="checkbox"
                              id="options-view-button"
                              className="AuthForm-MONTH_options-view-button"
                            />

                            <div id="AuthForm-MONTH_select-button">
                              <div id="AuthForm-MONTH_select-value">Mes</div>
                              <div id="AuthForm-MONTH_chevrons">
                                <IoIosArrowDown className="AuthForm-MONTH_arrowDown" />

                                <IoIosArrowUp className="AuthForm-MONTH_arrowUp" />
                              </div>
                            </div>
                          </div>

                          <div className="AuthForm-box-form-containerMONTH-boxSelect">
                            <div className="AuthForm-MONTH_content-options">
                              <ul
                                className="AuthForm-MONTH_options"
                                onClick={closeSelectMonth}
                              >
                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Janeiro"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Janeiro
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Fevereiro"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Fevereiro
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Março"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Março
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Abril"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Abril
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Maio"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Maio
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Junho"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Junho
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Julho"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Julho
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Agosto"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Agosto
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Setembro"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Setembro
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Outubro"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Outubro
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Novembro"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Novembro
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>

                                <li className="AuthForm-MONTH_option">
                                  <input
                                    type="radio"
                                    name="Month"
                                    value="Dezembro"
                                    data-label="Month"
                                  />
                                  <FaCalendarAlt className="AuthForm-MONTH_icon-user" />
                                  <span className="AuthForm-MONTH_people">
                                    Dezembro
                                  </span>
                                  <FaCheck className="AuthForm-MONTH_iconCheck" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* YEAR */}
                    <div>
                      <div className="AuthForm-box-form-containerYEAR">
                        <div className="AuthForm-box-form-containerYEAR-contentBox">
                          <div id="YEAR-select" onClick={ViewOptionYear}>
                            <label
                              className="AuthForm-YEAR_LabelChek"
                              htmlFor="options-view-button"
                            ></label>
                            <input
                              type="checkbox"
                              id="options-view-button"
                              className="AuthForm-YEAR_options-view-button"
                            />

                            <div id="AuthForm-YEAR_select-button">
                              <div id="AuthForm-YEAR_select-value">Year</div>
                              <div id="AuthForm-YEAR_chevrons">
                                <IoIosArrowDown className="AuthForm-YEAR_arrowDown" />

                                <IoIosArrowUp className="AuthForm-YEAR_arrowUp" />
                              </div>
                            </div>
                          </div>
                          <div className="AuthForm-box-form-containerYEAR-boxSelect">
                            <div className="AuthForm-YEAR_content-options">
                              <ul
                                className="AuthForm-YEAR_options"
                                onClick={closeSelectYear}
                              >
                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 1993"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    1993
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 1994"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    1994
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 1995"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    1995
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 1996"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    1996
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 1997"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    1997
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 1998"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    1998
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 1999"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    1999
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 1999"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    1999
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2000"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2000
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2001"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2001
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2002"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2002
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2003"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2003
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2004"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2004
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2005"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2005
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2006"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2006
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2007"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2007
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2008"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2008
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2009"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2009
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2010"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2010
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2011"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2011
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>

                                <li className="AuthForm-YEAR_option">
                                  <input
                                    type="radio"
                                    name="YEAR"
                                    onChange={(e) => setYear(e.target.value)}
                                    value="Anno 2012"
                                    data-label="YEAR"
                                  />
                                  <FaCalendarAlt className="AuthForm-YEAR_icon-user" />
                                  <span className="AuthForm-YEAR_people">
                                    2012
                                  </span>
                                  <FaCheck className="AuthForm-YEAR_iconCheck" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* GENDER */}
                    <div>
                      <div className="AuthForm-box-GENDER">
                        <div className="AuthForm-box-GENDER-labelInput">
                          <input
                            type="radio"
                            id="radio-male"
                            name="GENDER"
                            onChange={(e) => setGender(e.target.value)}
                            value="Homem"
                            onClick={InitialGender}
                          />
                          <label htmlFor="radio-male">Homem</label>
                        </div>

                        <div className="AuthForm-box-GENDER-labelInput">
                          <input
                            type="radio"
                            id="radio-Female"
                            name="GENDER"
                            onChange={(e) => setGender(e.target.value)}
                            value="Mulher"
                            onClick={InitialGender}
                          />
                          <label htmlFor="radio-Female">Mulher</label>
                        </div>
                      </div>
                    </div>
                    {/* CITY locality */}
                    <div>
                      <div className="AuthForm-box-CITY-LOCALITY">
                        <div className="AuthForm-box-CITY">
                          <input
                            type="text"
                            placeholder="Cidade"
                            onChange={(e) => setCity(e.target.value)}
                            value={city || ""}
                          />
                        </div>
                        <div className="AuthForm-box-LOCALITY">
                          <input
                            type="text"
                            placeholder="Localidade"
                            onChange={(e) => setLocality(e.target.value)}
                            value={locality || ""}
                          />
                        </div>
                      </div>
                    </div>
                    {/* BUTTON SUBMIT */}
                    <div>
                      <div className="AuthForm-box-Submit">
                        <div className="AuthForm-Submit">
                          {!loading && (
                            <input type="submit" value="Cadastrar" />
                          )}
                          {loading && (
                            <input type="submit" value="Aguarde...." disabled />
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="AuthForm-box-form-content-Login">
                <div className="AuthForm-box-form-content-form">
                  <div className="AuthForm-box-form-content-form-title-slogan">
                    <h1>Entre Agora !!!</h1>
                    <p>Be cool and join today, Meet millions</p>
                  </div>
                  <form
                    className="AuthForm-box-form-content-formStyle"
                    onSubmit={LoginSubmit}
                  >
                    {/* Name */}
                    <div>
                      <div className="AuthForm-box-form-content-formStyle-boxName">
                        <input
                          type="text"
                          placeholder="Frint Name"
                          onChange={(e) => setFirsTNameLogin(e.target.value)}
                          value={firsTnameLogin || ""}
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          onChange={(e) => setLasTnameLogin(e.target.value)}
                          value={lasTnameLogin || ""}
                        />
                      </div>
                    </div>
                    {/* Email/Password */}
                    <div>
                      <div className="AuthForm-box-form-content-formStyle-boxEmailPassword form-input-Login">
                        <input
                          type="text"
                          placeholder="Email"
                          onChange={(e) => setEmailLogin(e.target.value)}
                          value={emailLogin || ""}
                        />
                        <input
                          type="text"
                          placeholder="Senha"
                          onChange={(e) => setPasswordLogin(e.target.value)}
                          value={passwordLogin || ""}
                        />
                      </div>
                    </div>
                    {/* BUTTON SUBMIT */}
                    <div>
                      <div className="AuthForm-box-Submit">
                        <div className="AuthForm-Submit">
                          {!loading && <input type="submit" value="Entrar" />}
                          {loading && (
                            <input type="submit" value="Aguarde...." disabled />
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {error && (
                <>
                  <div className="AuthForm-box-MessageError">
                    <div className="AuthForm-box-MessageError-container">
                      {" "}
                      <MessageError error={error} />{" "}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="AuthForm-box-form-box-content-Icons">
              <div className="AuthForm-box-form-box-Icons">
                <FaFacebookF className="AuthForm-box-Icon" />
                <FaTwitter className="AuthForm-box-Icon" />
                <ImGooglePlus className="AuthForm-box-Icon" />
                <FaPinterest className="AuthForm-box-Icon" />
                <FaLinkedin className="AuthForm-box-Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
