import React from "react";
import { Typography, Switch } from "antd";
import {
  Article,
  ArticleAuthor,
  ArticleCards,
  ArticleTitle,
  Container,
  SubContainer,
  SubTitle,
  TextContainer,
  Title,
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
        <Title>Articles</Title>
        <SubTitle>
          Reading has been shown to put our brains into a pleasurable
          trance-like state, similar to meditation, and it brings the same
          health benefits of deep relaxation and inner calm. Regular readers
          sleep better, have lower stress levels, higher self-esteem, and lower
          rates of depression than non-readers. <br />
          Here, you can pick an article to explore mental health and feel
          better.
        </SubTitle>
        <ArticleCards>
          {articles.map((article) => (
            <SubContainer>
              <Article key={article.id}>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleAuthor>- {article.author}</ArticleAuthor> <br />
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
              </Article>
            </SubContainer>
          ))}
        </ArticleCards>
      </Container>
    );
  }
}

export default Articles;
