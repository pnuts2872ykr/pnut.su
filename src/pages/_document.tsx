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
          <meta name="description" content="pnuts portfolio" />
          <meta property='og:description' content="pnuts portfolio" />
          <meta property='og:site_name' content='pnuts2872ykr.net' key="og_site_name" />
          <meta property='og:locale' content='ja_JP' key="og_locale" />
          <meta property='og:type' content='website' key="og_type" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@pnuts2872ykr" />
           <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1336300432888389"
     crossOrigin="anonymous"></script>
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