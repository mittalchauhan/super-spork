import { Typography,Box } from "@mui/material";

const Header=({title,subtitle})=>{
    return<Box mt="30px" >
        <Typography variant="h2" color="green" fontWeight="bold" sx={{mb:"5px"}}>
            {title}
        </Typography>
        <Typography variant="h5" color="GrayText" >
         {subtitle}
        </Typography>
    </Box>
};

export default Header;

