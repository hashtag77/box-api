import axios from 'axios'

class ExhibitApi {
    static async checkSessionLogin() {
        const response = await axios.get('api/box/check-session-login')
        return response.data;
    }
    static async sessionLogin(data) {
        const response = await axios.post('api/box/session-login', data)
        return response.data;
    }
    static async checkSessionId(id) {
        const response = await axios.post(`api/box/check-session-id`, id)
        return response.data
    }
    static async getSessionData(data) {
        const response = await axios.post(`api/box/get-folder-files`, data)
        return response.data
    }
    static async updateAccessToken(userId){
        const response = await axios.get(`api/box/update-access-token/${userId}`)
        return response.data
    }
    static async follow(data) {
        const response = await axios.post(`api/box/follow`, data)
        return response.data
    }
}

export default ExhibitApi
