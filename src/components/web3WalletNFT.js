import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import { useState, useEffect } from "react";
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import NFT from "./nft";

export default function web3WalletNFT() {

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
        <div className="text-white">
            <div>
                Choose your NFT's chain
                <RadioGroup onChange={setChain} value={chain}>
                    <Stack direction='row'>
                        <Radio value='eth'>Etherium</Radio>
                        <Radio value='polygon'>Polygon</Radio>
                        <Radio value='bsc'>Binace smart chain</Radio>
                    </Stack>
                </RadioGroup>
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
