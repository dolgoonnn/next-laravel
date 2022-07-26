import React, { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import NFTdetail from '@/components/NFTdetail'
import NFTdetailsoon from '@/components/NFTdetailsoon'
import ListMainTab from './alltabs/listMain'
var NumberFormat = require('react-number-format').default


const NFTlist = () => {
    const [nfts, setNfts] = useState([])

    // useEffect(() => {
    //     axios.get('/api/getNfts').then(response => {
    //         setNfts(response.data)
    //     })
    // }, [])



    return (
        <div className="flex flex-col my-10 mx-auto max-w-7xl sm:px-0 sm:my-24 lg:my-12">
            <div className="grid sm:grid-cols-2 items-center gap-x-8">
                <div className="lg:col-span-1 lg:col-start-1">
                    <div className="w-full mx-auto mt-6">
                    <div className="border-b border-bc-A5A">

                    </div>
                    </div>
                </div>
            </div>

            <ListMainTab/>
        </div>

    )
}

export default NFTlist
