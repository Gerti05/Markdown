import React from "react";
import { Form, Container } from "react-bootstrap";

class Editor extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Form className="text-center">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <div className="label mt-4">Editor</div>
              <Form.Control
                id="editor"
                value={this.props.markdown}
                onChange={this.props.handleChange}
                as="textarea"
                rows="10"
              />
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Editor;
