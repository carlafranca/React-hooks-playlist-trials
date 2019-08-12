import React from "react";

const Error = props => {
  // console.log(props.location);
  const { state } = props.location;

  return (
    <div>
      <h1>Oops, something went wrong :(</h1>
      <p>{state.error}</p>
      {/* <p>Where it occured: {this.state.info.componentStack}</p> */}
    </div>
  );
};

export default Error;
