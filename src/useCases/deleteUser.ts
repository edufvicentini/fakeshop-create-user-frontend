import { User } from "../Entities/User"

export async function deleteUser(userId: number) {
    const fetchedResponse = await fetch(`https://fakestoreapi.com/users/${userId}`,{
        method:"DELETE"
    })
        .then(res=>res)
        // .then(json=>console.log(json))
    return fetchedResponse
}