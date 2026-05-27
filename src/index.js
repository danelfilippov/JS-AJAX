import { createApp } from 'vue'

import App from './App.vue'
import ToDo from './pages/ToDo.vue'
import Modals from './pages/Modals.vue'
import Messages from './pages/Messages.vue'
import Validation from './pages/Validation.vue'
import ChuckNorris from './pages/ChuckNorris.vue'
import RickAndMory from './pages/RickAndMory.vue'

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: ToDo, name: 'ToDo' },
    { path: '/modals', component: Modals, name: 'Modals' },
    { path: '/messages', component: Messages, name: 'Messages' },
    { path: '/validation', component: Validation, name: 'Button' },
    { path: '/chucknorris', component: ChuckNorris, name: 'Chuck' },
    { path: '/rickandmory', component: RickAndMory, name: 'Rick' },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})



const app = createApp(App)
app.use(router)