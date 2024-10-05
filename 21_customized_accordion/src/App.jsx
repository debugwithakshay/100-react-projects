import { useState } from "react";
import { Checkbox } from "./components/Ui/Checkbox";
import { Accordion } from "./components/Accordion/Accordion";

function App() {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <>
      <div>
        <Checkbox
          isChecked={isChecked}
          onClickFunc={setIsChecked}
          label="Enable Multiple Opening"
        />
        <Accordion isMultipleOpening={isChecked} />
      </div>
    </>
  );
}

export default App;
