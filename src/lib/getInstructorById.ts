export default async function getInstructorById(id: string) {
    const response = await fetch(`${`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/predavaci/${id}`}`);

    if (!response.ok) throw new Error(`Can't get that instructor`)

    return await response.json()
}