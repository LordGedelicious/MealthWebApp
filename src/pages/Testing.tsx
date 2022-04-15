import { getChat } from "../../chatbot/getChat";

const Testing = () => {
  let data = getChat(10);
  return (
    <div>
      <h1 className="pt-[10rem]">Testing</h1>
    </div>
  );
};

export default Testing;
