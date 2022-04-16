import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { useEffect, useState } from "react";
import db from "../firebase";
export const getChat = (chatId) => {
  const [chat, setChat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const chatbotidRef = ref(db, `chatbotid/${chatId + 1}`);

  useEffect(() => {
    onValue(chatbotidRef, (snapshot) => {
      setChat(snapshot.val());
      setIsLoading(false);
      console.log("chat", chat);
    });
  }, [chatId]);

  return [chat, isLoading];
};
