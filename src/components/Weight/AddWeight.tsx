import { Button, Center, Flex, FormControl, Input } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

interface IProps {
  handleAdd: (weight: string) => void;
  inputValue: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddWeight: FC<IProps> = ({
  handleAdd,
  inputValue,
  handleInputChange,
}) => {
  return (
    <Flex mt={10} justifyContent="center" alignItems="center">
      <Center w="300px">
        <FormControl>
          <Input
            type="number"
            colorScheme="purple"
            value={inputValue}
            onChange={handleInputChange}
          />
        </FormControl>
      </Center>
      <Center w="100px">
        <Button onClick={() => handleAdd(inputValue)}>Add</Button>
      </Center>
    </Flex>
  );
};

export default AddWeight;
