import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import NFTlist from "@/components/NFTList";
import Link from 'next/link';
import Footer from "@/components/footer";
import Header from '@/components/header';
// import { useAddress, useMetamask } from '@thirdweb-dev/react'
import axios from '@/lib/axios'

// import LoginCheck from '@/components/LoginCheck'
import NumberFormat from 'react-number-format'
import { Modal, Text } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'

const NFT = () => {

  const { data: token } = useSession()
//   const connectWithMetamask = useMetamask()
//   const address = useAddress()
  const router = useRouter()
  const { id } = router.query
  const [nft, setNft] = useState([])
  const [mintLoading, setMintLoading] = useState(false)

  const mintToTest = async () => {

      alert('Тун удахгүй')
      return false

    //   const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
    //   const network = process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK
    //   const sdk = ThirdwebSDK.fromPrivateKey(privateKey, network)
    //   const contract = sdk.getNFTCollection(process.env.NEXT_PUBLIC_CONTRACT)

    //   console.log(process.env.NEXT_PUBLIC_CONTRACT)

      if (!address) {
          alert('Та Metamask хаягаа холбоно уу.')
          return false
      }

      setMintLoading(true)

      const metadata = {
          name: nft.name,
          description: nft.description,
          image: nft.file_original,
      }

      const tx = await contract.mintTo(address, metadata)
      const receipt = tx.receipt // the transaction receipt
      const tokenId = tx.id // the id of the NFT minted
      const nft1 = await tx.data() // (optional) fetch details of minted NFT

      if (nft1) {
          console.log(nft1)

          axios
              .get('/api/setMint/' + id + '?address=' + address)
              .then(response => {
                  setNft(response.data)
              })

          setMintLoading(false)
      }

      // console.log(nft1)
  }

  const mintTo = async () => {
      const metadata = {
          name: nft.name,
          description: nft.description,
          image: nft.file, // This can be an image url or file
      }

      if (!address) {
          alert('Та Metamask хаягаа холбоно уу.')
      } else {
          setMintLoading(true)
          return false
          const tx = await contract.mintTo(address, metadata)
          const receipt = tx.receipt // the transaction receipt
          const tokenId = tx.id // the id of the NFT minted
          const nft1 = await tx.data() // (optional) fetch details of minted NFT

          if (tokenId) {
              axios
                  .get('/api/setMint/' + id + '?address=' + address)
                  .then(response => {
                      setNft(response.data)
                  })
              setMintLoading(false)
          }
      }
  }

  const gat = '' + token?.accessToken

  useEffect(() => {
      if (id) {
          axios
              .get('/api/getNft/' + id + '/' + gat)
              .then(response => {
                  setNft(response.data)
              })
              .catch(error => {
                  signOut()
              })
      }
  }, [id, gat])

  // Every sec check notsold NFT status - start
  useEffect(() => {
      const interval = setInterval(() => {
          if (id && nft.is_sold != 1) {
              axios
                  .get('/api/getNftSimple/' + id + '?e=' + token?.user?.email)
                  .then(response => {
                      setNft(response.data)

                      if (response?.data?.is_sold === 1) {
                          closeQpayModal()
                      }
                  })
                  .catch(error => {})
          }
      }, 3000)

      return () => clearInterval(interval)
  }, [id, nft.is_sold])
  // Every sec check notsold NFT status - end

  // Modal - start
  const [visible, setVisible] = useState(false)
  const [qpay, setQpay] = useState()
  const openQpayModal = () => {

      alert('Тун удахгүй.')
      return false

      if (token?.accessToken) {

          axios
              .get('/api/getInvoice/' + id + '/' + token.accessToken)
              .then(response => {
                  setQpay(response.data)
                  if (response.data?.error === 1) {
                      alert(response.data?.error_msg)
                  }
                  setVisible(true)
              })
              .catch(error => {
                  console.log(error)
                  signOut()
              })
      } else {
          alert('Та эхлээд нэвтрэнэ үү.')
      }
  }
  const closeQpayModal = () => {
      setVisible(false)
      console.log('closed')
  }
  // Modal - end


  return (
    <>
    <Head>
      <title>{nft.name}</title>
    </Head>
    <div className="bg-black">
      <Header/>

      <section id="collection" className="bg-collection bg-cover bg-center pb-10">
        <div className="flex flex-col mt-10 mx-auto max-w-7xl px-4 sm:px-0 sm:my-24 lg:my-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:text-left row-start-2 mt-8 sm:row-start-auto lg:col-span-1">
                <div className="lg:col-span-2 lg:row-span-2 lg:self-start lg:items-center">
                <div className="flex flex-row gap-4">
                        <div className="relative w-full">
                        <div id="headlessui-tabs-panel-30" role="tabpanel" aria-labelledby="headlessui-tabs-tab-27" tabIndex="0">
                            <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative'}}>
                                {nft?.file && (<Image loader={() => nft.file} src={nft.file} width={152} height={152} sizes="100vw"/>)}
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:text-left row-start-1 sm:row-start-auto lg:col-span-1">
                <h2 className="text-3xl sm:text-4xl tracking-wide font-bold mb-4 space-y-1 sm:space-y-2 pt-10">
                <p className="text-default font-bebas text-[50px] sm:text-[60px] leading-none text-center sm:text-left uppercase">{nft.name}</p>
                </h2>
                <div className="font-normal mt-10 font-gordita text-center sm:text-left">

                  {nft?.is_sold === 1 &&
                    nft.io === 1 && (
                        <>
                            <div
                                className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                                role="alert">
                                Баяр хүргэе! Та энэ
                                NFT-н эзэмшигч нь
                                байна
                            </div>
                            {nft.ism != 1 && (
                                <>
                                    <i>
                                        Mint хийхэд
                                        бага зэрэг
                                        удах
                                        магадлалтайг
                                        анхаарна уу.
                                    </i>
                                    <br />
                                    <button
                                        className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                        onClick={
                                            mintToTest
                                        }>
                                        {mintLoading
                                            ? 'Minting.... pls wait... '
                                            : 'Mint'}
                                    </button>
                                </>
                            )}
                        </>
                    )}

                    <div className="bcm-white font-gordita text-bc-A1A text-[17px] leading-8">
                        <p>
                            <strong>{nft.description}</strong>
                            <br/>
                            <br/>
                        </p>
                    </div>


                      {nft.owner_address ? (
                            <div className="flex mt-6 items-center pb-5 mb-5">
                              <img src="/images/polygon.png" style={{height: '17px'}} /> &nbsp;
                              <a
                                  style={{
                                      color: 'rgb(99 176 205)',
                                  }}
                                  href={
                                      'https://polygonscan.com/address/' +
                                      process.env
                                          .NEXT_PUBLIC_CONTRACT
                                  }
                                  target="_blank"
                                  rel="noreferrer">
                                  {
                                      process.env
                                          .NEXT_PUBLIC_CONTRACT
                                  }
                              </a>
                            </div>
                      ) : (
                            <>
                            </>
                      )}


                </div>
                <div className="nft_price_cont">
                <NumberFormat
                    value={nft.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={(
                        value,
                        props,
                    ) => (
                        <span className="sm:text-base font-bold text-primary" {...props} style={{fontSize:'30px;'}}>
                            {value} ₮
                        </span>
                    )}
                />
                </div>
                <div className="flex w-full justify-center sm:justify-start space-x-8 mt-8">
                  <div className="group">
                      {nft.is_sold != 1 ? (
                        <div className="flex grow-0 justify-center btn-border-gradient rounded-md mr-0 p-0.5 cursor-pointer">
                          <a onClick={openQpayModal} className="relative btn-bg-gradient text-xs flex items-center justify-center px-10 py-4 uppercase font-semibold rounded-md tracking-widest text-white" >Худалдаж авах</a>
                        </div>
                      ) : (
                        <div className="flex grow-0 justify-center btn-bg-gradient-disabled rounded-md mr-0 p-0.5 cursor-pointer">
                          <a className="relative border-slate-50 text-xs flex items-center justify-center px-10 py-4 uppercase rounded-md tracking-widest text-white" >Зарагдсан</a>
                        </div>
                      )}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL start */}
      <Modal
          closeButton
          preventClose
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeQpayModal}>
          <Modal.Header>
              <Text id="modal-title" size={18}>
                  {nft.name}
              </Text>
          </Modal.Header>
          <Modal.Body>
              <span className="title-font font-medium text-2xl text-green-500 text-center">
                  <NumberFormat
                      value={nft.price}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value, props) => (
                          <span {...props}>{value} ₮</span>
                      )}
                  />
              </span>
              {qpay?.data && (
                  <>
                      <img
                          src={
                              'data:image/png;base64, ' +
                              qpay.data.qr_image
                          }
                      />
                      <div
                          className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                          role="alert">
                          <a
                              href={qpay.data.qPay_shortUrl}
                              target="_blank"
                              rel="noreferrer">
                              Та гар утсаар орж байгаа бол энд дарна уу.
                          </a>
                      </div>
                      <div
                          className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                          role="alert">
                          Та төлбөрөө төлсөн бол хуудас автоматаар
                          солигдох болно.
                      </div>
                  </>
              )}
          </Modal.Body>
          <Modal.Footer>
              {/* <Button color="error" onClick={closeQpayModal}>
                  Close
              </Button> */}
          </Modal.Footer>
      </Modal>
      {/* MODAL end */}

      <section id="nft" className="overflow-hidden">
        <NFTlist />
      </section>
    <Footer/>
  </div>
  </>
  )
}

export default NFT