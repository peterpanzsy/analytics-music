$(document).ready(function() {
	/**
	 * 音乐排行榜
	 */
	$('#rankSong').DataTable({
		//"paging":   false,
	    //"ordering": false,
		"ajax":{
			"url":"getRankDetail.action",
			"type":"POST"
				},
		"columns": [
		            { "data": "rownum" },
		            { "data": "name" },
		            { "data": "singer" },
		            { "data": "language" },
		            { "data": "album" },
		            { "data": "hot" },
		            { "data": "type" }
		        ],
	    "info":     false,
		"language": {
			"url":"DataTables/Chinese.json"
		}
	});
	

	/**
	 * 音乐趋势详情
	 */
	$('#tendTable').DataTable({
		//"paging":   false,
	    //"ordering": false,
		"ajax":{
			"url":"getRankDetail.action",
			"type":"POST"
				},
		"columns": [
		            { "data": "rownum" },
		            { "data": "name" },
		            { "data": "singer" },
		            { "data": "language" },
		            { "data": "album" },
		            { "data": "hot" }
		        ],
	    "info":     false,
		"language": {
			"url":"DataTables/Chinese.json"
		}
	});
	/**
	 * 热门音乐预测
	 */
	$('#predictTable').DataTable({
		//"paging":   false,
	    //"ordering": false,
		"ajax":{
			"url":"songsRecommend.action",
			"type":"POST"
				},
	    "sAjaxDataProp":"songs",
		"columns": [
		            { "data": "id"},
		            { "data": "name" },
		            { "data": "reTimes" }
		        ],
	    "info":     false,
		"language": {
			"url":"DataTables/Chinese.json"
		}
	});
} );
	/**
	 * 音乐热度
	 */
	function drawHotLineChart(){
		$("#panel-2").addClass("active");
		var hotLineChart = echarts.init(document.getElementById('line-container'),"macarons");
	    hotLineChart.setOption({
	  	  		theme:'dark',
	  		    title : {
	  		        text: 'Top3歌曲热度趋势',
	  		        subtext: '最近24h'
	  		    },
	  		    tooltip : {
	  		        trigger: 'axis'
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
	  		            data : ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00',
	  		                    '13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
	  		        }
	  		    ],
	  		    yAxis : [
	  		        {
	  		            type : 'value',
	  		            axisLabel : {
	  		                formatter: '{value}'
	  		            }
	  		        }
	  		    ]
	  		});
	    $.post('hotTend.action').done(function(data){
	    	hotLineChart.setOption({
			   legend: {
	 		        data:[data.hotTendMap.top1name,data.hotTendMap.top2name,data.hotTendMap.top3name]
	 		    },
	    	    series : [
	    	  		        {
	    	  		            name:data.hotTendMap.top1name,
	    	  		            type:'line',
	    	  		            data:data.hotTendMap.first,
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
	    	  		            name:data.hotTendMap.top2name,
	    	  		            type:'line',
	    	  		            data:data.hotTendMap.second,
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
	    	  		            name:data.hotTendMap.top3name,
	    	  		            type:'line',
	    	  		            data:data.hotTendMap.third,
		    	  		        markPoint : {
		  	  		                data : [
		  	  		                    {type : 'max', name: '最大值'},
		  	  		                    {type : 'min', name: '最小值'}
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
	    });
	}

	/**
	 * 音乐热度趋势分析
	 */
	function drawTendLineChart(){
		$("#panel-6").addClass("active");
		var hotLineChart = echarts.init(document.getElementById('tend-line-container'),"macarons");

	    hotLineChart.setOption({
  	  		theme:'dark',
  		    title : {
  		        text: 'Top3歌曲热度趋势',
  		        subtext: '最近24h'
  		    },
  		    tooltip : {
  		        trigger: 'axis'
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
  		            data : ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00',
  		                    '13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
  		        }
  		    ],
  		    yAxis : [
  		        {
  		            type : 'value',
  		            axisLabel : {
  		                formatter: '{value}'
  		            }
  		        }
  		    ]
  		});
    $.post('hotTend.action').done(function(data){
    	hotLineChart.setOption({
		   legend: {
 		        data:[data.hotTendMap.top1name,data.hotTendMap.top2name,data.hotTendMap.top3name]
 		    },
    	    series : [
    	  		        {
    	  		            name:data.hotTendMap.top1name,
    	  		            type:'line',
    	  		            data:data.hotTendMap.first,
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
    	  		            name:data.hotTendMap.top2name,
    	  		            type:'line',
    	  		            data:data.hotTendMap.second,
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
    	  		            name:data.hotTendMap.top3name,
    	  		            type:'line',
    	  		            data:data.hotTendMap.third,
	    	  		        markPoint : {
	  	  		                data : [
	  	  		                    {type : 'max', name: '最大值'},
	  	  		                    {type : 'min', name: '最小值'}
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
    	});
	}
	
	 
