import * as React from "react";
import "./App.css";
import { useState } from "react";
import {
  SecretNetworkClient,
  MsgExecuteContractParams,
  Permit,
} from "secretjs";

import { Window as KeplrWindow } from "@keplr-wallet/types";
import {
  MsgExecuteContract,
  MsgSnip721AddMinter,
  QueryContractRequest,
  ViewingKey,
} from "secretjs";
import { CreateViewingKeyContractParams } from "secretjs/dist/extensions/access_control/viewing_key/params";
import { Snip721MintOptions } from "secretjs/dist/extensions/snip721/types";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
}

const App: React.FC = (props) => {
  const [file, setFile] = useState();
  let yourAddress: string = "";
  let amount: number = 0;
  const CONTRACTADDRESS = "secret18f4ucfmz82kwpaadfax5ye4nkwccet06kazyah";
  const CODEID = 10839;
  const SECRET_CHAIN_ID = "pulsar-2";

  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  const connectNetwork = async () => {
    if (!window.getOfflineSigner || !window.keplr) {
      alert("Please install Keplr extension.");
    } else {
      await window.keplr?.enable(SECRET_CHAIN_ID).then(() => {
        // @ts-ignore: Object is possibly 'undefined'.
        const offlineSigner = this.window?.getOfflineSigner(SECRET_CHAIN_ID);
        offlineSigner.getAccounts().then((account: any) => {
          const secretjs = SecretNetworkClient.create({
            grpcWebUrl: "https://grpc.pulsar.scrttestnet.com",
            chainId: SECRET_CHAIN_ID,
            // @ts-ignore: Object is possibly 'undefined'.
            wallet: this.window.getOfflineSignerOnlyAmino(SECRET_CHAIN_ID),
            walletAddress: account[0].address,
            // @ts-ignore: Object is possibly 'undefined'.
            encryptionUtils: this.window.getEnigmaUtils(SECRET_CHAIN_ID),
          });
          secretjs.then((secretjs) => {
            secretjs.query.bank.balance({
              address: 
            })
          });
        });
      });
    }
  };

  return (
    <div className="App">
      <h3>Preload</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Preload</button>
      </form>
    </div>
  );
};

export default App;
