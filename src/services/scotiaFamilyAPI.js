const scotiaFamiliaAPI = {
    endpoint: (resource) => {
        const url = `http://scotiafamily-rakzodia.c9users.io:8081/${resource}`
        return fetch(url).then(response => response.json())
    },
    auth: (identifier, password, cb) => {
        
        if (localStorage.getItem('user')) {
            return cb( JSON.parse(localStorage.getItem('user')) )
        }
        
        const options = {
            method: 'post', 
            body:`identifier=${ identifier }&password=${ password }`, 
            headers: {'Content-Type':'application/x-www-form-urlencoded'}
        }
        
        fetch('http://scotiafamily-rakzodia.c9users.io:8081/auth/local', options)
            .then(r=>r.json())
            .then(({jwt})=>{
                const options = {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }
                
                return fetch('http://scotiafamily-rakzodia.c9users.io:8081/user/me', options)
            })
            .then(r=>r.json())
            .then(userAuthenticated=>{
                localStorage.setItem('user', JSON.stringify(userAuthenticated))
                cb()
            })
    }
}

export default scotiaFamiliaAPI