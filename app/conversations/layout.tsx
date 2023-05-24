import Sidebar from "../components/sidebar/Sidebar";
import ConversationsList from "./components/ConversationsList";
import getConversations from "../actions/getConversations";
import { FullConversationType, FullMessageType } from "../types";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();

  // revisar el codigo de initialItems si a la postre da problemas.

  const initialItems: FullConversationType[] = conversations
    ? conversations.map((conversation) => ({
        ...conversation,
        messages: conversation.messages.map((message) => ({
          sender: message.sender,
          seen: message.seen,
        })) as FullMessageType[],
      }))
    : [];

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationsList initialItems={initialItems} />
        {children}
      </div>
    </Sidebar>
  );
}
