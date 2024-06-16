import { Container, Text, VStack, Box, Flex, Heading, Button, Image, Badge, HStack } from "@chakra-ui/react";
import { FaSearch, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" py={4}>
        <Text fontSize="2xl" fontWeight="bold">COMVIQ</Text>
        <HStack spacing={8}>
          <Text>Mobiler</Text>
          <Text>Mobilabonnemang</Text>
          <Text>Kontantkort</Text>
          <Text>Bredband</Text>
          <Text>Smartwatch</Text>
          <Text>Hjälp</Text>
        </HStack>
        <HStack spacing={4}>
          <FaSearch />
          <FaUser />
          <Button bg="pink.500" color="white">Tanka</Button>
        </HStack>
      </Flex>

      {/* Main Banner */}
      <Flex bg="pink.500" color="white" p={8} align="center">
        <Box flex="1">
          <Badge colorScheme="yellow" mb={4}>Spara upp till 1 200 kr</Badge>
          <Heading mb={4}>Säkra sommarsurfen</Heading>
          <Text mb={4}>Skaffa stort abonnemang till litet pris! Från 195 kr/mån för 20 GB surf.</Text>
          <Button bg="white" color="pink.500">Skaffa nu</Button>
        </Box>
        <Box flex="1">
          <Image src="/images/surfing-person.jpg" alt="Person surfing on sand" />
        </Box>
      </Flex>

      {/* Product Section */}
      <Box py={8}>
        <Heading mb={8}>Skaffa mobil med 5G-abonnemang</Heading>
        <Flex justify="space-between">
          {/* Card 1 */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} flex="1" mx={2}>
            <Badge colorScheme="yellow" mb={2}>Månadens mobil</Badge>
            <Image src="/images/samsung-galaxy-s23.jpg" alt="Samsung Galaxy S23" mb={4} />
            <Text mb={2}>40 GB till priset av 10 GB</Text>
            <Heading size="md" mb={2}>Samsung Galaxy S23</Heading>
            <Text fontSize="xl" fontWeight="bold" mb={2}>329 kr/mån</Text>
            <Text>Med mobilabonnemang</Text>
          </Box>

          {/* Card 2 */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} flex="1" mx={2}>
            <Image src="/images/apple-iphone-15.jpg" alt="Apple iPhone 15" mb={4} />
            <Text mb={2}>40 GB till priset av 10 GB</Text>
            <Heading size="md" mb={2}>Apple iPhone 15</Heading>
            <Text fontSize="xl" fontWeight="bold" mb={2}>419 kr/mån</Text>
            <Text>Med mobilabonnemang</Text>
          </Box>

          {/* Card 3 */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} flex="1" mx={2}>
            <Badge colorScheme="yellow" mb={2}>Hörlurar på köpet</Badge>
            <Image src="/images/samsung-galaxy-s24.jpg" alt="Samsung Galaxy S24 with earbuds" mb={4} />
            <Text mb={2}>40 GB till priset av 10 GB</Text>
            <Heading size="md" mb={2}>Samsung Galaxy S24</Heading>
            <Text fontSize="xl" fontWeight="bold" mb={2}>399 kr/mån</Text>
            <Text>Med mobilabonnemang</Text>
          </Box>

          {/* Card 4 */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} flex="1" mx={2}>
            <Image src="/images/apple-iphone-15-pro-max.jpg" alt="Apple iPhone 15 Pro Max" mb={4} />
            <Text mb={2}>40 GB till priset av 10 GB</Text>
            <Heading size="md" mb={2}>Apple iPhone 15 Pro Max</Heading>
            <Text fontSize="xl" fontWeight="bold" mb={2}>599 kr/mån</Text>
            <Text>Med mobilabonnemang</Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;