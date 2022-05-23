import Button from "./Buttons";
import "../button.css";
import { buttonSizes, buttonTypes } from "./ButtonInfo";

function App() {
  return (
    <>
      <Button label="Click Me" />
      <Button
        size={buttonSizes.MEDIUM}
        label="Click Me"
        type={buttonTypes.SECONDARY}
      />
      <Button
        size={buttonSizes.LARGE}
        label="Button"
        type={buttonTypes.TERTIARY}
        onClickHandler={() => alert("You Clicked Me!")}
      />
      <Button disabled />
    </>
  );
}

export default App;
