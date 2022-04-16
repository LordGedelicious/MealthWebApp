import { getChat } from "../../chatbot/getChat";

const Testing = () => {
  // let data = getChat(10);
  // console.log(data);
  return (
    <div>
      <h1 className="pt-[10rem]">contoh cara make getChat</h1>
      {Array.from(Array(10).keys()).map((i) => {
        let chatId = i - 1;
        console.log(chatId);
        return <div className="m-4">{`data dari getChat(${chatId}) = ${JSON.stringify(getChat(chatId))}`}</div>;
      })}
    </div>
  );
};

export default Testing;
