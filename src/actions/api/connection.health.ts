"use server";

const healthCheck = async () => {
  try {
    const response = await fetch("http://localhost:9090/api/health/", {
      method: "GET",
    });
    const data = await response.json();
    console.log("Response", data.message);
  } catch (error) {
    console.error(error);
  }
};

export default healthCheck;
