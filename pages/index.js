import styles from "../styles/Home.module.css";
import { Center, Box, SimpleGrid, Image } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
const images = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg",
  "photo8.jpg",
];
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Center bg="purple.800" h="100vh" flexDirection="column">
      <Image
        src={"assets/" + images[currentImage]}
        h="250px"
        mb="16px"
        border="2px solid white"
      />
      <SimpleGrid columns={[2,3,4]} spacing="10px">
        {images.map((el, index) => {
          const elem = "assets/" + el;
          const isCurrent = currentImage === index;
          return (
            <Image
              cursor="pointer"
              src={elem}
              border={isCurrent ? "2px solid white" : "none"}
              boxSize="130px"
              onClick={() => setCurrentImage(index)}
            />
          );
        })}
      </SimpleGrid>
    </Center>
  );
}
