import React, { useCallback, useEffect, useRef, useState } from "react";
import Main from "../components/Main/Main";
// import Grid from '../People/gridq'
// import Datagrid from "../components/Datagrid";
// import Header from "../components/Header_People";
// import { Box } from "@mui/material";
// import Topbar from "../scenes/global/Topbar";
// import CreatePe from "../components/People/peoplecreate_con";
import Grid from '../people/grid';
import { getUsers, deleteUser } from "../utils/API/user_API";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";


// const People = () => {
//   return (
//     <Main>
//       <div className="datagrid_main">
//         <div className="people_row1">
//           <Box mb="20px">
//             <Box
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <Header
//                 title="Users"
//                 subtitle=" Looking for project team details"
//               />
//             </Box>
//           </Box>
//           <Box>
//             <Topbar />
//           </Box>
//         </div>

//         <div className="datagrid">
//           <Box>
//             <CreatePe />
//           </Box>
//           <Box>
//             <Datagrid />
//           </Box>
//         </div>
//       </div>
//     </Main>
//   );
// };

 
function People(props) {
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [users , setusers] = useState(null);
  const [isUserOpen, setUserOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedissues, setSelectedissues] = useState(null);
  const [reload, setReload] = useState(false);
  const [lazyState, setlazyState] = useState({
      first: 0,
      rows: 10,
      page: 1,
      sortField: null,
      sortOrder: null,
    
  });
  const [selectedUser, setSelectedUser] = useState([]);
  const usersColumns=[
    { field: "firstname", header: "Firstname", type: "string" },
    { field: "lastname", header: "Lastname", type: "string" },
    { field: "email", header: "Email", type: "string" },
    { field: "role", header: "Role", type: "string" },
    { field: "status", header: "Status", type: "string" },
  ]
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
      deleteUser(selectedUser[0]._id).then((data) => {
        setReload(true);
        displaySuccess(
          `Record ${selectedUser[0].summary} deleted successfully`
        );
      });

      setTimeout(() => {
        setReload(false);
      }, 0);
    }
  }, []);
  

  useEffect(() => {
          getUsers().then((data) => {
              setTotalRecords(data.totalRecords);
              setusers(data.data);
              setLoading(false);
              setSelectedUser([]);
          });
    
  },[isUserOpen, reload]);

  return (
    <Main>
       <Toast ref={toast} position="top-right"></Toast>
      <div className="grid">
        <div className="col-md-4">
        <div>
          <h1>Users</h1></div>
          </div>
          </div>
          <div className="offset-4 col-2">
            <Button
              className="btn btn-danger"
              label="Delete User"
              onClick={() => deleteSelectedUser(selectedUser)}
            />
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
  )
}

export default People;