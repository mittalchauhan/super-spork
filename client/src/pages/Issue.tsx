import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";

import Grid from "../components/Issue/Grid";
import Main from "../components/Main/Main";

import CreateIssueModal from "../components/Issue/CreateModal";
import { getIssues, deleteIssue } from "../utils/API/issue_API";
import { Toast } from "primereact/toast";
import { selectClasses } from "@mui/material";

function Issue(props) {
  const { currentUser } = props;
  const [isIssueOpen, setIssueOpen] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState([]);
  const issueColumns = [
    { field: "description", header: "Description", type: "string" },
    { field: "projectId.name", header: "Project", type: "string" },
    { field: "creatorId.firstname", header: "Created By", type: "string" },
    { field: "issueTypeId.label", header: "Issue type", type: "string" },
    { field: "priorityId.label", header: "Priority", type: "string" },
    { field: "createdat", header: "Created on", type: "date" },
  ];
  const toast = useRef(null);
  const onselectionchange = (e) => {
    setSelectedIssue(e.value);
  };

  const displayWarning = (message) => {
    toast.current.show({
      severity: "warn",
      summary: "Warning",
      detail: message,
      life: 3000,
    });
  };
  const displaySuccess = (message) => {
    toast.current.show({
      severity: "success",
      summary: "Successfully Done",
      detail: message,
      life: 3000,
    });
  };
  const deleteSelectedIssue = () => {
    if (selectedIssue.length === 0) {
      displayWarning("No Issue Selected");
    }
    if (selectedIssue.length > 1) {
      displayWarning("only one  Issue can be deleted at a ime");
    } else {
      deleteIssue(selectedIssue[0]._id).then((data) => {
        displaySuccess(`Record ${selectedIssue[0].label} deleted successfully`);
      });
    }
  };

  useEffect(() => {
    getIssues().then((data) => {
      setTotalRecords(data.totalRecords);
      setIssues(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <Main>
      <Toast ref={toast} position="top-right"></Toast>
      {isIssueOpen && (
        <CreateIssueModal
          isOpen={isIssueOpen}
          handleClose={() => setIssueOpen(false)}
          currentUser={currentUser}
        />
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>Issues</h1>
          </div>
          <div className="offset-4 col-2">
            <Button
              className="btn btn-danger"
              label="Delete issue"
              onClick={() => deleteSelectedIssue()}
            />
          </div>
          <div className=" col-2">
            <Button
              className="btn btn-primary"
              label="create new issue"
              onClick={() => setIssueOpen(true)}
            />
          </div>
        </div>
      </div>
      <Grid
        totalRecords={totalRecords}
        data={issues}
        isLoading={loading}
        columns={issueColumns}
        dataKey={"_id"}
        onSelectionChange={onselectionchange}
        selecteditems={selectedIssue}
      />
    </Main>
  );
}

export default Issue;
