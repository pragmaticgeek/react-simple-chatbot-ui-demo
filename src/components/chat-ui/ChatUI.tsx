import { useRef } from "react";
import { ChatConversations } from "./ChatConversations";
import { ChatInput } from "./ChatInput";
import { IChatUIProps } from "../../types";

export const ChatUI = ({
  disabled,
  conversations,
  isQuerying,
  customSubmitIcon,
  placeholder,
  onSubmit,
}: IChatUIProps) => {
  const chatConversationsContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ height: "calc(100vh - 68px)" }}>
      <div
        ref={chatConversationsContainerRef}
        className="flex w-full justify-center overflow-y-auto pb-8"
        style={{ maxHeight: "calc(100vh - 250px)" }}
      >
        <ChatConversations
          conversations={conversations}
          isQuerying={isQuerying}
          chatConversationsContainerRef={chatConversationsContainerRef}
        />
      </div>
      <div className="absolute bottom-12 left-0 w-full">
        <ChatInput
          disabled={disabled}
          customSubmitIcon={customSubmitIcon}
          onSubmit={onSubmit}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
