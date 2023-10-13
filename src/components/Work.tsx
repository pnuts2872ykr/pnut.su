import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
export default function Work({
  name,
  image,
  content,
  url,
}: {
  name: string;
  image: string;
  content: string;
  url?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <a
        className='relative flex aspect-video cursor-pointer items-center justify-center bg-neutral-900 object-cover'
        onClick={() => setIsOpen(true)}
      >
        <Image
          loader={({ src }) => src}
          src={image}
          alt={name}
          width={1920}
          height={1080}
          className='absolute duration-200 hover:opacity-0'
        />
        <p className='text-4xl font-semibold'>{name}</p>
      </a>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' open={isOpen} onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='absolute top-1/2 left-1/2 min-w-[20rem] max-w-2xl -translate-x-1/2 -translate-y-[55%] transform bg-neutral-900 transition-all'>
              <Image
                loader={({ src }) => src}
                src={image}
                alt={name}
                width={1920}
                height={1080}
              />
              <div className='p-8'>
                <Dialog.Title className='mb-8 text-4xl'>
                  <a
                    href={url}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='inline-flex items-center gap-1'
                  >
                    {name} <HiOutlineExternalLink size={25} />
                  </a>
                </Dialog.Title>

                <div
                  className='prose prose-invert mt-8 lg:prose-xl'
                  dangerouslySetInnerHTML={{ __html: content }}
                />

                <button
                  className='ml-auto mt-8 block bg-neutral-800 px-4 py-2 text-xl duration-200 hover:bg-neutral-900'
                  onClick={() => setIsOpen(false)}
                >
                  OK
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
