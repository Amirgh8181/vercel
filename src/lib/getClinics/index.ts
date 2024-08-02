import axios from 'axios'

const getClinics = async () => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL as string
        const req = await axios.get(`${url}/api/clinics`)
        return req.data
    }
    catch (e) {
        return undefined
    }
}

export default getClinics