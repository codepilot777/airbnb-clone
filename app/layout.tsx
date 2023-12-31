import { Nunito } from 'next/font/google'

import getCurrentUser from '@/app/actions/getCurrentUser';
import ToastProvider from './providers/ToastProvider';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';

import './globals.css'
import ClientOnly from './components/ClientOnly';
const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <ToastProvider />
          <RentModal />
          <RegisterModal />
          <SearchModal />
          <LoginModal />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
