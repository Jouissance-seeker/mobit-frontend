'use client';

import Footer from '@/containers/template/footer';
import Header from '@/containers/template/header';
import { usePathname } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode, useEffect, useState } from 'react';
import { Provider as JotaiProvider } from 'jotai';
import { DevTools as JotaiDevTools } from 'jotai-devtools';

export function Providers({ children }: { children: React.ReactNode }) {
  // detect isShow root layout
  const pathname = usePathname();
  const [isShowRootLayout, setIsShowRootLayout] = useState<boolean>(() =>
    pathname === '/auth' ? false : true,
  );
  useEffect(() => {
    setIsShowRootLayout(pathname === '/auth' ? false : true);
  }, [pathname]);

  const Jotai = ({ children }: {
    children: ReactNode;
  }) => {
    return (
      <JotaiProvider>
        <JotaiDevTools />
        {children}
      </JotaiProvider>
    );
  };  

  return (
    <>
      <NextTopLoader color={'#FFA726'} crawl={false} showSpinner={false} />
      <Jotai>
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
      </Jotai>
    </>
  );
}
