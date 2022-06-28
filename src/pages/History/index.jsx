import React, { useEffect } from "react";
import { Container, Card, User } from "./styles";
import { useRecord } from "../../hooks/useRecord";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BiUser } from "react-icons/bi";
import { useSession } from "../../hooks/useSession";

export const History = () => {
  const { fetchHistory, history } = useRecord();
  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);
  const { signOut } = useSession();
  const recognition = history.filter((item) => item.game === "reconhecimento");
  const memory = history.filter((item) => item.game === "memoria");

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Histórico de desempenho",
    },
    subtitle: {
      text: "Por jogo em ordem cronológica",
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
      <User>
        <BiUser />
        <div>
          <button type="button" onClick={signOut}>
            Sair
          </button>
        </div>
      </User>
      <Card>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Card>
    </Container>
  );
};
