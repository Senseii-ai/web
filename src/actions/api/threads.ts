import { IThreadList } from "@/components/Sidebar";
import { Message } from "openai/src/resources/beta/threads/messages.js";

export const BaseUrl = "http://localhost:9090/api/";

export const getThreads = async (token: string) => {
  try {
    const url = `${BaseUrl}threads/`;
    const data: IThreadList[] = await httpGet(url, token);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const startChat = async (token: string, message: string) => {
  console.log("I was triggered");
  try {
    const url = `${BaseUrl}chat/startChat`;
    const userMessage = {
      message: {
        role: "user",
        content: message,
      },
    };
    const data: string | null = await httpPost(url, token, userMessage);
    return data;
  } catch (error) {
    console.error("Error starting thread", error);
    return null;
  }
};

export const getThreadMessages = async (
  token: string | null,
  threadId: string,
): Promise<Message[] | null> => {
  try {
    if (threadId === "") {
      return null;
    }
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

const httpPost = async (url: string, token: string, body: any) => {
  const bearer = getBearerToken(token);
  const data = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await data.json();
};

const httpGet = async (url: string, token: string) => {
  try {
    const bearer = getBearerToken(token as string);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `${bearer}`,
      },
    });
    if (!response.ok) {
      console.log("response not good", response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error doing fetch get", error);
  }
};
