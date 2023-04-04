import React from "react";
import Main from "../components/Main/Main";
import Topbar from "../scenes/global/Topbar";
import  {Box} from "@mui/material"
import Header from "../components/Header";
import Bar1 from "../components/Barchart";
import Pie1 from "../components/Piechart";
import Line1 from "../components/Linechart";

const Dashboards = () => {
  return <Main >
      <div className="app">
         <Box m="20px">
           <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="welcome to your dashboard" />
           </Box>
         </Box>

         <Box>
         <Topbar /> 
         </Box>
         
      </div>

    <div className="p2">
     <Box height="100px" sx={{mr:"600px"}} >
      <Pie1/>
      <h5 className="a">user A</h5>
      <h5 className="b">user B</h5>
      <h5 className="c">user C</h5>
      <h5 className="d">user D</h5>
      <h5 className="e">user E</h5>
      <h5 className="f">user F</h5>
      <h5 className="g">user G</h5>
     </Box>

     <Box>
       <div className="p">
         <Box sx={{ml:"500px"}}>
           <Bar1 />
         </Box>
       </div>
    </Box>
  </div>
    <Box>  
      <Line1 /> 
    </Box>
     
        </Main>;
    
};

export default Dashboards;

