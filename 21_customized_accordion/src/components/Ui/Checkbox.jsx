import { useState } from "react";

export const Checkbox = ({ isChecked, onClickFunc, label, isDisabled }) => {
    

  return (
    <>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="mr-2"
        checked={isChecked}
        onChange={() => onClickFunc((prevSate) => !prevSate)}
        disabled={isDisabled}
      />    
      <label htmlFor="checkbox" className="select-none" style={{color: isDisabled ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.9)", cursor: isDisabled ? "not-allowed" : "pointer"}}>{label}</label>
    </>
  );
};
