import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  useEffect(() => {
    async function myapi() {
      let res = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2022-04-15T00:00:00Z&to=2022-05-02T00:00:00Z"
      );
      let data = res && res.data ? res.data : [];
      if(data && data.length>0){
        data.map(item => {
          item.Date = moment(item.Date).format("DD/MM/YY")
          return item
        })
      }
      setDataCovid(data);
    }
    myapi();
  }, []);
  return (
    <table className="border-collapse w-full">
      {console.log(dataCovid)}
      <thead>
        <tr className="even:bg-gray-400  border-black">
          {/* npm i moment */}
          <th className="border-2 p-2 border-black text-left">Date</th>
          <th className="border-2 p-2 border-black text-left">Confirmed</th>
          <th className="border-2 p-2 border-black text-left">Active</th>
          <th className="border-2 p-2 border-black text-left">Deaths</th>
          <th className="border-2 p-2 border-black text-left">Recovered</th>
        </tr>
      </thead>
      <tbody>
        {dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item) => {
            return (
              <tr className="even:bg-gray-400  border-black" key={item.ID}>
                <td className="border-2 p-2 border-black text-left">
                  {item.Date}
                </td>
                <td className="border-2 p-2 border-black text-left">
                  {item.Confirmed}
                </td>
                <td className="border-2 p-2 border-black text-left">
                  {item.Active}
                </td>
                <td className="border-2 p-2 border-black text-left">
                  {item.Deaths}
                </td>
                <td className="border-2 p-2 border-black text-left">
                  {item.Recovered}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Covid;
