import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import Footer from "../components/Footer";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/chats");
    }
  }, [navigate]);

  return (
    <Box
      display="flex"
      flexDir={"column"}
      w={"100%"}
      justifyContent={"space-between"}
    >
      <Container maxW="xl" centerContent>
        <Box
          display="flex"
          justifyContent={"center"}
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius={"lg"}
          borderWidth={"1px"}
        >
          <Text
            textAlign={"center"}
            fontSize={"4xl"}
            fontFamily={"Work sans"}
            color={"black"}
          >
            Chit-Chat
          </Text>
        </Box>
        <Box
          p={4}
          bg={"white"}
          borderRadius={"lg"}
          borderWidth={"1px"}
          w="100%"
        >
          <Tabs variant="soft-rounded">
            <TabList mb="1em">
              <Tab width={"50%"}>Login</Tab>
              <Tab width={"50%"}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Homepage;
