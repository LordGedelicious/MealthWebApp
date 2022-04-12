import { getDatabase, ref, onValue } from "firebase/database";
import firebase from "../firebase";
export const getChat = (chatId) => {
  firebase;
  const db = getDatabase();
  const chatbotidRef = ref(db, "chatbotid/" + chatId);
  let data;
  onValue(chatbotidRef, (snapshot) => {
    const data = snapshot.val();
    console.log("data");
    console.log(data);
  });

  return data;
};
