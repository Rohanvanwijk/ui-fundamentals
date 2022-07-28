import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import ChallengeOne from '../pages/challengeOne.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld,
    },
    {
        path: '/challenge-1',
        name: 'Challenge 1',
        component: ChallengeOne,

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;