import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Radio } from 'antd';
import './Popup.css';
import Set from './Set';
import { InputNumber } from 'antd';
import { Bar } from 'react-chartjs-2';

function ResultPopup(props) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [value, setValue] = React.useState(1);
  const [reponses, setreponses] = useState([]);

  useEffect(() => {
    /*         console.log(props);
        axios.get(`/api/quiz/get/${props.quiz_id}`).then(res => {
            console.log(res);
            setreponses(res.data.quiz.responses);
            console.log(res.data.quiz.responses);
        }) */
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    props.setShowResFalse();
    setIsModalVisible(false);
  };

  let labels;
  let tmpData;
  let colors;
  let border;

  if (props.type == '1') {
  } else if (props.type == '2') {
    labels = ['A', 'B', 'C', 'D', 'E'];
    tmpData = [0, 0, 0, 0, 0];
    reponses.forEach((response, idx) => {
      tmpData[parseInt(response.response[0].answer) - 1] += 1;
    });
    colors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ];
    border = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
    ];
  } else {
    labels = ['O', 'X'];
    tmpData = [0, 0];
    reponses.forEach((response, idx) => {
      console.log(parseInt(response.response[0].answer));
      tmpData[parseInt(response.response[0].answer) - 1] += 1;
    });
    colors = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'];
    border = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'];
  }

  const data = {
    /* labels: labels, */
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: '# of Votes',
        /* data: tmpData, */
        data: [5, 7, 2, 3, 5],
        backgroundColor: colors,
        borderColor: border,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

  return (
    <Modal
      title="퀴즈 출제"
      visible={isModalVisible}
      onCancel={handleCancel}
      onOk={handleOk}
      okText="확인"
      wrapClassName={'quiz'}
    >
      <Bar data={data} options={options} />
    </Modal>
  );
}

export default ResultPopup;
