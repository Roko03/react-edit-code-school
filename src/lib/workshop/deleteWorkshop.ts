export default async function deleteWorkshop(id: string) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/radionice/${id}`, {
        method: 'DELETE'
    })

    if (!response.ok) return { success: false, message: `Ne možete izbrisati traženu radionicu` }

    return { success: true, message: `Radionica je izbrisana` }
}