
export async function GET(req:Request){
    try {
        return Response.json({
            message:"Hello Next js API's",
            status:200
        })
    } catch (error) {
        return Response.json({
            message:"Something went wrong try again later!",
            status:404
        })
    }
}
