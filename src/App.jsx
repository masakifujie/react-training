import React, { useState } from "react";
import "./App.css";
import { InputNameArea } from './component/InputNameArea';

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
    // 名前追加ボタン
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
  //新しい電話番号の配列作成

  const onClickDeleteName = (index) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };
  //名前の削除

  const onClickDeleteEmail = (index) => {
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
  };
  //メールの削除

  const onClickDeleteNumber = (index) => {
    const newNumbers = [...numbers]
    newNumbers.splice(index, 1);
    setNumbers(newNumbers);
  };
  //電話番号の削除
  return (
    <>
      <InputNameArea addName={addName} onChange={onChangeAddName} onClick={ onClickAddName }/>
      <div className="input-area">
      <input placeholder="メール" value={addEmail} onChange={onChangeAddEmail} />
      <button onClick={onClickAddEmail}>追加</button>
    </div>
      <div className="input-area" >
        <input placeholder="電話番号" value={addNumber} onChange={onChangeAddNumber}/>
        <button onClick={onClickAddNumber}>追加</button>
      </div>
      <div className="newText-area">
        <p>追加した名前</p>
        <ul>
          {names.map((name, index) => {
            return (
              <div key={name} className="list-row">
                <li>{name}</li>
                <button onClick={() => onClickDeleteName(index)}>削除</button>
              </div>
            );
          })}
        </ul>

        <p>追加したメールアドレス</p>
        <ul>
          {emails.map((email, index) => {
            return (
              <div key={email} className="list-row">
                <li>{email}</li>
                <button onClick={() => onClickDeleteEmail(index)}>削除</button>
              </div>
            );
          })}
        </ul>

        <p>追加した電話番号</p>
        <ul>
          {numbers.map((number, index) => {
            return (
              <div key={number} className="list-row">
                <li>{number}</li>
                <button onClick={() => onClickDeleteNumber(index)}>削除</button>
              </div>
            );
          })}
         
        </ul>

      </div>
  </>
  );
};

export default App;
