import Link from 'next/link';

function Sitemap() {
    return (
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
    );
}

export default Sitemap;