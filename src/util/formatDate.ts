export default function formatDate(dateString: string) {

    let date = new Date(dateString)

    let dd = date.getDate()
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear()

    return `${dd}.${mm}.${yy} - 16:00-20:00`
}