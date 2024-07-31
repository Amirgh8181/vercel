import axios from 'axios'


const getSignUpUsers = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL as string
    try {
        const req = await axios.get(`${url}/api/users`)
        console.log(req.data);
        return req.data
    } catch (e) {
        throw new Error("cant get users information")
    }

}

export default getSignUpUsers