import Link from 'next/link';
import Head from 'next/head';

function Sitemap() {
    return (
        <>
            <Head>
                <title>Sitemap - Ourmaidsfranchise.com</title>
                <link rel="canonical" href="https://www.ourmaidsfranchise.com/" />
            </Head>
            <header>
                <meta name="description" content="This is a sitemap page made up of all links to all the web pages present in Ourmaidsfranchise.com for your easy navigation." />
            </header>
            <div className='mt-[5%] flex justify-center'>

                <div>
                    <ul className='w-48 gap-3 text-sm font-medium text-center text-gray-900 bg-white rounded-lg '>
                        <li className='w-full px-4 py-2 my-5 text-white bg-pink-500 border border-white rounded hover:bg-pink-600'><Link href="/brochure">Brochure</Link></li>
                        <li className='w-full px-4 py-2 my-5 text-white bg-pink-500 border border-white rounded hover:bg-pink-600'><Link href="/franchiseCosts">Franchise Costs</Link></li>
                        <li className='w-full px-4 py-2 my-5 text-white bg-pink-500 border border-white rounded hover:bg-pink-600'><Link href="/fdd2">FDD</Link></li>
                        <li className='w-full px-4 py-2 my-5 text-white bg-pink-500 border border-white rounded hover:bg-pink-600'><Link href="/operationsManual">Operations Manual</Link></li>
                        <li className='w-full px-4 py-2 my-5 text-white bg-pink-500 border border-white rounded hover:bg-pink-600'><Link href="/pressRelease">Press Release</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sitemap;