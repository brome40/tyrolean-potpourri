import React from 'react';
import Head from 'next/head';

export default function プレビュー() {
  return (
    <>
      <Head>
        <title>チロリアン ポッポリのお問合せ</title>
        <meta name='description' content='チロリアンポッポリの4人のメンバー様々な経歴をもつ愉快な仲間たちです'/>
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="w-full flex flex-col items-center">
        <h1 className="font-niconico text-5xl my-5 text-[#990405] z-20">ビデオ</h1>
        <h2 className='w-[80%] text-[0.75rem] md:text-base lg:text-lg text-center my-2 z-20'>東京都西東京市のタクトホームこもれびGRAFAREホール（保谷こもれびホール）開館25周年記念式典に出演しました！</h2>
        <div className='z-20 w-full flex flex-col items-center lg:flex-row lg:justify-center mb-5'>
          <iframe
            className='my-2 w-[75%] h-[30vh] md:w-[60%] md:h-[45vh] lg:w-[450px] lg:h-[280px]'
            src="https://www.youtube.com/embed/Nod8orrFfAU?si=XpWy2wXjHuvVG2ZE"
            title="YouTube Video Player"
            referrerPolicy="strict-origin-when-cross-origin"
            loading='lazy'
            allowFullScreen
          />
          <iframe
            className='m-2 w-[75%] h-[30vh] md:w-[60%] md:h-[45vh] lg:w-[450px] lg:h-[280px]'
            src="https://www.youtube.com/embed/ymIQBkErF8I?si=nStY-A_M5Up_ZnLj"
            title="YouTube Video Player"
            referrerPolicy="strict-origin-when-cross-origin"
            loading='lazy'
            allowFullScreen
          />
          <iframe
            className='my-2 w-[75%] h-[30vh] md:w-[60%] md:h-[45vh] lg:w-[450px] lg:h-[280px]'
            src="https://www.youtube.com/embed/q__HT4DiPMw?si=IoTNMoq_38EE4KPF"
            title="YouTube Video Player"
            referrerPolicy="strict-origin-when-cross-origin"
            loading='lazy'
            allowFullScreen
          />
        </div>
        <h1 className="font-niconico text-5xl my-5 text-[#990405] z-20">プログラム例</h1>
        <ol className='list-decimal mb-8 text-[0.75rem] md:text-base lg:text-lg z-20'>
          <li><p>シュッツェンリーゼル・ポルカ</p></li>
          <li><p>クフシュタインの歌</p></li>
          <li><p>二つのリズム</p></li>
          <li><p>楽器紹介、民俗衣装について</p></li>
          <li><p>アルプホルンに挑戦しよう！</p></li>
          <li><p>エーデルワイス（クーグロッケン）</p></li>
          <li><p>クーグロッケン（牛の首につける鈴）に挑戦しよう！</p></li>
          <li><p>サウンド・オブ・ミュージック・ メドレー</p></li>
          <li><p>アヒルのダンス（皆で踊ろう！）</p></li>
          <li><p>愉快に歩けば</p></li>
        </ol>
      </div>
    </>
  );
};
