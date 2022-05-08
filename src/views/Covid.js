import React, { useEffect, useState } from "react";
import useFetch from "../Fetch/Fetch";
import moment from "moment";

const Covid = () => {

  const today = moment().startOf("day");
  const priorDate  = today.subtract(31,"day");


  const {data:dataCovid,loading,isError} = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`
  )

  return (
    <>
      <h3 className="py-3">Covid 19 tracking in vietnam </h3>
      <table className="border-collapse w-full">
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
          {isError === false &&
            loading === false &&
            dataCovid &&
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
          {loading === true && (
            <tr>
              <td
                colSpan="5"
                className="border-2 p-2 border-black text-center..."
              >
                loading.....
              </td>
            </tr>
          )}
          {isError === true && (
            <tr>
              <td
                colSpan="5"
                className="border-2 p-2 border-black text-center..."
              >
                something wrong.....
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
