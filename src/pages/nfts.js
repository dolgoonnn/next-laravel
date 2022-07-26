import Header from "@/components/header"
import Footer from "@/components/footer"
import NFT from "@/components/nft"

export default function Nfts(){
    return (
        <div  className="bg-pbackground ">
            <Header/>
            <div className="grid md:grid-cols-4 gap-4 mx-auto max-w-7xl w-full px-4 sm:px-0 pt-5">
                <div className="md:col-span-1 block mt-8">
                    <form
                    class="relative  mx-auto overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow-2xl"
                    role="dialog"
                    aria-label="Filters"
                    >
                    <header class="p-6 text-center">
                        <p class="text-lg font-medium">Search NFT</p>
                    </header>


                    <main class="flow-root p-6 overflow-y-auto sm:h-96 md:h-auto">
                        <div class="-my-8 divide-y divide-gray-100">
                        <fieldset className="w-full space-y-1 dark:text-gray-100 py-8">
                            <label for="Search" className="hidden">Search</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-400">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none   " />
                            </div>
                        </fieldset>
                        <div class="py-8">
                            <fieldset>
                            <legend class="text-xl font-medium">NFT Type</legend>

                            <ul class="grid md:grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                                <li>
                                <label class="flex items-center text-sm">
                                    <input type="radio" class="w-6 h-6 border-gray-200" />
                                    <span class="ml-3 font-medium">Undergraduate</span>
                                </label>
                                </li>

                                <li>
                                <label class="flex items-center text-sm">
                                    <input type="radio" class="w-6 h-6 border-gray-200" checked />
                                    <span class="ml-3 font-medium">Postgraduate</span>
                                </label>
                                </li>
                            </ul>
                            </fieldset>
                        </div>

                        <div class="py-8">
                            <fieldset>
                            <legend class="text-xl font-medium">Category</legend>

                            <ul class="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                                <li>
                                <label class="flex items-center text-sm">
                                    <input type="checkbox" class="w-6 h-6 border border-gray-200 rounded-md" />
                                    <span class="ml-3 font-medium">All Regions</span>
                                </label>
                                </li>

                                <li>
                                <label class="flex items-center text-sm">
                                    <input type="checkbox" class="w-6 h-6 border border-gray-200 rounded-md" />
                                    <span class="ml-3 font-medium">East Midlands</span>
                                </label>
                                </li>

                                <li>
                                <label class="flex items-center text-sm">
                                    <input type="checkbox" class="w-6 h-6 border border-gray-200 rounded-md" />
                                    <span class="ml-3 font-medium">East of England</span>
                                </label>
                                </li>

                                <li>
                                <label class="flex items-center text-sm">
                                    <input type="checkbox" class="w-6 h-6 border border-gray-200 rounded-md" />
                                    <span class="ml-3 font-medium">London (Greater)</span>
                                </label>
                                </li>
                            </ul>
                            </fieldset>
                        </div>

                        <div class="py-8">
                            <fieldset>
                            <legend class="text-xl font-medium">NFT state</legend>

                            <ul class="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                                <li>
                                <label class="flex items-center text-sm">
                                    <input type="checkbox" class="w-6 h-6 border border-gray-200 rounded-md" />
                                    <span class="ml-3 font-medium">Aston University</span>
                                </label>
                                </li>

                                <li>
                                <label class="flex items-center text-sm">
                                    <input type="checkbox" class="w-6 h-6 border border-gray-200 rounded-md" />
                                    <span class="ml-3 font-medium">Bangor University</span>
                                </label>
                                </li>

                                <li>
                                <label class="flex items-center text-sm">
                                    <input type="checkbox" class="w-6 h-6 border border-gray-200 rounded-md" />
                                    <span class="ml-3 font-medium">Brunel University London</span>
                                </label>
                                </li>

                                <li>
                                <label class="flex items-center text-sm">
                                    <input type="checkbox" class="w-6 h-6 border border-gray-200 rounded-md" />
                                    <span class="ml-3 font-medium">Glyndwr University</span>
                                </label>
                                </li>
                            </ul>
                            </fieldset>

                            <button class="inline-flex items-center mt-6 text-sm font-medium text-gray-600 underline" type="button">
                            Show all universities

                            <svg class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            </button>
                        </div>




                        </div>
                    </main>

                    <footer class="flex items-center justify-between p-6">
                        <button class="px-5 py-3 w-full font-medium text-white bg-black rounded-lg" type="submit"> Хайх </button>
                    </footer>
                    </form>
                </div>
                <div className=" md:col-span-3  ">
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
                </div>

            </div>

            <Footer/>
        </div>
    )
}