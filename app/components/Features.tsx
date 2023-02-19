import { Box, Icon, Text, HStack, Flex } from "@chakra-ui/react";
import { Guaranteed, hassleFree, subscription } from "./Icons/Icon";
import React from "react";

export function Feature(props: any) {
  const { icon, children } = props;
  return (
    <HStack as="li" spacing={"6"} pt={{ base: "1rem" }} ml={{ base: "2rem" }}>
      <Icon as={icon} boxSize="48px" />
      <Text fontSize={"15px"} fontWeight="700" marginLeft={1}>
        {children}
      </Text>
    </HStack>
  );
}

export function FeatureList(props: any) {
  return (
    <Flex
      mt="8rem"
      mb="2rem"
      mx="auto"
      justifyContent={["unset", "unset", "space-between"]}
      alignItems={{
        base: "flex-start",
        sm: "flex-start",
        md: "flex-start",
        lg: "center",
      }}
      flexDirection={{ base: "column", sm: "row", md: "row", lg: "row" }}
    >
      <Feature icon={Guaranteed}>30 days money back Guarantee</Feature>
      <Feature icon={hassleFree}>No setup fees 100% hassle-free</Feature>
      <Feature icon={subscription}>
        No monthly subscription Pay once and for all
      </Feature>
    </Flex>
  );
}
