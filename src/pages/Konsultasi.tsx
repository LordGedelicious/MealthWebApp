import Button from "../components/Button";
import Left from "../images/konsultasi/left.svg";
import Mid from "../images/konsultasi/mid.svg";
import Right from "../images/konsultasi/right.svg";
import Chat from "../images/konsultasi/chat.svg";
import Call from "../images/konsultasi/call.svg";
import Vid from "../images/konsultasi/vid.svg";
import Mascot from "../images/mascot-love.png";

const Konsultasi = () => {
  // HARGA-HARGA
  const HargaChatConsultation = "Rp120.000";
  const HargaCallConsultation = "Rp250.000";
  const HargaVidConsultation = "Rp350.000";
  const HargaNyamanCallConsultation = "Rp1.440.000";
  const HargaNyamanVidConsultation = "Rp1.650.000";
  const HargaBahagiaCallConsultation = "Rp2.580.000";
  const HargaBahagiaVidConsultation = "Rp2.860.000";

  return (
    <div className="bg-blue">
      <div className="min-h-[130vh] w-full bg-[url('/src/images/bg/BGKonselingPage.svg')] bg-cover bg-no-repeat text-black">
        <div className="flex justify-between w-full py-24">
          <img src={Left} className="w-[15%]" />
          <div className="flex flex-col w-[70%] md:w-[65%] lg:w-[40%] text-center items-center">
            <img src={Mid} className="" />
            <h1 className="text-6xl mb-12">Consultation</h1>
            <p>Yuk konsultasi dengan yang ahli!</p>
            <a href="#contentKonsultasi"><Button className="bg-green hover:bg-sblue mt-12 w-[18rem]">Konsultasi Sekarang</Button></a>
          </div>
          <img src={Right} className="w-[15%]" />
        </div>
      </div>
      {/* CONTENT */}
      <div id="contentKonsultasi" className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-6 mt-24 pb-12 px-[10%] lg:px-12">
        {/* LEFT */}
        <div className="row-span-6 text-white mr-12">
          <h1 className="text-6xl">Daftar Harga</h1>
          <img src={Mascot} className="w-full" />
          <p>Berikut daftar-daftar harga paket konsultasi.</p>
        </div>
        {/* RIGHT */}
        <div className="col-span-2 rounded-xl bg-white shadow-md flex justify-between p-6 my-3">
          <img src={Chat} className="w-12 h-12 bg-red rounded-full object-contain p-3 mr-2" />
          <div>
            <h2>Chat Consultation</h2>
            <p>Available only for psychologist and Nutritionist</p>
          </div>
          <div className="flex flex-col items-center">
            <h3>{HargaChatConsultation}</h3>
            <a href="/Payment">
              <Button className="bg-green hover:bg-spurple hover:font-normal w-36">Book Now</Button>
            </a>
          </div>
        </div>

        <div className="col-span-2 rounded-xl bg-white shadow-md flex justify-between p-6 my-3">
          <img src={Call} className="w-12 h-12 bg-red rounded-full object-contain p-3 mr-2" />
          <div>
            <h2>Call Consultation</h2>
            <p>Available only for psychologist and Nutritionist</p>
          </div>
          <div className="flex flex-col items-center">
            <h3>{HargaCallConsultation}</h3>
            <Button className="bg-green hover:bg-spurple hover:font-normal w-36">Book Now</Button>
          </div>
        </div>

        <div className="col-span-2 rounded-xl bg-white shadow-md flex justify-between p-6 my-3">
          <img src={Vid} className="w-12 h-12 bg-red rounded-full object-contain p-3 mr-2" />
          <div>
            <h2>Video Conference Consultation</h2>
            <p>Available only for psychologist, psychiatrist, and Nutritionist</p>
          </div>
          <div className="flex flex-col items-center">
            <h3>{HargaVidConsultation}</h3>
            <Button className="bg-green hover:bg-spurple hover:font-normal w-36">Book Now</Button>
          </div>
        </div>

        <div className="flex flex-col justify-between row-span-3 rounded-xl bg-syellow shadow-md my-3 lg:mr-3">
          <div className="p-6">
            <h2>Paket Nyaman</h2>
            <ul>
              <li>3x consultation with the psychologist</li>
              <li>2x consultation with the psychiatrist</li>
              <li>Access to premium features</li>
              <li>Follow-up assessment from the expertise</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between">
              <img src={Call} className="w-12 h-12 bg-red rounded-full object-contain p-3 mr-2" />
              <h2>Call Service</h2>
              <div className="flex flex-col items-center">
                <h3>{HargaNyamanCallConsultation}</h3>
                <Button className="bg-green hover:bg-spurple hover:font-normal w-36">Book Now</Button>
              </div>
            </div>
            <div className="w-full h-0.5 rounded-xl bg-black my-3" />
            <div className="flex justify-between">
              <img src={Vid} className="w-12 h-12 bg-red rounded-full object-contain p-3 mr-2" />
              <h2>Video Conference Service</h2>
              <div className="flex flex-col items-center">
                <h3>{HargaNyamanVidConsultation}</h3>
                <Button className="bg-green hover:bg-spurple hover:font-normal w-36">Book Now</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between row-span-3 rounded-xl bg-speach shadow-md my-3 lg:ml-3">
          <div className="p-6">
            <h2>Paket Bahagia</h2>
            <ul>
              <li>5x consultation with the psychologist</li>
              <li>3x consultation with the psychiatrist</li>
              <li>2x consultation with the nutritionist</li>
              <li>Access to premium features</li>
              <li>Follow-up assessment from the expertise</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between">
              <img src={Call} className="w-12 h-12 bg-red rounded-full object-contain p-3 mr-2" />
              <h2>Call Service</h2>
              <div className="flex flex-col items-center">
                <h3>{HargaBahagiaCallConsultation}</h3>
                <Button className="bg-green hover:bg-spurple hover:font-normal w-36">Book Now</Button>
              </div>
            </div>
            <div className="w-full h-0.5 rounded-xl bg-black my-3" />
            <div className="flex justify-between">
              <img src={Vid} className="w-12 h-12 bg-red rounded-full object-contain p-3 mr-2" />
              <h2>Video Conference Service</h2>
              <div className="flex flex-col items-center">
                <h3>{HargaBahagiaVidConsultation}</h3>
                <Button className="bg-green hover:bg-spurple hover:font-normal w-36">Book Now</Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Konsultasi;
