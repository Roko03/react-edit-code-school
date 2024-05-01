export default async function getOrganizationById(id: string) {
    const response = await fetch(`${`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/organizacije/${id}`}`);

    if (!response.ok) throw new Error(`Can't get that organization`)

    return await response.json()
}