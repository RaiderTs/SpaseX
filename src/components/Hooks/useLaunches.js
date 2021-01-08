import { useEffect, useState } from "react";
import FetchData from "../../service/FetchData";

const fetchData = new FetchData();

const useLaunches = () => {
//   console.log(1);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData.getLaunches().then((launches) => {
      setData((state) => [...launches]);
    }); // В setData передаем данные которые получили от сервера
  }, []);

  const getLaunch = (id) => data.find((item) => item.id === id); // Ведет поиск по ID среди данных

  return { data, getLaunch };
};

export default useLaunches;
