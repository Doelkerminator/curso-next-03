import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci'
import { IoCompass } from 'react-icons/io5'
import { SidebarItem } from './SidebarItem'
import { FaServer } from 'react-icons/fa'
import { BiCookie, BiShoppingBag } from 'react-icons/bi'

const menuItems = [
    {
        href: '/dashboard',
        icon: <IoCompass size={30} />,
        label: 'Dashboard'
    },
    {
        href: '/dashboard/todos',
        icon: <CiBookmarkCheck size={30} />,
        label: 'Todos'
    },
    {
        href: '/dashboard/server-todos',
        icon: <FaServer size={30} />,
        label: 'Server Actions'
    },
    {
        href: '/dashboard/cookies',
        icon: <BiCookie size={30} />,
        label: 'Cookies'
    },
    {
        href: '/dashboard/products',
        icon: <BiShoppingBag size={30} />,
        label: 'Products'
    }
];

export const Sidebar = () => {
    return (
        <aside className="overflow-auto ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="/dashboard" title="home" className='flex items-center'>
                        <IoCompass size={30} color="teal" />
                        <span className="text-2xl text-slate-600">Tailus</span>
                    </Link>
                </div>

                <div className="mt-2 text-center">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLcucaM34tHFK40M9EYGkF1UsI-8CpNglHA&s" alt="jochua" width={50} height={50} className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Inge Luis C. Martin</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-4">
                    {
                        menuItems.map((item, index) => (
                            <SidebarItem 
                                href={ item.href } 
                                icon={ item.icon } 
                                label={ item.label }
                                key={ index }/>
                        ))
                    }
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <CiLogout />
                    <span className="group-hover:text-gray-700">Logout</span>
                </button>
            </div>
        </aside>
    )
}
