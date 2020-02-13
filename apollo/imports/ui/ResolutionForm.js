import React from "react";
import { render } from "react-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

//first cR is name of query
//second cR is name of mutation
//third cR is the mutation we use from the schema
//_id is what we return from createResolution
const createResolution = gql`
  mutation createResolution {
    createResolution {
      _id
    }
  }
`;

class ResolutionForm extends React.Component {
  submitForm = e => {
    console.log(this.name.value);
    this.props.createResolution();
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" ref={input => (this.name = input)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default graphql(createResolution, {
  name: "createResolution"
})(ResolutionForm);
