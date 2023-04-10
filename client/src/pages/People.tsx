import React from "react";
import Main from "../components/Main/Main";
import Datagrid from "../components/Datagrid"
import Header from "../components/Header_People"
import { Box } from "@mui/material";
import Topbar from "../scenes/global/Topbar";
import CreatePeople from "../components/People/CreatePeople";

const People = () => {
  return < Main>
  
    <div className="datagrid_main">
      <div className="people_row1">
          <Box mb="20px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Header title="Employees" subtitle=" Looking for project team details" />
            </Box>
          </Box>
          <Box>
              <Topbar />
          </Box>
      </div>

        <div className="datagrid">
          <Box>
          <Datagrid />
          </Box>
        </div>
      </div>
      <Box>
        <CreatePeople />
      </Box>
      </Main>;
  
};

export default People;
