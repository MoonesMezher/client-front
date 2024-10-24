// const url = 'http://localhost:3000'
const url = 'https://my-portfolio-g3pu.onrender.com'

const API = {
    ABOUT: {
        GET: url+'/api/abouts/'
    },
    EXPERIENCE: {
        GET: url+'/api/experiences/'
    },
    PROJECTS: {
        GET: url+'/api/projects/'
    },
    SKILLS: {
        GET: url+'/api/skills/'
    },
    FEEDBACKS: {
        GET: url+'/api/feedbacks/'
    },
    MESSAGES: {
        GET: url+'/api/messages/',
        POST: url+'/api/messages/add',
        DELETE: url+'/api/messages/delete/'
    },
    USERS: {
        LOGIN: url+'/api/users/login',
        LOGOUT: url+'/api/users/logout'
    }
}

export default API