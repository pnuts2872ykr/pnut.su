import Head from 'next/head';
import Image from 'next/image';
import {
  AiFillMail
} from 'react-icons/ai';
import {
  FaDiscord,
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
  FaVrCardboard,
  FaYoutube,
  FaInstagramSquare,
} from 'react-icons/fa';

import Layout from '@/components/Layout';
import Social from '@/components/Social';

import Mercari from '@/assets/mercari.svg';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | pnut.su</title>
        <meta property='og:title' content='About | pnut.su' key="og_title" />
        <meta
            property='og:image'
            content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/large-og.png`}
            key="og_image"
          />
      </Head>
      <div className='container mx-auto my-12 max-w-2xl px-4 lg:max-w-4xl xl:max-w-7xl'>
        <h2 className='text-5xl font-semibold'>About</h2>
        <hr className='my-4 max-w-xl border-2 border-orange-500' />
        <div className='my-8 flex flex-col items-center gap-5 md:flex-row'>
          <Image
            loader={({ src }) => src}
            src='/images/pnuts.jpg'
            width={130}
            height={130}
            alt='Pnuts Avatar'
            className='rounded-full object-cover'
          />
          <div className='text-center md:text-left'>
            <h3 className='text-3xl'>pnuts2872ykr</h3>
            <p className='text-lg'>Web / Linux / VCborn Leader</p>
          </div>
        </div>
        <div className='prose prose-invert lg:prose-xl'>
          <p>VCbornのリーダーをやってるぴなっつです！</p>
          <p>高校受かって浮かれてる人です。</p>
          <p>録画鯖いじってたりマイクラ鯖いじってたりはしてます。</p>
        </div>
        <h3 className='mt-8 mb-4 text-4xl font-semibold'>Socials</h3>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <Social
            icon={<FaTwitter size={25} />}
            name='Twitter'
            username='pnuts2872ykr'
            url='https://twitter.com/pnuts2872ykr'
            className='bg-[#1da1f2]'
          />
          <Social
            icon={<FaInstagramSquare size={(25)} />}
            name='Instagram'
            username='ura._.peko'
            url='https://instagram.com/ura._.peko/'
            className='bg-[#B500FF]'
          />
          <Social
            icon={<FaYoutube size={25} />}
            name='YouTube'
            username='@pnuts2872ykr'
            url='https://www.youtube.com/@pnuts2872ykr'
            className='bg-[#ff0000]'
          />
          <Social
            icon={<FaGithub size={25} />}
            name='GitHub'
            username='pnuts2872ykr'
            url='https://github.com/pnuts2872ykr'
            className='bg-neutral-900'
          />
          <Social
            icon={<FaTelegramPlane size={25} />}
            name='Telegram'
            username='pnuts2872ykr'
            url='https://t.me/pnuts2872ykr'
            className='bg-[#0088cc]'
          />
          <Social
            icon={<FaVrCardboard size={25} />}
            name='VRChat'
            username='pnuts2872ykr'
            url='https://vrchat.com/home/user/usr_e62a46aa-aeb4-4613-af4a-606ae8716264'
            className='bg-[#053c48]'
          />
          <Social
            icon={<FaDiscord size={25} />}
            name='Discord'
            username='@peko_ra'
            className='bg-[#5865f2]'
          />
          <Social
            icon={<Mercari width='25px' height='25px' />}
            name='Mercari'
            username='pnuts2872ykr'
            url='https://jp.mercari.com/user/profile/485252446?utm_source=ios&utm_medium=share'
            className='bg-[#ff0211]'
          />
          <Social
          icon={<AiFillMail size={(25)} />}
            name='Mail'
            username='pnuts2872ykr@cock.li'
            className='bg-[#333366]'
            />
        </div>
      </div>
    </Layout>
  );
}
