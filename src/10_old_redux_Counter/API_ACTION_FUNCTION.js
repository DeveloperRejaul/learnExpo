import { fetchedPost } from "./action";

export const fetchPost = async (dispatch, getState) => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);
    const posts = await response.json();

    dispatch(fetchedPost(posts));
};
