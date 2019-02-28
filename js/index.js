$(function () {
  // role select
  var showRoleOption = false;
  $('.role').on('click', function () {
    if (!showRoleOption) {
      $(this).find('i.fa').removeClass('fa-caret-right').addClass('fa-caret-down');
      $('.role-select').show();
      showRoleOption = !showRoleOption;
    } else {
      $(this).find('i.fa').removeClass('fa-caret-down').addClass('fa-caret-right');
      $('.role-select').hide();
      showRoleOption = !showRoleOption;
    }
  });

  // menu
  $('.menu .menu-item').on('click', function () {
    if ($(this).find('.sub-menu').length) {
      $('.menu .menu-item').removeClass('open');
      $('.menu .menu-item i.fa').removeClass('fa-caret-down').addClass('fa-caret-left');

      $(this).addClass('open');
      $(this).find('i.fa').removeClass('fa-caret-left').addClass('fa-caret-down');
    }
  });

  Highcharts.chart('projectPhaseChart', {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    colors: ['#398dff', '#46df63', '#f42833', '#f6aa22', '#9071ae'],
    credits: {
      enabled: false//不显示LOGO
    },
    exporting: {
      enabled: false
    },
    title: {
      text: '项目阶段',
      style: {
        color: '#333',
        fontWeight: 600
      }
    },
    tooltip: {
      pointFormat: '{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        },
        showInLegend: true
      }
    },
    legend: {
      squareSymbol: false,
      symbolPadding: 5,
      symbolRadius: 3,
      symbolWidth: 25,
      symbolHeight: 14,
    },
    series: [{
      type: 'pie',
      data: [
        ['需求分析', 20],
        ['概要设计', 20],
        ['开发', 20],
        ['测试', 20],
        ['试运行', 20]
      ]
    }]
  });

  var taskStatistialChart = echarts.init(document.getElementById('taskStatistialChart'));
  var taskStatistialChartOption = {
    title: {
      text: '任务统计',
      left: 'center'
    },
    color: ['#6b75fa', '#efe24c'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: ['完成任务', '未完成任务']
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '50%'],
        selectedMode: 'single',
        label: {
          color: '#000000'
        },
        data: [
          { value: 75, name: '完成任务' },
          { value: 25, name: '未完成任务' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.8)'
          }
        }
      }
    ]
  };
  taskStatistialChart.setOption(taskStatistialChartOption);


  let oneCloudUseTime = echarts.init(document.getElementById('oneCloudUseTime'));
  var oneCloudUseTimeOption = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '使用时间: {c}小时'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '2018-09-01', '2018-09-02', '2018-09-03', '2018-09-04', '2018-09-05', '2018-09-06', '2018-09-07', '2018-09-08',
          '2018-09-09', '2018-09-10', '2018-09-11', '2018-09-12', '2018-09-13', '2018-09-14', '2018-09-15'
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          interval: 0
        },
        nameTextStyle: {
          color: '#4a4a4a'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        max: 15
      }
    ],
    series: [
      {
        name: '使用时间',
        type: 'bar',
        barWidth: '60%',
        itemStyle: {
          normal: {
            color: '#1bc899'
          }
        },
        data: ['10.00', '12.00', '11.50', '8.50', '7.50', '8.00', '10.00', '11.00', '12.00', '12.00', '7.00', '10.50', '11.50', '12.00', '8.00']
      }
    ]
  };
  oneCloudUseTime.setOption(oneCloudUseTimeOption);

});