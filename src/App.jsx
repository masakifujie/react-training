import React, { useState }from 'react';
import "./App.css";

export const App = () => {
  const [addName, setAddName] = useState(['']);
  const [addEmail, setAddEmail] = useState(['']);
  // 追加する名前・、メールテキスト
  const [names, setNames] = useState([""]);
  const [emails, setEmails] = useState([""])
  // 現在の名前テキスト・メールテキスト

  const onChangeAddName = (event) => setAddName(event.target.value);
  const onChangeAddEmail = (event) => setAddEmail(event.target.value);
  // 名前フォーム・メールフォームを入力
  
  const onClickAddName = () => {
    // 追加ボタン
    if (addName === "") return;
    // 空だと返す
    const newNames = [...names, addName];
    setNames(newNames);
    setAddName("");
  };

  const onClickAddEmail = () => {
    if (addEmail === "") return;
    const newEmails = [...emails, addEmail];
    setEmails(newEmails);
    setAddEmail("");
  };

  return (
    <ul>
      <div className="input-area">
        <input placeholder="名前" value={addName} onChange={onChangeAddName }/>
        <button onClick={onClickAddName}>追加</button>
      </div>

      <div className="input-area" value={addEmail} onChange={onChangeAddEmail}>
        <input placeholder="メールアドレス" />
        <button onClick={onClickAddEmail}>追加</button>
      </div>

      <div className="newText-area">
        <p>追加した名前</p>
        <ul>
          {names.map((name) => {
            return (
              <div key={name} className="list-row">
                <li>{ name }</li>
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
      </div>
    </ul>
  );
};

export default App;
