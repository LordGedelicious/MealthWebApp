import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wave from "../images/vstock svg-wave-privacypolicy1.svg";
import Star from "../images/vstock svg-07.svg";
import { useRef } from "react";

const PrivacyPolicy = () => {
  const privacyPolicySection = useRef(null);

  const gotoPrivacyPolicySection = () => privacyPolicySection.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Navbar />
      <div className="bg-red pt-[40vh] text-center pb-[9vh] relative overflow-hidden">
        <img src={Star} alt="" className="w-[23rem] absolute -left-[8.2rem] top-[8rem]"/>
        <img src={Star} alt="" className="w-[10rem] absolute left-[13rem] top-[18rem] rotate-[30deg]"/>
        <img src={Star} alt="" className="w-[12.5rem] absolute left-[43%] top-[6.5rem]"/>
        <img src={Star} alt="" className="w-[11rem] absolute right-[6rem] top-[23.5rem] rotate-[-36deg]"/>
        <img src={Star} alt="" className="w-[23rem] absolute -right-[10rem] top-[28rem]"/>

        <h1 className="text-white text-[5rem] leading-[5.6rem] font-medium align-middle px-[60vh] mx-[10vh] pb-[6vh]">Privacy and Policy Mealth</h1>
        <p className="text-white pb-[6vh] px-[28vh]">
            Di Webapp Mealth, salah satu prioritas utama kami adalah privasi pengunjung kami. 
            Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat 
            oleh Mealth dan bagaimana kami menggunakannya.
            <br />
            <br />
            Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang 
            Kebijakan Privasi kami, jangan ragu untuk menghubungi kami.
        </p>
        <button className="bg-green text-black w-[28vh] h-[9.5vh] rounded-[40px] font-extrabold text-lg hover:scale-110 ease-in duration-300" onClick={gotoPrivacyPolicySection}>
            LEARN MORE!
        </button>
      </div>
      <div className="bg-white pb-[5rem] text-center">
        <img src={Wave} alt="" className="w-full mb-[6vh]"/>
        
        <div ref={privacyPolicySection} className="px-[13vh]">
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
      <Footer />
    </>
  );
};

export default PrivacyPolicy;