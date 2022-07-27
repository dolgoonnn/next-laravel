import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import NFT from "./nft";

export default function WalletIHC() {

    const [chain, setChain] = useState('eth')
    const [nfts, setNfts] = useState()

    const Web3Api = useMoralisWeb3Api();
    const { isInitialized } = useMoralis()

    useEffect(()=>{
        if(isInitialized){
            fetchNFTs()
        }else{
            console.log("unInitialized")
        }
    },[isInitialized, chain])

    const fetchNFTs = async () => {
        const options = {
          chain: chain,
          address: "0x62A64Ad869909F0346023dBceCB6Ff635dc93bb6",
        };
        // get NFTs for current user on Mainnet

        const userEthNFTs = await Web3Api.account.getNFTs(options);
        console.log(userEthNFTs);
        setNfts(userEthNFTs)
    };

    return(
        <div className="text-black">
            <div>
            <ul role="list" className="gap-3 sm:space-x-0 mx-auto grid grid-cols-2 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4 lg:max-w-7xl  overflow-x-scroll">
                <div className="bg-black rounded-md">
                    <NFT href="1" src='/images/115m4vvmdji52oiy79up3e.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
                </div>
            </ul>
            </div>
            {/* <div>
                {nfts?.map((nft) =>(
                    <NFT key={nft.id} src={nft.src}  />
                ))
                }
            </div> */}
        </div>
    )
}
