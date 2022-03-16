import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wave from "../images/vstock svg-wave-termsandcondition1.svg";
import Star from "../images/vstock svg-05.svg";
import { useRef } from "react";

const TermsAndConditions = ({ data }) => {
  const termsAndConditionsSection = useRef(null);
  const gotoTermsAndConditionsSection = () => termsAndConditionsSection.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className="bg-blue pt-[40vh] text-center pb-[9vh] relative overflow-hidden">
        <img src={Star} alt="" className="w-[27rem] absolute -left-[10rem] top-[22rem] rotate-[-30deg]"/>
        <img src={Star} alt="" className="w-[14rem] absolute left-[6rem] top-[18rem] rotate-[14deg]"/>
        <img src={Star} alt="" className="w-[16rem] absolute left-[43%] top-[5rem]"/>
        <img src={Star} alt="" className="w-[10rem] absolute right-[14rem] top-[23rem] rotate-[-20deg]"/>
        <img src={Star} alt="" className="w-[27rem] absolute -right-[8rem] top-[7rem] rotate-[30deg]"/>

        <h1 className="text-white text-[5rem] leading-[5.6rem] font-medium align-middle px-[60vh] mx-[10vh] pb-[6vh]">Terms and Conditions</h1>
        <p className="text-white pb-[6vh] px-[30vh]">
            Dengan mengunduh, mengakses atau menggunakan Webapp Mealth (Selanjutnya disebut sebagai "<strong>Webapp</strong>"), 
            Anda setuju untuk terikat dengan Syarat dan Ketentuan Penggunaan Webapp Mealth ini (Selanjutnya disebut 
            sebagai "<strong>Syarat dan Ketentuan</strong>"). Syarat & Ketentuan ini mempengaruhi hak dan kewajiban hukum Anda. 
            Apabila Anda tidak setuju untuk terikat oleh semua Syarat & Ketentuan ini, anda dapat menghapus Webapp 
            dan/atau membatalkan akun anda dan/atau tidak menggunakan layanan yang terdapat dalam Webapp.
        </p>
        <button className="bg-green text-black w-[28vh] h-[9.5vh] rounded-[40px] font-extrabold text-lg hover:scale-110 ease-in duration-300" onClick={gotoTermsAndConditionsSection}>
            LEARN MORE!
        </button>
      </div>
      <div className="bg-white pb-[5rem] text-center">
        <img src={Wave} alt="" className="w-full mb-[6vh]"/>
        
        <div ref={termsAndConditionsSection} className="px-[15vh]">
            {/* {renderList} */}
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">A. KETENTUAN UMUM</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Webapp ini berfungsi sebagai sarana untuk menyediakan konten maupun
                                menghubungkan Anda dengan penyedia layanan terkait kelainan Eating
                                Disorder.
                            </p>
                        </li>
                        <li>
                            <p>
                                Webapp ini memiliki beberapa layanan yang dapat anda gunakan. Jenis
                                layanan tersebut adalah:
                            </p>
                        </li>
                            <ol style={{listStyleType: "lower-roman"}} className="ml-[3rem]">
                                <li>
                                    <p>Konsultasi</p>
                                </li>
                                <li>
                                    <p>Chatbot</p>
                                </li>
                                <li>
                                    <p>Komunitas</p>
                                </li>
                            </ol>
                        <li>
                            <p>
                                Dalam layanan konseling, kami akan menghubungkan anda dengan Expert
                                Partner kami. “<strong>ExpertPartner</strong>” adalah konselor/psikolog profesional
                                dan berlisensi, yakni memiliki Surat Izin Praktik Psikologi yang
                                aktif dari Himpunan Psikologi Indonesia (HIMPSI).
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda menyetujui bahwa seluruh percakapan anda dengan Expert Partner
                                akan disimpan secara otomatis dan akan digunakan untuk kepentingan
                                legal serta peningkatan pelayanan kami. Kerahasiaan percakapan anda
                                terjamin dan tidak akan disebarluaskan.
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda menyetujui bahwa anda menyatakan dan menjamin diri anda
                                sebagai subjek hukum yang dapat melakukan perjanjian dan dapat
                                mengikatkan diri terhadap itu sesuai dengan peraturan
                                perundang-undangan yang berlaku, bahwa anda berusia minimal 18
                                tahun (tujuh belas tahun).
                            </p>
                        </li>
                        <li>
                            <p>
                                “<strong>Pihak Ketiga</strong>” adalah setiap orang atau badan hukum yang mengadakan
                                kerjasama bisnis dengan kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami dapat menggunakan pihak ketiga dalam memproses pembayaran anda
                                untuk layanan. Kami tidak bertanggung jawab atas kegagalan sistem
                                yang dapat terjadi pada pihak ketiga yang berpengaruh pada
                                pembayaran Anda.
                            </p>
                        </li>
                        <li>
                            <p>
                                Apabila terjadi masalah pada pihak ketiga dan mengganggu proses
                                bisnis kami, kami akan mengupayakan agar Anda mendapatkan akses
                                dan/atau layanan yang optimal.
                            </p>
                        </li>
                        <li>
                            <p>
                                Dengan memasukkan alamat email Anda ke Webapp, menandakan bahwa
                                Anda setuju untuk menerima komunikasi dari kami secara elektronik.
                                Kami akan berkomunikasi dengan Anda melalui e-mail atau melalui
                                Layanan kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda akan merahasiakan dan tidak akan menyalahgunakan informasi
                                yang Anda terima dari penggunaan Webapp. Anda akan menggunakan
                                Webapp dengan hormat dan tidak akan melakukan perilaku atau
                                aktivitas tidak sah, mengancam, atau melecehkan saat menggunakan
                                Layanan.
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda mengetahui dan setuju bahwa setiap informasi dalam bentuk
                                apapun, termasuk namun tidak terbatas pada video, audio, gambar
                                atau tulisan yang ada dalam Webapp memiliki hak atas kekayaan
                                intelektual (termasuk namun tidak terbatas kepada hak atas merek
                                dan hak cipta) masing-masing. Anda tidak diperbolehkan untuk
                                menggunakan, mengubah, memfasilitasi, menyebarluaskan dan/atau
                                memutilasi hak atas kekayaan intelektual tersebut tanpa izin dari
                                pemilik hak atas kekayaan intelektual tersebut sebagaimana diatur
                                dalam peraturan perundang-undangan yang berlaku.
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda setuju bahwa semua perjanjian, pemberitahuan, pengungkapan dan
                                komunikasi lainnya yang kami sediakan untuk Anda secara elektronik
                                memenuhi segala persyaratan hukum yang dibuat secara tertulis dan
                                memiliki kekuatan hukum yang sama.
                            </p>
                        </li>
                        <li>
                            <p>
                                Perlu dipahami bahwa kami merupakan perusahaan teknologi dan Kami 
                                <strong> bukanlah biro psikologi atau label rekaman</strong>.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">B. KETENTUAN PENGGUNAAN WEBAPP</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Proses pendaftaran mewajibkan Anda untuk memberikan informasi
                                pribadi yang akurat, terkini, dan lengkap, yang mungkin kami minta
                                dari Anda dari waktu ke waktu, termasuk tetapi tidak terbatas pada
                                alamat email, nama, gender, tanggal lahir, dan lain-lain kepada
                                kami. Apabila terdapat perubahan apa pun dalam informasi Anda,
                                harap memberitahu Webapp secepatnya.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami dapat meminta informasi atau dokumentasi tambahan kapan pun
                                untuk memverifikasi identitas, umur, dan/atau memverifikasi detail
                                bank atau debit, kredit, fasilitas prabayar Anda, maupun jenis akun
                                pembayaran lainnya yang didaftarkan kepada kami. Anda menyetujui
                                bahwa Anda akan memberikan informasi dan/atau dokumentasi dengan
                                cepat kepada kami sesuai permintaan. Jika Anda tidak memberikan
                                informasi dan/atau dokumentasi dengan cepat, kami dapat, tanpa
                                tanggung jawab kepada Anda, membatasi penggunaan Anda atas Layanan
                                atau menangguhkan atau menutup akun Anda.
                            </p>
                        </li>
                        <li>
                            <p>
                                Hanya Anda yang dapat menggunakan akun Anda sendiri, dan Anda
                                berusaha untuk tidak memberikan wewenang kepada pihak lain untuk
                                menggunakan identitas atau akun Anda. Anda tidak boleh mengalihkan
                                atau memindahkan akun Anda ke pihak lain. Anda harus menjaga agar
                                kata sandi akun dan identifikasi apa pun yang kami berikan kepada
                                Anda tetap aman dan rahasia.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna diwajibkan untuk merahasiakan kata sandi untuk mencegah
                                penyalahgunaan secara tidak sah. Kami akan menganggap semua
                                kegiatan yang dilakukan dengan password pengguna sebagai kegiatan
                                yang telah dilakukan oleh pemegang kata sandi atau dirinya sendiri.
                                Pengguna bebas untuk berhenti menggunakan layanan ini dengan
                                mengakhiri akun mereka. Kami berhak menangguhkan atau menghapus
                                akun tanpa memberikan pemberitahuan terlebih dahulu kepada pengguna
                                jika mereka melanggar Syarat dan Ketentuan.
                            </p>
                        </li>
                        <li>
                            <p>
                                Semua data pribadi yang diberikan kepada kami akan dikumpulkan,
                                ditangani, disimpan, dan diproses sesuai dengan Kebijakan Privasi
                                Mealth. Dengan menerima Syarat dan Ketentuan ini, Anda juga setuju
                                untuk memberikan izin sesuai yang dibutuhkan di bawah Kebijakan
                                Privasi kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda bertanggung jawab sepenuhnya untuk menjaga agar nama pengguna
                                dan kata sandi Anda di Webapp dan Layanan tetap aman. Anda
                                dianjurkan untuk mengubah kata sandi secara berkala. Kami tidak
                                akan bertanggung jawab atas pengungkapan atau penggunaan tidak sah
                                apa pun dari nama pengguna atau kata sandi Anda, termasuk yang
                                disebabkan oleh kecerobohan dan/atau kelalaian Anda.
                            </p>
                        </li>
                        <li>
                            <p>
                                Penggunaan nama pengguna atau kata sandi apa pun di Webapp akan
                                dianggap sebagai penggunaan Layanan. Informasi, data, atau
                                komunikasi apa pun yang dipublikasikan, dikirimkan, atau
                                diterbitkan selama periode Anda masuk dengan nama pengguna dan kata
                                sandi (baik secara sah maupun tidak sah) akan dianggap
                                dipublikasikan, dikirimkan, atau diterbitkan oleh Anda. Anda akan
                                bertanggung jawab sepenuhnya atas pengiriman, pemberitahuan, atau
                                komunikasi apa pun dan setuju untuk mengganti rugi dan membebaskan
                                Kami dari kerugian, kerusakan, pengeluaran, dan/atau tanggung jawab
                                atas tindakan yang disebabkan oleh penggunaan nama pengguna dan
                                kata sandi Anda di Webapp, kecuali Anda dapat menunjukkan bahwa
                                penggunaan tersebut tidak disebabkan oleh tindakan, kecerobohan,
                                kelalaian, dan/atau kelengahan Anda.
                            </p>
                        </li>
                        <li>
                            <p>
                                Hak pengguna untuk menggunakan layanan akan <strong>berakhir</strong> ketika akun
                                Anda <strong>telah dihapus untuk alasan apapun</strong>. Akun tersebut tidak dapat
                                dikembalikan bahkan jika Pengguna tidak sengaja menghapus akun
                                mereka. Setiap akun di Layanan untuk penggunaan eksklusif dan milik
                                semata-mata untuk pemilik akun. Pengguna tidak dapat mentransfer
                                atau meminjamkan account mereka ke pihak ketiga atau mewariskan
                                kepada pihak ketiga.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami menyimpan informasi pribadi Anda selama informasi tersebut
                                berhubungan dengan tujuan-tujuan yang dibutuhkan untuk kepentingan
                                pelayanan Kami kepada Anda. Kerahasiaan informasi pribadi Anda
                                tentunya dianggap rahasia dan tidak akan disebarluaskan kecuali
                                apabila telah mendapat persetujuan oleh Anda berdasarkan Kebijakan
                                Privasi ini atau diwajibkan oleh peraturan perundang-undangan yang
                                berlaku.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami sangat menghargai privasi Pengguna dan berusaha untuk
                                melindunginya sesuai dengan kebijakan privasi Mealth
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">C. LAYANAN WEBAPP</h1>
                <div className="text-black text-justify">
                    <p>
                        Sehubungan dengan penyebutan jenis-jenis layanan yang telah disebutkan dalam klausula j pada bagian Ketentuan Umum dalam Syarat dan Ketentuan ini bahwa terdapat 
                        layanan konsultasi, layanan terapi, dan konten edukasi maka akan dijabarkan sebagai berikut:
                    </p>
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Konseling <br />
                                Layanan Konseling merupakan layanan online yang menghubungkan Anda sebagai
                                Pengguna kepada Expert Partner. Anda dan Expert Partner dapat berkonsultasi
                                dan berkomunikasi secara langsung melalui Webapp Android. Untuk pengguna
                                iOS, dapat berkomunikasi dan berkonsultasi dengan Expert Partner melalui
                                Line@ Kami. Dalam layanan ini, anda dapat mengunggah dan mengirimkan konten
                                apapun yang ingin anda bicarakan kepada Expert Partner sepanjang tidak
                                melanggar Syarat dan Ketentuan Kami dan/atau peraturan perundang-undangan
                                yang berlaku. Hubungan konseling yang dilakukan hanyalah sebatas antara
                                pengguna dan Expert Partner dengan tujuan untuk melakukan sesi konseling.
                                Anda akan mendapatkan umpan balik dari Expert Partner serta mendapatkan
                                rekomendasi terkait keluhan yang disampaikan.
                            </p>
                        </li>
                        <li>
                            <p>
                                Layanan Terapi <br />
                                Layanan Terapi merupakan layanan online lanjutan setelah layanan konseling.
                                Pengguna dapat berinteraksi secara online dengan Expert Partner dan Expert
                                Partner berhak melakukan tindakan sesuai dengan peraturan praktik Psikolog
                                dan/atau Psikiater dan/atau Nutritionist. Dalam layanan ini, anda dapat
                                mengunggah dan mengirimkan konten apapun yang ingin anda bicarakan kepada
                                Expert Partner sepanjang tidak melanggar Syarat dan Ketentuan Kami dan/atau
                                peraturan perundang-undangan yang berlaku. Layanan terapi yang dilakukan
                                hanyalah sebatas antara pengguna dan Expert Partner dengan tujuan untuk
                                melakukan terapi upaya penyembuhan dari PMM.
                            </p>
                        </li>
                        <li>
                            <p>
                                Konten Edukasi <br />
                                Konten Edukasi merupakan layanan media sosial berbasis komunitas yang
                                didalamnya terkandung informasi-informasi terkait PMM, pola makan sehat,
                                dan penanggulangan PMM. Pengguna dapat menggunakan layanan ini sebagai
                                media untuk bercerita ataupun berinteraksi dengan kami atau para pengikut
                                media sosial kami. Tujuan dari adanya layanan ini adalah menginformasikan
                                kepada masyarakat bahwa PMM adalah hal yang akan fatal akibatnya apabila
                                tidak ditanggulangi, selain itu kami juga akan meningkatkan kesadaran
                                masyarakat bahwa PMM bukanlah hal yang tabu.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">D. LARANGAN WEBAPP</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Pengguna dilarang untuk menggunakan layanan untuk tindakan lain
                                yang tidak memiliki kaitan apapun akan permasalahan PMM.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna tidak diperbolehkan untuk mendaftar lebih dari sekali dan
                                mendaftar untuk orang lain, maupun mendaftar atas nama orang lain
                                selain untuk diri mereka sendiri.
                            </p>
                        </li>
                        <li>
                            <p>
                                Layanan konseling dan terapi tidak diperuntukkan sebagai fasilitas
                                tanya jawab, belajar, mengerjakan tugas, wawancara, biro jodoh,
                                berkenalan, interview, peta, usul, permintaan, menggunakan Webapp
                                sebagai media penyebaran iklan atau materi apapun yang tidak
                                diinginkan oleh pihak ketiga, mengirimkan surat berantai, atau
                                membuat skema piramida, serta mempublikasikan konten lebih dari
                                sekali (spamming) dan hal lain di luar permasalahan psikologis.
                            </p>
                        </li>
                        <li>
                            <p>
                                Apabila pengguna memanfaatkan layanan konseling dan terapi tidak
                                sesuai dengan tujuan layanan, maka Expert Partner berhak untuk
                                tidak merespon pengguna. Kami memiliki diskresi penuh untuk
                                menentukan apakah tindakan pengguna telah sesuai dengan tujuan
                                layanan dan memberikan penalti yang sesuai.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna tidak boleh mengungkapkan informasi rahasia melalui
                                Layanan, termasuk, tanpa batasan, informasi kartu debit atau
                                informasi kartu kredit orang lain atau nomor identitas nasional,
                                nomor telepon non-publik atau alamat email non-publik.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna dilarang keras memfitnah, mengikuti, mengganggu,
                                menyalahgunakan, melecehkan, mengancam, memberikan informasi yang
                                salah, palsu, atau menyesatkan, mencemarkan, meniru, mengintimidasi
                                atau tindakan lainnya termasuk untuk ajakan bunuh diri kepada
                                pengguna lain di luar peruntukkan konseling masalah kepada Expert
                                Partner.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna tidak boleh menggunakan Layanan untuk tujuan ilegal atau
                                tidak sah yang melanggar hukum, putusan pengadilan, Yurisprudensi
                                atau tindakan administratif yang mengikat secara hukum. Anda setuju
                                untuk mematuhi semua hukum, peraturan dan ketentuan yang berlaku
                                untuk penggunaan Layanan tersebut.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna tidak boleh berpartisipasi dalam kegiatan yang melanggar
                                hak kekayaan intelektual, seperti hak cipta, merek dagang dan hak
                                paten, ketenaran, privasi, dan semua hak-hak lain dari Kami
                                dan/atau pihak ketiga yang diberikan oleh undang-undang atau
                                kontrak.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna tidak dapat mengubah, memodifikasi, mengadaptasi atau
                                mengubah Layanan atau mengubah, memodifikasi atau mengubah situs
                                web lain sehingga dapat palsu menyiratkan bahwa hal ini terkait
                                dengan Layanan atau Webapp.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna dilarang mengakses API private dari Webapp dengan cara
                                selain yang diizinkan oleh Kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna tidak boleh mengganggu atau mengacaukan Layanan atau
                                server atau jaringan yang terhubung dengan Layanan, termasuk dengan
                                mengirimkan setiap worm, virus,trojan horse, atau teknologi
                                pemrograman komputer lain, properti apa pun dari Pelanggan lain,
                                Penyedia Layanan, dan pihak ketiga mana pun, termasuk pengguna lain
                                di Webapp dan Layanan, termasuk tidak terbatas pada spyware,
                                malware, menggunakan proxy yang menganonimkan, atau kode lainnya
                                yang bersifat merusak atau mengganggu. Anda tidak dapat
                                menyuntikkan konten atau kode atau mengubah atau mengganggu dengan
                                cara apapun pada halaman Webapp maupun situs web Kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna tidak dapat melakukan langkah-langkah teknis lainnya yang
                                dengan sengaja mengakibatkan cacat dari Layanan; dengan demikian
                                membuat pertanyaan yang tidak beralasan dan/atau klaim yang tidak
                                sepantasnya seperti berulang kali mengajukan pertanyaan yang sama
                                di luar kebutuhan, dan mengganggu operasi Kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna tidak boleh melakukan kegiatan lain yang membantu atau
                                mendorong aktivitas apapun yang disebutkan di atas atau kegiatan
                                lain yang dianggap tidak pantas.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna dilarang menolak secara tidak wajar terkait dengan
                                informasi yang akan anda berikan kepada Kami untuk bekerjasama
                                dalam penyelidikan yang dilakukan oleh Kami atau memberikan
                                konfirmasi mengenai identitas Anda atau informasi lain yang
                                diminta.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna dilarang mengambil tindakan apapun yang memaksakan beban
                                berat yang tidak wajar atau tidak proporsional ke infrastruktur
                                kami atau tindakan lain yang dapat mengakibatkan risiko atau
                                masalah material untuk infrastruktur Kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna dilarang untuk menyebarkan atau mempromosikan materi tidak
                                senonoh, pornografi, atau menyinggung dan/atau materi lain yang
                                bertentangan dengan kebijakan publik dan/atau hukum atau peraturan
                                perundang-undangan yang berlaku
                            </p>
                        </li>
                        <li>
                            <p>
                                Pengguna dilarang menggunakan Webapp, akun anda, atau Layanan untuk
                                melakukan perbuatan yang mengakibatkan atau dapat mengakibatkan
                                keluhan, perselisihan, penalti, tuntutan, denda, dan tanggung jawab
                                lain kepada Kami, pihak ketiga, atau pengguna lain, termasuk
                                melakukan perbuatan yang diakibatkan oleh perbuatan Anda atau
                                kelalaian Anda, termasuk melakukan apapun yang dapat menyebabkan
                                kami kehilangan layanan apapun dari penyedia layanan internet,
                                pemroses pembayaran, atau penyedia kami lainnya
                            </p>
                        </li>
                        <li>
                            <p>
                                Apabila kami memiliki alasan kuat atas dugaan adanya perbuatan yang
                                terbukti memenuhi unsur-unsur ketentuan tersebut di atas, maka kami
                                dapat, tanpa pemberitahuan dan/atau tanggung jawab terhadap Anda,
                                melakukan tindakan sebagai berikut:
                            </p>
                        </li>
                        <ol style={{listStyleType: "lower-roman"}} className="ml-[3rem]">
                            <li>
                                <p>
                                    Melaporkan aktivitas mencurigakan atau ilegal apa pun ke
                                    otoritas yang relevan
                                </p>
                            </li>
                            <li>
                                <p>
                                    Membatalkan atau menolak transaksi dalam bentuk apapun
                                </p>
                            </li>
                            <li>
                                <p>
                                    Menangguhkan (suspending) atau menutup akun Anda
                                </p>
                            </li>
                            <li>
                                <p>
                                    Menerapkan kebijaksanaan tunggal kami dalam rangka prosedur
                                    pencegahan dan deteksi serta menolak pelaksanaan transaksi jika
                                    kami mengetahui adanya dasar untuk menduga bahwa akun Anda
                                    digunakan atau mungkin digunakan untuk tujuan yang ilegal,
                                    tidak sah, atau penipuan; atau
                                </p>
                            </li>
                            <li>
                                <p>
                                    Mengambil langkah lebih lanjut sesuai yang dianggap perlu oleh
                                    Kami, sesuai kebijaksanaan tunggal kami, termasuk mengambil
                                    langkah hukum terhadap Anda dan akun Anda
                                </p>
                            </li>
                        </ol>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">E. PEMBAYARAN</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Agar dapat mengakses layanan secara lengkap, Anda perlu
                                berlangganan pada paket layanan. Dengan berlangganan, berarti bahwa
                                Anda bersedia untuk melakukan pembayaran.
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda memahami dan menyetujui bahwa Kami dapat mengubah atau
                                memperbarui biaya paket layanan dari waktu ke waktu.
                            </p>
                        </li>
                        <li>
                            <p>
                                Metode pembayaran yang tersedia pada Webapp yaitu Transfer Bank,
                                OVO, dan GO-PAY.
                            </p>
                        </li>
                        <li>
                            <p>
                                Apabila Anda mengalami masalah pada pembayaran, Anda dapat
                                mengajukan keluhan mengenai pembayaran kepada Kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda menyetujui dan memahami bahwa batas waktu pengajuan keluhan
                                maksimal 7 (tujuh) hari kalender setelah pembayaran selesai.
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda menyetujui bahwa apabila anda mengajukan keluhan mengenai
                                pembayaran Anda setelah 7 (tujuh) hari kalender setelah pembayaran
                                selesai, Kami tidak dapat bertanggung jawab atas keluhan tersebut.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">F. KETENTUAN TRANSAKSI</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Layanan Konsultasi
                            </p>
                            <ol style={{listStyleType: "lower-roman"}} className="ml-[3rem]">
                                <li>
                                    <p>
                                        Anda dapat melakukan konseling dengan Expert Partner melalui
                                        text ataupun call. Konseling melalui text berarti Anda dan
                                        Expert Partner melakukan percakapan dengan mengirim pesan
                                        secara tertulis (chat). Konseling melalui call berarti Anda dan
                                        Expert Partner melakukan percakapan dengan berbicara melalui
                                        telepon.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Aktivitas konseling dihitung berdasarkan sesi. 1 kali sesi
                                        konseling berdurasi 1 jam dari percakapan dimulai hingga
                                        percakapan diakhiri, baik oleh anda ataupun Expert Partner.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Anda akan dikenakan biaya sesuai dengan paket konsultasi yang
                                        telah Anda pilih. Detail mengenai paket konseling dan biayanya
                                        dapat anda lihat pada situs web atau Webapp Kami.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Anda memahami bahwa setelah pembayaran Anda terkonfirmasi,
                                        Expert Partner akan menghubungi Anda dalam 1x24 jam.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Anda wajib memberikan informasi yang benar dan akurat mengenai
                                        kondisi yang sedang dialami dan menjawab semua pertanyaan yang
                                        berhubungan dengan itu jujur ​​dan utuh.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Sebelum mengambil kesimpulan, Anda harus membaca dengan
                                        seksama, setiap pesan konsultasi.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Setelah sesi konsultasi, Anda perlu mengisi form feedback yang
                                        diberikan oleh Expert Partner.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Tidak ada pengembalian uang atau permintaan pembatalan
                                        transaksi setelah sesi konsultasi berakhir atau selesai
                                        dilakukan.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Untuk beberapa gangguan perilaku makan meyimpang yang
                                        memerlukan tatap muka secara langsung dan/atau memerlukan
                                        diagnosis dari psikolog, psikiater, atau nutrisionis, Expert
                                        Partner dapat memberikan rujukan sebagai referensi Anda. Kami
                                        tidak bertanggung jawab atas keakuratan detail mengenai nama,
                                        lokasi praktek, pengalaman, hasil konsultasi dengan psikolog
                                        yang direkomendasikan.
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>
                                Layanan Terapi
                            </p>
                            <ol style={{listStyleType: "lower-roman"}} className="ml-[3rem]">
                                <li>
                                    <p>
                                        Anda dapat melakukan terapi bersama Expert Partner kami seperti
                                        psikolog, psikater, dan nutrisionis. Pengguna dapat menerima
                                        pelayanan terapis guna menyembuhkan perilaku makan
                                        menyimpangnya sesuai anjuran anjuran yang telah dibuat.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Aktivitas terapis dihitung berdasarkan paket. Paket akan
                                        berbeda sesuai dengan target dan keinginan yang diinginkan
                                        pengguna.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Anda akan dikenakan biaya sesuai dengan target yang anda
                                        inginkan dan bersama siapa anda melakukan terapis.
                                    </p>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">G. HKI</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                            Kami memberikan Pengguna hak yang tidak dapat dipindahtangankan,
                            hak lisensi tidak berulang, lisensi non-eksklusif untuk menggunakan
                            konten yang disediakan hanya untuk tujuan menggunakan Layanan. Kami
                            akan tetap menjadi pemegang semua hak kekayaan intelektual serta
                            semua hak lainnya dalam konten yang dapat digunakan Pengguna, dan
                            hak tersebut tidak akan ditransfer ke Pengguna. Pengguna tidak akan
                            menggunakan Konten di luar lingkup tujuan penggunaan dari Konten
                            dalam Layanan (termasuk namun tidak terbatas pada menyalin,
                            transmisi, reproduksi, modifikasi). Jika Pengguna ingin mem-backup
                            seluruh atau sebagian dari isi Konten yang Dikirim, mereka akan
                            perlu melakukannya sendiri. Kami tidak akan melakukan back up salah
                            satu Isi Konten yang Dikirim.
                            </p>
                        </li>
                        <li>
                            <p>
                            Seluruh hak atas kekayaan intelektual yang terdapat dalam Webapp
                            berdasarkan hukum negara Republik Indonesia, termasuk dalam hal ini
                            adalah kepemilikan hak kekayaan intelektual atas seluruh konten
                            termasuk konten sosial media, konten Webapp, source code Webapp,
                            dan hak kekayaan intelektual terkait Webapp. Untuk itu, Anda
                            dilarang untuk melakukan pelanggaran atas hak kekayaan intelektual
                            yang terdapat pada Webapp ini, termasuk melakukan modifikasi, karya
                            turunan, mengadaptasi, menduplikasi, menyalin, menjual, membuat
                            ulang, meretas, menjual, dan/atau mengeksploitasi Webapp termasuk
                            penggunaan Webapp atas akses yang tidak sah, meluncurkan program
                            otomatis atau script, atau segala program apapun yang mungkin
                            menghambat operasi dan/atau kinerja Webapp, atau dengan cara apapun
                            memperbanyak atau menghindari struktur navigasi atau presentasi
                            dari Webapp atau isinya. Kami memiliki hak sepenuhnya untuk
                            melakukan tindakan hukum terhadap setiap pelanggaran yang dilakukan
                            oleh Anda terkait dengan hak kekayaan intelektual terkait Webapp.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">H. UPAYA PENGAMANAN</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Kami berkomitmen untuk memastikan bahwa informasi yang Anda berikan kepada
                                Kami aman dan tidak dapat digunakan oleh pihak lain yang tidak dapat
                                dipertanggungjawabkan. Dengan menggunakan Webapp, Anda mengizinkan Kami
                                untuk melakukan segala tindakan yang Kami anggap perlu untuk melindungi
                                informasi Anda yang Kami kumpulkan secara online untuk mencegah akses yang
                                terbukti tidak sah. Namun demikian, mohon diperhatikan bahwa Kami tidak
                                dapat menjamin sepenuhnya keamanan tersebut dan tidak bertanggung jawab
                                atas setiap kerugian, termasuk namun tidak terbatas atas kehilangan data
                                yang terjadi dari insiden di luar kendali Kami. Oleh karena itu, Kami
                                sangat menyarankan agar Anda selalu memperbarui Webapp serta tidak
                                mengungkapkan kata sandi anda kepada pihak manapun.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">I. TANGGUNG JAWAB PENGGUNA</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Kami mensyaratkan penggunanya sebagai pengguna Webapp Mealth,
                                pengguna wajib dan akan menanggung seluruh tanggung jawab atas
                                tindakan yang dilakukan dan hasil mereka pada layanan ini. Oleh
                                karena itu, dalam mengunduh dan menggunakan Webapp, maka dibutuhkan
                                kecakapan pengguna sebagai subjek hukum Indonesia sesuai dengan
                                ketentuan peraturan perundang-undangan. Apabila setiap Pengguna
                                yang diketahui dan terbukti secara sah dan secara hukum dapat
                                dibuktikan melalui putusan Pengadilan Negeri setempat berada di
                                bawah pengampuan, maka anda perlu bimbingan saudara kandung Anda
                                dalam mengoperasikan Layanan Kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami akan mengambil langkah yang sesuai apabila pengguna
                                menggunakan layanan ini dengan cara yang melanggar Syarat dan
                                Ketentuan. Namun, Kami tidak dapat bertanggung jawab untuk
                                pemulihan dari pelanggaran tersebut terhadap Pengguna atau orang
                                lain. Kerugian atau kerusakan yang diderita atau biaya yang
                                disebabkan oleh pelanggaran Syarat dan ketentuan baik secara
                                langsung atau tidak langsung, wajib untuk dikompensasi oleh
                                pengguna kepada Kami atas permintaan.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">J. DISCLAIMERS</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Disclaimer Tanggung Jawab Medis 
                                <br />
                                Kami tidak menawarkan atau memberikan terapi, hypnosis termasuk
                                diagnosa atau layanan medis lainnya dalam bentuk apapun. Posisi
                                kami hanyalah sebatas sebagai pihak perantara yang menyediakan jasa
                                atau layanan atau Webapp yang menjadi fasilitas untuk pengguna
                                dalam menangani perilaku makan menyimpang, yakni penghubung antara
                                pengguna dan Expert Partner serta menyediakan konten untuk membantu
                                pengguna dapat sembuh dari perilaku makan menyimpang.
                                <br/>
                                Webapp ini tidak dimaksudkan untuk memberikan diagnosis, termasuk
                                informasi mengenai obat atau perawatan untuk anda. Rekomendasi yang
                                anda dapatkan melalui konsultasi hanya bertujuan sebagai informasi
                                semata dan bukan ditujukan untuk menjadi pengganti rekomendasi
                                medis, diagnosis, terapi, perawatan atau pelayanan medis lainnya.
                                Anda tidak harus bertindak berdasarkan informasi ini tanpa mencari
                                rekomendasi medis Expert Partner. Anda tetap disarankan untuk
                                waspada dan memahami secara penuh konsultasi anda.
                                <br/>
                                Kami tidak bertanggung jawab atas setiap tindakan, kelalaian atau
                                informasi dari Expert Partner. Kami tidak membuat pernyataan atau
                                jaminan apapun mengenai ketersediaan atau kemampuan atau
                                kapabilitas medis dari Expert Partner untuk melakukan konseling.
                                Kami tidak membuat pernyataan atau jaminan apapun bahwa anda akan
                                mendapatkan informasi yang membantu.
                                <br/>
                                Dalam kaitannya dengan layanan Daily Tracker, meskipun akan
                                membantu pengguna untuk dapat melihat progress kesembuhannya, Kami
                                tidak membuat klaim, pernyataan atau jaminan bahwa layanan Daily
                                Tracker dapat memberikan manfaat terapis.
                                <br/>
                                Jika Anda berpikir untuk melakukan perbuatan bunuh diri atau
                                mempertimbangkan untuk mengambil tindakan yang dapat membahayakan
                                diri Anda atau orang lain, atau jika Anda merasa bahwa orang lain
                                mungkin dalam bahaya, atau jika Anda memiliki keadaan medis
                                darurat, Anda harus segera menghubungi nomor layanan darurat dan
                                memberitahukan otoritas terkait sebagaimana kami informasikan dalam
                                layanan kami.
                                <br/>
                                ANDA MENGAKUI, MENGKONFIRMASI DAN SEPAKAT BAHWA Webapp INI TIDAK
                                DIRANCANG UNTUK DIGUNAKAN DALAM KASUS DIAGNOSIS GANGGUAN PSIKOLOGIS
                                YANG AKUT.
                                <br/>
                            </p>
                        </li>
                        <li>
                            <p>
                                Disclaimer Konseling dengan Profesional
                                <br />
                                ANDA SETUJU, MENGKONFIRMASI DAN MENGAKUI BAHWA ANDA MENYADARI
                                SECARA PENUH BAHWA KONSELING DENGAN Expert Partner BUKANLAH
                                PENGGANTI SESI TATAP MUKA LENGKAP OLEH PROFESIONAL. ANDA TIDAK
                                DAPAT MENGANDALKAN ATAU MEMBUAT KEPUTUSAN KESEHATAN ATAU
                                KESEJAHTERAAN MURNI PADA KONSULTASI MELALUI Webapp INI. ANDA
                                DISARANKAN UNTUK TIDAK PERNAH MENGABAIKAN, MENGHINDARI, ATAU
                                TERLAMBAT DALAM MEMPEROLEH PEMERIKSAAN LENGKAP DARI PSIKOLOG
                                PROFESIONAL.
                                <br />
                                <br />
                                Expert Partner telah berkomitmen untuk memberikan upaya maksimal dalam
                                memberikan rekomendasi pada permasalahan dan melindungi informasi pribadi
                                Anda. Kami melakukan penelitian dan verifikasi dokumen terhadap Expert
                                Partner untuk memastikan kualifikasinya. Namun kami tidak dapat menjamin
                                verifikasi lisensi medis, kredensial, kompetensi atau latar belakang dari
                                setiap Expert Partner.
                                <br/>
                                Ketika Anda melakukan konseling dengan Expert Partner, maka hubungan Anda
                                hanyalah sebatas pengguna dengan penyedia layanan konsultasi. Expert
                                Partner memiliki lisensi dan kualifikasi mereka sendiri dan menyatakan
                                keahlian mereka sendiri dalam bidang Perilaku Makan Menyimpang. Kami tidak
                                terlibat dalam hal apapun dengan konten dari hubungan atau bagian dari
                                Expert Partner dan kami tidak memvalidasi atau terlibat dalam hal tersebut.
                                Seluruh unggahan dan konten yang dikirim oleh Expert Partner merupakan
                                bentuk assessment terhadap gangguan perilaku makan menyimpang yang dialami,
                                bukan untuk dijadikan rujukan dalam mendiagnosa gangguan Anda.
                                <br />
                                <br />
                                Ketepatan serta keakuratan Expert Partner dalam memberikan rekomendasi
                                psikologisnya akan bergantung pada informasi yang diberikan oleh Anda. Kami
                                tidak bertanggung jawab atas setiap isi dan/atau pernyataan-pernyataan
                                dalam percakapan yang dilakukan oleh Anda dengan Dokter menggunakan fitur
                                video call, voice call, serta chat yang diunggah pada Webapp, hal tersebut
                                ialah percakapan dan interaksi pribadi antara Anda dengan Expert Partner
                                dan jelas di luar kendali kami, maka apabila di kemudian hari muncul
                                permasalahan hukum mengenai isi dan/atau pernyataan-pernyataan dari
                                percakapan dan interaksi antara Anda dengan Expert Partner dalam
                                fitur-fitur tersebut, sepenuhnya menjadi tanggung jawab Anda dan Anda
                                membebaskan Kami dari segala tuntutan, dakwaan dan akibat hukum yang ada.
                                <br />
                                <br />
                                Dalam penggunaan fitur Konseling pada Webapp, Anda memahami bahwa Webapp
                                hanya merupakan sarana untuk memudahkan pencarian atas Layanan, yang
                                bertujuan untuk memberi kenyamanan dan kemudahan kepada Anda dalam
                                berinteraksi dengan Expert Partner. Setiap isi dan/atau
                                pernyataan-pernyataan dalam percakapan yang dilakukan oleh Anda dengan
                                Expert Partner dalam setiap sesi Konseling, hal tersebut merupakan
                                percakapan pribadi antara Anda dengan Expert Partner dan hal tersebut
                                berada di luar kuasa kendali kami, maka apabila di kemudian hari muncul
                                permasalahan hukum mengenai isi dan/atau pernyataan-pernyataan dari
                                percakapan antara Anda dengan Expert Partner dalam fitur Konseling
                                tersebut, sepenuhnya menjadi tanggung jawab Anda dan Anda membebaskan Kami
                                dari segala tuntutan, dakwaan dan akibat hukum yang ada.
                                <br />
                                Layanan ini tidak digunakan dalam kondisi darurat, termasuk pada penanganan
                                kondisi psikologis apapun yang dialami oleh pengguna yang memerlukan
                                pemeriksaan langsung yang dilakukan oleh Psikolog. Layanan ini tidak akan
                                digunakan untuk memperoleh dispensasi pengobatan dari dokter (psikiater)
                                dalam bentuk apa pun.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">K. MITRA BISNIS (PIHAK KETIGA)</h1>
                <div className="text-black text-justify">
                    <p>
                        Para mitra bisnis menanggung semua tanggung jawab mengenai isi dan/atau
                        jasa tersebut ditawarkan. Selanjutnya, isi dan layanan tersebut dapat
                        diatur oleh ketentuan eksplisit dan kondisi lain yang ditetapkan sesuai
                        dengan mitra bisnis. Kami memiliki hak untuk menyetujui, menolak atau
                        menghentikan iklan atau konten atau layanan lain dari Webapp kami yang
                        bersifat negatif atau bertentangan dengan filosofi kami.
                        <br />
                        <br />
                        KORESPONDENSI DAN BISNIS ANDA TRANSAKSI DENGAN PIHAK KETIGA MELALUI LAYANAN
                        ADALAH HANYA ANTARA ANDA DAN PIHAK KETIGA.
                        <br />
                        <br />
                        Anda dapat memilih, atas kebijakan Anda sendiri secara mutlak dan
                        menanggung risiko, untuk menggunakan Webapp yang menghubungkan profil Anda
                        pada layanan dengan layanan pihak ketiga dan pihak tersebut dapat
                        berinteraksi dengan, terhubung ke atau mengumpulkan dan/atau menarik
                        informasi dari dan profil Anda.
                        <br />
                        <br />
                        Dengan menggunakan layanan pihak ketiga seperti, Anda mengakui dan
                        menyetujui hal-hal berikut:
                    </p>
                    <ol style={{listStyleType: "decimal"}}>
                        <li>
                            <p>
                                Jika Anda memberikan informasi tentang Anda pada kami, Anda
                                menyetujui bahwa informasi tentang profil Anda akan dibagikan pada
                                pihak ketiga;
                            </p>
                        </li>
                        <li>
                            <p>
                                Penggunaan layanan pihak ketiga dapat menyebabkan informasi
                                identitas pribadi diungkapkan kepada publik dan/atau berhubungan
                                dengan Anda, bahkan saat Kami tidak memberikan informasi tersebut;
                                dan
                            </p>
                        </li>
                        <li>
                            <p>
                                Penggunaan Webapp adalah pilihan Anda sendiri dan Anda bertanggung
                                jawab atas risiko yang dapat terjadi, dan Anda menyetujui bahwa
                                Kami tidak bertanggung jawab untuk kegiatan yang berkaitan dengan
                                layanan pihak ketiga.
                            </p>
                        </li>
                        <li>
                            <p>
                                Terdapat tautan-tautan ke situs-situs lain yang dioperasikan oleh
                                pihak ketiga, termasuk tetapi tidak terbatas pada, situs-situs
                                pihak ketiga yang mungkin menampilkan merek dagang Kami.
                                Tautan-tautan ini tersedia untuk kemudahan Anda dan hanya digunakan
                                untuk memberikan akses ke situs-situs pihak ketiga ini dan tidak
                                untuk tujuan lain.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">L. PEMBATASAN TANGGUNG JAWAB</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Pelanggaran Syarat dan Ketentuan dapat mengakibatkan penghentian
                                akun Anda pada Webapp. Anda mengerti dan setuju bahwa Kami tidak
                                dapat dan tidak akan bertanggung jawab atas konten yang dipasang
                                pada Layanan dan Anda menggunakan Layanan dengan resiko Anda
                                sendiri. Jika Anda melanggar Syarat Penggunaan, atau membuat risiko
                                atau membuat cacat hukum untuk Kami, kami dapat memberhentikan
                                pemberian semua atau hanya sebagian dari Layanan untuk Anda.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami tidak bertanggung jawab atas cedera, kematian, kerusakan atau
                                kerugian langsung maupun tidak langsung, materiil maupun immateriil
                                yang disebabkan oleh interaksi antara para Penyedia Layanan dengan
                                Anda melalui Webapp. Kami juga tidak bertanggung jawab atas
                                kesalahan atau tindakan apapun yang dilakukan oleh para Penyedia
                                Layanan selama pelaksanaan Layanan yang secara langsung atau tidak
                                langsung berhubungan dengan:
                            </p>
                        </li>
                        <ol style={{listStyleType: "lower-roman"}} className="ml-[3rem]">
                            <li>
                                <p>
                                    layanan;
                                </p>
                            </li>
                            <li>
                                <p>
                                    konten;
                                </p>
                            </li>
                            <li>
                                <p>
                                    konten pengguna;
                                </p>
                            </li>
                            <li>
                                <p>
                                    penggunaan, ketidakmampuan untuk menggunakan, atau kinerja
                                    layanan;
                                </p>
                            </li>
                            <li>
                                <p>
                                    tindakan yang diambil sehubungan dengan penyelidikan oleh Kami
                                    atau penegak hukum berwenang tentang Anda atau penggunaan pihak
                                    lain dari layanan;
                                </p>
                            </li>
                            <li>
                                <p>
                                    tindakan yang diambil sehubungan dengan hak cipta atau pemilik
                                    properti intelektual lainnya;
                                </p>
                            </li>
                            <li>
                                <p>
                                    setiap kesalahan atau kelalaian dalam operasi layanan ini; atau
                                </p>
                            </li>
                            <li>
                                <p>
                                    kerusakan pada komputer setiap pengguna, perangkat mobile, atau
                                    peralatan lain atau teknologi termasuk, tanpa batasan,
                                    kerusakan dari setiap pelanggaran keamanan atau dari virus
                                    apapun, bug, gangguan, penipuan, kesalahan, kelalaian,
                                    gangguan, cacat, penundaan pengoperasian atau transmisi, garis
                                    komputer atau kegagalan jaringan atau kerusakan teknis atau
                                    lainnya, termasuk, tanpa batasan, ganti rugi atas kehilangan
                                    keuntungan, kehilangan goodwill, kehilangan data, penghentian
                                    kerja, keakuratan hasil, atau kegagalan komputer atau
                                    kerusakan, bahkan jika mendatang atau bahkan jika Kami telah
                                    diberitahukan atau seharusnya tahu dari kemungkinan kerusakan
                                    tersebut, baik dalam tindakan kontrak, kelalaian, kewajiban
                                    yang ketat atau gugatan (termasuk, tanpa batasan, baik yang
                                    disebabkan secara keseluruhan atau sebagian oleh kelalaian,
                                    force majeure, kegagalan telekomunikasi, atau pencurian atau
                                    perusakan layanan).
                                </p>
                            </li>
                        </ol>
                        <li>
                            <p>
                                Dengan mengakses layanan ini, Anda memahami bahwa Anda akan
                                membebaskan hak yang berhubungan dengan klaim baik yang tidak
                                diketahui atau tak terduga, dan sesuai dengan pengabaian tersebut,
                                Anda mengakui bahwa Anda telah membaca dan memahami, dan dengan ini
                                secara tegas melepaskan kami dari tanggung jawab.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami tidak akan bertanggung jawab kepada Anda atas kerugian atau
                                kerusakan apapun (termasuk, tanpa batasan, untuk setiap kerugian
                                langsung, tidak langsung, ekonomi, teladan, khusus, menghukum,
                                insidental atau konsekuensial atau kerusakan).
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda setuju bahwa dalam hal Anda dikenakan kerusakan, kerugian atau
                                cedera yang timbul dari Webapp atau kelalaian, kerusakan, jika ada,
                                menyebabkan hal yang tidak dapat diperbaiki atau tidak cukup, tidak
                                akan memberikan Anda hak untuk mengeksploitasi situs web, layanan,
                                properti, produk atau konten lainnya yang dimiliki atau
                                dikendalikan oleh pihak Kami, dan Anda tidak akan memiliki hak
                                untuk melarang atau menahan pengembangan, produksi, distribusi,
                                iklan, pameran atau eksploitasi situs web, properti, produk,
                                layanan, atau konten lainnya yang dimiliki atau dikendalikan oleh
                                Kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami tidak bertanggung jawab atas tindakan, isi, informasi, atau
                                data pihak ketiga, dan Anda melepaskan kami dari segala tuntutan
                                dan kerusakan, yang diketahui dan tidak diketahui, yang timbul dari
                                atau dengan cara apapun yang terhubung dengan klaim Anda memiliki
                                terhadap pihak ketiga tersebut.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">M. PENGHENTIAN AKSES WEBAPP</h1>
                <div className="text-black text-left">
                    <p>
                        Kami berhak untuk mengubah atau menghentikan Layanan atau akses Anda ke
                        Layanan untuk alasan apapun, tanpa pemberitahuan, setiap saat, dan tanpa
                        kewajiban kepada Anda.
                    </p>
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Anda dapat menonaktifkan akun Anda melalui menu deaktivasi akun di
                                pengaturan. Apabila kami menghentikan akses Anda ke Layanan atau
                                Anda menggunakan bentuk rinci untuk menonaktifkan akun Anda, maka
                                seluruh data Anda akan hilang dan tidak lagi dapat diakses melalui
                                akun Anda.
                            </p>
                        </li>
                        <li>
                            <p>
                                Setelah pengakhiran, semua lisensi dan hak-hak lain yang diberikan
                                kepada Anda dalam Syarat dan Ketentuan ini akan segera berhenti.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami berhak, atas kebijakan kami, untuk mengubah Syarat dan
                                Ketentuan ("Pembaharuan Persyaratan") dari waktu ke waktu. Anda
                                setuju bahwa kami mengirimkan pemberitahuan tentang Pembaharuan
                                Persyaratan dengan unggahan di halaman depan Layanan atau melalui
                                e-mail, dan bahwa penggunaan Layanan setelah tanggal efektif
                                persyaratan diperbarui merupakan bukti perjanjian Anda mematuhi
                                pembaruan Syarat dan Ketentuan kami. Oleh karena itu, Anda harus
                                mengetahui Persyaratan Penggunaan dan Pembaruan Persyaratan sebelum
                                menggunakan Layanan. Pembaruan Persyaratan akan efektif pada saat
                                anda membuka Webapp. Pembaruan Syarat dan Ketentuan akan berlaku
                                untuk penggunaan Layanan sejak saat itu.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami berhak untuk menolak akses ke layanan kepada siapa pun untuk
                                alasan apapun setiap saat selama hal tersebut terbukti melanggar
                                Syarat dan Ketentuan.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami berhak untuk memaksa penyitaan user apapun untuk alasan apapun
                                apabila terbukti melanggar Syarat dan Ketentuan.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami dapat, tapi tidak memiliki kewajiban untuk, menghapus,
                                mengedit, memblokir, dan atau memonitor Konten dalam layanan sesuai
                                dengan kondisi dan diskresi kami.
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda bertanggung jawab untuk interaksi dengan pengguna lain dari
                                Layanan, baik online atau offline. Anda setuju bahwa Kami tidak
                                bertanggung jawab atas tindakan Anda.
                            </p>
                        </li>
                        <li>
                            <p>
                                Anda setuju bahwa Anda bertanggung jawab untuk semua biaya data
                                Anda dikenakan melalui penggunaan Layanan.
                            </p>
                        </li>
                        <li>
                            <p>
                                Kami melarang crawling, scraping, caching atau mengakses konten
                                apapun pada Layanan melalui cara ilegal yang melanggar Syarat dan
                                Ketentuan kami.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">N. HUKUM DAN YURIDIKSI PENGADILAN</h1>
                <div className="text-black text-justify">
                    <p>
                        Syarat dan Ketentuan ini diatur oleh hukum Indonesia. Jika ada ketentuan dari Syarat Penggunaan 
                        yang dianggap melanggar hukum, batal, atau untuk alasan apapun tidak dapat dilaksanakan oleh
                        Badan Arbitrase  Nasional Indonesia (BANI) atau oleh pengadilan yang berwenang, maka ketentuan 
                        tersebut akan dianggap dapat dipisahkan dari Syarat dan Ketentuan ini dan tidak akan mempengaruhi 
                        keabsahan dan keberlakuan ketentuan yang tersisa. Sengketa yang timbul dari Layanan atau sengketa 
                        antara Pengguna dan Kami terkait dengan Layanan akan diatur di bawah yurisdiksi eksklusif pengadilan 
                        negeri Indonesia.
                    </p>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">O. PENYELESAIAN SENGKETA</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Anda menyetujui bahwa setiap sengketa atau klaim (termasuk klaim terhadap kerugian 
                                personal) sehubungan dengan penggunaan situs kami tunduk pada yurisdiksi eksklusif 
                                hukum Indonesia dan akan diadili sesuai dengan hukum Negara Indonesia. Perjanjian 
                                ini juga berlaku untuk setiap orang yang mengklaim atas nama anda.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="pb-[3rem]">
                <h1 className="text-red font-medium text-[3rem] pb-[1.5rem]">P. PENUTUP</h1>
                <div className="text-black text-justify">
                    <ol style={{listStyleType: "lower-alpha"}}>
                        <li>
                            <p>
                                Harap berhati-hati terhadap segala bentuk penipuan, pemerasan, pemalsuan 
                                identitas dan tindak kejahatan lain yang dilakukan oleh orang atau pihak 
                                yang mengatasnamakan Mealth 
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;