"use client";
import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import Image from 'next/image'
import { DETAILED_LIST } from '@/utils/helper'
import { RightArrow } from '@/utils/icons'
import { useRouter, useSearchParams } from 'next/navigation';

function Dashboard() {
    const params = useSearchParams();
  const card = params.get("card") || "default-value";
  const router = useRouter();
  console.log(card, router);
    const [imageName, setImageName] = useState<string>('');
    useEffect(() => {
        const storedImageName = localStorage.getItem('uploadedImage');
        if (storedImageName) {
            setImageName(storedImageName);
        }
    }, []);
    return (
        <div className='bg-[#F6F6F6]'>
            <Header />
            <div className='max-w-[1172px] mx-auto mb-10 px-4 mt-6'>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl max-sm:text-xl font-semibold font-syne'>{imageName}</p>
                    <button className='uppercase font-medium font-syne rounded-md text-sm py-[15px] px-[22px] border border-[#0D0D0D80] leading-[100%]'>Upload more files</button>
                </div>
                <div className='flex max-lg:flex-col gap-6 mt-[23px]'>
                    <div className='max-w-[558px] max-lg:max-w-[650px] max-lg:mx-auto w-full flex justify-between items-center py-[19px] px-4 bg-white rounded-lg'>
                        <div className='flex items-center gap-4'>
                            <Image className='max-sm:size-10' width={60} height={60} src="/assets/images/complexity.webp" alt='complexity' />
                            <p className='font-medium text-xl max-sm:text-base font-syne'>Complexity of the code</p>
                        </div>
                        <button className='border border-[#ED1C24] rounded-[49px] h-fit text-[#ED1C24] font-medium text-sm py-[6px] px-4'>HIGH</button>
                    </div>
                    <div className='flex max-sm:flex-col w-full gap-6 justify-center'>
                        <div className='max-w-[267px] max-lg:max-w-[313px] max-sm:max-w-full w-full flex gap-4 sm:justify-between items-center py-[19px] px-4 bg-white rounded-lg'>
                            <Image className='max-sm:size-10' width={60} height={60} src="/assets/images/machines.webp" alt='complexity' />
                            <div>
                                <p className='text-[28px] font-medium'>-</p>
                                <p className='font-medium text-sm font-syne'>No of Machines</p>
                            </div>
                        </div>
                        <div className='max-w-[267px] max-lg:max-w-[313px] max-sm:max-w-full w-full flex gap-4 sm:justify-between items-center py-[19px] px-4 bg-white rounded-lg'>
                            <Image className='max-sm:size-10' width={60} height={60} src="/assets/images/pars.webp" alt='complexity' />
                            <div>
                                <p className='text-[28px] font-medium'>-</p>
                                <p className='font-medium text-sm font-syne'>No of Machines</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='font-semibold text-2xl font-syne mt-[31px]'>Detailed metrices</p>
                <div className='flex max-lg:flex-col gap-6 mt-6'>
                    <div className='max-w-[558px] max-lg:mx-auto w-full flex flex-col gap-4'>
                        {DETAILED_LIST.map((obj, i) => (
            <button
              key={i}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                router.push(
                  `/details-page?card=${obj.heading
                    .toLowerCase()
                    .replaceAll(" ", "-")}`,
                  
                );
              }}
              className={`w-full bg-white flex rounded-lg cursor-pointer border border-solid items-center text-sm justify-between py-3 px-4 ${
                card === obj.heading.toLowerCase().replaceAll(" ", "-")
                  ? "border-custom-red"
                  : "border-transparent"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="size-[40px] bg-custom-off-white flex items-center justify-center rounded-full font-medium text-2xl leading-[100%]">
                  {obj.number}
                </div>
                <p>{obj.heading}</p>
              </div>
              <RightArrow/>
            </button>
          ))}
                    </div>
                    <Image className='pointer-events-none max-w-[558px] w-full max-lg:mx-auto' width={558} height={464} src="/assets/images/starter-processes.webp" alt='starter processes' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard