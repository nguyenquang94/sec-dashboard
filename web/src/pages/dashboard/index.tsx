import { Button, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartQueryResponse, useChartLazyQuery, useChartQuery } from 'src/graphql/queries/chart.generated';
import { ChartEntity, KeyTypeEnum } from 'src/graphql/type.interface';
import { useUpdateChartMutation } from 'src/graphql/mutations/updateChart.generated';
import { useUpdateDataChartSubscription } from 'src/graphql/subscriptions/updateDataChart.generated';
import { Spinner } from 'src/components/Spinner';
import moment from 'moment';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const labels = ['Orange', 'Blue', 'Gray', 'Black'];

export const dataTest = {
  labels,
  datasets: [
    {
      label: 'Dashboard',
      data: [432, 868, 701, 648],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Test',
    },
  },
};

const DashboardPage = React.memo(() => {
  const [data, setData] = useState<ChartEntity>();

  const [getDataChart, { loading }] = useChartLazyQuery({
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
    onCompleted: async (data: ChartQueryResponse) => {
      if (data?.chart) {
        setData(data.chart);
      }
    },
    onError: (a) => {
      //handleError(a)
      console.log(JSON.stringify(a));
    },
  });

  useEffect(() => {
    getDataChart();
  }, []);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const convertDataToChart = (chart: ChartEntity) => {
    const listValue: number[] = [];
    listValue.push(chart.orange);
    listValue.push(chart.blue);
    listValue.push(chart.gray);
    listValue.push(chart.black);
    const newData = {
      labels,
      datasets: [
        {
          label: 'Dashboard',
          data: listValue,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    return newData;
  };

  const [handleSubmitData] = useUpdateChartMutation({
    update: async (proxy, { data }) => {
      notification.success({
        message: 'Success',
        description: 'Update success',
      });
    },
  });

  useUpdateDataChartSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      if (subscriptionData?.data?.updateDataChart) {
        setData(subscriptionData?.data?.updateDataChart);
      }
    },
  });

  const onChangeValue = (type: KeyTypeEnum) => {
    handleSubmitData({
      variables: {
        input: {
          type,
          value: randomIntFromInterval(0, 50),
        },
      },
    });
  };

  return (
    <Spinner loading={loading}>
      <>
        <Helmet title="SEC Dashboard" />
        <div style={{ display: 'flex' }}>
          <div style={{ width: '40%' }}>
            {data ? (
              <Bar style={{ width: 20 }} width={20} height={20} options={options} data={convertDataToChart(data)} />
            ) : null}
          </div>
          <div>Last updated: {moment(data?.updatedAt).format('HH:mm:ss DD/MM/YYYY')}</div>
          <div style={{ marginTop: 50 }}>
            <Button
              onClick={() => onChangeValue(KeyTypeEnum.ORANGE)}
              size={'middle'}
              style={{ backgroundColor: 'orange' }}
            >
              <p style={{ color: 'white' }}>Orange</p>
            </Button>
            <Button onClick={() => onChangeValue(KeyTypeEnum.BLUE)} size={'middle'} style={{ backgroundColor: 'blue' }}>
              <p style={{ color: 'white' }}>Blue</p>
            </Button>
            <Button onClick={() => onChangeValue(KeyTypeEnum.GRAY)} color={'gray'} style={{ backgroundColor: 'gray' }}>
              <p style={{ color: 'white' }}>Gray</p>
            </Button>
            <Button
              onClick={() => onChangeValue(KeyTypeEnum.BLACK)}
              color={'black'}
              style={{ backgroundColor: 'black' }}
            >
              <p style={{ color: 'white' }}>Black</p>
            </Button>
          </div>
        </div>
      </>
    </Spinner>
  );
});

export default DashboardPage;
