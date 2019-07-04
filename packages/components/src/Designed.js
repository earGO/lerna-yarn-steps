import React from "react";
import {Box,theme} from "@ursip/design-system";

function Designed({ props }){
  console.log(theme.colors.system.primary)
  const primary = theme.colors.system.primary
  return (
    <Box width={1/2} bg={"primary"} color="white">
      Box
    </Box>
  );
}

export default Designed;