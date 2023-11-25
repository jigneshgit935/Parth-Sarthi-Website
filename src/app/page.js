import ParthVideo from '@/../public/Parth.mp4';

export default function Home() {
  return (
    <>
      <section className="mt-[60px] h-[calc(100vh-60px)] ">
        <div className="">
          <video
            src={require('./../../public/Parth.mp4')}
            width={'100%'}
            height={'100%'}
            autoPlay
            loop
          />
        </div>

        <div className="w-full overflow-hidden bg-[#C4956A] py-3 text-white">
          <div className="animate-marquee text-xl">
            Farm Plots from 4000 sq. mtrs to 10000 sq. mtrs. Ideal for
            farmhouses, with CLU of over 10000 Sq. ft built up sanctionable
            area, just 15 minutes from Airport and Rajiv Chowk through New
            Delhi-Jaipur Super Expressway
          </div>
        </div>
      </section>
    </>
  );
}
