import API from '@/services/API'
export default {
    getToDo() {
        return API().get('todo')
    }
}