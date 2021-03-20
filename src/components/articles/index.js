import React from "react";
import { Typography, Switch } from "antd";
import {
  ArticleCards,
  Container,
  SubContainer,
  TextContainer,
} from "./articles";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      ellipsis: true,
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
    const { Paragraph } = Typography;

    return (
      <Container>
        <p>Articles</p>
        <ul>
          <ArticleCards>
            {articles.map((article) => (
              <SubContainer>
                <li key={article.id}>
                  Title: {article.title} | Author: {article.author} <br />
                  <Paragraph
                    ellipsis={
                      this.state.ellipsis
                        ? {
                            rows: 2,
                            expandable: true,
                            symbol: "more",
                          }
                        : false
                    }
                  >
                    {article.article}
                  </Paragraph>
                </li>
              </SubContainer>
            ))}
          </ArticleCards>
        </ul>
      </Container>
    );
  }
}

export default Articles;
