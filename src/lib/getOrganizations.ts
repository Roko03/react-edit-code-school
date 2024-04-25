export default async function getOrganizations() {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/organizacije`)

    if (!response.ok) throw new Error(`Can't fetch organizations`)

    return await response.json()
}