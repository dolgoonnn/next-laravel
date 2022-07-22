import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";

export default function connectWallet() {
    const { enableWeb3, isWeb3Enabled, isWeb3EnableLoading, account, Moralis, deactivateWeb3, user } =
    useMoralis()


    useEffect(() => {
    if (
        !isWeb3Enabled &&
        typeof window !== "undefined" &&
        window.localStorage.getItem("connected")
    ) {
        enableWeb3()
        // enableWeb3({provider: window.localStorage.getItem("connected")}) // add walletconnect
    }
    }, [isWeb3Enabled])
    console.log(user)
    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null Account found")
            }
        })
    }, [])
    return(
        <div className="text-white">
            Wallet
            <br/>

           {account ? (
                <div >
                    Connected to {account.slice(0, 6)}...
                    {account.slice(account.length - 4)}
                </div>
           ) : (
                <button
                    onClick={async () => {
                        // await walletModal.connect()
                        await enableWeb3()
                        // depends on what button they picked
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("connected", "injected")
                            // window.localStorage.setItem("connected", "walletconnect")
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                    className=" text-white font-bold py-2 px-4 rounded ml-auto"
                >
                    Metamask
                </button>

           ) }
        </div>
    )
}
