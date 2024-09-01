export const getThreads = async (userId: string) => {
  const data = await fetch("");
};

export const startChat = async (token: string) => {
  const bearer = getBearerToken(token);
  const data = await fetch("http://localhost:9090/api/chat/startChat", {
    headers: {
      Authorization: bearer,
    },
  });

  const response = await data.json();
  return response;
};

export const getBearerToken = (token: string) => {
  return "Bearer" + token;
};
