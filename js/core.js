const util = {
    http: {
        post: async (url, data) => {
            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data)
            })
            if(response.status === 200 || response.status === 204) return response.text()
            if(response.status === 401) window.location.href = "/login"
        }
    }
}