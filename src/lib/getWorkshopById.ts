export default async function getWorkshopById(id: string) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/radionice/${id}`)

    if (!response.ok) throw new Error(`Nije moguće dohvatiti tu radionicu`)

    return await response.json()
}