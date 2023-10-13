import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { RiTimeLine } from 'react-icons/ri';

import { getAllPosts } from '@/lib/posts';

import Layout from '@/components/Layout';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags']);
  return {
    props: { allPosts },
  };
};

const BlogHome: NextPage<Props> = ({ allPosts }) => {
  return (
    <Layout>
      <Head>
        <title>Blog | pnut.su</title>
        <meta property='og:title' content='Blog | pnut.su' key="og_title" />
        <meta
            property='og:image'
            content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/large-og.png`}
            key="og_image"
          />
      </Head>
      <div className='container mx-auto my-12 max-w-2xl px-4 lg:max-w-4xl xl:max-w-7xl'>
        <h2 className='text-5xl font-semibold'>Blog</h2>
        <hr className='my-4 max-w-xl border-2 border-orange-500' />
        <div>
          {allPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className='mb-4 flex flex-col bg-neutral-900 px-6 py-4'
            >
              <h3 className='text-2xl font-medium'>{post.title}</h3>
              <time className='flex items-center gap-1 text-lg'>
                <RiTimeLine />
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogHome;
