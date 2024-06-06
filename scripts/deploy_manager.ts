import { ethers } from "hardhat";

async function main() {
  const NonfungiblePositionManager = await ethers.getContractFactory("NonfungiblePositionManager");
  const manager = await NonfungiblePositionManager.deploy("0x1f88BB455E02646224A0a65f3eb4B2FCb4fb8e49", "0x4200000000000000000000000000000000000006", 
  "0xfD5b032CD2d36F566F832e1E5eD899aFC61017B1");

  await manager.deployed();

  console.log(`deployed to ${manager.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});