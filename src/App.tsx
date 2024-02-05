import { useCallback, useRef, useState } from "react";
import { MessageRole } from "./enums/MessageRole";
import { Conversations } from "./types";
import { ChatUI } from "./components/chat-ui/ChatUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailReply } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isQuerying, setIsQuerying] = useState<boolean>(false);
  const chatConversationsContainerRef = useRef<HTMLDivElement>(null);

  const [chatConversations, setChatConversations] = useState<Conversations>([
    {
      id: "1",
      role: MessageRole.ASSISTANT,
      message:
        "I am a sample chat ui made by Kevin Wong (@pragmaticgeek).  This is a demo on how to build a simple React chat ui from scratch.",
    },
    {
      id: "2",
      role: MessageRole.USER,
      message: "Amazing. where's the code?",
    },
    {
      id: "3",
      role: MessageRole.ASSISTANT,
      message:
        "The code is located here: https://github.com/pragmaticgeek/react-simple-chatbot-ui-demo",
    },
  ]);

  const handleSubmit = useCallback(
    (value: string) => {
      setIsQuerying(true);
      setChatConversations((conversations) => [
        ...conversations,
        {
          userInfo: { firstName: "Test", lastName: "User" },
          id: (conversations.length + 1).toString(),
          role: MessageRole.USER,
          message: value,
        },
      ]);
      setTimeout(() => {
        setIsQuerying(false);
        setChatConversations((conversations) => [
          ...conversations,
          {
            id: (conversations.length + 1).toString(),
            role: MessageRole.ASSISTANT,
            message: "This is a mocked sample chat bot assistant response",
          },
        ]);
      }, 3000);
    },
    [chatConversations]
  );

  return (
    <ChatUI
      isQuerying={isQuerying}
      onSubmit={handleSubmit}
      placeholder="Type here to interact with this demo"
      disabled={isQuerying}
      conversations={chatConversations}
      customSubmitIcon={<FontAwesomeIcon icon={faMailReply} />}
      chatConversationsContainerRef={chatConversationsContainerRef}
    />
  );
}

export default App;
