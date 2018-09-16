const scotiaFamiliaAPI = {
    endpoint: (resource) => {
        const url = `http://scotiafamily-rakzodia.c9users.io:8081/${resource}`
        return fetch(url).then(response => response.json())
    }
}

export default scotiaFamiliaAPI