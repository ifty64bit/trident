export async function getAllMemes() {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/memes`,
            {
                cache: "no-store",
            }
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
