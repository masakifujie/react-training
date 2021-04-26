import React from "react";

export const InputMailArea = (props) => {
    const { addMail, onChange, onClick} = props;



return (
    <div className="input-area" value={addMail} onChange={onChange}>
        <input placeholder="mail" />
        <button onClick={onClick}>追加</button>
    </div>
);

};