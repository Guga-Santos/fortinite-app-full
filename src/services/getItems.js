export default async function getItems() {
    const URL = " https://fortniteapi.io/v2/items/list?lang=pt-BR";
    
    try {
        const response = await fetch(URL, { headers: {Authorization: '7d536239-55aad726-46d66001-e969f032'}})

        const data = await response.json();
        return data;

    } catch (error) {
        return Error(error)
    }
}
