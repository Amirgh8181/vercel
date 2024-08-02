import axios from 'axios'

const getClinics = async () => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL as string
        const req = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        console.log(req.data);
        
        return req.data
    }
    catch (e) {
        return undefined
    }
}

export default getClinics