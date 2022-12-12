import { User } from "../Entities/User"

export async function updateUser(user: User) {
    const fetchedResponse = await fetch(`https://fakestoreapi.com/users/${user.id}`,{
        method:"PUT",
        body:JSON.stringify(user)
    })
        .then(res=>res)
        // .then(json=>console.log(json))
    return fetchedResponse
}