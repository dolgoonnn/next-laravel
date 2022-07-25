
import React from "react";
import Image from 'next/image'
import Link from "next/link";
import NFT from "../nft";

const ListMainTab = () => {
  return (
    <ul role="list" className="gap-3 sm:space-x-0 mx-auto grid grid-cols-2 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4 lg:max-w-7xl mt-8 overflow-x-scroll">
        <NFT href="1" src='/images/1kghq0vfep6goqatntfgk.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/2ebryf2lhw5i4nvdnk87a.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/3nn1jyx137b7er1g99pat.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/4frfbtdgbc8iiapomuhbk.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/5wjo5713ceyj8tps5nhta.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/5C13B239-E016-4726-BD75-C17093879A6F.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/0B13A37D-797A-4520-A422-E909066F69C4.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/1DFC198E-E524-46D8-9348-2826940E8ED1.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/2CD0227F-A43E-440E-9914-C42B0B464B72.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/4BD34BBB-2F41-46AB-963C-B0F02CA598F5.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/4E06AB6C-88E8-4E51-A1BB-4DCD63BC6A86.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/05BD4C49-37AB-4D61-9369-ECFB8D5DA4C4.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/22pe5qy1065p00m46x3i6b.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
        <NFT href="1" src='/images/28a4m2jktfmlchz0wv3ty6.jpeg' name="IHC Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
    </ul>
  );
};
export default ListMainTab;