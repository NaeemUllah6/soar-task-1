import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      xAxis: {
        type: 'category',
        boundaryGap: false, 
        data: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan','']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [100, 350, 220, 500, 420, 790, 200, 580,220,650, 550],
          type: 'line',
          smooth: true,
          showSymbol: false, 
          areaStyle: {
            color: '#2D60FF40' 
          },
          lineStyle: {
            color: '#1814F3',
            width:4
          }
        }
      ]
    };

    chartInstance.setOption(option);
    const handleResize = () => {
      chartInstance.resize(); // Resize chart dynamically on window resize
    };

    window.addEventListener('resize', handleResize);
    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '300px' }} />;
};

export default LineChart;
