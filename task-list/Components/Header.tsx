'use client';
import { useModalStore } from '@/public/store/ModalStore';
import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs';

function Header(){
    const openModal = useModalStore((state) => state.openModal);

    return (
        <header>
            <div className='flex flex-col items-center justify-items-center text-center p-5 
                   rounded-b-2xl'>
                <span className='text-2xl'>Task List</span>
                <button onClick={openModal} className='text-green-500 hover:text-green-600 mt-3'>
                    <BsFillPlusCircleFill className='h-10 w-10'/>
                </button>
                <div 
                className='
                  absolute
                  top-0
                  left-0
                  w-full
                  h-96
                  bg-gradient-to-br
                  from-[#EEEEEE]
                  to-[#F5EEE6]
                  rounded-md
                  filter
                  blur-3xl
                  opacity-50
                  -z-50
                '
                />
            </div>
        </header>
    )
}



export default Header;