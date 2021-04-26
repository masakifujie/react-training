import React, { useState } from "react";
import "./App.css";
import { InputNameArea } from "./component/InputNameArea";
import { NewNameArea } from "./component/NewNameArea";
import { InputMailArea } from "./component/InputMailArea";
import { NewMailArea } from "./component/NewMailArea";

export const App = () => {
  // 現在の名前テキスト・メールテキスト
  const [names, setNames] = useState([]);
  const [mails, setMails] = useState([]);
  // 追加する名前・メールテキスト
  const [addName, setAddName] = useState("");
  const [addMail, setAddMail] = useState("");
  //追加名前メールバリデーション
  const [nameSuccess, setNameSuccess] = useState(false);
  const [mailSuccess, setMailSuccess] = useState(false); 
  const [nameAlert, setNameAlert] = useState(false)
  const [mailAlert, setMailAlert] = useState(false)

  // 名前フォーム・メールフォーム・電話フォームを入力
  const onChangeAddName = (e) => setAddName(e.target.value);
  const onChangeAddMail = (e) => setAddMail(e.target.value);
  
  // 名前追加ボタン
  const onClickAddName = () => {
    if (addName === "") {
      // 空だったら、nameAlertがfalseなのでsetNameAlertを走らせる
      nameAlert || setNameAlert(true);
      nameSuccess && setNameSuccess(false);
      return;
    } else {
      // 空じゃなければ、nameAlertがtrueの時にsetNameAlertを走らせる
      localStorage.setItem("localName", names);
      nameAlert && setNameAlert(false);
      nameSuccess || setNameSuccess(true);
    }
    const newNames = [...names, addName];
    setNames(newNames);
    setAddName("");
  };
// メール追加ボタン
  const onClickAddMail = () => {
    if ( !addMail.includes('.com')) {
      mailAlert || setMailAlert(true);
      mailSuccess && setMailSuccess(false);
      return;
    } else {
      mailAlert && setMailAlert(false);
      mailSuccess || setMailSuccess(true);
    }
    const newMails = [...mails, addMail];
    setMails(newMails);
    setAddMail("");
  };

  const onClickDeleteName = (index) => {
    const newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
    localStorage.removeItem('Key');
  };
  //名前の削除
  const onClickDeleteMail = (index) => {
    const newMails = [...names];
    newMails.splice(index, 1);
    setMails(newMails);
  };

  return (
    <>
      <div className="form-area">
        <h1>React Training</h1>
        <InputNameArea
          addName={addName}
          onChange={onChangeAddName}
          onClick={onClickAddName}
        />
        <InputMailArea
          addMail={addMail}
          onChange={onChangeAddMail}
          onClick={onClickAddMail}
          />

        <NewNameArea
          names={names}
          nameAlert={nameAlert}
          onClickDeleteName={onClickDeleteName}
          nameSuccess={ nameSuccess }
        />

        <NewMailArea
          mails={mails}
          onClickDeleteMail={onClickDeleteMail}
          mailAlert={mailAlert}
          mailSuccess={mailSuccess}
          />
        
      </div>
    </>
  );
};

export default App;
