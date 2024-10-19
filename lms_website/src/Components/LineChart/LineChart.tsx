import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface DatasetProps {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
}

interface LineChartProps {
  labels: string[];
  datasets: DatasetProps[];
  canvasWidth?: string;
  canvasHeight?: string;
}

const LineChart: React.FC<LineChartProps> = ({
  labels,
  datasets,
  canvasWidth = 'max-w-lg',
  canvasHeight = 'h-64',
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');

    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: datasets.map((dataset) => ({
            ...dataset,
            fill: true,
            tension: 0.4, // smooth curve
          })),
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      return () => {
        myChart.destroy(); // Cleanup chart on component unmount
      };
    }
  }, [labels, datasets]);

  return (
    <div className={`flex justify-center items-center h-full`}>
      <canvas
        ref={chartRef}
        className={`w-full ${canvasWidth} ${canvasHeight}`}
      ></canvas>
    </div>
  );
};

export default LineChart;
