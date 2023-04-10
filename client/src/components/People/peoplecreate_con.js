import { Box } from "@mui/system";
import Main from "../Main/Main";
const CreatePe = () => {
  return (
    <Main>
      <form>
        <Box 
        sx={{
            boxShadow: 2,
            border: 2,
            borderColor: '#00b0f4',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
             
            },
          }}
        >
        <Box height="1px" sx={{ml:2}}>
    
        ID <br></br> <input type="number"></input>
        
        </Box>

        <Box height="1px" sx={{ml:38}}>
        
        Firstname :<br></br>
        <input type="text"></input>
        <br></br>
        <br></br>
        Lastname :<br></br> <input type="text"></input>
       
        </Box>
        <Box sx={{ml:75}}>
        role :<br></br>
        <input type="text"></input>
        <br></br>
        <br></br>
        email :<br></br> <input type="text"></input>
        <br></br>
        <br></br>
       
        </Box>
    </Box>
      </form>
    </Main>
  );
};
export default CreatePe;
