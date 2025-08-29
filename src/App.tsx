import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Header from "./components/Header/Header";
import MainChart from "./components/MainChart/MainChart";
import axiosInstance from "./services/api-services";
import URL_PATHS from "./services/url-path";
import { useState } from "react";
import type { CANDLE_RESPONE, TIME_FRAME_TYPE } from "./lib/typeCommon";
import { Skeleton } from "./components/ui/skeleton";

function App() {
  const [timeFrame, setTimeFrame] = useState<TIME_FRAME_TYPE>("monthly");
  const getTSLA = async (timeFrame: string) => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: URL_PATHS.TSLA.replace("{timeFrame}", timeFrame),
      });
      return response.data;
    } catch (error) {
      console.error("🚀 ~ getTSLA ~ error:", error);
    }
  };

  const { isFetching, data } = useQuery<CANDLE_RESPONE>({
    queryKey: ["data_TSLA", timeFrame],
    queryFn: () => getTSLA(timeFrame),
  });
  const handleChangeTimeFrame = (value: TIME_FRAME_TYPE) => {
    setTimeFrame(value);
  };
  return (
    <main className="container mx-auto max-w-[1440px]">
      <Header handleChangeTimeFrame={handleChangeTimeFrame} />

      {!isFetching ? (
        <>
          <MainChart data={data?.candles || []} />
        </>
      ) : (
        <>
          {" "}
          <Skeleton className="h-[250px] w-full rounded-xl" />
        </>
      )}
    </main>
  );
}

export default App;
