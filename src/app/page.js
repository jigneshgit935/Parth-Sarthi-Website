import ParthVideo from '@/../public/video/Parth.mp4';

export default function Home() {
  return (
    <>
      <section className="border mt-[60px] h-[calc(100vh-60px)] bg-red-100">
        <div className="">
          <video controls autoPlay muted width="100%" height="100%">
            <source src={ParthVideo} type="video/mp4" />
          </video>
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
