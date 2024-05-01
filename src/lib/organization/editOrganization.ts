export default async function editOrganization(id: string, data: Organization) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/organizacije/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, message: `Nije moguće urediti organizaciju` }

    return { success: true, message: `Organizacija je uspiješno ažurirana` }
}