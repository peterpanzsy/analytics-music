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
	 * 音乐关联排名
	 */
	$('#correlationRank').DataTable({
		//"paging":   false,
	    //"ordering": false,
	    "info":     false,
		"language": {
			"url":"DataTables/Chinese.json"
		}
	});
	/**
	 * 听众标签
	 */
	$.ajax({
		 type: "POST",
         url: "getReviewerLabel.action",
         dataType: "json",
         async:false,
         success: function(data){
	        	  $('#label-div').empty();   //清空resText里面的所有内容
	              var html = ''; 
	              $.each(data.labels, function(index, label){  
	            	 var color = "default";
	            	 if(index%5==1){
	            		 color = "red";	            		 
	            	 }else if(index%5==2){
	            		 color="blue";
	            	 }else if(index%5==3){
	            		 color="yellow";
	            	 }else if(index%5==4){
	            		 color="green";
	            	 }  
	            	 html+="<a href='#' class='"+color+"'>"+label.label+"</a>";
	              });
	              $('#label-div').html(html);
              }
	});
	drawLabelCloud('label-div');
	/**
	 * 评论列表
	 */
	$('#reviewTable').DataTable({
		//"paging":   false,
	    //"ordering": false,
		"ajax":{
			"url":"getReviewDetail.action",
			"type":"POST"
				},
		"columns": [
		            { "data": "song" },
		            { "data": "singer" },
		            { "data": "reviewer" },
		            { "data": "location" },
		            { "data": "content" },
		            { "data": "date" }
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
	}

	
	/**
	 * 听众属性
	 */
	function drawListenerDistribution(){
		$("#panel-3").addClass("active");
		 /**
	     * 听众分布
	     */
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
	/**
	 * 音乐关联分析
	 */
	function showCorrelation(){
		$("#panel-4").addClass("active");
		var myChart = echarts.init(document.getElementById('correlation-graph'));
		myChart.showLoading();
		$.get('echarts/les-miserables.gexf', function (xml) {
		    myChart.hideLoading();

		    var graph = echarts.dataTool.gexf.parse(xml);
		    var categories = [{name: '情歌'},{name: '摇滚'},{name: '爵士'},{name: '流行'},{name: '民谣'},{name: '电子'},{name: '嘻哈'},{name: '古典'},{name: '乡村'}];
		/*    for (var i = 0; i < 9; i++) {
		        categories[i] = {
		            name: '类目' + i
		        };
		    }*/
		    graph.nodes.forEach(function (node) {
		        node.itemStyle = null;
		        node.symbolSize = 10;
		        node.value = node.symbolSize;
		        node.category = node.attributes.modularity_class;
		        // Use random x, y
		        node.x = node.y = null;
		        node.draggable = true;
		    });
		    option = {
		        title: {
		            text: '音乐风格关联图谱',
		            //subtext: 'Default layout',
		            top: 'bottom',
		            left: 'right'
		        },
		        tooltip: {},
		        legend: [{
		            // selectedMode: 'single',
		            data: categories.map(function (a) {
		                return a.name;
		            })
		        }],
		        animation: false,
		        series : [
		            {
		                name: 'Les Miserables',
		                type: 'graph',
		                layout: 'force',
		                data: graph.nodes,
		                links: graph.links,
		                categories: categories,
		                roam: true,
		                label: {
		                    normal: {
		                        position: 'right'
		                    }
		                },
		                force: {
		                    repulsion: 100
		                }
		            }
		        ]
		    };

		    myChart.setOption(option);
		}, 'xml');
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
	}
	
	 
