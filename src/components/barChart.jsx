import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update screen size state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const series = [
    {
      data: [500, 300, 300, 370, 370, 310, 130],
      type: 'bar',
      name: 'a',
      itemStyle: {
        color: 'black',
      },
    },
    {
      data: [200, 100, 150, 270, 190, 170, 200],
      type: 'bar',
      name: 'b',
      itemStyle: {
        color: '#396AFF',
      },
    },
  ];

  const processSeries = (series) => {
    const barWidth = isMobile ? 7 : 20; // Adjust bar width for mobile screens
    return series.map((serie) => ({
      ...serie,
      barWidth,
      data: serie.data.map((item) => {
        const isEnd = item !== '-' && item !== null && item !== undefined;
        const topBorder = isEnd ? 20 : 0;
        const bottomBorder = isEnd ? 20 : 0;

        return {
          value: item,
          itemStyle: {
            color: serie.itemStyle.color,
            borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
          },
        };
      }),
    }));
  };

  const getBarCategoryGap = () => {
    return isMobile ? '25%' : '12%'; // Adjust gap based on screen size
  };

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: processSeries(series),
    barCategoryGap: getBarCategoryGap(),
  };

  const chartStyle = {
    width: '100%',
    height: isMobile ? '100%' : '100%', // Always 100% height
    minHeight: isMobile ? '289px' : '400px', // Apply minHeight only for non-mobile
  };

  return (
    <div className="bg-white rounded-3xl p-0 lg:p-[28px] h-full z-0">
      <ReactECharts
        option={option}
        style={chartStyle}
        opts={{ renderer: 'canvas' }}
      />
    </div>
  );
};

export default BarChart;
