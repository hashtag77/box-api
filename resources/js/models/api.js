import axios from 'axios'

class ApiRequest {
    static async checkLogin() {
        const response = await axios.get('api/box/check-login')
        return response.data;
    }
    static async grantAccess() {
        const response = await axios.get('api/box/grant-access')
        return response.data;
    }
    static  async getCurrentUser(data) {
        const response = await axios.post('api/box/current-user', data)
        return response.data
    }
    static async getFolderFiles(
        private_folder_id,
        shared_folder_id,
        session_id,
        prefix_value,
        private_folder_name,
        shared_folder_name ) {
        const response = await axios.get(`api/box/folder-files/${private_folder_id}/${shared_folder_id}/${session_id}/${prefix_value}/${private_folder_name}/${shared_folder_name}`)
        return response.data
    }
    static async checkRecords(file_id, shared_folder_id) {
        const response = await axios.get(`api/box/check-records/${file_id}}/${shared_folder_id}`)
        return response.data
    }
    static async introduceExhibit(formData) {
        const response = await axios.post(`api/box/intoduce-exhibit`, formData)
        return response.data
    }
    // static async resetChecks(folder_id) {
    //     const response = await axios.get(`api/box/reset-checks/${folder_id}`)
    //     return response.data
    // }
    static async disconnect() {
        const response = await axios.get('api/box/disconnect')
        return response.data
    }
    static async undoExhibit(item) {
        const response = await axios.post(`api/box/undo-exhibit`, item)
        return response.data
    }
    static async refreshRecords(folder_id, folder_type, shared_folder_id) {
        const response = await axios.get(`api/box/refresh-records/${folder_id}/${folder_type}/${shared_folder_id}`)
        return response.data
    }
    static async checkEmailValidity(data){
        const response = await axios.post('api/box/check-email-validity', data)
        return response.data
    }
    static async checkEmail(data){
        const response = await axios.post('api/box/check-email', data)
        return response.data
    }
    static async createUser(data){
        const response = await axios.post('api/box/create-user', data)
        return response.data
    }
    static async loginUser(data){
        const response = await axios.post('api/box/login-user', data)
        return response.data
    }
    static async sendOTP(data){
        const response = await axios.post('api/box/send-otp', data)
        return response.data
    }
    static async matchOTP(data){
        const response = await axios.post('api/box/match-otp', data)
        return response.data
    }
    static async updatePassword(data){
        const response = await axios.post('api/box/update-password', data)
        return response.data
    }
    static async verifyEmail(data){
        const response = await axios.post('api/box/verify-email', data)
        return response.data
    }
    static async updateAccessToken(userId){
        const response = await axios.get(`api/box/update-token/${userId}`)
        return response.data
    }
    static async updateEmail(data){
        const response = await axios.post('api/box/update-email', data)
        return response.data
    }
    static async verifyUpdateEmail(data){
        const response = await axios.post('api/box/verify-update-email', data)
        return response.data
    }
    static async updateProfileInfo(data){
        const response = await axios.post('api/box/update-profile-info', data)
        return response.data
    }
    static async updateOrganizationDetails(data){
        const response = await axios.post('api/box/update-organization-details', data)
        return response.data
    }
    static async inviteUser(data){
        const response = await axios.post('api/box/invite-user', data)
        return response.data
    }
    static async resetUserPassword(data) {
        const response = await axios.post('api/box/reset-user-password', data)
        return response.data
    }
    static async removeUser(data) {
        const response = await axios.post('api/box/remove-user', data)
        return response.data
    }
    static async suspendUser(data) {
        const response = await axios.post('api/box/suspend-user', data)
        return response.data
    }
    static async activatedUser(data) {
        const response = await axios.post('api/box/activate-user', data)
        return response.data
    }
    static async updatePrivilege(data) {
        const response = await axios.post('api/box/update-privilege', data)
        return response.data
    }
    static async contactSupportForSuspendedAccount(data) {
        const response = await axios.post('api/box/contant-suspended-support', data)
        return response.data
    }
    static async checkSessionEntry(data) {
        const response = await axios.post('api/box/check-session-entry', data)
        return response.data
    }
}


export default ApiRequest
