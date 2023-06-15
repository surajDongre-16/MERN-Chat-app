import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <Box>
      <Text
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={600}
      >
        Made with
        <span style={{ margin: "0 5px" }}>
          <FcLike fontSize={"20px"} />
        </span>
        by Suraj Dongre
      </Text>
    </Box>
  );
};

export default Footer;
