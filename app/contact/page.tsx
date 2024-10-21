import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function お問合せ() {
  return (
    <>
      <Head>
        <title>チロリアン ポッポリのお問合せ</title>
        <meta name='description' content='お電話、メール、インスタグラムからお問い合わせください'/>
      </Head>
      <div className="w-full flex flex-col items-center pt-5 mb-5">
        <h1 className="text-3xl font-bold mb-5 z-20">お問合せ</h1>
        <Image
          src='/images/all_members.jpg'
          alt='チロリアンポッポリのメンバーたち'
          priority
          width={300}
          height={100}
          className='z-10 border-2 border-[#990405] rounded-lg w-[80%] md:w-[40%] lg:w-[25%]'
        />
        <p className='w-[70%] lg:w-[25%] text-center my-5 z-20'>結婚式、パーティー、イベント、学校（芸術鑑賞会、入学式、卒業式、学園祭）、施設など、幅広いご要望にお応えいたします！</p>
        <h2 className="text-base sm:text-lg lg:text-xl mb-5 text-center font-semibold z-20">お気軽にお問合せください！</h2>
        <div className='my-5 flex flex-col items:center gap-2'>
          <div className='flex items-center'>
            <a href='tel:+8107028325562' target='_blank' rel="noopener noreferrer" className='relative z-20 cursor-pointer'>
              <Image
                src='/svg/phone.svg'
                alt='電話番号'
                width={25}
                height={25}
                className='mr-2'
              />
            </a>
            <p className='text-xl lg:text-2xl z-20'>: <a href='tel:+8107028325562' target='_blank' rel="noopener noreferrer" className='underline relative cursor-pointer text-blue-500 hover:text-blue-400'>070-2832-5562</a></p>
          </div>
          <div className='flex items-center'>
            <a href='mailto:tirolienpop@gmail.com' target='_blank' rel="noopener noreferrer" className='relative z-20 cursor-pointer'>
              <Image
                src='/svg/email.svg'
                alt='電子メールアドレス'
                width={25}
                height={25}
                className='mr-2'
              />
            </a>
            <div className='text-xl lg:text-2xl z-20'>: <a href='mailto:tirolienpop@gmail.com' target='_blank' rel="noopener noreferrer" className='underline relative cursor-pointer text-blue-500 hover:text-blue-400'>tirolienpop@gmail.com</a></div>
          </div>
          <div className='flex items-center' >
            <a href='https://www.instagram.com/tirolien_pop/?igshid=MzRlODBiNWFlZA%3D%3D' target='_blank' rel="noopener noreferrer" className='relative z-20 cursor-pointer'>
              <Image
                src='/svg/instagram.svg'
                alt='インスタグラム'
                width={25}
                height={25}
                className='mr-2'
              />
            </a>
            <div className='text-xl lg:text-2xl z-20'>: <a href='https://www.instagram.com/tirolien_pop/?igshid=MzRlODBiNWFlZA%3D%3D' target='_blank' rel="noopener noreferrer" className='underline relative cursor-pointer text-blue-500 hover:text-blue-400'>tirolien_pop</a></div>
          </div>
        </div>
      </div>
    </>
  )
}
