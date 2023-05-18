import { HStack, Spinner } from "native-base";

const SpinnerCom = () => {
    return (
        <HStack space={8} justifyContent="center" alignItems="center">
            <Spinner size="lg" color="cyan.500" />
        </HStack>
    );
};
export default SpinnerCom;
