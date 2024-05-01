export default async function getInstructors() {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/predavaci`)

    if (!response.ok) throw new Error(`Can't fetch instructors`)

    return await response.json();
}