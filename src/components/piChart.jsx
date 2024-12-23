import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const PieChart = () => {

  const data = [
    { value: 30, name: '20% Bill Expenses', itemStyle: { color: '#FC7900', borderWidth: 9, borderColor: '#FFFFFF' } },
    { value: 25, name: '25% Others', itemStyle: { color: '#232323', borderWidth: 9, borderColor: '#FFFFFF' } },
    { value: 20, name: '20% Investment', itemStyle: { color: '#396AFF', borderWidth: 9, borderColor: '#FFFFFF' } },
    { value: 30, name: '30% Entertainment', itemStyle: { color: '#343C6A', borderWidth: 9, borderColor: '#FFFFFF' } },
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const options = {
    tooltip: {
      trigger: 'item',
    },
    legend: false,
    series: [
      {
        name: 'Access From',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '80%'],
        label: {
          show: true, 
          position: 'inner',
          fontSize: isLargeScreen ? 14 : 10, 
          color: '#fff',
          formatter: ({ name }) => {
            const maxLength = isLargeScreen ? 15 : 10; 
            return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name;
          },
        },
        labelLine: {
          show: false,
        },
        data, 
      },
    ],
  };

  
  const wrapperStyle = {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    aspectRatio: '1', 
    margin: '0 auto', 
  };

  return (
    <div style={wrapperStyle}>
      <ReactECharts option={options} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default PieChart;
