import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

import { getAllWorks } from '@/lib/works';

import Layout from '@/components/Layout';
import Work from '@/components/Work';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allWorks = getAllWorks([
    'slug',
    'title',
    'content',
    'date',
    'image',
    'url',
    'tags',
  ]);
  return {
    props: { allWorks },
  };
};

const Works: NextPage<Props> = ({ allWorks }) => {
  return (
    <Layout>
      <Head>
        <title>Works | pnuts2872ykr.net</title>
        <meta property='og:title' content='Works | pnuts2872ykr.net' />
        <meta
            property='og:image'
            content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/large-og.png`}
            key="og_image"
          />
      </Head>
      <div className='container mx-auto my-12 max-w-2xl px-4 lg:max-w-4xl xl:max-w-7xl'>
        <h2 className='text-5xl font-semibold'>Works</h2>
        <hr className='my-4 max-w-xl border-2 border-orange-500' />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {allWorks.map((work) => (
            <Work
              name={work.title}
              image={work.image}
              content={work.content}
              url={work.url}
              key={work.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Works;