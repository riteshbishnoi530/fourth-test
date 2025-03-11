import React from 'react'

function Footer() {
    return (
        <div>
            
            <div className='bg-[#1B1B1B] px-4'>
                <div className='max-w-[1140px] mx-auto flex justify-between items-center py-[23px] max-sm:flex-col'>
                    <p className='text-sm text-white/50 '>Made with ❤️ for the people of the internet.</p>
                    <p className='text-sm text-white/50 '>© {new Date().getFullYear()} Dataskate.io, All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer