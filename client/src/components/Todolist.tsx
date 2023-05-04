import React from "react";
import styled from "styled-components";

function TodoList() {
  return (
    <Todosection>
      <div className="flex-center column w-50">
        <div className="input-section flex-center">
          <TodoInput placeholder="내용을 작성해주세요"></TodoInput>{" "}
          <TodoButton>작성</TodoButton>
        </div>
        <TodoLists>
          <li>
            <span>여기에 아마 내용이 들어가겠죠?</span>
            <div className="icon">
              <span>수정</span>
              <span>삭제</span>
            </div>
          </li>
        </TodoLists>
      </div>
    </Todosection>
  );
}
export default TodoList;

const Todosection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #446fff;
  * {
    margin: 0;
    padding: 0;
  }
  .input-section {
    width: 100%;
  }
  .flex-center {
    display: flex;
    align-items: center;
  }
  .column {
    flex-direction: column;
  }
  .w-50 {
    width: 500px;
  }
`;

const TodoInput = styled.input`
  width: 100%;
  padding: 20px;
  border: none;
  margin-right: 10px;
`;

const TodoButton = styled.button`
  width: 100px;
  padding: 20px;
  border: none;
  background-color: #fff;
  font-weight: 600;
  box-sizing: border-box;
  :hover {
    background-color: #daebff;
    color: #4183ff;
  }
  :active {
    color: #fff;
    background-color: #4183ff;
  }
`;

const TodoLists = styled.ul`
  width: 100%;
  list-style: none;
  margin-top: 20px;
  li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    margin-top: 10px;
    padding: 15px 0px;
  }
  li > span {
    padding: 0px 20px;
    font-size: 14px;
    color: #666;
    font-weight: 600;
  }

  .icon {
    margin-right: 20px;
    font-size: 14px;
  }
  .icon > * {
    color: #999;
    margin-left: 10px;
  }
  .icon > *:hover {
    color: #4183ff;
  }
`;
