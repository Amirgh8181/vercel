const url = process.env.NEXT_PUBLIC_API_URL as string


export async function GET() {
    try {
        const req = await fetch(`${url}/api/clinics`, {
            method:'GET',
            headers: { "Content-Type": "application/json" },
        }).then(res=>res.json())
        
        console.log(req);
                
         return Response.json(req);

    } catch (e) {
        return Response.json({ e })
    }
}