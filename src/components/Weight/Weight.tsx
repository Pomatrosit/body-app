import classes from "./Weight.module.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useRef } from "react";
import { firebaseDB } from "../../helpers/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

declare global {
  interface Window {
    M: any;
  }
}

const data = [
  {
    name: "Day 1",
    uv: 110,
  },
  {
    name: "Day 2",
    uv: 100,
  },
  {
    name: "Day 3",
    uv: 80,
  },
];

const Weight = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const getWeight = async (firebaseDB: any) => {
    const weightCol = collection(firebaseDB, "weight");
    const weightSnapshot = await getDocs(weightCol);
    const weightList = weightSnapshot.docs.map((doc) => doc.data());
    console.log(weightList);
  };

  useEffect(() => {
    window.M.Modal.init(modalRef.current);

    getWeight(firebaseDB);
  }, []);

  const a = 1;

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>Ваш вес</h3>
      <hr className={classes.hr} />
      <div className={classes.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[80, 110]} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#4db6ac"
              fill="#4db6ac"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={classes.btnContainer}>
        <a
          className="waves-effect waves-light btn modal-trigger"
          href="#modal1"
        >
          Добавить значение
        </a>
      </div>

      <div id="modal1" className="modal" ref={modalRef}>
        <div className="modal-content">
          <h5 className={classes.modalTitle}>Добавить значение веса</h5>
          <div className="input-field col s6">
            <input id="last_name" type="number" className="validate" />
            <label htmlFor="last_name">Вес (кг.)</label>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Сохранить
          </a>
        </div>
      </div>
    </div>
  );
};

export default Weight;
