import React from "react";
import {Box,theme} from "@ursip/design-system";

function Designed({ props }){
  const primary = theme.colors.system.primary
  return (
    <Box width={1/2} bg={'green'} color="white">
      Box     Box
    </Box>
  );
}

export default Designed;