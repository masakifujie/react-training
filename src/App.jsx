import React, { useState }from 'react';
import "./App.css";

export const App = () => {
  const [addName, setAddName] = useState(['']);
  // 追加するテキスト
  const [names, setNames] = useState([""]);
  // 現在のテキスト

  const onChangeAddName = (event) => setAddName(event.target.value);
  // フォームを入力
  
  const onClickAdd = () => {
    // 追加ボタン
    if (addName === "") return;
    // 空だと返す
    const newNames = [...names, addName];
    setNames(newNames);
    setAddName("");
  };
  return (
    <ul>
      <div className="input-area">
        <input placeholder="名前" value={addName} onChange={onChangeAddName }/>
        <button onClick={onClickAdd}>追加</button>
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
      </div>
    </ul>
  );
};

export default App;
