import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
// import Grid from '../People/gridq'
// import Datagrid from "../components/Datagrid";
// import Header from "../components/Header_People";
// import { Box } from "@mui/material";
// import Topbar from "../scenes/global/Topbar";
// import CreatePe from "../components/People/peoplecreate_con";
import Grid from '../people/grid';
import { getUsers } from "../utils/API/user_API";


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
  const [selectAll, setSelectAll] = useState(false);
  const [selectedissues, setSelectedissues] = useState(null);
  const [lazyState, setlazyState] = useState({
      first: 0,
      rows: 10,
      page: 1,
      sortField: null,
      sortOrder: null,
    
  });

  const usersColumns=[
    { field: "firstname", header: "Firstname", type: "string" },
    { field: "lastname", header: "Lastname", type: "string" },
    { field: "email", header: "Email", type: "string" },
    { field: "role", header: "Role", type: "string" },
    { field: "status", header: "Status", type: "string" },
  ]

  

  useEffect(() => {
          getUsers().then((data) => {
              setTotalRecords(data.totalRecords);
              setusers(data.data);
              setLoading(false);
          });
    
  },[]);
  return (
    <Main>
      <div className="grid">
        <div className="col-md-4">
        <div>
          <h1>Users</h1></div>
          </div>
          </div>
        <Grid 
         totalRecords={totalRecords}
         data={users}
         isLoading={loading}
         columns={usersColumns}/>

    </Main>
  )
}

export default People;