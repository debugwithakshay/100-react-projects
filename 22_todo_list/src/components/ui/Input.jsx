export const Input = ({
  inputType,
  inputPlaceholder,
  value,
  onChangeFunc,
  onKeyDownFucn,
}) => {
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      value={value}
      onChange={onChangeFunc}
      onKeyDown={onKeyDownFucn}
      className="border-purple-500 border-2 rounded p-2 w-full focus: outline-none"
    />
  );
};
