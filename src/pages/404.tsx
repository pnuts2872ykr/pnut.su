import Head from 'next/head';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/Layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <Head>
        <title>404 | pnuts2872ykr.net</title>
        <meta property='og:title' content='404 | pnuts2872ykr.net' key="og_title" />
        <meta
            property='og:image'
            content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/large-og.png`}
            key="og_image"
          />
      </Head>
      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          </div>
        </section>
      </main>
    </Layout>
  );
}