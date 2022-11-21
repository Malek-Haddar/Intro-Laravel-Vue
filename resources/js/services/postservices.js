import axios from "axios";
import { ref } from "vue";
import router from "../router";
import store from "../store";

export default function usePosts() {
    const posts = ref([]);
    const post = ref([]);
    const errors = ref("");

    const getPosts = async () => {
        let response = await axios.get("/api/post");
        posts.value = response.data.posts;
    };

    const createPost = async (data) => {
        try {
            await axios.post("/api/post", data);
            await router.push({ name: "postList" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    };

    const destroyPost = async (id) => {
        if (!window.confirm("Are u sure !")) return;
        await axios.delete("/api/post/" + id);
        await getPosts();
    };
    const getPost = async (id) => {
        let response = await axios.get("/api/post/" + id);
        post.value = response.data.data;
        console.log("edit post", post.value);
    };

    const UpdatePost = async (id) => {
        errors.value = "";
        try {
            await axios.put("/api/post/" + id, post.value);
            await router.push({ name: "postList" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
                console.log(e.response.data.errors);
            }
        }
    };

    const signin = async (data) => {
        axios
            .post("api/login", data)

            .then((res) => {
                console.log({ res });
                store.state.user.token = res.data.token;
                if (res.data) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
                router.push({ name: "postList" });
                console.log(store.state.user.token);
            })
            .catch((e) => {
                if (e.response.status === 422) {
                    errors.value = e.response.data.errors;
                    console.log(e.response.data.errors);
                }
            });
    };
    const signup = async (data) => {
        axios
            .post("api/register", data)
            .then((res) => {
                store.state.user.token = res.data.token;
                router.push({ name: "postList" });

                console.log(store.state.user.token);
            })
            .catch((e) => {
                if (e.response.status === 422) {
                    errors.value = e.response.data.errors;
                    console.log(e.response.data.errors);
                }
            });
    };

    //Logout user
    const logout = () => {
        store.state.user = null;
        localStorage.removeItem("user");
        router.push({ name: "home" });
    };

    return {
        posts,
        post,
        getPosts,
        createPost,
        destroyPost,
        getPost,
        UpdatePost,
        signin,
        signup,
        logout,
    };
}
