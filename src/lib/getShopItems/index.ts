"use server"
import axios from "axios";


const getShopItems = async () => {
    const url = process.env.Next_PUBLIC_BACKEND_SOURCE_URL as string
    console.log(url);

    try {
        const req = await axios.get(`${url}/api/products`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        return req.data
    }
    catch (e) {
        throw new Error("cant recive products")
    }
};

export default getShopItems;