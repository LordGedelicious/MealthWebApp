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
              <h1 className="text-6xl mb-3">Chat Consultation</h1>
              {/* <img src={MascotQuestion} className="w-full" /> */}
              <p>Diskusikan langsung permasalahan Meddies dengan psikolog dan nutritionist.</p>
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
