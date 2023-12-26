import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apodData, setDataApod, getDate } from "./apodSlice";
import Loading from "../Loading";
import { FaRegCalendarAlt } from "react-icons/fa";

const Apod = () => {
  const dispatch = useDispatch();
  const apod = useSelector(apodData);
  const date = useSelector(getDate);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const respone = await axios.get(
          `${import.meta.env.VITE_BASE_URL_API}${date}`
        );
        dispatch(setDataApod(respone.data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [date]);

  return (
    <div className="w-full h-full mt-4 p-2 lg:p-8">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="title mb-4">
            <h1 className="text-white text-base lg:text-xl font-semibold">
              {apod.title}
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full">
            <div className="img w-full h-full">
              <div className="img">
                <img src={apod.url} alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="explanation ">
              <div className="explanation">
                <p className="text-slate-200 text-sm lg:text-base">
                  {apod.explanation}
                </p>
              </div>
              <table className="text-white mt-4 ">
                <tbody>
                  <tr className="date">
                    <td>Date</td>
                    <td>: </td>
                    <td className="flex items-center gap-2">
                      {" "}
                      {apod.date} <FaRegCalendarAlt />
                    </td>
                  </tr>
                  <tr className="copyright">
                    <td>Image credit & copyright</td>
                    <td>: </td>
                    <td> {apod.copyright ? apod.copyright : "NASA"} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apod;
