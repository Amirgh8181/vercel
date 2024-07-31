import axios from 'axios'

const getClinics = async () => {
    const url = process.env.NEXT_PUBLIC_CLIENT_URL as string
    const req = await axios.get(`${url}/api/auth/clinics`)
    console.log(req.data);
    
    if (!req.data) {
        throw new Error("somthing went wrong")
    }
    return req.data
}

export default getClinics