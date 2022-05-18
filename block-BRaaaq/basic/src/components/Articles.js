import PropTypes from "prop-types";
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
      <div className="article flex column justify-between">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <span>~ {props.author}</span>
        <a className="link" href={props.url}>
          Visit Website
        </a>
      </div>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Articles;
