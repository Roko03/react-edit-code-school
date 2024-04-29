export default async function makeWorkshop(data: WorkShop) {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_BACK_BASE_URL}/radionice`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) throw new Error(`Can't make workshop`)

    return await response.json()
}