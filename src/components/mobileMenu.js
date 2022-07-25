import { useState, useEffect } from "react";
import Link from "next/link";
import {useSession, signOut } from "next-auth/react"
import Image from 'next/image'
import { User } from '@nextui-org/react'

export default function MobileMenu(props) {

    const { data:session} = useSession()


  const [isExpand, setIsExpand] = useState(false);
  const dropdown = () => {
    setIsExpand(!isExpand);
  };
  return (
    <div className="sm:hidden" id="headlessui-disclosure-panel-4">
        <div className="px-4 pt-2 pb-3 space-y-1">
            <button className="block px-3 py-2 rounded-md text-base font-medium text-bc-C7C hover:text-white" type="button">
                <Link href="/#welcome"><a className="font-semibold" >About</a></Link>
            </button>
            <button className="block px-3 py-2 rounded-md text-base font-medium text-bc-C7C hover:text-white" type="button">
                <Link href="/#nft"><a className="font-semibold">Ikh Khuraldai</a></Link>
            </button>
            <button className="block px-3 py-2 rounded-md text-base font-medium text-bc-C7C hover:text-white" type="button">
                <Link href="/#roadmap"><a className="font-semibold">Roadmap</a></Link>
            </button>
            <button className="block px-3 py-2 rounded-md text-base font-medium text-bc-C7C hover:text-white" type="button">
                <Link href="/#team"><a className="font-semibold" >Team</a></Link>
            </button>

            {session?.user && (
                <>
                <button className="block px-3 py-2 rounded-md text-base font-medium text-bc-C7C hover:text-white" type="button"></button>
                <button className="block px-3 py-2 rounded-md text-base font-medium text-bc-C7C hover:text-white" type="button">
                            <User
                                src={session.user.image}
                                name={'My profile (' + session.user.email + ')'}
                            />
                </button>
                </>

            )}

        </div>
        <div className="flex w-full items-center justify-left space-x-6 px-4 ">

        <div className="group px-3">
                <div className="flex grow-0 justify-center btn-bg-gradient-login rounded-md mr-0 p-0.5 cursor-pointer">
                {session?.user ? (
                    <a style={{border:'2px solid #fff', borderRadius:'10px'}} className="relative text-xs flex items-center justify-center px-6 py-4 uppercase font-semibold" href="#">
                        <span onClick={signOut} className="whitespace-nowrap" style={{color:'#fff'}}>Log out</span>
                    </a>
                ) : (
                    <a style={{border:'2px solid #fff', borderRadius:'10px'}} className="relative text-xs flex items-center justify-center px-6 py-4 uppercase font-semibold" href="#">
                        <span onClick={() => signIn('google')} className="whitespace-nowrap" style={{color:'#fff'}}>Log in</span>
                    </a>
                )}
                </div>
            </div>

            <div className="flex grow-0 justify-center btn-border-gradient rounded-md mr-0 p-0.5 group-hover:rounded-full cursor-pointer">
                <Link target="_blank" href="https://discord.gg/billionaireclubnft">
                    <a  className="relative text-xs flex items-center justify-center px-6 py-4 uppercase font-semibold btn-bg-gradient rounded-md group-hover:rounded-full group-hover:bg-black overflow-x-hidden space-x-4" >
                        <span className="group-hover:animate-marquee whitespace-nowrap">Join our discord</span>
                        <span className="hidden absolute top-4 group-hover:block group-hover:animate-marquee2 whitespace-nowrap">Join our discord</span>
                    </a>

                </Link>
            </div>
        </div>

    </div>
  );
}
