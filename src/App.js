import { useState } from "react";
import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import Nft from "./components/Nft";

function App() {
  const [chainId, setChainId] = useState("");
  const [address, setAddress] = useState("");
  const [appState, setAppState] = useState("Ready to mint");
  console.log({ chainId });
  return (
    <div className="App">
      <header className="App-header">
        {!address && (
          <ConnectWallet
            setChainId={setChainId}
            setAddress={setAddress}
            address={address}
          />
        )}
        {chainId && (
          <Nft
            appState={appState}
            setAppState={setAppState}
            chainId={chainId}
          />
        )}
      </header>
    </div>
  );
}

export default App;
