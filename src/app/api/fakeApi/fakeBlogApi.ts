export async function fetchBlogData() {
    try {
        const response = await fetch(
            "https://623c87828e9af58789528049.mockapi.io/api/v1/bakery/blog",
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
