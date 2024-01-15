import React, { useState } from "react";
import styles from "../../scss/login/login.module.scss"
import CommonContaier from "../../hooks/CommonContainer";

const SignInComponent =  ({changeView}) => {
  const [inputs, setInputs] = useState();
  const {loginButton} = CommonContaier();

  // 입력
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // password 입력 후 enter 로직
  const onKeyDownEnter = (e) => {
    if (e.keyCode === 13) {
      loginButton(inputs);
    }
  }

  return (
    <>
      <div className={`${styles?.loginLogo}`}></div>
      <div className={`${styles?.loginTitle}`}>로그인을 하여 주시기 바랍니다.</div>
      <div className={`${styles?.loginForm}`}>
        <div className={`${styles?.flexInput}`}>
          <label className={`${styles?.flexLabelLeft}`}>id : </label>
          <input
            name="id"
            placeholder="id"
            type="id"
            className={`${styles?.flexLabelRight}`}
            onChange={onChange}
          />
        </div>
        <div className={`${styles?.flexInput}`}>
          <label className={`${styles?.flexLabelLeft}`}>Password : </label>
          <input
            name="password"
            placeholder="Password"
            type="password"
            className={`${styles?.flexLabelRight}`}
            onChange={onChange}
            onKeyDown={(e) => {
              onKeyDownEnter(e)
            }}
          />
        </div>
      </div>
      <div className={`${styles?.loginButtonComponent}`}>
        <button
          className={`primary ${styles?.commonButton} ${styles?.loginButton}`}
          onClick={() => loginButton(inputs)}
        >
          로그인
        </button>
        <button className={`secondary ${styles?.commonButton} ${styles?.signInButton}`}
          onClick={() => changeView(2)}>
          회원가입
        </button>
        <button className={`secondary ${styles?.commonButton} ${styles?.findIdPasswordButton}`}>
          아이디/비밀번호 찾기
        </button>
      </div>
    </>
  );
};

export default SignInComponent;