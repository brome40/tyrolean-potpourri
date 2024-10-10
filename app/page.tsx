import Head from 'next/head';
import { ImageSlider } from "./components/ui/ImageSlider";


export default function ホーム() {
  return (
    <>
      <Head>
        <title>チロリアン ポッポリ</title>
        <meta name='description' content='数々のイベントやオクトーバーフェストで経験を積んできた、メンバーが集まりました。出演者全員が本格的な民族衣装で珍しい楽器を演奏したり、体験コーナーでは、ながーいアルプホルンや、牛の首につけるクーグロッケンに挑戦して頂けます。結婚式、パーティー、イベント、学校（芸術鑑賞会、入学式、卒業式、学園祭）、施設など、幅広いご要望にお応えいたします！皆さんと一緒に演奏したり、歌ったり、踊ったり、まるでそこはアルプスの少女ハイジの世界！！ちびっ子からお年寄りまで楽しめる、とびっきり愉快なポルカバンドです！'/>
      </Head>
      <div className="w-full flex flex-col items-center pt-5">
        <h1 className="text-3xl mb-8 font-bold z-20">チロリアン ポッポリ</h1>
        <h2 className="text-sm sm:text-lg lg:text-xl mb-5 text-center z-20">とびきり楽しいアルペンミュージックを！</h2>
        <div className='w-[80%] lg:w-[45%] p-2 mb-3'>
          <ImageSlider />
        </div>
        <p className='w-[80%] lg:w-[45%] text-center my-5'>チロリアンポッポリは、ドイツ・オーストリア・スイスなどのアルプス、チロル地方の民族音楽やドイツの伝統的な音楽を演奏する楽団です。数々のイベントやオクトーバーフェストで経験を積んできた、メンバーが集まりました。出演者全員が本格的な民族衣装で珍しい楽器を演奏したり、体験コーナーでは、ながーいアルプホルンや、牛の首につけるクーグロッケンに挑戦して頂けます。</p>
      </div>
    </>

  );
}
