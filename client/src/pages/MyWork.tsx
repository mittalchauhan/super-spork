import React from "react";
import { connect } from "react-redux";
import Main from "../components/Main/Main";
import { AppState } from "../redux";

function MyWork() {
  return (
    <Main>
      <div className="container">
        <div className="row">
          <h1>My work</h1>
        </div>
      </div>
    </Main>
  );
}

const mapStateToProps = (state: AppState) => ({
  currentUser: state.auth.user,
});

export default connect(mapStateToProps)(MyWork);
