import React, { useState } from "react";
import "./App.css";
import { InputNameArea } from "./component/InputNameArea";
import { NewNameArea } from "./component/NewNameArea";

export const App = () => {
  const [nameAlert, setNameAlert] = useState(false);
  //名前バリデーション
  const [addName, setAddName] = useState("");
  // 追加する名前・、メール電話テキスト
  const [names, setNames] = useState([]);
  // 現在の名前テキスト・メール・電話テキスト

  const onChangeAddName = (e) => setAddName(e.target.value);
  // 名前フォーム・メールフォーム・電話フォームを入力
  const onClickAddName = () => {
    // 名前追加ボタン
    if (addName === "") {
      nameAlert || setNameAlert(true);
      return;
    } else {
      nameAlert && setNameAlert(false);
    }
    console.log(addName)
    // 空だと返す
    const newNames = [...names, addName];
    
    setNames(newNames);
    setAddName("");
  };

  const onClickDeleteName = (index) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  };
  //名前の削除

  return (
    <>
      <div className="form-area">
        <h1>React Training</h1>
        <InputNameArea
          addName={addName}
          onChange={onChangeAddName}
          onClick={onClickAddName}
        />

        <NewNameArea
          names={names}
          nameAlert={nameAlert}
          onClickDeleteName={onClickDeleteName}
        />
      </div>
    </>
  );
};

export default App;
