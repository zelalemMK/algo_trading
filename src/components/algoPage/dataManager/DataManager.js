
const url = "http://localhost:5002"

const AlgoDataManager = {
    getAll() {
        return fetch(`${url}/algo`).then(result => result.json())
    },
    post(algo) {
        return fetch(`${url}/algo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(algo)
        }).then(data => data.json())
    }
}

export default AlgoDataManager