import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { t } from '../../i18n.js';

// Asset history data
const assetHistoryData = {
  '24h': {
    labels: ['USDT', 'ETH', 'BTC', 'Others'],
    data: [45, 25, 20, 10],
    values: [4200, 2300, 1850, 950],
    changes: ['+0.24%', '+1.56%', '-0.87%', '+0.52%']
  },
  '7d': {
    labels: ['USDT', 'ETH', 'BTC', 'Others'],
    data: [42, 28, 22, 8],
    values: [4050, 2600, 2050, 750],
    changes: ['+1.32%', '+5.21%', '-2.15%', '+3.87%']
  },
  '30d': {
    labels: ['USDT', 'ETH', 'BTC', 'Others'],
    data: [38, 30, 25, 7],
    values: [3650, 2850, 2350, 680],
    changes: ['+3.12%', '+12.56%', '+5.32%', '+8.45%']
  }
};

// Coin color mapping
const coinColors = {
  'USDT': '#165DFF',
  'ETH': '#722ED1',
  'BTC': '#00C1D4',
  '其他': '#334155'
};

const AssetChart = () => {
  const chartRef = useRef(null);
  const [timeRange, setTimeRange] = useState('7d');
  const [activeAsset, setActiveAsset] = useState('USDT');
  
  // 计算总资产值
  const getTotalAssets = () => {
    return assetHistoryData[timeRange].values.reduce((sum, val) => sum + val, 0).toFixed(2);
  };

  useEffect(() => {
    // 销毁已存在的图表
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    
    const currentData = assetHistoryData[timeRange];
    
    // 图表数据
    const data = {
      labels: currentData.labels,
      datasets: [{
        data: currentData.data,
        backgroundColor: currentData.labels.map(label => coinColors[label]),
        borderWidth: 0,
        hoverOffset: 15,
        hoverBackgroundColor: currentData.labels.map(label => 
          label === activeAsset ? `${coinColors[label]}CC` : coinColors[label]
        )
      }]
    };
    
    // 图表配置
    const config = {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        animation: {
          animateScale: true,
          animateRotate: true
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = currentData.values[context.dataIndex] || 0;
                const percentage = currentData.data[context.dataIndex] || 0;
                return [
                  `${label}: $${value.toFixed(2)}`,
                  `占比: ${percentage}%`
                ];
              }
            }
          }
        },
        onHover: (event, elements) => {
          if (elements.length) {
            const index = elements[0].index;
            setActiveAsset(currentData.labels[index]);
          }
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
  }, [timeRange, activeAsset]);
  
  const currentData = assetHistoryData[timeRange];
  
  return (
    <div className="gradient-border bg-dark-light p-6 md:p-8 mb-8">
      {/* 标题与总资产 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-lg font-bold mb-1">Asset Distribution</h3>
          <p className="text-gray-400 text-sm">Your Digital Asset Composition</p>
        </div>
        <div className="mt-3 md:mt-0 bg-dark p-3 rounded-lg">
          <p className="text-gray-400 text-xs mb-1">Total Assets USDT</p>
          <p className="text-xl font-bold">{getTotalAssets()}</p>
        </div>
      </div>
      
      {/* 时间范围选择器 */}
      <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 bg-dark rounded-lg">
            {['24h', '7d', '30d'].map(range => (
              <button 
                key={range}
                className={`text-sm px-4 py-1.5 rounded-md transition-all ${
                timeRange === range 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'text-gray-400 hover:text-white'
              }`}
                onClick={() => setTimeRange(range)}
              >
                {range === '24h' ? '24 Hours' : range === '7d' ? '7 Days' : '30 Days'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Chart and asset details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Donut chart */}
          <div className="lg:col-span-2 h-64 md:h-80 relative">
            <canvas id="assetChart"></canvas>
            {/* Display selected asset info in center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-gray-400 text-sm mb-1">{activeAsset} Percentage</p>
              <p className="text-3xl font-bold">
                {currentData.data[currentData.labels.indexOf(activeAsset)]}%
              </p>
            </div>
          </div>
          
          {/* Asset details list - removed scrollbar */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-400">Asset Details</h4>
          {/* 修改这里：移除 overflow-y-auto 和 max-h-64 属性 */}
          <div className="space-y-3 pr-2">
            {currentData.labels.map((label, index) => (
              <div 
                key={label}
                className={`p-3 rounded-lg transition-all ${
                  activeAsset === label ? 'bg-dark-lighter border border-primary/30' : 'bg-dark hover:bg-dark-lighter'
                }`}
                onClick={() => setActiveAsset(label)}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: coinColors[label] }}
                    ></div>
                    <span className="font-medium">{label}</span>
                  </div>
                  <span className={`text-sm ${
                    currentData.changes[index].startsWith('+') ? 'text-success' : 'text-danger'
                  }`}>
                    {currentData.changes[index]}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">${currentData.values[index].toFixed(2)}</span>
                  <span className="text-gray-400 text-sm">{currentData.data[index]}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetChart;