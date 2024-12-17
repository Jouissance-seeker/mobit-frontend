'use client';

import Footer from '@/containers/template/footer';
import Header from '@/containers/template/header';
import { usePathname } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';

export function Providers({ children }: { children: React.ReactNode }) {
  // detect isShow root layout
  const pathname = usePathname();
  const [isShowRootLayout, setIsShowRootLayout] = useState<boolean>(() =>
    pathname === '/auth' ? false : true,
  );
  useEffect(() => {
    setIsShowRootLayout(pathname === '/auth' ? false : true);
  }, [pathname]);

  return (
    <>
      <NextTopLoader color={'#FFA726'} crawl={false} showSpinner={false} />
      <RecoilRoot>
        {!!isShowRootLayout ? (
          <>
            <Header />
            <main
              className={`flex flex-col gap-7 pb-6 pt-[88px] transition-all duration-300 lg:py-7`}
            >
              {children}
            </main>
            <Footer />
          </>
        ) : (
          <main>{children}</main>
        )}
      </RecoilRoot>
    </>
  );
}
