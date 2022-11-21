import "./bootstrap";

import { createApp } from "vue";
import router from "./router";
import Login from "./components/auth/login.vue";
import Register from "./components/auth/register.vue";

import List from "./components/post/list.vue";
import Add from "./components/post/add.vue";
import Edit from "./components/post/edit.vue";
import Welcome from "./components/Welcome.vue";

createApp({
    components: {
        Welcome,
        Login,
        Register,
        List,
        Add,
        Edit,
    },
})
    .use(router)
    .mount("#app");

// import "./bootstrap";

// import { createApp } from "vue";
// import router from "./router";
// import PostList from "./components/post/List.vue";
// import CreatePost from "./components/post/Add.vue";

// import Add from "./components/post/add.vue";
// const application = createApp();

// const components = import.meta.globEager("./**/*.vue");

// Object.entries(components).forEach(([path, definition]) => {
//     const componentName = path
//         .split("/")
//         .pop()
//         .replace(/\.\w+$/, "");

//     application.component(componentName, definition.default);
// });

// application.use(router).mount("#app");
