import Image from 'next/image';
import CompanyOverview from '../../../public/images/company-overview.jpg';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="">
        <div>
          <Image
            src={CompanyOverview}
            alt="company-overview"
            className="w-full h-[100%] lg:h-[500px] object-cover"
          />
        </div>
        <div className="bg-white py-5">
          <ul className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <li>
              <Link
                href="#"
                className="text-md border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
              >
                COMPANY OVERVIEW
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-md border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
              >
                VISION
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-md border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
              >
                ABOUT LOGO
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-md border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
              >
                HONORS & AWARDS
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-company-overview flex items-center px-5 md:px-[70px] md:py-[80px] py-10">
          <div className="w-[100%] max-w-[600px] flex flex-col gap-4">
            <h3 className="border-b-4 border-[#C4956A]">Profile</h3>
            <p className="text-[15px]  text-justify">
              Raheja Developers is one of the largest Real Estate companies in
              India established in the year 1990 by Mr. Navin M. Raheja. The
              company has always maintained path breaking status and has
              pioneered various firsts in India. From trend setting luxury
              housing to providing homes for the poorest section of Indian
              society, from India’s tallest skyscrapers to 165 acres of plotted
              township, from changing the way people shop to changing the way
              people work, We have achieved it all.
            </p>
            <p className="text-[15px] text-justify">
              In our dynamic journey of last 30 years, we have collaborated with
              several top notch names in the field of construction, innovation,
              design, architecture, cinema and hotels. The Leela Hotel, Tata
              Housing, L&T, Best Western, Ginger hotel to name a few of our
              national alliances.Our legacy has always been to endeavor the best
              and deliver the best, creating value for money for everyone. The
              things are visible in the way we create our projects.
            </p>
          </div>
        </div>

        <div className="px-5 md:px-[70px] md:py-[80px] py-10 bg-gray-200">
          <div className="border  flex justify-between flex-col lg:flex-row  gap-6 lg:gap-2">
            <div className="flex flex-col  gap-5 w-[100%] max-w-[800px]">
              <p className="text-[15px] text-justify ">
                Raheja Developers is a pioneer in bringing in new innovations
                and construction practices to all its projects. It has always
                been the company’s endevour to deliver best quality products to
                its customers. Our motto has been to deliver on time, to deliver
                as promised and to design innovative green buildings. We bring
                international construction and technology partners like Arabtec,
                ECC, Thronton Tomasetti, Peri, Aedas in India. We were also
                amongst the first ones to bring affordable housing in the state
                of Haryana, under Pradhan Mantri Awas Yojana and Deen Dayal Jan
                Awas Yojana.
              </p>
              <p className="text-[15px] text-justify">
                So far we have delivered approximately 30 million Sq. Ft. of
                construction inventory across all segments. And Another 20
                million Sq. Ft. area including future developments is under
                execution. We have delivered approximately over 7,500 units and
                envisage to deliver another 8,400 in next 2 to 3 years.
              </p>
            </div>
            <div className="flex flex-col w-[100%] lg:w-[400px]">
              <div className="border-2 flex mx-auto  border-red-400 w-[360px] h-[250px]  rounded-2xl">
                <Image
                  src={CompanyOverview}
                  alt=""
                  className="m-auto w-[350px] h-[240px] rounded-2xl"
                />
              </div>
              <div className="lg:px-6 text-center  my-2">
                <h4 className="font-semibold text-[15px] ">Download</h4>
                <h4 className="text-[15px]  leading-4">Corporate Brochure</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
