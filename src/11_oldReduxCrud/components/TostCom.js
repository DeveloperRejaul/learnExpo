import { useToast } from "native-base";

const TostFnc = (data) => {
    const toast = useToast();

    toast.show({
        description: data,
        bgColor: "green.700",
    });
};

export default TostFnc;
