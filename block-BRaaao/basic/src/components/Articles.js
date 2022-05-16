import data from "../data.json";
import "../styles/style.css";

function Articles() {
  return (
    <div className="main flex wrap justify-between">
      {data.map((article) => (
        <Article key={article.publishedAt} {...article} />
      ))}
    </div>
  );
}

function Article(props) {
  return (
    <div className="wrapper flex column justify-between">
      <img src={props.urlToImage} alt="" width="200px" />
      <h2>
        <a href={props.url}>{props.title}</a>
      </h2>
      <p>{props.description}</p>
      <span>~ {props.author}</span>
    </div>
  );
}

export default Articles;
