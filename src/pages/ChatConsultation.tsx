import Mid from "../images/konsultasi/mid_thin.svg";

import Sad from "../images/mood/sad.svg";
import Neutral from "../images/mood/neutral.svg";
import Happy from "../images/mood/happy.svg";
import HighAf from "../images/mood/highaf.svg";



import { FC, useState, ChangeEvent, useRef } from "react";

type Props = {
  className?: string;
};

const MellyChat: FC<Props> = ({children}) => {
  return (
    <div className="flex flex-wrap bg-sblue p-3 rounded-2xl mr-[30%] lg:mr-[50%] self-start text-left my-1">
      <p className="w-full new-line">{children}</p>
    </div>
  );
};

const MeddyChat: FC<Props> = ({children}) => {
  return (
    <div className="flex flex-wrap bg-spurple p-3 rounded-2xl ml-[30%] lg:ml-[50%] self-end text-right my-1">
      <p className="w-full new-line">{children}</p>
    </div>
  );
};

const ChatConsulation = () => {
  const [chats, setChats] = useState([<MellyChat>Halo, saya Liza, seorang psikolog yang siap membantu permasalahan kamu. Apa yang bisa saya bantu?</MellyChat>])

return (
    <>
      <div className="bg-white">
        <div className="h=[100vh] overflow-hidden">
          {/* flex flex-col lg:grid grid-cols-2 grid-rows-1 bg-white items-center my-24 */}
          <div className="flex flex-col lg:grid lg:grid lg:grid-cols-3 lg:grid-rows-6 items-center h-[100vh] w-[100%] px-[5%] bg-white items-center my-24">
          
            {/* LEFT */}
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start px-[10%] lg:pl-24 col-start-1 row-start-1 row-span-6 mt-12">
              <img src={Mid} className="w-full" />
              <h1 className="text-6xl mb-3">Chat Consultation</h1>
              <p>Diskusikan langsung permasalahan Meddies dengan psikolog dan nutritionist.</p>
              <h2 className="text-2xl mb-3 text-center">Berikan penilaian untuk mengakhiri konsultasi!</h2>
              <div className="grid grid-cols-4">
                <div><a href="/"><img src={Sad} className="w-full" /></a></div>
                <div><a href="/"><img src={Neutral} className="w-full" /></a></div>
                <div><a href="/"><img src={Happy} className="w-full" /></a></div>
                <div><a href="/"><img src={HighAf} className="w-full" /></a></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="flex flex-col row-span-6 col-span-2 rounded-3xl bg-white shadow-md p-6 my-3 border-8 border-blue">
              {/* CHAT AREA */}
              {/* TODO: keep div scrolled to bottom */}
              <div className="flex flex-col w-full overflow-y-scroll overflow-x-hidden h-[30rem]">
                {chats}
              </div>
              {/* INPUT */}
                <form className="flex">
                  <input id="input" type="text" maxLength={1000} className="border-b-2 border-orange w-full rounded-lg mr-2 px-3" placeholder="Ketik pesanmu di sini..." />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setChats([...chats, 
                        <MeddyChat>{document.getElementById("input").value}</MeddyChat>
                      ]);
                      document.getElementById("input").value = ""; // reset input area to blank
                    }} 
                    className="bg-green rounded-lg px-6 py-3 col-shadow-lg hover:bg-spurple transition duration-200 ease-in-out relative z-10">
                    <h3>Kirim</h3>
                  </button>
                </form>
            </div>
          </div>

          

        </div>
      </div>
    </>
    );
};

export default ChatConsulation;
