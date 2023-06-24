import React from "react";
import { Stack, Button, Modal, FormControl, Input } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { hideModel } from "../rtk/features/addTask/addSlice";
import { useState } from "react";
import { useAddPostMutation } from "../rtk/features/api/apiSlice";

export default function Model() {
    const [task, setTask] = useState("");
    const { model } = useSelector((state) => state.addTask);
    const dispatch = useDispatch();
    const [addTask, { isSuccess }] = useAddPostMutation();

    return (
        <>
            <Stack
                direction={{
                    base: "column",
                    md: "row",
                }}
                space={2}
            ></Stack>
            <Modal
                isOpen={model}
                onClose={() => dispatch(hideModel())}
                safeAreaTop={true}
            >
                <Modal.Content maxWidth="350" {...styles["center"]}>
                    <Modal.CloseButton />
                    <Modal.Header>Add Task </Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>Task</FormControl.Label>
                            <Input value={task} onChangeText={setTask} />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    dispatch(hideModel());
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={async () => {
                                    await addTask({ title: task });
                                    setTask("");
                                    if (isSuccess) {
                                        dispatch(hideModel());
                                    }
                                }}
                            >
                                Save
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
    center: {},
};
