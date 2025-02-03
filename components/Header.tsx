'use client'
import React from 'react'
import Link from 'next/link'
import {cn} from '@/lib/utils';
import Image from 'next/image';

import { usePathname } from 'next/navigation';
import { Avatar, AvatarImage } from './ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { Session } from 'next-auth';
import { getInitials } from "@/lib/utils";

const Header = ({ session } : { session: Session}) => {
    const pathname = usePathname();
  return (
    <header  className='my-10 flex justify-between gap-5'>
        <Link href='/'>
            <Image src="/icons/logo.svg" alt='logo' width={40} height={40}></Image>
        </Link>

        <ul className='flex flex-row items-center gap-8'>
            <li>
                <Link href='/library' className={cn('text-base cursor-pointer capitalize', pathname === '/library' ? 'text-light-200' : 'text-light-100')}>
                    Library
                </Link>
            </li>

            <li>
                <Link href="/my-profile">
                    <Avatar className='w-12 h-12'>
                        <AvatarFallback className="w-full h-full flex items-center justify-center bg-amber-100 text-black text-lg font-bold">
                            {getInitials(session?.user?.name || "IN")}
                        </AvatarFallback>
                    </Avatar>
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
