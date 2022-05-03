import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
     
        async function myapi() {
          let res = await axios.get(url);
          let data = res && res.data ? res.data : [];
          if (data && data.length > 0) {
            data.map((item) => {
              item.Date = moment(item.Date).format("DD/MM/YY");
              return item;
            });
          }
          setData(data.reverse());
          setIsError(false);
          setLoading(false);
        }
        myapi();
      
    } catch (e) {
      setLoading(false);
      setIsError(true);
    }
  }, []);

  return {
      data,loading,isError
  }
}

export default useFetch