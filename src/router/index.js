import { createRouter, createWebHistory } from "vue-router";

const routes = [{
    path: '/',
    name: 'Main',
    component: () =>
        import ('../view/Main.vue')
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;