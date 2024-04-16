import { ethers } from "hardhat";

async function main() {
  const Library = await ethers.getContractFactory("NFTDescriptor");
  const library = await Library.deploy();
  await library.deployed();

  const Pd = await ethers.getContractFactory("NonfungibleTokenPositionDescriptor",{
    libraries: {
        NFTDescriptor: library.address
    }
  });

  const pd = await Pd.deploy('0x4200000000000000000000000000000000000006','0x4554480000000000000000000000000000000000000000000000000000000000');
  await pd.deployed();

  console.log(`deployed to ${pd.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});