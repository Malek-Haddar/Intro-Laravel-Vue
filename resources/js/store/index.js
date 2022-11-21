import { createStore } from "vuex";

const user = JSON.parse(localStorage.getItem("user"));
const store = createStore({
    state: {
        user: user
            ? user
            : {
                  data: {},
                  token: null,
              },
    },
});

export default store;
