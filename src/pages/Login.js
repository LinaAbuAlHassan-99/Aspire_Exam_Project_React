import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import classes from "./Login.module.css";

import E from "../Assets/Login_logo_E.png";
import P from "../Assets/Login_logo_P.png";
import I from "../Assets/Login_logo_I.png";
import C from "../Assets/Login_logo_C.png";
import A from "../Assets/Login_logo_A.png";
import D from "../Assets/Login_logo_D.png";
import M from "../Assets/Login_logo_M.png";
import Y from "../Assets/Login_logo_Y.png";
import newA from "../Assets/Login_logo_copyright_A.png";
import newS from "../Assets/Login_logo_copyright_S.png";
import newP from "../Assets/Login_logo_copyright_P.png";
import newI from "../Assets/Login_logo_copyright_I.png";
import newR from "../Assets/Login_logo_copyright_R.png";
import newE from "../Assets/Login_logo_copyright_E.png";

import logo_top from "../Assets/Login_logo_top.png";
import logo_left from "../Assets/Login_logo_left.png";
import logo_right from "../Assets/Login_logo_right.png";
import logo_bottom from "../Assets/Login_logo_bottom.png";
import copyright_top from "../Assets/Login_logo_copyright_top.png";
import copyright_left from "../Assets/Login_logo_copyright_left.png";
import copyright_right from "../Assets/Login_logo_copyright_right.png";
import copyright_bottom from "../Assets/Login_logo_copyright_bottom.png";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const formSubmitionHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail);
  };

  return (
    <div className={classes.login_container}>
      <div className={classes.login_logo}>
        <img src={logo_top} alt="logo_top" className={classes.logo_top} />
        <img src={logo_left} alt="logo_left" className={classes.logo_left} />
        <img src={logo_right} alt="logo_right" className={classes.logo_right} />
        <img
          src={logo_bottom}
          alt="logo_bottom"
          className={classes.logo_bottom}
        />

        <img src={E} alt="E" className={classes.E} />
        <img src={P} alt="P" className={classes.P} />
        <img src={I} alt="I" className={classes.I} />
        <img src={C} alt="C" className={classes.C} />

        <img src={A} alt="C" className={classes.A} />
        <img src={C} alt="C" className={classes.CC} />
        <img src={A} alt="C" className={classes.AA} />
        <img src={D} alt="C" className={classes.D} />
        <img src={E} alt="C" className={classes.EE} />
        <img src={M} alt="C" className={classes.M} />
        <img src={Y} alt="C" className={classes.Y} />
      </div>

      <div className={classes.login_layout}>
        <div className={classes.textDiv}>
          <h6 className={classes.welcome}>Welcome!</h6>
          <h1 className={classes.Liya}>Login into your account</h1>
        </div>

        <form onSubmit={formSubmitionHandler} className={classes.login_form}>
          <p className={classes.login_form_email_label}>Email</p>
          <input
            type="text"
            className={classes.login_form_email_input}
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <p className={classes.login_form_password_label}>Password</p>
          <input
            type="text"
            className={classes.login_form_password_input}
            id="pass"
            name="pass"
            placeholder="Password"
            required
          />

          <Link to="/resetpass" className={classes.login_form_forgptPass}>
            Forgot password?
          </Link>

          <button className={classes.login_form_button}>Login</button>
        </form>
      </div>

      <div className={classes.login_copyright}>
        <img
          src={copyright_top}
          alt=" copyright_top"
          className={classes.copyright_top}
        />
        <img
          src={copyright_left}
          alt=" copyright_left"
          className={classes.copyright_left}
        />
        <img
          src={copyright_right}
          alt=" copyright_right"
          className={classes.copyright_right}
        />
        <img
          src={copyright_bottom}
          alt=" copyright_bottom"
          className={classes.copyright_bottom}
        />

        <img src={newA} alt="A" className={classes.newA} />
        <img src={newS} alt="S" className={classes.newS} />
        <img src={newP} alt="P" className={classes.newP} />
        <img src={newI} alt="I" className={classes.newI} />
        <img src={newR} alt="R" className={classes.newR} />
        <img src={newE} alt="E" className={classes.newE} />

        <p className={classes.login_copyright_text}>
          Powered by ASPIRE ©2021 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
