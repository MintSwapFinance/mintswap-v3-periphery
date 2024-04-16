import { ethers } from "hardhat";

async function main() {
  const NonfungiblePositionManager = await ethers.getContractFactory("NonfungiblePositionManager");
  const manager = await NonfungiblePositionManager.deploy("0x80126d780AE1595f7b934449DD0B32664082fe08", "0x4200000000000000000000000000000000000006", 
  "0xAeE4Ee6c30276c09078074a2479709e0F9E6e773");

  await manager.deployed();

  console.log(`deployed to ${manager.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});