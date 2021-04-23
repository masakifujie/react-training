import React from "react";

export const InputNameArea = (props) => {
    const { addName, onChange,
        onClick } = props;
    
  return (
    <div className="input-name-area">
      <input placeholder="名前" value={addName} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
    
};
