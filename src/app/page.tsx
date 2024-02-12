import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Home - VIP CODE STUDIO',
  description: 'Aplikasi untuk belajar Next Js',
  authors: [{name: 'Fadhil Irsyad', url: 'https://localhost:3000'}],
  icons: {
    icon: '/icon.png'
  },
  openGraph: {
    title: 'Home - VIP CODE STUDIO',

  }
};


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
