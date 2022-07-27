
import { getSession,signOut } from 'next-auth/react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Web3WalletNFT from '../../components/web3WalletNFT';
import ConnectWallet from '@/components/connect';
import WalletIHC from '@/components/walletIHC';

import Link from 'next/link';
import ProfileHeader from '@/components/profileHeader';

export default function ihc({user}) {

    return(
        <div className="bg-pbackground">
          <Header/>
          <ProfileHeader user={user} />


            <div className="pt-4 bg-white rounded-md mt-4 mx-auto max-w-7xl w-full px-4 sm:px-0">
                <Tabs isLazy >
                <TabList>
                    <Link href="/profile/ihc" shallow>
                    <Tab>IHC wallet</Tab>
                    </Link>
                    <Link href="/profile/nft" shallow>
                    <Tab>Web 3 wallet</Tab>
                    </Link>
                </TabList>
                <TabPanels>
                    {/* initially mounted */}
                    <TabPanel>
                        <WalletIHC/>
                    </TabPanel>
                    {/* initially not mounted */}
                    <TabPanel>
                        <Web3WalletNFT/>
                    </TabPanel>
                </TabPanels>
                </Tabs>


            </div>
          <Footer/>
        </div>

    )
  }

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session)
    if (!session) {
      context.res.writeHead(302, { Location: '/' });
      context.res.end();
      return {};
    }
    return {
      props: {
        user: session.user,
      },
    };
  }
