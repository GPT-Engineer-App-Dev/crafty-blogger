import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, useColorMode, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitcher from "../App.jsx";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  return (
    <Container maxW="container.xl" p={4} bg={bg} color={color}>
      {/* Navigation Bar */}
      <Flex as="nav" bg={bg} p={4} mb={8} justify="space-between" align="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={8}>
          <Link href="#home" fontWeight="bold">Home</Link>
          <Link href="#about" fontWeight="bold">About</Link>
          <Link href="#contact" fontWeight="bold">Contact</Link>
        <ColorModeSwitcher />
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} align="start">
        {/* Blog Posts Section */}
        <Box flex="3" p={4} bg={bg} color={color}>
          <VStack spacing={8} align="start">
            <Box>
              <Heading as="h2" size="md" mb={2}>Blog Post Title 1</Heading>
              <Text fontSize="sm" color="gray.500">Posted on January 1, 2023</Text>
              <Divider my={2} />
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</Text>
            </Box>
            <Box>
              <Heading as="h2" size="md" mb={2}>Blog Post Title 2</Heading>
              <Text fontSize="sm" color="gray.500">Posted on February 1, 2023</Text>
              <Divider my={2} />
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg={bg} color={color} borderRadius="md" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>About Me</Heading>
          <Text mb={4}>Hi, I'm a blogger passionate about sharing my thoughts and experiences with the world. Follow my journey as I explore various topics and ideas.</Text>
          <Heading as="h3" size="md" mb={4}>Categories</Heading>
          <VStack align="start">
            <Link href="#category1">Category 1</Link>
            <Link href="#category2">Category 2</Link>
            <Link href="#category3">Category 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg={bg} p={4} mt={8} textAlign="center" color={color}>
        <Text>&copy; 2023 My Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;