import Head from 'next/head';

import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | pnuts2872ykr.net</title>
        <meta property='og:title' content='Contact | pnuts2872ykr.net' key="og_title" />
        <meta
            property='og:image'
            content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/large-og.png`}
            key="og_image"
          />
      </Head>
      <div className='container mx-auto my-12 max-w-2xl px-4 lg:max-w-4xl xl:max-w-7xl'>
        <h2 className='text-5xl font-semibold'>Contact</h2>
        <hr className='my-4 max-w-xl border-2 border-orange-500' />
        <div className='prose text-white lg:prose-xl'>
          <p>なにかありましたらTwitter,DiscordまでDMお願いします！！</p>
        </div>
      </div>
    </Layout>
  );
}