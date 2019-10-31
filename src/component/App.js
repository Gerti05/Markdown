import React from "react";
import Editor from "./editor";
import Previewer from "./previewer";
import { Container } from "react-bootstrap";
import InitialMarkdown from "./initialMarkdown";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: InitialMarkdown
    };
  }

  handleChange = e => {
    this.setState({
      markdown: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Editor
            markdown={this.state.markdown}
            handleChange={this.handleChange}
          />
          <Previewer markdown={this.state.markdown} />
        </Container>
      </div>
    );
  }
}

export default App;
