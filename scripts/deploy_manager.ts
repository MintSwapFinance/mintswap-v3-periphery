import { ethers } from "hardhat";

async function main() {
  const NonfungiblePositionManager = await ethers.getContractFactory("NonfungiblePositionManager");
  const manager = await NonfungiblePositionManager.deploy("0xB6C8B971650d96BD58c9Ba16DcFe685Bc1472e82", "0x4200000000000000000000000000000000000006", 
  "0xeA397955CC97F4DE4f44a31839b4E9B7f2d04803");

  await manager.deployed();

  console.log(`deployed to ${manager.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});