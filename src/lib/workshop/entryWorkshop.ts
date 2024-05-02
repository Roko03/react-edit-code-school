export default async function entryWorkshop(id: string, num: number, info: string) {

    const data = { numOfEntry: num }

    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/radionice/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) return { success: false, message: `Nije moguće prijaviti se` }

    return { success: true, message: `${info}, prijava je uspiješna` }
}