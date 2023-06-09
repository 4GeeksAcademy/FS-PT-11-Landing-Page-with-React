import React from "react";

export const Jumbotron = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container pt-5 pb-5">
        <h1 className="display-1">A Warm Welcome</h1>
        <p className="mt-3 mb-3">
          The key of this project is to help you understand how to pick the
          components that you want to build, you have to think the best way to
          organize and avoid future errors. What can be re-used? If your code is
          tuning into something big and hard to understand you probably will
          need to split it into components:
        </p>
        <a href="#" className="btn btn-primary">
          Call to action
        </a>
      </div>
    </div>
  );
};
