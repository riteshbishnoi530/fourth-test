"use client";
import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Header from './common/Header';
import Footer from './common/Footer';
import { AddIcon, CheckFill, DragDropIcon, FileUpload } from '@/utils/icons';
import { FEATUERS_LIST } from '@/utils/helper';

function DragDrop() {
    const [uploadImg, setUploadImg] = useState<string>('');
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const fileName = file.name;
            setUploadImg(fileName);
            setIsUploading(true);

            const intervalId = setInterval(() => {
                setUploadProgress((prevProgress) => {
                    if (prevProgress < 100) {
                        return prevProgress + 1;
                    } else {
                        clearInterval(intervalId);
                        setIsUploading(false);
                        window.location.href = '/details-page';
                        return 100;
                    }
                });
            }, 10);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
    });

    return (
        <>
            <Header />
            <p className='font-semibold font-syne text-[32px] max-md:text-2xl max-sm:text-xl text-[#0D0D0D] text-center mt-9 mb-[34px]'>Read & process your files online</p>
            <div className='max-w-[786px] mx-auto p-4 rounded-xl shadow-[0px_16px_42.7px_0px_#00000014] mb-12'>
                <div {...getRootProps()} className='max-w-[754px] p-4 cursor-pointer w-full min-h-[326px] border-dashed border border-[#ED1C24] rounded-lg flex items-center justify-center'>
                    <div className='flex flex-col justify-center items-center'>

                        <input {...getInputProps()} />
                        {uploadImg ? (
                            <div className='flex items-center gap-2'>
                                <FileUpload />
                                <div className='w-full'>
                                    <div className='flex items-center gap-20 justify-between'>
                                        <p className='leading-[150%] text-[#0D0D0D] text-center'>Uploading <span className='font-bold'>{uploadImg}</span></p>
                                        <p className='text-center'>{uploadProgress}%</p>
                                    </div>
                                    {isUploading && (
                                        <>
                                            <div className='w-full bg-gray-200 h-[3px] mt-2 max-w-[500px]'>
                                                <div className={`bg-[#ED1C24] h-[3px] progress-bar`} style={{ width: `${uploadProgress}%` }} />
                                            </div>

                                        </>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <>
                                <DragDropIcon />
                                <p className='leading-[150%] text-[#0D0D0D] text-center mt-4'>Paste or drag and drop files here </p>
                                <p className='leading-[150%] text-black/40 text-center mt-1'>WAR, ZIP or EAR, file size no more than 10MB</p>
                                <div className='size-8 rounded-sm flex justify-center items-center bg-[#ED1C24] mt-4'>
                                    <AddIcon />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className='px-4 mb-[69px]'>
                <div className='max-w-[768px] mx-auto flex max-md:flex-col justify-between'>
                    <p className='max-w-[355px] max-md:max-w-[500px] text-sm text-black leading-[150%] max-md:text-center max-md:mx-auto'>Our accelerator allows you to upload, read, and process multiple file types (e.g., Python, JAR, ZIP), extracting key data like classes, methods, and structure for easy review.</p>
                    <div className='flex flex-col gap-2'>
                        {FEATUERS_LIST.map((item, index) => (
                            <div key={index} className='flex items-center gap-1.5'>
                                <CheckFill />
                                <p className='text-sm text-black leading-[150%]'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DragDrop;