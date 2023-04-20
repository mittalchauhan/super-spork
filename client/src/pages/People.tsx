import React, { useCallback, useEffect, useRef, useState } from "react";
import Main from "../components/Main/Main";
import { getUsers, deleteUser } from "../utils/API/user_API";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Grid from "../components/shared/Grid";

function People(props) {
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [users, setusers] = useState(null);
  const [reload, setReload] = useState(false);

  const [selectedUser, setSelectedUser] = useState([]);
  const usersColumns = [
    { field: "firstname", header: "Firstname", type: "string" },
    { field: "lastname", header: "Lastname", type: "string" },
    { field: "email", header: "Email", type: "string" },
    { field: "role", header: "Role", type: "string" },
    { field: "status", header: "Status", type: "string" },
  ];
  const toast = useRef(null);
  const onselectionchange = (e) => {
    setSelectedUser(e.value);
  };

  const displayWarning = (message) => {
    toast.current.show({
      severity: "warn",
      summary: "Warning",
      detail: message,
      life: 3000,
    });
  };
  const displayError = (message) => {
    toast.current.show({
      severity: "error",
      summary: "Error message",
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

  const deleteSelectedUser = useCallback((selectedUser) => {
    if (selectedUser.length === 0) {
      displayWarning("No Issue Selected");
    } else if (selectedUser.length > 1) {
      displayWarning("only one  Issue can be deleted at a ime");
    } else {
      deleteUser(selectedUser[0]._id).then((data: any) => {
        console.log(data);
        setReload(true);
        if (data.success === true) {
          displaySuccess(
            `Record ${selectedUser[0].firstname} deleted successfully`
          );
        } else {
          displayError(`Error occured ${JSON.stringify(data)}`);
        }
        setTimeout(() => {
          setReload(false);
        }, 0);
      });
    }
  }, []);

  useEffect(() => {
    getUsers().then((data) => {
      setTotalRecords(data.totalRecords);
      setusers(data.data);
      setLoading(false);
      setSelectedUser([]);
    });
  }, [reload]);

  return (
    <Main>
      <Toast ref={toast} position="top-right"></Toast>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>Users</h1>
          </div>
          <div className="offset-6 col-2">
            <Button
              className="btn btn-danger"
              label="Delete User"
              onClick={() => deleteSelectedUser(selectedUser)}
            />
          </div>
        </div>
      </div>
      <Grid
        totalRecords={totalRecords}
        data={users}
        isLoading={loading}
        columns={usersColumns}
        dataKey={"_id"}
        onSelectionChange={onselectionchange}
        selecteditems={selectedUser}
      />
    </Main>
  );
}

export default People;
