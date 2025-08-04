import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className="bg-slate-100 w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
                    
            <div className="flex">
                <div className="w-full text-slate-700">

                    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
                        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                        <div className="bg-cyan-600 px-2 text-sm rounded rotate-12 absolute">
                            Page Not Found
                        </div>
                        <div className="mt-5">
                            <div
                                className="relative inline-block text-sm font-medium text-cyan-600 group active:text-cyan-300 focus:outline-none focus:ring"
                            >
                                <span
                                    className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-cyan-600 group-hover:translate-y-0 group-hover:translate-x-0"
                                ></span>

                                <Link href="/dashboard" className="relative block px-8 py-3 bg-[#1A2238] border border-current">Go Home</Link>
                            </div>
                        </div>
                    </main>
                    
                </div>
            </div>
        </div>
    );
}
