import * as React from 'react';

import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-main pb-12 md:pb-0'>
      <Sidebar />
      {children}
    </div>
  );
}
