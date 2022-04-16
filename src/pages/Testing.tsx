import { getChat } from "../../chatbot/getChat";

const Testing = () => {
  const [chat, isLoading] = getChat(-1);
  console.log(chat);
  const chatOptionToArray = () => {
    let arr = [];
    for (let i = 0; i < chat.numChoice; i++) {
      // console.log(chat[`query${i + 1}`]);
      arr.push(chat[`query${i + 1}`]);
    }
    return arr;
  };

  return (
    <div className="pt-[10rem]">
      <div>
        <h1>ini yang make isLoading, biar keren. </h1>
        <div>
          {isLoading ? (
            "loading"
          ) : (
            <div>
              {chat.text}
              <div>
                {/* pilihan */}
                {/* iterate sebanyak chat.numChoice */}
                {chatOptionToArray().map((option, index) => {
                  return <div>{option}</div>;
                })}
                {/* pilihan */}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <h1>contoh cara make getChat. ini yang make tanda tanya</h1>
        {Array.from(Array(10).keys()).map((i) => {
          let chatId = i - 1;
          console.log(chatId);
          return <div className="m-4">{`data dari getChat(${chatId}) = ${getChat(chatId)[0]?.text}`}</div>;
        })}
      </div>
    </div>
  );
};

export default Testing;
