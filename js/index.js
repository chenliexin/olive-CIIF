$(function () {
  // 时间
  function getTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var day = now.getDay();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var strDay = `星期${['日', '一', '二', '三', '四', '五', '六'][day]}`;
    var strDate = [year, getTimeStr(month), getTimeStr(date)].join('.');

    $('#strDay').html(strDay);
    $('#strDate').html(strDate);
    $('#strHour').html(getTimeStr(hour));
    $('#strMinute').html(getTimeStr(minute));
    $('#strSecond').html(getTimeStr(second));
  }
  function getTimeStr(val) {
    return `${String(val).length === 1 ? '0' : ''}${val}`;
  }
  getTime();
  setInterval(() => {
    getTime();
  }, 1000);

  // 饼图1
  (function () {
    let chart = echarts.init(document.getElementById('comp1'));
    let option = {
      title: {
        text: '时间稼动率\n组成',
        x: 'center',
        y: 'center',
        textStyle: {
          fontSize: 12,
          fontWeight: 'normal',
          color: '#121212'
        }
      },
      grid: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0
      },
      series: [
        {
          radius: [46, 66],
          type: 'pie',
          data: [
            {
              value: 17,
              itemStyle: { color: '#0362a7' }
            },
            {
              value: 23,
              itemStyle: { color: '#0f98ad' }
            },
            {
              value: 3,
              itemStyle: { color: '#f1963a' }
            },
            {
              value: 13,
              itemStyle: { color: '#f16548' }
            },
            {
              value: 23,
              itemStyle: { color: '#a166ab' }
            }
          ],
          label: {
            show: false
          },
          silent: true
        },
        // 边框的设置
        {
          radius: [40, 46],
          type: 'pie',
          data: [
            {
              value: 17,
              itemStyle: { color: '#0362a7', opacity: 0.5 }
            },
            {
              value: 23,
              itemStyle: { color: '#0f98ad', opacity: 0.5 }
            },
            {
              value: 3,
              itemStyle: { color: '#f1963a', opacity: 0.5 }
            },
            {
              value: 13,
              itemStyle: { color: '#f16548', opacity: 0.5 }
            },
            {
              value: 23,
              itemStyle: { color: '#a166ab', opacity: 0.5 }
            }
          ],
          label: {
            show: false
          },
          silent: true
        }
      ]
    };
    chart.setOption(option);
  })();

  // 饼图2
  (function () {
    let chart = echarts.init(document.getElementById('comp2'));
    let option = {
      title: {
        text: '性能稼动率\n组成',
        x: 'center',
        y: 'center',
        textStyle: {
          fontSize: 12,
          fontWeight: 'normal',
          color: '#121212'
        }
      },
      grid: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0
      },
      series: [
        {
          radius: [46, 66],
          type: 'pie',
          data: [
            {
              value: 17,
              itemStyle: { color: '#0362a7' }
            },
            {
              value: 23,
              itemStyle: { color: '#0f98ad' }
            },
            {
              value: 3,
              itemStyle: { color: '#f1963a' }
            },
            {
              value: 13,
              itemStyle: { color: '#f16548' }
            }
          ],
          label: {
            show: false
          },
          silent: true
        },
        // 边框的设置
        {
          radius: [40, 46],
          type: 'pie',
          data: [
            {
              value: 17,
              itemStyle: { color: '#0362a7', opacity: 0.5 }
            },
            {
              value: 23,
              itemStyle: { color: '#0f98ad', opacity: 0.5 }
            },
            {
              value: 3,
              itemStyle: { color: '#f1963a', opacity: 0.5 }
            },
            {
              value: 13,
              itemStyle: { color: '#f16548', opacity: 0.5 }
            }
          ],
          label: {
            show: false
          },
          silent: true
        }
      ]
    };
    chart.setOption(option);
  })();

  // 饼图3
  (function () {
    let chart = echarts.init(document.getElementById('comp3'));
    let option = {
      grid: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0
      },
      series: [
        {
          radius: [56, 66],
          type: 'pie',
          data: [
            {
              value: 95,
              itemStyle: { color: '#7fb800', borderWidth: 1, borderColor: '#ddd' }
            },
            {
              value: 3,
              itemStyle: { color: '#feba14', borderWidth: 1, borderColor: '#ddd' }
            },
            {
              value: 2,
              itemStyle: { color: '#f16548', borderWidth: 1, borderColor: '#ddd' }
            }
          ],
          label: {
            show: false
          },
          silent: true
        }
      ]
    };
    chart.setOption(option);
  })();

  // 折线1
  (function () {
    let chart = echarts.init(document.getElementById('line'));
    let option = {
      grid: {
        bottom: 20,
        top: 30,
        left: 20,
        right: 20
      },
      xAxis: {
        type: 'time',
        position: 'top',
        axisLabel: {
          color: '#171717',
          formatter: function (value, index) {
            var now = new Date(value);
            return `${getTimeStr(now.getHours())}:${getTimeStr(now.getMinutes())}`;
          }
        },
        axisLine: {
          lineStyle: {
            color: '#e0e1e2',
            type: 'dashed'
          }
        },
        splitLine: {
          lineStyle: {
            width: 2,
            color: '#e0e1e2'
          }
        }
      },
      yAxis: {
        type: 'value',
        max: 3,
        min: 0,
        splitNumber: 4,
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 2,
            color: '#e0e1e2'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#e0e1e2',
            type: 'dashed'
          }
        }
      },
      series: [{
        data: [
          {
            value: [
              new Date(2019, 1, 1, 8, 0, 0),
              3
            ]
          },
          {
            value: [
              new Date(2019, 1, 1, 9, 0, 0),
              3
            ]
          },
        ],
        type: 'line',
        symbol: 'circle',
        symbolSize: 4,
        hoverAnimation: false,
        lineStyle: {
          color: '#0362a7',
          width: 4
        },
        itemStyle: {
          color: '#0362a7'
        }
      }, {
        data: [
          {
            value: [
              new Date(2019, 1, 1, 9, 0, 0),
              2
            ]
          },
          {
            value: [
              new Date(2019, 1, 1, 12, 0, 0),
              2
            ]
          },
        ],
        type: 'line',
        symbol: 'circle',
        symbolSize: 4,
        hoverAnimation: false,
        lineStyle: {
          color: '#f1963a',
          width: 4
        },
        itemStyle: {
          color: '#f1963a'
        }
      }, {
        data: [
          {
            value: [
              new Date(2019, 1, 1, 12, 0, 0),
              1
            ]
          },
          {
            value: [
              new Date(2019, 1, 1, 15, 0, 0),
              1
            ]
          },
        ],
        type: 'line',
        symbol: 'circle',
        symbolSize: 4,
        hoverAnimation: false,
        lineStyle: {
          color: '#a166ab',
          width: 4
        },
        itemStyle: {
          color: '#a166ab'
        }
      }, {
        data: [
          {
            value: [
              new Date(2019, 1, 1, 14, 0, 0),
              0
            ]
          },
          {
            value: [
              new Date(2019, 1, 1, 18, 0, 0),
              0
            ]
          },
        ],
        type: 'line',
        symbol: 'circle',
        symbolSize: 4,
        hoverAnimation: false,
        lineStyle: {
          color: '#f16548',
          width: 4
        },
        itemStyle: {
          color: '#f16548'
        }
      }]
    };
    chart.setOption(option);
  })();

  // 柱状1
  (function () {
    let chart = echarts.init(document.getElementById('bar'));
    let option = {
      color: ["#0362a7", '#f16548', '#7fb800'],
      grid: {
        left: 40,
        right: 20,
        bottom: 20,
        top: 40
      },
      xAxis: [
        {
          type: 'category',
          data: ['工位1', '工位2', '工位3', '工位4', '工位5', '工位6'],
          axisPointer: {
            show: true,
            type: 'shadow'
          },
          axisLine: {
            lineStyle: {
              color: '#818487'
            }
          },
          axisLabel: {
            fontSize: 10
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          max: 100,
          min: 0,
          minInterval: 25,
          axisLine: {
            lineStyle: {
              color: '#818487'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#e8ebee'
            }
          },
          axisLabel: {
            fontSize: 10
          }
        }
      ],
      series: [
        {
          type: 'bar',
          stack: '排名',
          data: [20, 32, 11, 34, 40, 20],
          barWidth: 8
        },
        {
          type: 'bar',
          stack: '排名',
          data: [20, 32, 11, 14, 40, 20],
          barWidth: 8
        },
        {
          type: 'bar',
          stack: '排名',
          data: [20, 32, 21, 34, 10, 60],
          barWidth: 8,
          itemStyle: {
            normal: {
              barBorderRadius: [30, 30, 0, 0],
            }
          }
        },
      ]
    };;
    chart.setOption(option);
  })();

  // 折线2
  (function () {
    let chart = echarts.init(document.getElementById('line2'));
    let option = {
      grid: {
        left: 40,
        right: 20,
        bottom: 20,
        top: 40
      },
      xAxis: {
        type: 'time',
        axisLabel: {
          fontSize: 10,
          color: '#171717',
          formatter: function (value, index) {
            var now = new Date(value);
            return `${getTimeStr(now.getHours())}:${getTimeStr(now.getMinutes())}`;
          }
        },
        axisLine: {
          lineStyle: {
            color: '#e0e1e2',
          }
        },
        splitLine: {
          lineStyle: {
            color: '#e0e1e2'
          }
        }
      },
      yAxis: {
        type: 'value',
        max: 8,
        min: 0,
        minInterval: 2,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#e0e1e2'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#e0e1e2'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#171717'
        }
      },
      series: [
        {
          data: [
            {
              value: [
                new Date(2019, 1, 1, 8, 0, 0),
                1
              ],
              // 小于等于4的颜色
              itemStyle: {
                color: 'rgba(3, 98, 167, 0.8)',
                shadowColor: 'rgba(3, 98, 167, 0.8)',
                shadowBlur: 10
              }
            },
            {
              value: [
                new Date(2019, 1, 1, 9, 0, 0),
                2
              ],
              // 小于等于4的颜色
              itemStyle: {
                color: 'rgba(3, 98, 167, 0.8)',
                shadowColor: 'rgba(3, 98, 167, 0.8)',
                shadowBlur: 10
              }
            },
            {
              value: [
                new Date(2019, 1, 1, 10, 0, 0),
                3
              ],
              // 小于等于4的颜色
              itemStyle: {
                color: 'rgba(3, 98, 167, 0.8)',
                shadowColor: 'rgba(3, 98, 167, 0.8)',
                shadowBlur: 10
              }
            },
            {
              value: [
                new Date(2019, 1, 1, 11, 0, 0),
                3
              ],
              // 小于等于4的颜色
              itemStyle: {
                color: 'rgba(3, 98, 167, 0.8)',
                shadowColor: 'rgba(3, 98, 167, 0.8)',
                shadowBlur: 10
              }
            },
            {
              value: [
                new Date(2019, 1, 1, 12, 0, 0),
                4
              ],
              // 小于等于4的颜色
              itemStyle: {
                color: 'rgba(3, 98, 167, 0.8)',
                shadowColor: 'rgba(3, 98, 167, 0.8)',
                shadowBlur: 10
              }
            },
            {
              value: [
                new Date(2019, 1, 1, 13, 0, 0),
                5
              ],
              // 大于4的颜色
              itemStyle: {
                color: 'rgba(255, 74, 50, .6)',
                shadowColor: 'rgba(255, 74, 50, .6)',
                shadowBlur: 10
              }
            },
            {
              value: [
                new Date(2019, 1, 1, 14, 0, 0),
                7.5
              ],
              // 大于4的颜色
              itemStyle: {
                color: 'rgba(255, 74, 50, .6)',
                shadowColor: 'rgba(255, 74, 50, .6)',
                shadowBlur: 10
              }
            },
            {
              value: [
                new Date(2019, 1, 1, 15, 0, 0),
                7
              ],
              // 大于4的颜色
              itemStyle: {
                color: 'rgba(255, 74, 50, .6)',
                shadowColor: 'rgba(255, 74, 50, .6)',
                shadowBlur: 10
              }
            },
            {
              value: [
                new Date(2019, 1, 1, 16, 0, 0),
                6
              ],
              // 大于4的颜色
              itemStyle: {
                color: 'rgba(255, 74, 50, .6)',
                shadowColor: 'rgba(255, 74, 50, .6)',
                shadowBlur: 10
              }
            },
            {
              value: [
                new Date(2019, 1, 1, 17, 0, 0),
                5
              ],
              // 大于4的颜色
              itemStyle: {
                color: 'rgba(255, 74, 50, .6)',
                shadowColor: 'rgba(255, 74, 50, .6)',
                shadowBlur: 10
              }
            },
            {
              value: [
                new Date(2019, 1, 1, 18, 0, 0),
                4
              ],
              // 小于等于4的颜色
              itemStyle: {
                color: 'rgba(3, 98, 167, 0.8)',
                shadowColor: 'rgba(3, 98, 167, 0.8)',
                shadowBlur: 10
              }
            },
          ],
          type: 'line',
          symbol: 'circle',
          symbolSize: 4,
          hoverAnimation: false,
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(255, 74, 50, .6)'
              }, {
                offset: 1, color: 'rgba(3, 98, 167, 0.6)'
              }],
              global: false
            },
            width: 2
          },
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(255, 74, 50, .14)'
              }, {
                offset: 1, color: 'rgba(3, 98, 167, 0.14)'
              }],
              global: false
            }
          }
        }
      ]
    };
    chart.setOption(option);
  })();

  // 现场
  function showLive(index) {
    $('.live-tab li').removeClass('cur').eq(index).addClass('cur');
    $('.live-ctx-bg').hide().eq(index * 2).show();
    $('.live-ctx-bg').eq(index * 2 + 1).show();
    $('.live-ctx-num').removeClass('live-ctx-num-cur').eq(index).addClass('live-ctx-num-cur');
    $('.live-ctx-info').removeClass('live-ctx-info-cur').eq(index).addClass('live-ctx-info-cur');
  }
  showLive(0);
  $('.live-tab li').click(function () {
    var index = $(this).index();
    showLive(index);
  });
  lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/data.json'
  });

});