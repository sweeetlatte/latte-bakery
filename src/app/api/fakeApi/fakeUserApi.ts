export async function fetchUserData() {
  try {
    const response = await fetch(
      "https://6253a2aac534af46cb98f401.mockapi.io/user",
      {
        method: "GET",
      }
    );

    const data = response.json();

    return data;
  } catch (error) {
    throw "Failed to fetch api from MockAPI";
  }
}
