import React, { useState } from "react";
import "./IncrimentDec.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
const IncrimentDec = () => {
  const number = 0;
  const [num, setNum] = useState(number);
  const IncrimentHandeler = () => {
    setNum(num + 1);
  };
  const DecrimentHandeler = () => {
    setNum(num > 0 ? num - 1 : num & alert("value is Already zero"));
  };
  return (
    <React.Fragment>
      <div className="maindiv">
        <div className="centerdiv">
          <h1>{num}</h1>
          <div className="button_div">
            <Tooltip title="Add">
              <Button
                onClick={IncrimentHandeler}
                variant="contained"
                
              >
                <ArrowUpwardIcon />
              </Button>
                           </Tooltip>
                           <Tooltip title="Delete">
            <Button
              onClick={DecrimentHandeler}
              variant="contained"
              
            >
              <ArrowDownwardIcon />
                                </Button>
                                </Tooltip>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default IncrimentDec;
