import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const trueVal = true;

const data = {
  ups: 0,
  downs: 0,
  num: 0,
  labels: [
    '0초',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
  ],
  datasets: [
    {
      label: '이해O',
      num: 1,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      fill: false,
      radius: 0,
      backgroundColor: 'rgb(67, 222, 108)',
      borderColor: 'rgba(67, 222, 108, 0.2)',
    },
    {
      label: '합계',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      fill: false,
      radius: 1,
      backgroundColor: 'rgb(0, 0, 0, 0.2)',
      borderColor: 'rgba(0, 0, 0, 0.4)',
    },
    {
      label: '이해X',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      fill: false,
      radius: 0,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

function Index(props) {
  const socket = props.socket;
  const [compData, setcompData] = useState(data);
  const [chartRef, setchartRef] = useState(React.createRef());
  const [refresh, setrefresh] = useState(0);
  const [ups, setups] = useState(0);
  const [downs, setdowns] = useState(0);
  const [total, settotal] = useState(0);
  const [currentTime, setcurrentTime] = useState(0);

  function updateData() {
    let ups = chartRef.current.data.ups;
    let downs = -1 * chartRef.current.data.downs;
    let total = ups + downs;
    chartRef.current.data.labels.pop();
    chartRef.current.data.datasets[0].data.pop();
    chartRef.current.data.datasets[2].data.pop();
    let num = (chartRef.current.data.num + 1) * 3;
    let newTime;
    if (num < 60) {
      if (num < 10) {
        newTime = `${(chartRef.current.data.num + 1) * 3}초`;
      } else {
        newTime = `${(chartRef.current.data.num + 1) * 3}초`;
      }
    } else {
      let hour = parseInt(num / 60);
      let minute = num % 60;
      if (minute < 10) {
        newTime = `${hour}분 ${minute}초`;
      } else {
        newTime = `${hour}초 ${minute}초`;
      }
    }
    setcompData({
      ups: 0,
      downs: 0,
      num: chartRef.current.data.num + 1,
      labels: [newTime].concat(chartRef.current.data.labels),
      datasets: [
        {
          label: '이해O',
          data: [ups].concat(chartRef.current.data.datasets[0].data),
          fill: false,
          backgroundColor: 'rgb(67, 222, 108)',
          radius: 0,
          borderColor: 'rgba(67, 222, 108, 0.2)',
        },
        {
          label: '합계',
          data: [total].concat(chartRef.current.data.datasets[1].data),
          fill: false,
          radius: 1,
          backgroundColor: 'rgb(0, 0, 0, 0.2)',
          borderColor: 'rgba(0, 0, 0, 0.4)',
        },
        {
          label: '이해X',
          data: [downs].concat(chartRef.current.data.datasets[2].data),
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          radius: 0,
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    });
    setrefresh(refresh + 1);
    props.setColor(total);
  }

  const config = {
    maintainAspectRatio: false,
    scales: {
      y: {
        min: -10,
        max: 10,
      },
    },
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 8,
          },
        },
      },
    },
  };

  useEffect(() => {
    settotal(ups + downs);
  }, [ups, downs]);

  useEffect(() => {
    socket.on('sendIsUnderstood', function (data) {
      try {
        const elm = document.querySelector(`.participantsclass#${data.email.split('@')[0]}`);
        console.log(
          (elm.childNodes[1].innerHTML = (parseInt(elm.childNodes[1].innerHTML) + 1).toString()),
        );
      } catch (err) {
        console.log(err);
      }
      if (data.type == 'up') {
        chartRef.current.data.ups = chartRef.current.data.ups + 1;
      } else {
        chartRef.current.data.downs = chartRef.current.data.downs + 1;
      }
    });
    setInterval(() => {
      setcurrentTime(currentTime + 1);
      updateData();
    }, 3000);
  }, []);

  function upup() {
    chartRef.current.data.ups = chartRef.current.data.ups + 1;
  }

  function downdown() {
    chartRef.current.data.downs = chartRef.current.data.downs + 1;
  }

  return (
    <>
      {/*             <div style={{ height: '2vh', width: '100%' }}>
                <button onClick={upup} style={{ backgroundColor: "black", height: '1vh', width: '40%' }}></button>
                <button onClick={downdown} style={{ backgroundColor: "pink", height: '1vh', width: '40%' }}></button>
            </div> */}
      <div
        style={{
          height: '34vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Line num={refresh} ref={chartRef} data={compData} options={config} />
      </div>
    </>
  );
}

export default Index;
