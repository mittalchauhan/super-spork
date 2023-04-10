import React from "react";
import Main from "../components/Main/Main";
import TransferList from "../scenes/global/Yourwork";
import { Box } from "@mui/system";
import TransferList2 from "../scenes/global/Yourwork 2";
import FloatingActionButtonZoom from "../scenes/global/Yourwork3";
import FloatingActionButtonZoom1 from "../scenes/global/Yourwork4";
import FloatingActionButtonZoom2 from "../scenes/global/Yourwork5";
import FloatingActionButtonZoom3 from "../scenes/global/Yourwork6";

const YourWork = () => {
  return (
    <Main>
    <div className="yourwork3">
      <Box height="1px">
        <FloatingActionButtonZoom />
      </Box>
      <Box height="1px" sx={{ ml: 34 }}>
        <FloatingActionButtonZoom1 />
      </Box>
      <Box height="1px" sx={{ ml: 68 }}>
        <FloatingActionButtonZoom2 />
      </Box>
      <Box sx={{ ml: 102 }}>
        <FloatingActionButtonZoom3 />
      </Box>
    </div>
      <div className="yourwork1">
        <div className="yourwork">
          <Box height="20px" width="500px" >
            <TransferList />
          </Box>
        </div>

        <div className="yourwork2">
          <Box height="100px" width="500px">
            <TransferList2 />
          </Box>
        </div>
      </div>
    </Main>
  );
};

export default YourWork;
