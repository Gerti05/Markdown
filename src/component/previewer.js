import React from "react";
import { Form } from "react-bootstrap";
import marked from "marked";

const Previewer = props => {
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <div className="text-center label mt-4"> Previewer </div>{" "}
          <div
            id="preview"
            className="form-control form"
            dangerouslySetInnerHTML={{
              __html: marked(props.markdown)
            }}
          ></div>{" "}
        </Form.Group>{" "}
      </Form>{" "}
    </div>
  );
};

export default Previewer;
