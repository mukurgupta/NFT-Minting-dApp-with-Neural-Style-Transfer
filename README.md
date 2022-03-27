# Neural Styled NFT Minter
## NFT Minting DdApp with Neural Style Transfer


Neural Styled NFT Minter can generate and deploy NFTs using Deep Learning based Neural Style Transfer to enable computer generated creative art pieces


## How to run the Code 

### Dependencies
- Frontend: [node.js](https://nodejs.org/en/), [yarn](https://yarnpkg.com/)
- Backend: Python libraries:
    ``` 
    tensorflow
    tensorflow_hub
    flask
    flask_cors
    Pillow
    ```
- Other services used: [NFT.STORAGE](https://nft.storage/), [InterPlanetary File System](https://ipfs.io/), [hardhat](https://hardhat.org/), 

### Running the dApp
- Install the dependencies
- Get the API key from [NFT.STORAGE](https://nft.storage/) and store that in end-to-end/packages/react-app/src/constants.js
- Download the Neural Style Transfer Model from [TensorFlow Hub](https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256) and add the path to local directory in neural_style_transfer_api.py
- Run the backend flask API
    ```
    cd <path-to-NFT-Minting-dApp-with-Neural-Style-Transfer>
    python neural_style_transfer_api.py
    ```

- Install Frontend modules using npm:

    ``` 
    cd end-to-end
    yarn install
    ```

- Start local hardhat devnet:

    ``` 
    yarn chain
    ```
- Open different terminal to deploy the smart contract:

    ``` 
    yarn deploy
    ```
- After smart contract deployment, run the UI:

    ``` 
    yarn start
    ```  


### Usage
- Add ethers to the dummy account by clicking on "Grab Funds from the Faucet" on the UI.
- Add the content and the style image.
- Add NFT name and click on "Mint" button to add the generated image to IPFS and store IPFS URI on devnet. Note the token ID.
- Use the token ID to view the generated NFT in the "View an NFT" tab.


## References
- [InterPlanetary File System](https://ipfs.io/)
- [NFT.STORAGE](https://nft.storage/)
- [scaffold-eth](https://github.com/scaffold-eth/scaffold-eth)
- [web3js](https://web3js.readthedocs.io/en/v1.7.1/)
- [Neural Style Transfer](https://arxiv.org/pdf/1508.06576.pdf)
