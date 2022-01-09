import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MatchupPicker from '../views/MatchupPicker.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/matchup', component: MatchupPicker },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  },
});

export default router;
