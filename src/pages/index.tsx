import Head from 'next/head';
import Image from 'next/image';
import { FaGithub, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';

import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>pnut.su</title>
        <meta property='og:title' content='pnut.su' key="og_title" />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/large-og.png`}
          key="og_image"
        />
      </Head>
      <div className='flex h-screen w-full flex-col items-center justify-center'>
        <div className='flex flex-col items-center bg-neutral-900 py-32 px-8 md:px-20'>
          <Image
            loader={({ src }) => src}
            src='/images/pnuts.jpg'
            alt='Pnuts Avatar'
            className='mb-8 rounded-full object-cover'
            width={200}
            height={200}
          />
          <h2 className='text-[2.5rem] font-medium'>pnuts2872ykr</h2>
          <div className='mt-8 flex gap-3'>
            <a
              href='https://twitter.com/pnuts2872ykr'
              className='rounded-full bg-[#1da1f2] p-3 duration-200 hover:opacity-80'
            >
              <FaTwitter size={25} />
            </a>
            <a
              href='https://instagram.com/ura._.peko/'
              className='rounded-full bg-[#B500FF] p-3 duration-200 hover:opacity-80'
            >
              <FaInstagramSquare size={25} />
            </a>
            <a
              href='https://github.com/pnuts2872ykr'
              className='rounded-full bg-black p-3 duration-200 hover:opacity-80'
            >
              <FaGithub size={25} />
            </a>
            <a
              href='https://www.youtube.com/@pnuts2872ykr'
              className='rounded-full bg-[#ff0000] p-3 duration-200 hover:opacity-80'
            >
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
