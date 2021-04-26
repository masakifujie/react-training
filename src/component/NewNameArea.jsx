import React from "react";

export const NewNameArea = (props) => {
  const { names, nameAlert, onClickDeleteName, nameSuccess } = props;

  return (
    <div className="newText-area">
      <div className="alert-name">
        {nameAlert && <p>名前を入力せんと困るで</p>}
        {/* trueの時に右を返す */}
        {nameSuccess && <p>追加したよーん</p>}
      </div>
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
    </div>
  );
};
