import React from 'react'
import Link from 'next/link';
import { Input } from './ui/input';
import { RiYoutubeFill, RiFacebookFill, RiInstagramFill, RiTwitterFill , RiPinterestFill} from 'react-icons/ri';

function Footer() {
  return (
    <footer className='pt-12 xl:pt-12 bg-primary text-white text-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-8'>
        <div>
          <h2 className='capitalize leading-tight mb-2'>Subscribe to our newsletter</h2>
          <p>Be the first to get the latest newsabout trends, promotions, much more!</p>
        </div>
        {/* form */}
        <form action="" className='flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5'>
          <Input placeholder='Your email eddress' />
          <button className='btn w-full xl:max-w-[150px] h-[60px] btn-accent'>Join</button>
        </form>
        {/* socials */}

        <div className='flex gap-8 mx-auto text-[20px] text-white/60 mb-10'>
          <Link href=''>
            <RiYoutubeFill/>
          </Link>
          <Link href=''>
            <RiFacebookFill/>
          </Link>
          <Link href=''>
            <RiTwitterFill/>
          </Link>
          <Link href=''>
            <RiInstagramFill/>
          </Link>
          <Link href=''>
            <RiPinterestFill/>
          </Link>
        </div>


        </div>
      </div>

      {/* copyright */}
      <div className='py-4 border-t border-white/5 text-white/60'>
        copyright &copy; 2024 Bikezz. All rights reserved.

      </div>
    </footer>
  )
}

export default Footer;