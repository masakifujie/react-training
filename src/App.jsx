import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [addNumber, setAddNumber] = useState([""]);
  const [addName, setAddName] = useState([""]);
  const [addEmail, setAddEmail] = useState([""]);
  // 追加する名前・、メール電話テキスト
  const [numbers, setNumbers] = useState([]);
  const [names, setNames] = useState([]);
  const [emails, setEmails] = useState([]);
  // 現在の名前テキスト・メール・電話テキスト

  const onChangeAddNumber = (event) => setAddNumber(event.target.value);
  const onChangeAddName = (event) => setAddName(event.target.value);
  const onChangeAddEmail = (event) => setAddEmail(event.target.value);
  // 名前フォーム・メールフォーム・電話フォームを入力

  const onClickAddName = () => {
    // 追加ボタン
    if (addName === "") return;
    // 空だと返す
    const newNames = [...names, addName];
    setNames(newNames);
    setAddName("");
  };
  //新しい名前の配列作成

  const onClickAddEmail = () => {
    if (addEmail === "") return;
    const newEmails = [...emails, addEmail];
    setEmails(newEmails);
    setAddEmail("");
  };
  //新しいメールの配列作成

  const onClickAddNumber = () => {
    if (addNumber === "") return;
    const newNumbers = [...numbers, addNumber];
    setNumbers(newNumbers);
    setAddNumber("");
  }
  return (
    <>
      <div className="input-area">
        <input placeholder="名前" value={addName} onChange={onChangeAddName} />
        <button onClick={onClickAddName}>追加</button>
      </div>

      <div className="input-area" >
        <input placeholder="メールアドレス" value={addEmail} onChange={onChangeAddEmail}/>
        <button onClick={onClickAddEmail}>追加</button>
      </div>

      <div className="input-area" >
        <input placeholder="電話番号" value={addNumber} onChange={onChangeAddNumber}/>
        <button onClick={onClickAddNumber}>追加</button>
      </div>
      <div className="newText-area">
        <p>追加した名前</p>
        <ul>
          {names.map((name) => {
            return (
              <div key={name} className="list-row">
                <li>{name}</li>
              </div>
            );
          })}
        </ul>

        <p>追加したメールアドレス</p>
        <ul>
          {emails.map((email) => {
            return (
              <div key={email} className="list-row">
                <li>{email}</li>
              </div>
            );
          })}
        </ul>

        <p>追加した電話番号</p>
        <ul>
          {numbers.map((number) => {
            return (
              <div key={number} className="list-row">
                <li>{number}</li>
              </div>
            );
          })}
         
        </ul>

      </div>
  </>
  );
};

export default App;
