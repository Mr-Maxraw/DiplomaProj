import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/home.vue";
import Ingredients from "./components/ingredients.vue";
import Recipes from "./components/recipes.vue";

const history = createWebHistory();

const routes = [
    { path: "/", component: Home },
    { path: "/ingredients", component: Ingredients },
    { path: "/recipes", component: Recipes },
];

const router = createRouter({ history, routes });

export default router;