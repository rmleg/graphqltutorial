import React from "react";
import { render } from "react-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import ResolutionForm from "./ResolutionForm";

const App = ({ data }) => {
  if (data.loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h1>{data.hi}</h1>
        <ResolutionForm />
        <ul>
          {data.resolutions.map(resolution => (
            <li key={resolution._id}>
              {resolution.name} {resolution.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
      title
    }
  }
`;

export default graphql(hiQuery)(App);
