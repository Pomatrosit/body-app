import { Box } from "@chakra-ui/react";
import useWeight from "./useWeight";
import WeightChart from "./WeightChart";
import AddWeight from "./AddWeight";

export interface IWeight {
  value: number;
  createdAt: number;
}

const Weight = () => {
  const { weight, handleAdd, inputValue, handleInputChange } = useWeight();

  return (
    <Box>
      <WeightChart weight={weight} />
      <AddWeight
        handleAdd={handleAdd}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
    </Box>
  );
};

export default Weight;
