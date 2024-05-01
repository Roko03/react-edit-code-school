export default async function editWorkshop(id: string, data: WorkShop) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/radionice/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, message: `Nije moguće urediti radionicu` }

    return { success: true, message: `Radionica je uspiješno ažurirana` }
}