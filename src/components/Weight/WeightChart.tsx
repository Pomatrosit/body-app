import { Box } from "@chakra-ui/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IWeight } from "./Weight";
import { FC } from "react";

interface IProps {
  weight: IWeight[];
}

const WeightChart: FC<IProps> = ({ weight }) => {
  const chartData = weight.map((w) => {
    const date = new Date(w.createdAt).toLocaleDateString();
    return {
      name: date,
      uv: w.value,
    };
  });

  return (
    <Box height={500}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={500}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[80, 110]} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default WeightChart;
