export default async function makeInstructor(data: Instructor) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/predavaci`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, messsage: `Greška prilikom kreiranja predavača` }

    return { success: true, message: `Uspiješno ste kreirali predavača` }
}