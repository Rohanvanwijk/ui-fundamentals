import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import ChallengeOne from '../pages/challenge-1.vue';
import ChallengeTwo from '../pages/challenge-2.vue';
import ChallengeThree from '../pages/challenge-3.vue';
import ChallengeFour from '../pages/challenge-4.vue';
import ChallengeFive from '../pages/challenge-5.vue';

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
        name: 'Challenge 3',
        component: ChallengeThree,
    },
    {
        path: '/challenge-4',
        name: 'Challenge 4',
        component: ChallengeFour,
    },
    {
        path: '/challenge-5',
        name: 'Challenge 5',
        component: ChallengeFive,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;