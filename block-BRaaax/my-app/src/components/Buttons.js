function Button() {
  return (
    <>
      <Button label="Button" />
      <Button size="small" label="Button" type="secondary" />
      <Button
        size="large"
        label="Button"
        type="tertiary"
        onClickHandler={() => alert("You Clicked Me!")}
      />
    </>
  );
}

export default Button;
