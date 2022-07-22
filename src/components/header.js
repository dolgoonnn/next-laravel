import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from "next/link";
import MobileMenu from "./mobileMenu";
import {useSession, signOut } from "next-auth/react"
import { useMoralis } from "react-moralis"


export default function Header() {

  const { data:session} = useSession()

  const [isShowing, setIsShowing] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  const { enableWeb3, isWeb3Enabled, isWeb3EnableLoading, account, Moralis, deactivateWeb3 } =
        useMoralis()

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const dropdown = () => {
    setIsExpand(!isExpand);
  };
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

  return (
    <nav className="pt-4 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <div className="block h-auto w-40">
                  <Link className="relative h-full w-full" href="/">
                    <span style={{boxSizing:'border-box',display:'block', overflow:'hidden',width:'initial', height:'initial', background:'none', opacity:1, border:0, margin:0, padding:0, position:'relative'}}>

                      <img src="https://www.ihcoin.io/wp-content/uploads/2022/02/ihc-web-logo.png" alt="IHC coin" className="h-10"/>
                    </span>
                  </Link>
                </div>

              </div>
              <div className="hidden sm:block sm:ml-12">
                <div className="flex space-x-8 h-full items-center">
                  <Link href="/#welcome"><a className="font-semibold text-white" >About</a></Link>
                  <Link href="/#nft"><a className="font-semibold text-white">YMC 99</a></Link>
                  <Link href="/#roadmap"><a className="font-semibold text-white">Roadmap</a></Link>
                  <Link href="/#team"><a className="font-semibold text-white" >Team</a></Link>

                </div>
              </div>
            </div>
            <div className="hidden absolute inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-6">
              <div className="group">
                {session ? (

                    <div className="relative">
                    <button onClick={dropdown} className="text-white font-semibold group inline-flex items-center" id="headlessui-popover-button-1" type="button" aria-expanded="false">
                      <div>
                        <Image src={session.user.image} height={48} width={48} alt={session.user.name} className="w-12 h-12 border rounded-full" />
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="ml-2 h-5 w-5">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    <div style={{ display: isExpand ? "block" : "none" }} className="absolute z-10 transform mt-4 px-2 w-screen max-w-max sm:px-0" id="headlessui-popover-panel-2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-black px-5 py-6 mr-10 sm:gap-8 sm:p-8 text-white">
                          <Link target="_blank" rel="noreferrer" href="/profile" >
                            <a className="font-semibold hover:text-primary transition ease-in-out duration-150" >Profile</a>
                          </Link>

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
                          )}
                          <button type="button" onClick={() => signOut({callbackUrl:'/'})}>
                            <a className="font-semibold hover:text-primary transition ease-in-out duration-150 text-yellow">Log out</a>
                            {/* <p style={{fontSize: '12px', color: 'yellow'}}>Coming soon</p> */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex grow-0 group  justify-center btn-border-gradient rounded-md mr-0 p-0.5 cursor-pointer text-white">
                  <Link target="_blank" rel="noreferrer" href="/login" >
                    <a className="relativetransition text-xs flex items-center justify-center px-3 py-2 sm:px-10 sm:py-4 uppercase font-semibold rounded-md tracking-widest bg-white text-black" >Login</a>
                  </Link>
                </div>
                )}

              </div>
            </div>
            <div className="hidden absolute inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-6">
              <div className="group">
                <div className="flex grow-0 border border-white justify-center btn-border-gradient rounded-md mr-0 p-0.5  cursor-pointer">
                  <Link target="_blank" href="/">
                    <a  className="relative text-xs flex items-center justify-center px-6 py-4 uppercase font-semibold bg-black  rounded-md  overflow-x-hidden space-x-4" >
                    <span className="  whitespace-nowrap text-white">Join our discord</span>

                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button onClick={toggle} className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-0" type="button">
                <span className="sr-only">Open main menu</span>
                <svg style={{ display: !isShowing ? "block" : "none" }}  className="block h-6 w-6" aria-hidden="true" viewBox="0 0 17 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="17" y2="0.5" stroke="currentColor"></line>
                  <line y1="5.5" x2="17" y2="5.5" stroke="currentColor"></line>
                </svg>
                <svg style={{ display: isShowing ? "block" : "none" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="block h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div style={{ display: isShowing ? "block" : "none" }}>
          <MobileMenu />
        </div>
    </nav>
  );
}
