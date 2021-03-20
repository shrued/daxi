import React from "react";
import { Container, TextContainer } from "./articles";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://api.mocki.io/v1/3f47888a")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p>Articles</p>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                Title: {item.title} | Author: {item.author} <br />
                {item.article}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Articles;
