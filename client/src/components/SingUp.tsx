import React from "react";
import styled from "styled-components";
import { Loginsection } from "./SingIn";

function SingUp() {
  return (
    <Loginsection>
      <div className="login-Box">
        <h1>SINGUP</h1>
        <input placeholder="아이디를 입력해주세요" />
        <input placeholder="비밀번호를 입력해주세요" />
        <input placeholder="비밀번호 재확인" />
        <button>SingUp</button>
      </div>
    </Loginsection>
  );
}

export default SingUp;
