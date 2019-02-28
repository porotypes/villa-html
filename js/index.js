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

  // 首页3D饼图配置
  if (document.getElementById('projectPhaseChart')) {
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
  }

  // 首页2D饼图配置
  if (document.getElementById('taskStatistialChart')) {
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
  }

  // 首页柱状图配置
  if (document.getElementById('oneCloudUseTime')) {
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
  }

  // 代码行统计折线图配置
  if (document.getElementById('codesChart')) {
    var codesChart = echarts.init(document.getElementById('codesChart'));
    var codesChartOption = {
      title: {
        text: 'PisMarket 代码行趋势统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        bottom: 10,
        left: 'center'
      },
      grid: {
        left: '5%',
        right: '0'
      },
      xAxis: {
        type: 'category',
        name: '日期',
        nameLocation: 'center',
        nameGap: 30,
        data: ['2018-02-01', '2018-02-02', '2018-02-03', '2018-02-04', '2018-02-05', '2018-02-06', '2018-02-07']
      },
      yAxis: {
        name: '代码行数',
        nameLocation: 'center',
        nameGap: 50,
        type: 'value'
      },
      series: [{
        data: [800, 1500, 2200, 2500, 2600, 3000, 3400],
        type: 'line'
      }]
    };
    codesChart.setOption(codesChartOption);
  }

  // 代码提交日志折线图配置
  if (document.getElementById('codeLogChart')) {
    var codesChart = echarts.init(document.getElementById('codeLogChart'));
    var codesChartOption = {
      title: {
        text: 'PisMarket SVN提交次数统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        bottom: 10,
        left: 'center'
      },
      grid: {
        left: '5%',
        right: '0'
      },
      xAxis: {
        type: 'category',
        name: '日期',
        nameLocation: 'center',
        nameGap: 30,
        data: ['2018-02-01', '2018-02-02', '2018-02-03', '2018-02-04', '2018-02-05', '2018-02-06', '2018-02-07']
      },
      yAxis: {
        name: '代码行数',
        nameLocation: 'center',
        nameGap: 50,
        type: 'value'
      },
      series: [{
        data: [3, 1, 2, 3, 5, 2, 3],
        type: 'line'
      }]
    };
    codesChart.setOption(codesChartOption);
  }

});