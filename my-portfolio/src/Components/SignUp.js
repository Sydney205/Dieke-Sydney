import React from "react";
import axios from "../api/axios";
import { useRef, useState, useEffect } from "react";
import { FaInfoCircle, FaLock, FaMale, FaUnlock } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

// Regular Expressions...

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^[a-zA-Z-!@#$%][a-zA-Z0-9-_!@#$%]{8,24}$/;

const REGISTER_URL = "/SignUp";

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  // On submit...

  const handleSubmit = async (e) => {
    e.preventDefault();
    // This prevent button hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "content-type": "application.json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      // clear the input fields
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server response");
      } else if (err.reponse?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Failed to sign up");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {/* Success Page */}

      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        // SignUp page...

        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h2>Sign up</h2>

          {/* The Form... */}

          <form onSubmit={handleSubmit}>
            {/* User Input... */}

            <label htmlFor="username">
              <FaMale /> Enter your first name:
            </label>
            <div className="inputBox">
              <br />
              <input
                type={"text"}
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <span className="placeholder">First name</span>
            </div>
            <br />

            {/* Instructions... */}

            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle /> Your firstname only!, 4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, Numbers, underscores, hyphens allowed.
            </p>

            {/* Password Input... */}

            <label htmlFor="password">
              <FaLock /> Enter your password:
            </label>
            <div className="inputBox">
              <br />
              <input
                type={"password"}
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <span className="placeholder">Password</span>
            </div>

            {/* Instructions... */}

            <br />
            <p
              id="pwdnote"
              className={
                pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle /> 8 to 24 characters.
              <br />
              Can include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
            </p>

            {/* Confirm Password Input... */}

            <label htmlFor="confirm_pwd">
              <FaUnlock /> Confirm Password:
            </label>
            <div className="inputBox">
              <br />
              <input
                type={"password"}
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <span className="placeholder">Confirm</span>{" "}
            </div>

            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle /> Must match the first password input field.
            </p>
            <br />

            {/* Button... */}

            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>

          {/* Login Link... */}

          <p>
            Already registered?
            <br />
            <span className="line">
              {/* put router link here */}
              <HashLink to="#Login">Login</HashLink>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default SignUp;
