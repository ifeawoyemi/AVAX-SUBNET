import { ethers } from "hardhat";

async function main() {

  //deploy GameToken
  const VaultToken = await ethers.deployContract("VaultToken");
  await VaultToken.waitForDeployment();
  console.log(`VaultToken  deployed to ${VaultToken.target}`);


  //deploy Vault
  const Vault = await ethers.deployContract("Vault");
  await Vault.waitForDeployment();
  console.log(`Vault deployed to ${Vault.target}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
