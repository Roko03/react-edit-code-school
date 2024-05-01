export default async function deleteOrganization(id: string) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/organizacije/${id}`, {
        method: 'DELETE'
    })

    if (!response.ok) return { success: false, message: `Ne možete izbrisati traženu organizaciju` }

    return { success: true, message: `Organizacija je izbrisana` }
}