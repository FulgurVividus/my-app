//# Implementation detail
// conversationId -> lastResponseId
const conversations = new Map<string, string>();

export const conversationRepository = {
  getLastResponseId(conversationId: string) {
    return conversations.get(conversationId);
  },

  setLastResponseId(conversationId: string, responseId: string) {
    conversations.set(conversationId, responseId);
  },
};

//# Export public interface
// export function getLastResponseId(conversationId: string) {
//   return conversations.get(conversationId);
// }

// export function setLastResponseId(conversationId: string, responseId: string) {
//   conversations.set(conversationId, responseId);
// }
