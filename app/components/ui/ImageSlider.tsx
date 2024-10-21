'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const IMAGE_DATA = [
  {
    path: '/images/slider_01.PNG',
    altText: 'チロリアンポッポリのメンバーたち'
  },
  {
    path: '/images/slider_02.jpg',
    altText: 'ピアノの発表会でゲスト演奏！'
  },
  {
    path: '/images/slider_03.jpg',
    altText: 'ながーーいアルプホルンにみんな興味津々'
  },
  {
    path: '/images/slider_04.jpg',
    altText: '色々な楽器を使って演奏してます！'
  }
]

export function ImageSlider () {
  return (
    <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
      {IMAGE_DATA.map(({ path, altText }, index:number) => (
        <div key={index}>
          <Image src={path} alt={altText} width={450} height={100}/>
        </div>
      ))}
    </Carousel>
  )
}
