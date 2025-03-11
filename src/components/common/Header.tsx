import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DownArrow } from '@/utils/icons'

function Header() {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const { firstName, lastName } = JSON.parse(savedData);
            setFirstName(firstName);
            setLastName(lastName);
        }
    }, []);
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        const storedImageUrl = localStorage.getItem('uploadedImageUrl');
        if (storedImageUrl) {
            setImageUrl(storedImageUrl);
        }
    }, []);
    return (
        <div className='px-4'>
            <div className='max-w-[1140px] mx-auto flex items-center justify-between py-4'>
                <div className='flex max-sm:flex-col items-center sm:gap-2.5'>
                    <div className='flex items-center gap-2.5'>
                        <Image width={144} height={33} src="/assets/images/logo.webp" alt='logo' />
                        <div className='h-[19px] bg-black w-[1.5px]'></div>
                    </div>
                    <p className='font-medium font-syne'>TMM Accelerator</p>
                </div>
                <div className='flex items-center gap-[7px]'>
                    <Image width={40} height={40} src="/assets/images/admin-profile.webp" alt='admin profile' />
                    <div>
                        <p className='font-medium font-syne text-black'>{firstName}</p>
                        <p className='text-sm text-black/70'>{lastName}</p>
                    </div>
                    <DownArrow />
                </div>
            </div>
        </div>
    )
}

export default Header