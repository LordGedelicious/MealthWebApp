import { getChat } from "../../chatbot/getChat";
import { FC, useState, ChangeEvent } from "react";
import { chatData } from "./chatbotData";

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

  const chatDataJSON = chatData[0].chatbotid;
  const [idChat, setIdChat] = useState(-1);

  console.log(chatDataJSON);
  const addChat = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChats([...chats, <MeddyChat>e.currentTarget.value</MeddyChat>]);
    console.log(chats);
  };

  function changeID(userinput, currentId) {
    console.log(currentId);
    console.log(userinput);
    if (userinput == chatDataJSON[currentId+1].query1 && chatDataJSON[currentId+1].query1 != "") {
      console.log("TC 1");
      setIdChat(chatDataJSON[currentId+1].refer1);
    } else if (userinput == chatDataJSON[currentId+1].query2 && chatDataJSON[currentId+1].query2 != "") {
      console.log("TC 2");
      setIdChat(chatDataJSON[currentId+1].refer2);
    } else if (userinput == chatDataJSON[currentId+1].query3 && chatDataJSON[currentId+1].query3 != "") {
      console.log("TC 3");
      setIdChat(chatDataJSON[currentId+1].refer3);
    } else if (userinput == chatDataJSON[currentId+1].query4 && chatDataJSON[currentId+1].query4 != "") {
      console.log("TC 4");
      setIdChat(chatDataJSON[currentId+1].refer4);
    } else if (userinput == chatDataJSON[currentId+1].query5 && chatDataJSON[currentId+1].query5 != "") {
      console.log("TC 5");
      setIdChat(chatDataJSON[currentId+1].refer5);
    } else if (userinput == chatDataJSON[currentId+1].query6 && chatDataJSON[currentId+1].query6 != "") {
      console.log("TC 6");
      setIdChat(chatDataJSON[currentId+1].refer6);
    } else {
      console.log("TC else");
      setIdChat(-1);
    }
  }

  return (
    <>
      <div className="flex flex-col row-span-6 col-span-2 rounded-3xl bg-white shadow-md p-6 my-3 border-8 border-blue">
        {/* CHAT AREA */}
        {/* TODO: keep div scrolled to bottom */}
        <div className="flex flex-col w-full overflow-y-scroll overflow-x-hidden h-[30rem]">
          <MellyChat>{chatDataJSON[idChat+1].text}
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
                changeID(document.getElementById("input").value, idChat);
                setChats([...chats, 
                  <MeddyChat>{document.getElementById("input").value}</MeddyChat>, 
                  <MellyChat>{chatDataJSON[idChat+1].text}</MellyChat>
                ]);
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
