import "../styles/style.css";

function Header() {
  return (
    <header className="flex justify-between">
      <a href="../logo.svg" className="brand">
        ArticleApp
      </a>
      <div>
        <a href="google.com">Home</a>
        <a href="google.com">About</a>
        <a href="google.com">Contact</a>
      </div>
    </header>
  );
}

export default Header;
