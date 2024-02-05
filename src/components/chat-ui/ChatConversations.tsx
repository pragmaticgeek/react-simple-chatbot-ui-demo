import { Loading } from "react-daisyui";
import { IChatConversationsProps } from "../../types";
import { ChatMessage } from "./ChatMessage";
import { useEffect } from "react";

export const ChatConversations = ({
  conversations,
  isQuerying,
  chatConversationsContainerRef,
}: IChatConversationsProps) => {
  useEffect(() => {
    const chatConversationsContainer = chatConversationsContainerRef?.current;
    if (chatConversationsContainer) {
      chatConversationsContainer.scrollTo(
        0,
        chatConversationsContainer.scrollHeight
      );
    }
  }, [conversations]);

  return (
    <div className="w-2/3">
      {conversations &&
        conversations.map((chatEntry) => (
          <ChatMessage
            key={`chatbot-message-${chatEntry.id}`}
            message={chatEntry}
          />
        ))}
      {isQuerying && (
        <Loading className="mt-4 ml-16" variant="dots" size="lg" />
      )}
    </div>
  );
};
