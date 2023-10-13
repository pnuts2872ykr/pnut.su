import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdMail, MdWork } from 'react-icons/md';
import { RiHomeFill, RiPencilFill, RiUserFill } from 'react-icons/ri';

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className='fixed bottom-0 z-50 grid w-full grid-cols-5 bg-orange-500 py-3 md:bottom-auto md:top-1/2 md:flex md:w-auto md:-translate-y-1/2 md:flex-col md:bg-orange-600 md:py-0'>
      <Link
        href='/'
        aria-label='Home'
        className={`flex items-center justify-center bg-orange-500 duration-200 md:h-[90px] md:w-[90px] ${
          router.pathname === '/'
            ? 'md:translate-x-3'
            : 'hover:md:translate-x-3'
        }`}
      >
        <RiHomeFill color='#fff' size={45} className='h-8 md:h-auto' />
      </Link>
      <Link
        href='/about'
        aria-label='About'
        className={`flex items-center justify-center bg-orange-500 duration-200 md:h-[90px] md:w-[90px] ${
          router.pathname === '/about'
            ? 'md:translate-x-3'
            : 'hover:md:translate-x-3'
        }`}
      >
        <RiUserFill color='#fff' size={45} className='h-8 md:h-auto' />
      </Link>
      <Link
        href='/works'
        aria-label='Works'
        className={`flex items-center justify-center bg-orange-500 duration-200 md:h-[90px] md:w-[90px] ${
          router.pathname === '/works'
            ? 'md:translate-x-3'
            : 'hover:md:translate-x-3'
        }`}
      >
        <MdWork color='#fff' size={45} className='h-8 md:h-auto' />
      </Link>
      <Link
        href='/blog'
        aria-label='Blog'
        className={`flex items-center justify-center bg-orange-500 duration-200 md:h-[90px] md:w-[90px] ${
          router.pathname === '/blog'
            ? 'md:translate-x-3'
            : 'hover:md:translate-x-3'
        }`}
      >
        <RiPencilFill color='#fff' size={45} className='h-8 md:h-auto' />
      </Link>
      <Link
        href='/contact'
        aria-label='Contact'
        className={`flex items-center justify-center bg-orange-500 duration-200 md:h-[90px] md:w-[90px] ${
          router.pathname === '/contact'
            ? 'md:translate-x-3'
            : 'hover:md:translate-x-3'
        }`}
      >
        <MdMail color='#fff' size={45} className='h-8 md:h-auto' />
      </Link>
    </div>
  );
}
