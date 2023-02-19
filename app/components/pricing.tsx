import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  StackProps,
  Icon,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { checkIcon } from "./Icons/Icon";

function ListItems(props: StackProps) {
  const { children } = props;
  return (
    <HStack as={"li"} spacing="20px">
      <Icon as={checkIcon} h="22px" w="22px" />
      <Text>{children}</Text>
    </HStack>
  );
}

function Pricing() {
  return (
    <Box m="24px">
      <Box
        my="-9rem"
        mx="auto"
        borderRadius=".5rem"
        maxW="900px"
        overflow="hidden"
        boxShadow={
          " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
      >
        <Flex
          boxShadow="xl"
          flexDirection={{ base: "column", sm: "column", md: "row" }}
        >
          <Box
            p="1.5rem"
            bg="#F0EAFB"
            textAlign={["center"]}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
          >
            <Text fontWeight={"bold"}>Premium PRO</Text>
            <Heading as="h3" fontSize="62px">
              $329
            </Heading>
            <Text mb="10px">build just once</Text>
            <Button width="252px" colorScheme={"purple"} size="lg" mt="24px">
              Get Started
            </Button>
          </Box>
          <Box bg="white" p="40px" fontSize="18px">
            <Text pb="10px">
              Access these features when you get this pricing package for you
              business
            </Text>
            <Stack as="ul" spacing="20px" pt="10px">
              <ListItems>International calling and messaging API</ListItems>
              <ListItems>Additional phone numbers</ListItems>
              <ListItems>Automated messages via Zapier</ListItems>
              <ListItems>24/7 support and consulting</ListItems>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Pricing;
