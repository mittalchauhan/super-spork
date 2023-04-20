import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '../Datagrid.ts';
// import { Container } from 'semantic-ui-react';
// import { alignProperty } from '@mui/material/styles/cssUtils';
import { useEffect, useState } from 'react';
import { getIssues } from '../utils/API/issue_API';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// const columns: GridColDef[] = [
  
//   {
//      field: 'id',
//       headerName: 'ID', 
//       width: 90,
//       headerClassName: 'super-app-theme--header',
      
//   },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//     headerClassName: 'super-app-theme--header',
    
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//     headerClassName: 'super-app-theme--header',
    
//   },
//   {
//     field: 'role',
//     headerName: 'role',
//     width: 150,
//     editable: true,
//     headerClassName: 'super-app-theme--header',
    
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//       headerClassName: 'super-app-theme--header',
      
//   },
//   {
//     field: 'email',
//     headerName: 'email',
//     width: 200,
//     editable: true,
//     headerClassName: 'super-app-theme--header',
    
//   },
//   {
//     field: 'status',
//     headerName: 'status',
//     width: 155,
//     editable: true,
//     headerClassName: 'super-app-theme--header',
    
   
//   },

// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', role: 'Developer' ,email:'snw334@gmail.com',status:'active'},
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', role: 'Leader',email:'Lan5567@gmail.com',status:'active' },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', role: ' Programmer' ,email:'lk5563@gmail.com',status:'inactive'},
//   { id: 4, lastName: 'Stark', firstName: 'Arya', role: 'Tester' ,email:'tes4432@gmail.com',status:'active'},
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', role: 'Manager',email:'Dabh6688@gmail.com',status:'active'},
//   { id: 6, lastName: 'Melisandre', firstName: 'joy', role: 'Specialist',email:'jj665@gmail.com',status:'active' },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', role: 'Analyst',email:'feb5421@gmail.com',status:'inactive'}
 
// ];

// export default function DataGridDemo() {
//   return (
//     <Container>
//     <Box
//      sx={{ height: 400, width: '100%',
//       '& .super-app-theme--header': {
//       backgroundColor: ' ',
//       fontSize:14,
//     },
//     }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick

//         sx={{
//           boxShadow: 2,
//           border: 2,
//           borderColor: 'primary.light',
//           '& .MuiDataGrid-cell:hover': {
//             color: 'primary.main',
           
//           },
//         }}
//       />
      
//     </Box>
//     </Container>
//   );
// }
export default function Grid() {
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [issues, setissues] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedissues, setSelectedissues] = useState(null);
  const [lazyState, setlazyState] = useState({
      first: 0,
      rows: 10,
      page: 1,
      sortField: null,
      sortOrder: null,
    
  });


  useEffect(() => {
      loadLazyData();
  }, [lazyState]);

  const loadLazyData = () => {
      setLoading(true);
          getIssues().then((data) => {
              setTotalRecords(data.totalRecords);
              setissues(data.data);
              setLoading(false);
          });
    
  };
  const dateTemplate=(rowData, column) =>{
   return new Date (rowData['createdAt']).toLocaleDateString();
}

  const onPage = (event) => {
      setlazyState(event);
  };



  return (
      <div className="card">
          <DataTable value={issues} lazy filterDisplay="row" dataKey="id" paginator
                  first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                   sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
                   loading={loading} tableStyle={{ minWidth: '75rem' }}
                  selection={selectedissues}  selectAll={selectAll} >
              <Column field="summary" header="Summary"   filterPlaceholder="Search" />
              <Column field="description"  header="Description"  />
              <Column field="projectId.name"   header="Project" />
              <Column field="creatorId.firstname" header="Created By"   />
              <Column field="issueTypeId.label" header="Issue type"   />
              <Column field="priorityId.label" header="Priority"   />
              <Column field="createdat" body={dateTemplate} header="created on"  />
          </DataTable>
      </div>
  );
}
       