import Girl from "../images/11-11.svg";
import Wave from "../images/vstock svg-wave-events.png";
import Star from "../images/vstock svg-17.svg";
import StarOrange from "../images/vstock svg-17-sorange.svg";
import { useRef } from "react";

const Events = () => {
  const eventsSection = useRef(null);

  const gotoEventsSection = () => eventsSection.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className="bg-spurple lg:pt-[20vh] pt-[30vh] text-center relative overflow-hidden">
        <img src={Star} alt="" className="w-[43rem] absolute -left-[16.75rem] top-[5rem] z-0"/> 
        <img src={StarOrange} alt="" className="absolute left-[13rem] top-[43rem] z-0"/>
        <img src={StarOrange} alt="" className="absolute right-[12rem] top-[15rem] z-0"/>
        <img src={Star} alt="" className="w-[43rem] absolute -right-[21rem] top-[22rem] z-0"/>
        <img src={Girl} alt="" className="w-[295px] mx-auto mb-[1.75rem] relative z-10"/>
        <h1 className="text-white text-[4rem] lg:text-[5rem] leading-[5.6rem] font-medium align-middle px-[10vh] lg:px-[70vh] pb-[6vh] relative z-10">Lorem Ipsum sit dolor amet</h1>
        <p className="text-white pb-[6vh] lg:px-[45vh] px-[10vh] relative z-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus, nisl venenatis hendrerit sagittis, elit odio cursus orci.
        </p>
        <button className="bg-green text-black w-[28vh] h-[9.5vh] rounded-[40px] font-[500] text-lg hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:font-[600] transition ease-in-out duration-300" onClick={gotoEventsSection}>
            Lorem Ipsum
        </button>
        <img src={Wave} alt="" className="w-full pt-[28vh]"/>
      </div>
      <div className="bg-white pb-[5rem] text-center">
        <div ref={eventsSection} className="px-[8vh] lg:px-[13vh] lg:pt-[12vh]">
          <p>TODO</p>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">Informasi Personal</h1>
                <p className="text-black">
                    Mealth mengikuti prosedur standar menggunakan file log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs web. 
                    Semua perusahaan hosting melakukan ini dan merupakan bagian dari analisis layanan hosting. Informasi yang dikumpulkan oleh file log 
                    termasuk alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), tanggal dan waktu, halaman rujukan/keluar, dan 
                    mungkin jumlah klik. Ini tidak terkait dengan informasi apa pun yang dapat diidentifikasi secara pribadi. Tujuan informasi adalah untuk 
                    menganalisis tren, mengelola situs, melacak pergerakan pengguna di situs web, dan mengumpulkan informasi demografis.
                </p>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">Cookies</h1>
                <p className="text-black">
                    Seperti situs web lainnya, Mealth menggunakan 'cookie'. Cookie digunakan untuk menyimpan informasi seperti preferensi pengunjung 
                    dan halaman yang diakses atau dikunjungi pengunjung pada situs web ini. Informasi tersebut kami gunakan untuk mengoptimalkan 
                    pengalaman pengguna dengan menyesuaikan konten halaman web kami.
                </p>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">Hak Privasi Pihak Ketiga</h1>
                <p className="text-black">
                    Kebijakan Privasi Mealth tidak berlaku untuk pengiklan atau situs web lain. Karena itu, kami menyarankan Anda untuk membaca 
                    seksama masing-masing Kebijakan Privasi dari pihak ketiga untuk informasi yang lebih rinci. Anda berhak untuk menonaktifkan cookies 
                    pada browser Anda.
                </p>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">Persetujuan</h1>
                <p className="text-black">
                    Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui syarat dan ketentuannya.
                </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Events;