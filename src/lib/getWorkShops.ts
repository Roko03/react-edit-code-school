export default async function getWorkshops() {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/radionice`)

    if (!response.ok) return new Error(`Can't get workshops`);

    return await response.json()
}