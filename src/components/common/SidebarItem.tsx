'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props {
    icon: React.ReactNode;
    label: string;
    href: string;
}

export const SidebarItem = ({
    icon,
    label,
    href
}: Props) => {

    const path = usePathname();

    return (
        <>
            <li>
                <Link 
                    href={ href } 
                    className={"relative px-4 py-3 flex items-center space-x-4 rounded-xl" + (path === href ? ' text-white bg-gradient-to-r from-sky-600 to-green-400' : ' text-slate-500 hover:text-teal-500')}>
                    { icon }
                    <span className="-mr-1 font-medium inline-block">{ label }</span>
                </Link>
            </li>
        </>
    )
}
