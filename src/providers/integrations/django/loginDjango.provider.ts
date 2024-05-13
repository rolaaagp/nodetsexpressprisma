export const getLoginDjango = async (authData: AuthDjango): Promise<void> => {
  try {
    const response = await fetch("http://localhost:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("Error al hacer la petición:", error);
  }
};

interface AuthDjango {
  username: string;
  password: string;
}
