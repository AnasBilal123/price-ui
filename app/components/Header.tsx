import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      bg="purple.600"
      pt="90px"
      pb="198px"
      px=".5rem"
      display="flex"
      alignItems={["flex-start", "center"]}
      justifyContent={["flex-start", "space-between"]}
      flexDirection="column"
      color={"gray.50"}
    >
      <Heading
        fontWeight={"extrabold"}
        fontSize={["3xl", "3xl", "5xl"]}
        color="white"
        mb="2"
      >
        Simple pricing for your business
      </Heading>
      <Text color="white" fontSize={["lg", "lg", "2xl"]}>
        Plans are carefully crafted to suit your business
      </Text>
    </Box>
  );
}

export default Header;
