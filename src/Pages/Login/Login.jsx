import React, { useState } from "react";
import { useHistory } from "react-router-use-history";
import { login } from "../../Apis/login";
import { registers } from "../../Apis/login";
import style from "./login.module.css";
function Login() {
  const [isRegister, setIsRegister] = useState(true);
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signupbtn = () => {
    setIsRegister(true);
  };
  const loginbtn = () => {
    setIsRegister(false);
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const response = await registers(username, password);
      console.log("register successfully: ", response);
      setIsRegister(false);
    } catch (err) {
      setErrors("password doesn't match");
      console.log("Register error: ", err);
    }
  };
  const loginUser = async (event) => {
    event.preventDefault();
    try {
      const response = await login(username, password);
      console.log("Login successfully. Response: ", response);
      history.push("/home");
    } catch (error) {
      setErrors("Incorrect password");
      console.log("Error during login: ", error);
    }
  };
  return (
    <div className={style.signupPage}>
      <div className={style.highlight}>
        <div className={style.signForm}>
          <h1>Task</h1>
          <div className={style.btns}>
            <button
              onClick={signupbtn}
              className={isRegister ? style.activeButton : ""}
            >
              Sign Up
            </button>
            <button
              onClick={loginbtn}
              className={!isRegister ? style.activeButton : ""}
            >
              Log In
            </button>
          </div>
          {isRegister ? (
            <div className={style.signForm1}>
              <form onSubmit={createUser}>
                <div className={style.inp}>
                  <label className={style.labels}>Username</label>
                  <input
                    className=""
                    value={username}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className={style.inp}>
                  <label className={style.labels}>Password</label>
                  <input
                    className=""
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className={style.signUperror}>
                  {errors && <p>{errors}</p>}
                </div>
                <div className={style.signUpbtn}>
                  <button type="submit">Sign-Up</button>
                </div>
              </form>
            </div>
          ) : (
            <div className={style.signForm2}>
              <form onSubmit={loginUser}>
                <div className={style.inp}>
                  <label className={style.labels}>Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className={style.inp}>
                  <label className={style.labels}>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className={style.signUperror}>
                  {errors && <p>{errors}</p>}
                </div>
                <div className={style.loginbtn}>
                  <button type="submit">Log In</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
