import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack as="figure" bg="white" color="black" spacing={2} borderRadius="lg">
      <Image src={imageSrc} alt={title} borderTopRadius="lg" />

      <VStack as="figcaption" spacing={2} padding={3} alignItems="start">
        <Heading as="h3" size="sm">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>
    </VStack>
  );
};

export default Card;
