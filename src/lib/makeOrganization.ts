export default async function makeOrganization(data: Organization) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/organizacije`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, messsage: `Greška prilikom kreiranja organizacije` }

    return { success: true, messsage: `Uspiješno ste kreirali organizaciju` }
}