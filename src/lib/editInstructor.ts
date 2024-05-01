export default async function editInstructor(id: string, data: Instructor) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/predavaci/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, message: `Nije moguće urediti predavača` }

    return { success: true, message: `Uspiješno ste uredili predavača` }
}