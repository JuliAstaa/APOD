import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div>
      <div className="title mb-4">
        <h1 className="text-white text-xl font-semibold">
          <Skeleton width={300} />
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full">
        <div className="img w-full h-full">
          <div className="img">
            <div className="w-full h-full">
              <Skeleton height={500} />
            </div>
          </div>
        </div>
        <div className="explanation flex flex-col gap-4 ">
          <div className="explanation">
            <p className="text-slate-400">
              <Skeleton count={8} />
            </p>
          </div>
          <table className="text-white mt-4 w-1/2">
            <tbody>
              <tr className="date">
                <td>
                  <Skeleton />
                </td>
              </tr>
              <tr className="copyright">
                <td>
                  <Skeleton />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Loading;
