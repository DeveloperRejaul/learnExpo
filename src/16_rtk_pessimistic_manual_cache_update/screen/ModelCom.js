import React from "react";
import { Button, Modal, FormControl, Input, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { hideModel } from "../rtk/futusers/taskSlice";
import {
    useAddTaskMutation,
    useUpDateTaskMutation,
} from "../rtk/futusers/taskSliceApi";
import uuid from "react-native-uuid";

export default function ModelCom({
    task,
    setTask,
    updateMode,
    updateId,
    setUpdateMode,
}) {
    const dispatch = useDispatch();
    const { model } = useSelector((state) => state.task);
    const [addTask, {}] = useAddTaskMutation();
    const [upDateTask, {}] = useUpDateTaskMutation();

    const handelSave = () => {
        if (updateMode) {
            setUpdateMode(false);
            upDateTask({
                id: updateId,
                title: task,
            });
        } else {
            addTask({ title: task, id: uuid.v4() });
        }

        setTask("");
        dispatch(hideModel());
    };

    return (
        <>
            <Modal
                isOpen={model}
                onClose={() => dispatch(hideModel())}
                safeAreaTop={true}
            >
                <Modal.Content
                    maxWidth="350"
                    {...styles["center"]}
                    className="dark:bg-gray-950"
                >
                    <Modal.CloseButton />
                    <Modal.Header className="dark:bg-gray-950">
                        <Text className="dark:text-slate-50">Add Task</Text>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>
                                <Text className=" dark:text-slate-300">
                                    Task
                                </Text>
                            </FormControl.Label>
                            <Input
                                value={task}
                                onChangeText={setTask}
                                className="font-medium text-sm dark:text-slate-200 "
                            />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer className="dark:bg-gray-950">
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => dispatch(hideModel())}
                            >
                                <Text className="dark:text-slate-200">
                                    Cancel
                                </Text>
                            </Button>
                            <Button
                                onPress={handelSave}
                                className="dark:bg-teal-800"
                            >
                                {updateMode ? "Update" : "Save"}
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
}

const styles = {
    top: {
        marginBottom: "auto",
        marginTop: 0,
    },
    bottom: {
        marginBottom: 0,
        marginTop: "auto",
    },
    left: {
        marginLeft: 0,
        marginRight: "auto",
    },
    right: {
        marginLeft: "auto",
        marginRight: 0,
    },
};
