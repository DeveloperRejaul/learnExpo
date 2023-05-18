export const FETCH_DATA_REQUEST = "fetch_data_request";
export const FETCH_DATA_SUCCEEDED = "fetch_data_succeeded";
export const FETCH_DATA_FAILED = "fetch_data_failed";

// delete
export const DELETE_DATA_REQUEST = "delete_data_request";
export const DELETE_DATA_SUCCEEDED = "delete_data_succeeded";
export const DELETE_DATA_FAILED = "delete_data_failed";

// create data
export const CREATE_DATA_REQUEST = "create_data_request";
export const CREATE_DATA_SUCCEEDED = "create_data_succeeded";
export const CREATE_DATA_FAILED = "create_data_failed";

// update data
export const UPDATE_DATA_REQUEST = "update_data_request";
export const UPDATE_DATA_SUCCEEDED = "update_data_succeeded";
export const UPDATE_DATA_FAILED = "update_data_failed";

// only fetching data
export const fetchDataRequest = (value) => {
    return {
        type: FETCH_DATA_REQUEST,
        payload: value,
    };
};
export const fetchDataSucceeded = (value) => {
    return {
        type: FETCH_DATA_SUCCEEDED,
        payload: value,
    };
};
export const fetchDataFailed = (value) => {
    return {
        type: FETCH_DATA_FAILED,
        payload: value,
    };
};

// deleting data
export const deleteDataRequest = (value) => {
    return {
        type: DELETE_DATA_REQUEST,
        payload: value,
    };
};
export const deleteDataSucceeded = (value) => {
    return {
        type: DELETE_DATA_SUCCEEDED,
        payload: value,
    };
};
export const deleteDataFailed = (value) => {
    return {
        type: DELETE_DATA_FAILED,
        payload: value,
    };
};

// Create data
export const createDataRequest = (value) => {
    return {
        type: CREATE_DATA_REQUEST,
        payload: value,
    };
};
export const createDataSucceeded = (value) => {
    return {
        type: CREATE_DATA_SUCCEEDED,
        payload: value,
    };
};
export const createDataFailed = (value) => {
    return {
        type: CREATE_DATA_FAILED,
        payload: value,
    };
};

// update
export const updateDataRequest = (value) => {
    return {
        type: UPDATE_DATA_REQUEST,
        payload: value,
    };
};
export const updateDataSucceeded = (value) => {
    return {
        type: UPDATE_DATA_SUCCEEDED,
        payload: value,
    };
};
export const updateDataFailed = (value) => {
    return {
        type: UPDATE_DATA_FAILED,
        payload: value,
    };
};
