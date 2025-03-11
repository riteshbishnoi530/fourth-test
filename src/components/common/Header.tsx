import React from 'react'
import Image from 'next/image'
import { DownArrow } from '@/utils/icons'

function Header() {
    return (
        <div className='px-4'>
        <div className='max-w-[1140px] mx-auto flex items-center justify-between py-4'>
            <div className='flex items-center gap-2.5'>
                <Image width={144} height={33} src="/assets/images/logo.webp" alt='logo' />
                <div className='h-[19px] bg-black w-[1.5px]'></div>
                <p className='font-medium font-syne'>TMM Accelerator</p>
            </div>
            <div className='flex items-center gap-[7px]'>
                <Image width={40} height={40} src="/assets/images/admin-profile.webp" alt='admin profile' />
                <div>
                    <p className='font-medium font-syne text-black'>Jhon doe</p>
                    <p className='text-sm text-black/70'>Admin</p>
                </div>
                <DownArrow/>
            </div>
        </div>
        </div>
    )
}

export default Header