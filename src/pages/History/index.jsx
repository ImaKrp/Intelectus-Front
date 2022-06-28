import React, { useEffect } from "react";
import { Container } from "./styles";
import { useRecord } from "../../hooks/useRecord";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const History = () => {
  const { fetchHistory, history } = useRecord();
  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const recognition = history.filter((item) => item.game === "reconhecimento");
  const memory = history.filter((item) => item.game === "memoria");

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Historico",
    },
    yAxis: {
      title: {
        text: "Pontuação",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: "Memória",
        data: memory.map((item) => item.value),
      },
      {
        name: "Reconhecimento",
        data: recognition.map((item) => item.value),
      },
    ],
  };

  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
};
