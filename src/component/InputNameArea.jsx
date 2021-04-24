import React from "react";

export const InputNameArea = (props) => {
    const { addName, onChange,
      onClick } = props;
  
    
  return (
    <div className="input-area">
      <input placeholder="名前" value={addName} onChange={onChange} />
      <button onClick={onClick}>追加</button>
      {/* {(onChange === [""]) && <p>名前は必須です！</p>} */}
      
    </div>
  );
};
