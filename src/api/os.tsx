import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const notoJpBold = fetch(
  new URL('../../assets/NotoSansJP-Bold.otf', import.meta.url)
).then((res) => res.arrayBuffer());
const notoJpMedium = fetch(
  new URL('../../assets/NotoSansJP-Medium.otf', import.meta.url)
).then((res) => res.arrayBuffer());
const notoJpRegular = fetch(
  new URL('../../assets/NotoSansJP-Regular.otf', import.meta.url)
).then((res) => res.arrayBuffer());
const lexendSemiBold = fetch(
  new URL('../../assets/Lexend-SemiBold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());
const lexendMedium = fetch(
  new URL('../../assets/Lexend-Medium.ttf', import.meta.url)
).then((res) => res.arrayBuffer());
const lexendRegular = fetch(
  new URL('../../assets/Lexend-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function ogp(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const hasTitle = searchParams.has('title');
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : 'My default title';
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080"><defs><style>.cls-1{fill:#f97316;}.cls-2{fill:#171717;}</style></defs><rect class="cls-2" width="1920" height="1080"/><path class="cls-1" d="m1014.22,952.28c147.67,6.81,391.29,18.5,489,6,93.93-12.02,365.99-56.35,416.78-64.65v-62.33c-50.28,8.1-323.63,52.02-417,64.71-97.61,13.27-341.33.81-489-6-134.29-6.19-325.6-35.58-537-28-185.38,6.65-407.37,66.51-477,86.52v62.34c69.38-19.95,291.65-79.92,477.22-86.58,211.4-7.58,402.71,21.81,537,28Z"/></svg>'
          )}`})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100% 100%',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: 150,
          paddingRight: 150,
          fontFamily: '"Lexend", "Noto Sans JP"',
          justifyContent: 'space-between',
        }}
      >
        <h2
          style={{
            fontSize: 140,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {title}
        </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '170px',
          }}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_SITE_URL}/images/pnuts.jpg`}
            style={{ borderRadius: '9999px', width: '180px' }}
          />
          <p
            style={{
              fontSize: 60,
              color: '#fff',
              fontWeight: 600,
              marginLeft: 30,
            }}
          >
            pnuts2872ykr.net
          </p>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: await notoJpBold,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'Noto Sans JP',
          data: await notoJpMedium,
          style: 'normal',
          weight: 500,
        },
        {
          name: 'Noto Sans JP',
          data: await notoJpRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Lexend',
          data: await lexendSemiBold,
          style: 'normal',
          weight: 600,
        },
        {
          name: 'Lexend',
          data: await lexendMedium,
          style: 'normal',
          weight: 500,
        },
        {
          name: 'Lexend',
          data: await lexendRegular,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}