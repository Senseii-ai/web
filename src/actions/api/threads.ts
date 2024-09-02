import { Message } from "openai/src/resources/beta/threads/messages.js";

export const BaseUrl = "http://localhost:9090/api/";

export const getThreads = async (userId: string) => {
  const data = await fetch("");
};

export const startChat = async (token: string) => {
  try {
    const url = `${BaseUrl}chat/startChat`;
    const data = await httpGet(url, token);
    return data;
  } catch (error) {
    console.error("Error starting thread", error);
  }
};

export const getThreadMessages = async (
  token: string | null,
  threadId: string,
): Promise<Message[] | null> => {
  try {
    const url = `${BaseUrl}threads/${threadId}/messages`;
    const data: Message[] = await httpGet(url, token as string);
    return data;
  } catch (error) {
    console.error("Error getting thread messages");
    return null;
  }
};

export const getBearerToken = (token: string) => {
  return "Bearer " + token;
};

const httpGet = async (url: string, token: string) => {
  const bearer = getBearerToken(token as string);
  const data = await fetch(url, {
    headers: {
      Authorization: bearer,
    },
  });
  return await data.json();
};
