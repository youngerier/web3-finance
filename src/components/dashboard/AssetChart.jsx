import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const AssetChart = () => {
  const chartRef = useRef(null);
  const [timeRange, setTimeRange] = useState('7天');
  
  useEffect(() => {
    // 销毁已存在的图表
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    
    // 图表数据
    const data = {
      labels: ['USDT', 'ETH', 'BTC', '其他'],
      datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: [
          '#165DFF',
          '#722ED1',
          '#00C1D4',
          '#334155'
        ],
        borderWidth: 0,
        hoverOffset: 10
      }]
    };
    
    // 图表配置
    const config = {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#94a3b8',
              padding: 20,
              font: {
                size: 12
              }
            }
          }
        },
        cutout: '70%',
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    };
    
    // 创建图表
    const ctx = document.getElementById('assetChart').getContext('2d');
    chartRef.current = new Chart(ctx, config);
    
    // 清理函数
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [timeRange]);
  
  return (
    <div className="gradient-border bg-dark-light p-6 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-lg font-bold mb-1">资产分布</h3>
          <p className="text-gray-400 text-sm">您的数字资产构成</p>
        </div>
        <div className="mt-3 md:mt-0 flex space-x-2">
          <button 
            className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
              timeRange === '24小时' ? 'bg-primary/10 text-primary' : 'bg-dark-lighter hover:bg-dark-lighter/80'
            }`}
            onClick={() => setTimeRange('24小时')}
          >
            24小时
          </button>
          <button 
            className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
              timeRange === '7天' ? 'bg-primary/10 text-primary' : 'bg-dark-lighter hover:bg-dark-lighter/80'
            }`}
            onClick={() => setTimeRange('7天')}
          >
            7天
          </button>
          <button 
            className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
              timeRange === '30天' ? 'bg-primary/10 text-primary' : 'bg-dark-lighter hover:bg-dark-lighter/80'
            }`}
            onClick={() => setTimeRange('30天')}
          >
            30天
          </button>
        </div>
      </div>
      <div className="h-64">
        <canvas id="assetChart"></canvas>
      </div>
    </div>
  );
};

export default AssetChart;
