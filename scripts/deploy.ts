import { ethers } from "hardhat";

async function main() {
  // const Token = await ethers.getContractFactory("CVIII");
  // const token = await Token.deploy("web3Bridge", "VIII");
  // await token.deployed();
  const Token = await ethers.deployContract("Token",["NAFK","NAF",""]); 
  await Token.waitForDeployment();
  
  console.log(
    `Token contract deployed to ${Token.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
