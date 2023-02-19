import { Flex } from "@chakra-ui/react";
import { FeatureList } from "./Features";
import Header from "./Header";
import Pricing from "./pricing";

function MainPage() {
  return (
    <>
      <Flex height="100vh" direction="column">
        <Header></Header>
        <Pricing></Pricing>
        <FeatureList></FeatureList>
      </Flex>
    </>
  );
}

export default MainPage;
