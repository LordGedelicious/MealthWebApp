import { getChat } from "../../chatbot/getChat";
import { FC, useState, ChangeEvent } from "react";

type Props = {
  className?: string;
};

const MellyChat: FC<Props> = ({children}) => {
  return (
    <div className="flex flex-wrap bg-sblue p-3 rounded-2xl mr-[30%] lg:mr-[50%] self-start text-left my-1">
      <p className="w-full">{children}</p>
    </div>
  );
};

const MeddyChat: FC<Props> = ({children}) => {
  return (
    <div className="flex flex-wrap bg-spurple p-3 rounded-2xl ml-[30%] lg:ml-[50%] self-end text-right my-1">
      <p className="w-full">{children}</p>
    </div>
  );
};

const ChatBot = () => { 
  const [chats, setChats] = useState([])
  const addChat = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChats([...chats, <MeddyChat>e.currentTarget.value</MeddyChat>]);
    console.log(chats);
  };

  return (
    <>
      <div className="flex flex-col row-span-6 col-span-2 rounded-3xl bg-white shadow-md p-6 my-3 border-8 border-blue">
        {/* CHAT AREA */}
        {/* TODO: keep div scrolled to bottom */}
        <div className="flex flex-col w-full overflow-y-scroll overflow-x-hidden h-[30rem]">
          <MellyChat>Hai Meddy, namaku Melly, apa yang bisa aku bantu hari ini? Meddy bisa mengetikkan pesan-pesan ini supaya aku bisa merespon dengan baik. <br />
          1. Apa Kabar <br />
          2. Self Acceptance <br />
          3. Body Image <br />
          4. Tentang Makanan <br />
          5. Tentang Eating Disorder <br />
          6. Lihat pilihan lain
          </MellyChat>
          {chats}
        </div>
        {/* INPUT */}
          <form className="flex">
            <input id="input" type="text" maxLength={1000} className="border-b-2 border-orange w-full rounded-lg mr-2 px-3" placeholder="Ketik pesanmu di sini..." />
            <button 
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                // TODO: masukin data
                // you can get user input from `document.getElementById("input").value`
                setChats([...chats, 
                  <MeddyChat>{document.getElementById("input").value}</MeddyChat>, 
                  <MellyChat>MASUKKIN DATA DI SINI SBG CHAT DARI MELLY</MellyChat>
                ]);
                document.getElementById("input").value = ""; // reset input area to blank
              }} 
              className="bg-orange rounded-lg px-6 py-3 col-shadow-lg hover:bg-green transition duration-200 ease-in-out relative z-10">
              <h3>&gt;</h3>
            </button>
          </form>
      </div>
    </>
  );
};

export default ChatBot;
