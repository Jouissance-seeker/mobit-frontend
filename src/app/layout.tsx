import fontIransansx from '@/constants/fonts';
import '@/app/globals.css';
import { Providers } from './providers';
import { cn } from '@/utils/cn';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="rtl">
      <body
        cz-shortcut-listen="false"
        className={cn('relative', fontIransansx.className)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
