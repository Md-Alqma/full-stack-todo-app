import React from "react";
import Todo from "./partials/Todo";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center mt-4">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
      <div
        className=""
        style={{ position: "fixed", right: 50, bottom: 50, zIndex: 999 }}>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-outline-light">
          Add Todo
        </button>
      </div>

      <div className="modal mt-5" id="exampleModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Add new Todo</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="close">
                <span arial-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <textarea
                  name=""
                  className="form-control"
                  rows={3}
                  placeholder="Write todo..."></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button className="btn btn-secondary">Add Todo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
