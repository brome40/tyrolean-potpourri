import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import membersJSON from '../data/memberinfo.json';

type MemberData = {
  id: number,
  name: string,
  instruments: string[],
  bio: string,
  imgPath: string,
}[];

export default function メンバーたち () {
  const memberData:MemberData = membersJSON;
  return (
    <>
      <Head>
        <title>チロリアン ポッポリのメンバーたち</title>
        <meta name='description' content='チロリアンポッポリの4人のメンバー　様々な経歴をもつ愉快な仲間たちです'/>
      </Head>
      <div className="w-full flex flex-col items-center pt-5 mb-5">
        <h1 className="text-3xl mb-8 font-bold">メンバーたち</h1>
        <div className='flex flex-wrap justify-center'>
          {memberData.map(({ id, name, instruments, bio, imgPath }) => (
            <div key={id} className='bg-white border-4 border-[#990405] rounded-lg p-2 m-2 flex flex-col items-center w-4/5 md:w-2/5 lg:w-[22%] z-10'>
              <Image
                src={imgPath}
                alt={name}
                priority
                width={300}
                height={0}
                className='border-2 border-[#990405]'
              />
              <p className='text-xl md:text-xl lg:text-xl font-bold m-2'>{name}</p>
              <p className='text-sm md:text-base lg:text-sm mb-2 font-semibold'>{instruments.join(', ')}</p>
              <p className='text-xs md:text-sm lg:text-sm px-3 pb-2'>{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </>

  )
}
