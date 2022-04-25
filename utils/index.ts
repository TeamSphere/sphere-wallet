// Import any additional classes and/or functions needed from Solana's web3.js library as you go along:
import { Cluster, Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
import { message } from "antd";

let LAMPORTS_PER_SOL = 1000000000;
// *Step 3*: implement a function that gets an account's balance
const refreshBalance = async (network: Cluster | undefined, account: Keypair | null) => {
  // This line ensures the function returns before running if no account has been set
  if (!account) return 0;

  try {
    // (a) review the import guidance on line 1
    // (b) instantiate a connection using clusterApiUrl with the active network passed in as an argument
    // Documentation References:
    //   https://solana-labs.github.io/solana-web3.js/classes/Connection.html
    //   https://solana-labs.github.io/solana-web3.js/modules.html#clusterApiUrl
    const connection = new Connection(clusterApiUrl(network), "confirmed");
    const publicKey = account.publicKey;
    const balance = await connection.getBalance(publicKey);
    return balance / LAMPORTS_PER_SOL;
    // (e) You can now delete the console.log statement since the function is implemented!
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown Error";
    message.error(`Balance refresh failed: ${errorMessage}`);
    return 0;
  }
};

// *Step 4*: implement a function that airdrops SOL into devnet account
const handleAirdrop = async (network: Cluster, account: Keypair | null) => {
  if (!account) return;

  try {
    const connection = new Connection(clusterApiUrl(network), "confirmed");
    const publicKey = account.publicKey;
    const confirmation = await connection.requestAirdrop(
      publicKey,
      LAMPORTS_PER_SOL
    );
    const result = await connection.confirmTransaction(confirmation, "confirmed");
    message.success(`Balance updated, you've gained 1SOL`);
    return await refreshBalance(network, account);

  } catch (error) {
    console.log(error);
    return;
  }
};

export { refreshBalance, handleAirdrop };
