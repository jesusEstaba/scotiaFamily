const scotiaFamiliaAPI = {
    endpoint: (resource, options={}) => {
        const url = `http://scotiafamily-rakzodia.c9users.io:8081/${resource}`
        return fetch(url, options).then(response => response.json())
    },
    auth: (identifier, password, cb, refresh=false) => {
        
        if (localStorage.getItem('user') && !refresh) {
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

                localStorage.setItem('jwt', jwt)
                
                return fetch('http://scotiafamily-rakzodia.c9users.io:8081/user/me', options)
            })
            .then(r=>r.json())
            .then(userAuthenticated=>{
                localStorage.setItem('user', JSON.stringify(userAuthenticated))
                cb()
            })
    },
    update: () => {

        const jwt = localStorage.getItem('jwt')
        const options = {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }

        fetch('http://scotiafamily-rakzodia.c9users.io:8081/user/me', options)
            .then(r=>r.json())
            .then(userAuthenticated=>{
                localStorage.setItem('user', JSON.stringify(userAuthenticated))
            })
    }
}

export default scotiaFamiliaAPI