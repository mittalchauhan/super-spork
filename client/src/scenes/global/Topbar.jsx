import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*search bar */}
      <Box display="flex" borderRadius="3px"  className="icon2">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}

      
    </Box>
  );
};

export default Topbar;
