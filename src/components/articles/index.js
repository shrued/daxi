import React from "react";
import { Container, TextContainer } from "./articles";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch("https://api.mocki.io/v1/10c23814")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: json,
        });
      });
  }

  render() {
    var { articles } = this.state;

    return (
      <div>
        <p>Articles</p>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              Title: {article.title} | Author: {article.author} <br />
              {article.article}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Articles;
