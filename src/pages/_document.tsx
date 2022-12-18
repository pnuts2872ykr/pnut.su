import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta property='og:site_name' content='pnuts2872ykr.net' />
          <meta property='og:locale' content='ja_JP' />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/large-og.png`}
          />
        </Head>
        <body className='relative bg-black text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
