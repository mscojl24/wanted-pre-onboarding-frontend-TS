import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Loginsection>
      <div className="login-Box">
        <h1>LOGIN</h1>
        <input placeholder="아이디를 입력해주세요" />
        <input placeholder="비밀번호를 입력해주세요" />
        <button>Login</button>
      </div>
    </Loginsection>
  );
}

export default Login;

export const Loginsection = styled.div`
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  h1 {
    color: #f78d7b;
  }
  .login-Box {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.2);
    border-radius: 20px;
  }
  input {
    border: 1px solid #e0e0e0;
    margin: 5px;
    padding: 10px 20px;
    border-radius: 50px;
    background-color: #f7f7f7;
    color: #757575;
  }
  input:focus {
    outline: 1px solid #df5137;
  }
  input::placeholder {
    color: #ccc;
    font-size: 12px;
  }
  button {
    color: #fff;
    background: none;
    font-weight: 600;
    margin: 20px;
    padding: 10px 30px;
    border: none;
    background-color: #f78d7b;
    border-radius: 50px;
  }

  button:hover {
    background-color: #ffc1b6;
  }

  button:active {
    background-color: #df5137;
  }
`;
