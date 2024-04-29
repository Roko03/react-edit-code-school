import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseConfig";
import { v4 } from 'uuid'


export default async function uploadWorkshopImage(data: File) {
    const imageRef = ref(storage, `radionice/${data.name + v4()}`)

    try {
        await uploadBytes(imageRef, data)
        const url = await getDownloadURL(imageRef)

        return { success: true, message: `Uspješno ste objavili fotografiju`, imageUrl: url }
    } catch (errror) {
        return { success: false, message: `Niste uspijei objaviti fotografiju` }
    }
}
