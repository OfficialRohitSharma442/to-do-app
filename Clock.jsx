import React from "react";
import ThemedDigitalClock from "themed-digital-clock";
const Clock = () => {
  return (
    <React.Fragment>
      <ThemedDigitalClock
        style={{textAlign:"-webkit-center"}}
        timezoneName="(GMT+5:30)/India Standard Time"
        useDarkTheme={true}
                 size={200}
                 
      />
    </React.Fragment>
  );
};
export default Clock;
