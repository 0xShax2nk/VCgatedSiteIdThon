import "./App.css";
import { useState } from "react";
import PolygonIDVerifier from "./PolygonIDVerifier";
import VcGatedContent from "./VcGatedContent";
import { Center, Card, Image, CardBody, Container } from "@chakra-ui/react";

function App() {
  const [provedAccessBirthday, setProvedAccessBirthday] = useState(false);
  return (
    <Center className="App">
      <Container>
        {provedAccessBirthday ? (
          <VcGatedContent />
        ) : (
          <Card
            style={{
              border: "2px solid #805AD5",
              background: "black",
              color: "white",
            }}
          >
            <CardBody style={{ paddingBottom: 0 }}>
              <p>
                This is a VC{" "}
                <a href="https://0xpolygonid.github.io/tutorials/#core-concepts-of-polygon-id-verifiable-credentials-identity-holder-issuer-and-verifier-triangle-of-trust">
                  (Verifiable Credential)
                </a>{" "}
                gated page.
              </p>
              <h2>Prove you above 18 to view Secrete Content</h2>

              <PolygonIDVerifier
                // server code: https://github.com/oceans404/vc-verifier
                serverURL={process.env.REACT_APP_VERIFICATION_SERVER_URL}
                credentialType={"KYCAgeCredential"}
                issuerLink={
                  "https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4"
                }
                onVerificationResult={setProvedAccessBirthday}
              />
              <Image
                src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1688466187~exp=1688466787~hmac=eddc2c3f64e8c859130a179ebe148a497e1357a43582cf06ebc9a7b483b017de"
                alt="image"
                borderRadius="lg"
              />
            </CardBody>
            <a
              href="https://twitter.com/Shashanks__07"
              target="_blank"
              rel="noreferrer"
            >
              <p
                style={{
                  position: "absolute",
                  bottom: "-15px",
                  right: "0",
                  fontSize: "8px",
                }}
              >
                Built with 💜 by 0xShax2nk
              </p>
            </a>
          </Card>
        )}
      </Container>
    </Center>
  );
}

export default App;
