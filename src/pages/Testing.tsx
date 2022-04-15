import { getChat } from "../../chatbot/getChat";

const Testing = () => {
  let data = getChat(10);
  console.log(data);
  return (
    <div>
      <h1 className="pt-[10rem]">Testing</h1>
      data yg didapet dari getChat(10) = {JSON.stringify(data)}
    </div>
  );
};

export default Testing;
