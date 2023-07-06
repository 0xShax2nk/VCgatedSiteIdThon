import { Image } from "@chakra-ui/react";


function VcGatedContent() {
  return (
    <div style={{ color: "white" }}>
      <h1>👀 Hola! You are viewing Exclusive Content!</h1>
      <Image
        my={4}
        src="https://media1.giphy.com/media/Sq3tXvzzp51Ic/giphy.gif?cid=ecf05e47sg3xbh47wrn215ce3doicfk0naqeqq8lf30jdu7s&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="privacy meme"
        borderRadius="lg"
      />
    
    </div>
  );
}

export default VcGatedContent;