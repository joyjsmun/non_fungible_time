// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract timeNft is ERC721, Ownable {
    struct NFT {
        uint256 price;
        uint256 maxSupply;
        uint256 mintedCount;
    }

    mapping(uint256 => NFT) public nfts;

    constructor(uint256 initialPrice, uint256 initialMaxSupply) ERC721("Time NFT", "TNFT") {
        // Set the initial price and max supply for the NFTs
        nfts[0].price = initialPrice;
        nfts[0].maxSupply = initialMaxSupply;
    }

    function mint(uint256 tokenId) external onlyOwner {
        require(!_exists(tokenId), "Token ID already minted");

        nfts[tokenId].mintedCount++;

        _safeMint(msg.sender, tokenId);
    }

    function setPrice(uint256 tokenId, uint256 price) external onlyOwner {
        require(_exists(tokenId), "Token ID does not exist");
        nfts[tokenId].price = price;
    }

    function setMaxSupply(uint256 tokenId, uint256 maxSupply) external onlyOwner {
        require(_exists(tokenId), "Token ID does not exist");
        nfts[tokenId].maxSupply = maxSupply;
    }
}
