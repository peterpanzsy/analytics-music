singleSongDraw();
/**
 * 音乐热度
 */
function singleSongDraw(){
	$("#panel-1").addClass("active");
	//音乐热度
	var hotLineChart = echarts.init(document.getElementById('line-container'),"macarons");
	hotLineChart.setOption({
			theme:'dark',
		    title : {
		        text: 'Top3歌曲热度趋势',
		        subtext: '最近一周'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['Top1','Top2','Top3']
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['周一','周二','周三','周四','周五','周六','周日']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel : {
		                formatter: '{value}'
		            }
		        }
		    ],
		    series : [
		        {
		            name:'Top1',
		            type:'line',
		            data:[11, 11, 15, 13, 12, 13, 10],
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'Top2',
		            type:'line',
		            data:[5, 5, 7, 6, 12, 8,7],
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'Top3',
		            type:'line',
		            data:[1, -2, 2, 5, 3, 2, 0],
		            markPoint : {
		                data : [
		                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name : '平均值'}
		                ]
		            }
		        }
		    ]
		});
	
	//听众分布
    var mapChart = echarts.init(document.getElementById('map-container')); 
    mapChart.setOption({
        title : {
            text: 'My 音乐听众地域分布',
            //subtext: '纯属虚构',
            left: 'center',
            textStyle: {
                color: '#357ECB'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['听众数量']
        },
        visualMap: {
            min: 0,
            max: 1000,
            left: 'left',
            top: 'bottom',
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true,
            backgroundColor:'#fff',
            color:['orangered','yellow','lightskyblue'],// ['#d94e5d','#eac736','#50a3ba']
            textStyle: {
            	color: '#000'
            }
        },
        toolbox: {
            show: true,
            orient : 'vertical',
            left: 'right',
            top: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },        
        series : [
            {
                name: '听众数量',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[]
            }
        ]
    });
  $.post('reviewProvinces.action').done(function(data){
    	mapChart.setOption({
    		series:[{
    		    name: '听众统计',
                  type: 'map',
                  mapType: 'china',
                  roam: false,
                  itemStyle:{
                      normal:{label:{show:true}},
                      emphasis:{label:{show:true}}
                  },
    			data:data.provinceCou
    		}]
    	});
    });
  //性别比例
  var pieChart = echarts.init(document.getElementById('sex-pie')); 
  var optionPie = {
		  theme:'dark',
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:['男','女']
		    },
		    series: [
		        {
		            name:'性别比例',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:335, name:'男'},
		                {value:310, name:'女'}
		            ]
		        }
		    ]
		};
  pieChart.setOption(optionPie);
  
  //年龄分布
  var ageBar = echarts.init(document.getElementById('age-bar')); 
  optionAge = {
		    title : {
		        text: '听众年龄分布',
		        //subtext: '纯属虚构'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['年龄']
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            data : ['19岁及以下','20-29岁','30-39岁','40-49岁','50岁及以上']
		        }
		    ],
		    yAxis : [
		        {	
		            name:'占比(%)',
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'年龄',
		            type:'bar',
		            data:[40, 35, 10,8, 5]
		        }
		    ]
		};
  ageBar.setOption(optionAge);	         
}
function singerDraw(){
	$("#panel-2").addClass("active");
	//音乐热度
	var hotLineChart = echarts.init(document.getElementById('nethot-line-container'),"macarons");
	hotLineChart.setOption({
			theme:'dark',
		    title : {
		        text: 'Top3歌曲热度趋势',
		        subtext: '最近一周'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['Top1','Top2','Top3']
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : ['周一','周二','周三','周四','周五','周六','周日']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel : {
		                formatter: '{value}'
		            }
		        }
		    ],
		    series : [
		        {
		            name:'Top1',
		            type:'line',
		            data:[11, 11, 15, 13, 12, 13, 10],
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'Top2',
		            type:'line',
		            data:[5, 5, 7, 6, 12, 8,7],
		            markPoint : {
		                data : [
		                    {type : 'max', name: '最大值'},
		                    {type : 'min', name: '最小值'}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'Top3',
		            type:'line',
		            data:[1, -2, 2, 5, 3, 2, 0],
		            markPoint : {
		                data : [
		                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name : '平均值'}
		                ]
		            }
		        }
		    ]
		});
	
	//听众分布
    var mapChart = echarts.init(document.getElementById('fan-map-container')); 
    mapChart.setOption({
        title : {
            text: 'My 音乐听众地域分布',
            //subtext: '纯属虚构',
            left: 'center',
            textStyle: {
                color: '#357ECB'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['听众数量']
        },
        visualMap: {
            min: 0,
            max: 1000,
            left: 'left',
            top: 'bottom',
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true,
            backgroundColor:'#fff',
            color:['orangered','yellow','lightskyblue'],// ['#d94e5d','#eac736','#50a3ba']
            textStyle: {
            	color: '#000'
            }
        },
        toolbox: {
            show: true,
            orient : 'vertical',
            left: 'right',
            top: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },        
        series : [
            {
                name: '听众数量',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[]
            }
        ]
    });
  $.post('reviewProvinces.action').done(function(data){
    	mapChart.setOption({
    		series:[{
    		    name: '听众统计',
                  type: 'map',
                  mapType: 'china',
                  roam: false,
                  itemStyle:{
                      normal:{label:{show:true}},
                      emphasis:{label:{show:true}}
                  },
    			data:data.provinceCou
    		}]
    	});
    });
  //性别比例
  var pieChart = echarts.init(document.getElementById('fan-sex-pie')); 
  var optionPie = {
		  theme:'dark',
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:['男','女']
		    },
		    series: [
		        {
		            name:'性别比例',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:335, name:'男'},
		                {value:310, name:'女'}
		            ]
		        }
		    ]
		};
  pieChart.setOption(optionPie);
  
  //年龄分布
  var ageBar = echarts.init(document.getElementById('fan-age-bar')); 
  optionAge = {
		    title : {
		        text: '听众年龄分布',
		        //subtext: '纯属虚构'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['年龄']
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            data : ['19岁及以下','20-29岁','30-39岁','40-49岁','50岁及以上']
		        }
		    ],
		    yAxis : [
		        {	
		            name:'占比(%)',
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'年龄',
		            type:'bar',
		            data:[40, 35, 10,8, 5]
		        }
		    ]
		};
  ageBar.setOption(optionAge);	   
}