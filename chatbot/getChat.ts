import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "../firebase";
firebase;
export const getChat = (chatId) => {
  const [chat, setChat] = useState(null);
  const db = getDatabase();
  const chatbotidRef = ref(db, "chatbotid/" + (chatId + 1));
  useEffect(() => {
    onValue(chatbotidRef, (snapshot) => {
      setChat(snapshot.val());

      console.log(chat);
    });
  }, [chatId]);
  console.log(chat);
  return chat;
};
