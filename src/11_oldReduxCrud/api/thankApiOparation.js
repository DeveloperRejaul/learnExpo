import {
    createDataFailed,
    createDataRequest,
    createDataSucceeded,
    deleteDataFailed,
    deleteDataRequest,
    deleteDataSucceeded,
    fetchDataFailed,
    fetchDataRequest,
    fetchDataSucceeded,
    updateDataFailed,
    updateDataRequest,
    updateDataSucceeded,
} from "../action/task.action";

export const fetchData = async (dispatch) => {
    const url = `http://192.168.34.182:3004/api/task`;
    try {
        dispatch(fetchDataRequest());
        const response = await fetch(url);
        const tasks = await response.json();
        if (response.status === 200) {
            dispatch(fetchDataSucceeded(tasks));
        } else {
            dispatch(fetchDataFailed());
        }
    } catch (error) {
        dispatch(fetchDataFailed());
    }
};

export const deleteData = (id) => {
    const url = `http://192.168.34.182:3004/api/task/${id}`;
    return async (dispatch) => {
        try {
            dispatch(deleteDataRequest());
            const response = await fetch(url, { method: "DELETE" });

            if (response.status === 200) {
                dispatch(deleteDataSucceeded(id));
            } else {
                dispatch(deleteDataFailed());
            }
        } catch (error) {
            dispatch(deleteDataFailed());
        }
    };
};

export const createData = (data) => {
    const url = `http://192.168.34.182:3004/api/task`;
    return async (dispatch) => {
        try {
            dispatch(createDataRequest());
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ title: data }),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });

            const newTask = await response.json();
            if (response.status === 200) {
                dispatch(createDataSucceeded(newTask));
            } else {
                dispatch(createDataFailed());
            }
        } catch (error) {
            dispatch(createDataFailed());
        }
    };
};

export const updateData = (data) => {
    const url = `http://192.168.34.182:3004/api/task`;
    return async (dispatch) => {
        try {
            dispatch(updateDataRequest());
            const response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });

            const newTask = await response.json();
            if (response.status === 200) {
                dispatch(updateDataSucceeded(newTask));
            } else {
                dispatch(updateDataFailed());
            }
        } catch (error) {
            dispatch(updateDataFailed());
        }
    };
};
