import fontIransansx from '@/constants/fonts';
import '@/styles/global/index.scss';
import '@/styles/routes/global/index.scss';
import { Providers } from './providers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="rtl">
      <body
        cz-shortcut-listen="false"
        className={`relative ${fontIransansx.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
