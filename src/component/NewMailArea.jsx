import React from "react";

export const NewMailArea = (props) => {
  const { mails, onClickDeleteMail, mailAlert,mailSuccess} = props;
  return (
      <div className="newText-area">
          <div className="alert-name">
              {mailAlert && <p>正しいメールアドレスを入力せんと困るで</p>}
              {mailSuccess && <p>登録できたよ</p>} 
          </div>
      <p>追加したメールアドレス</p>
      <ul>
        {mails.map((mail, index) => {
          return (
            <div key={mail} className="list-row">
              <li>{mail}</li>
              <button onClick={() => onClickDeleteMail(index)} >削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
