import { InferGetStaticPropsType, NextPage } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RiTimeLine } from 'react-icons/ri';

import { getAllPosts, getPostBySlug } from '@/lib/posts';
import markdownToHtml from '@/lib/toHtml';

import Layout from '@/components/Layout';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

/**
 * 記事の内容を取得する
 */
export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'date', 'content']);
  const content = await markdownToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Head>
        <title>{`${post.title} | pnuts2872ykr.net`}</title>
        <meta
          property='og:title'
          content={`${post.title} | pnuts2872ykr.net`}
          key="og_title"
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=${post.title}`}
          key="og_image"
        />
      </Head>
      <article className='container mx-auto my-12 max-w-2xl px-4 lg:max-w-4xl xl:max-w-7xl'>
        <h2 className='text-5xl font-semibold'>{post.title}</h2>
        <hr className='mt-4 mb-2 max-w-xl border-2 border-orange-500' />
        <div>
          <time className='flex items-center gap-1 text-lg'>
            <RiTimeLine />
            {post.date}
          </time>
          <div
            className='prose prose-invert mt-8 lg:prose-xl'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </Layout>
  );
};

export default Post;