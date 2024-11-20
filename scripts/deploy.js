async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with account:", deployer.address);

    const MyToken = await ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy(1000000); // Initial supply of 1,000,000

    console.log("Token deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });