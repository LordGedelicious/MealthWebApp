import { getChat } from "../../chatbot/getChat";
import { FC, useState, ChangeEvent, useRef } from "react";
import { chatData } from "./ChatbotData";

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


const ChatBot = () => { 
  const chatDataJSON = chatData[0].chatbotid;
  const [idChat, setIdChat] = useState(-1);

  const [chats, setChats] = useState([<MellyChat>{chatDataJSON[idChat+1].text}</MellyChat>])


  const addChat = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChats([...chats, <MeddyChat>e.currentTarget.value</MeddyChat>]);
    console.log(chats);
  };

  function changeID(userinput) {

    if (userinput == chatDataJSON[idChat+1].query1 && chatDataJSON[idChat+1].query1 != "") {
      return (chatDataJSON[idChat+1].refer1);
    } else if (userinput == chatDataJSON[idChat+1].query2 && chatDataJSON[idChat+1].query2 != "") {
      return (chatDataJSON[idChat+1].refer2);
    } else if (userinput == chatDataJSON[idChat+1].query3 && chatDataJSON[idChat+1].query3 != "") {
      return (chatDataJSON[idChat+1].refer3);
    } else if (userinput == chatDataJSON[idChat+1].query4 && chatDataJSON[idChat+1].query4 != "") {
      return (chatDataJSON[idChat+1].refer4);
    } else if (userinput == chatDataJSON[idChat+1].query5 && chatDataJSON[idChat+1].query5 != "") {
      return (chatDataJSON[idChat+1].refer5);
    } else if (userinput == chatDataJSON[idChat+1].query6 && chatDataJSON[idChat+1].query6 != "") {
      return (chatDataJSON[idChat+1].refer6);
    } else {
      return (-1);
    }

  }

  return (
    <>
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
                  <MeddyChat>{document.getElementById("input").value}</MeddyChat>,
                  <MellyChat>{chatDataJSON[changeID(document.getElementById("input").value)+1].text}</MellyChat>,
                ]);
                setIdChat(changeID(document.getElementById("input").value));
                document.getElementById("input").value = ""; // reset input area to blank
              }} 
              className="bg-green rounded-lg px-6 py-3 col-shadow-lg hover:bg-spurple transition duration-200 ease-in-out relative z-10">
              <h3>Kirim</h3>
            </button>
          </form>
      </div>
    </>
  );
};

export default ChatBot;
