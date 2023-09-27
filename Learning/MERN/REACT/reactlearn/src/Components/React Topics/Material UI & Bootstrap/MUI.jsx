import React, { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Typography from '@mui/material/Typography';
import Tooltip from "@mui/material/Tooltip";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";

const MUI = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(0);
      alert("You can go beyond 0 or negative values...");
    }
  };

  return (
    // In Container we can had <Container>, <Container fixed>
    <Container maxWidth="sm">
      <Box
        // sx={{
        //   width: "50%",
        //   height: "70vh",
        //   marginTop: '100px',
        //   marginLeft: '25%',
        //   backgroundColor: "primary.dark",
        //   "&:hover": {
        //     backgroundColor: "primary.main",
        //     opacity: [0.9, 0.8, 0.7],
        //   },
        // }}

        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        {/* <h1 className="C8_main_heading">{number}</h1> */}
        <Typography variant="h2">{number}</Typography>

        <div className="C8_button_div">
          <Tooltip title="Increase By 1">
            <button onClick={increase}>
              <AddCircleOutlineIcon />
            </button>
          </Tooltip>
          <Tooltip title="Decrease By 1">
            <button onClick={decrease}>
              <RemoveIcon />
            </button>
          </Tooltip>
        </div>
      </Box>
    </Container>
  );
};

export default MUI;
