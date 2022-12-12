import { User } from "../Entities/User";

export async function createUser(user: User) {
    const fetchedResponse = await fetch('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(user)
    })
        .then(res=>res)
        // .then(json=>console.log(json))
    return fetchedResponse
}