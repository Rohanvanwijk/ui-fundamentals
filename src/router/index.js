import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import ChallengeOne from '../pages/challengeOne.vue';
import ChallengeTwo from '../pages/challengeTwo.vue';
import ChallengeThree from '../pages/challengeThree.vue';

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
    },
    {
        path: '/challenge-2',
        name: 'Challenge 2',
        component: ChallengeTwo,
    },
    {
        path: '/challenge-3',
        name: 'Challenge 4',
        component: ChallengeThree,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;