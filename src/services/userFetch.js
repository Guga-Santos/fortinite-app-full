export default async function userFetch(name) {
    const URL = `https://fortniteapi.io/v1/lookup?username=${name}`;
    


    try {
        const response = await fetch(URL, { headers: {Authorization: '7d536239-55aad726-46d66001-e969f032'}})

        const data = await response.json();
        return data.account_id;

    } catch (error) {
        return Error(error)
    }


} 
