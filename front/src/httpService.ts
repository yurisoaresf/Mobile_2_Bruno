const httpService = {
    login: (data: any) => {
        return fetch("http://10.5.4.108:3000/api/user/auth",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    },
    createUser: (data: any) => {
        return fetch("http://10.5.4.108:3000/api/user",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

export default httpService