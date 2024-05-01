export default async function deleteInstructor(id: string) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/predavaci/${id}`, {
        method: 'DELETE'
    })

    if (!response.ok) return { success: false, message: `Ne možete izbrisati traženog predavača` }

    return { success: true, message: `Predavač je izbrisana` }
}