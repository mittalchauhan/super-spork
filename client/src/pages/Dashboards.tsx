import React from "react";
import Main from "../components/Main/Main";
import Topbar from "../scenes/global/Topbar";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Bar1 from "../components/Barchart";
import Pie1 from "../components/Piechart";
import Line1 from "../components/Linechart";

const Dashboards = () => {
  return (
    <Main>
    <>
      <div className="dashboard">
        <div className="dashboard_row1">
          <Box m="20px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Header title="DASHBOARD" subtitle="welcome to your dashboard" />
            </Box>
          </Box>

          <Box>
            <Topbar />
          </Box>
        </div>

        <div className="pie_bar_row">
           <div className="piechart">
          <Box height="100px" sx={{ mr: "500px" }}>
            <Pie1 />
            <br></br>
            <h5 className="usera">Developer</h5>
            <h5 className="userb">Leader</h5>
            <h5 className="userc">Programmer</h5>
            <h5 className="userd">Tester</h5>
            <h5 className="usere">Manager</h5>
            <h5 className="userf">Specialist</h5>
            <h5 className="userg">Analyst</h5>
          </Box>
          </div>
          <Box>
            <div className="barchart">
              <Box sx={{ ml: "420px" }}>
                <Bar1 />
              </Box>
            </div>
          </Box>
        </div>
        <Box>
          <Line1 />
        </Box>
      </div>
    </>
    </Main>
  );
};

export default Dashboards;
