import React from "react";
import Image from 'next/Image'
import Link from "next/link";
import NFT from "../../components/nft";
import { useState, useEffect } from "react";
import useSWR from 'swr'

const ListSecondTab = () => {

  const [photos, setPhotos] = useState([])

  const fetchData = () =>{
    fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
      setPhotos(data)
      console.log(data)
    })
  }

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <ul role="list" className="gap-3 sm:space-x-0 mx-auto grid grid-cols-2 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4 lg:max-w-7xl mt-8 overflow-x-scroll">
      {/* {photos?.length > 0 && (

      <NFT href="1" name="Yoton Mafia" price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
      )} */}
      console.log(src)
      {photos?.map((photo) =>(
        <NFT href="1" key={photo.images.id}  src={photo.images.imageLocation}  price='2,990,000 ₮' status='Худалдаж аваагүй байна' />
       ))
      }
    </ul>
  );
};
export default ListSecondTab;