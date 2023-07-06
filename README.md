### VCgatedSiteIdThon
Frontend for interacting with VC verifier

---

This Repo is part of solution for PolygonIdThon Challenge-2 and inspired by template made by [@oceans404](https://github.com/oceans404/vc-gated-website)

 &bull; In order to see the gated part of the website, you need a KYCAgeCredential Verifiable Credential with a birthday after January 1, 2005, held in the Polygon ID Mobile wallet app.
 
 &bull; Checkout [guide](https://www.notion.so/oceans404/How-to-get-a-KYCAgeCredential-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4) on PolygonId wallet installation and getting Verifiable credentials in wallet.


 ## How to run locally

 ### 1. Follow Verifier server setup instructions

 Read through the server readme and follow local server setup instructions : [here](https://github.com/0xShax2nk/VCverifierIdThon#readme)

 ### 2. Clone Repo locally and install dependencies

 ```
      git clone https://github.com/0xShax2nk/VCgatedSiteIdThon
      cd VCgatedSiteIdThon
      npm i
```

### 3. Create a .env file

```
REACT_APP_VERIFICATION_SERVER_URL="http://localhost:3000"
```

Set REACT_APP_VERIFICATION_SERVER_URL="http://localhost:3000" because that's where the you are running the server locally. Don't set REACT_APP_VERIFICATION_SERVER_URL to your ngrok forwarding address or you'll face CORS errors.

### 4. Start the frontend

```
npm start
```

Visit [http://localhost:8080/](http://localhost:8080/)






This is how the frontend user interface looks like where a user can interact with using the PolygonId wallet app.

![](https://i.ibb.co/5KGgS1T/UI.png)

On clicking Prove access rights you will be provided a QR code which you can scan through your PolygonId wallet app. 

![](https://i.postimg.cc/prfdWsys/Scanner.png)

Once you scan the QR code using the PolygonId wallet app it will start generating the proof for verifying the requested information.

![](https://i.ibb.co/6gF3cJb/secrete.png)

After finishing the authentication and generating proof for the requested information it will give you access to the restricted content.

![](https://i.postimg.cc/6qJ3xk67/Screenshot-10.png)

