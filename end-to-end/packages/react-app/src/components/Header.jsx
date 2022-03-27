import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/mukurgupta/NFT-Minting-dApp-with-Neural-Style-Transfer" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="NFT Minting dApp with Neural Style Transfer"
        subTitle="join us at nftschool.dev"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
