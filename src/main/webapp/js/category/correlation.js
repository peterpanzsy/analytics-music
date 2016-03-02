
    /**
	 * 音乐关联分析
	 */
	function showCorrelation(){
		//关联表格
		$('#correlationRank').DataTable({
			//"paging":   false,
		    //"ordering": false,
			"ajax":{
				"url":"getCorrelationList.action",
				"type":"POST"
					},
		    "sAjaxDataProp":"songs",
			"columns": [
			            { "data": "id"},
			            { "data": "name" },
			            { "data": "correlateCou" }
			        ],
		    "info":     false,
			"language": {
				"url":"DataTables/Chinese.json"
			}
		});
		
		//关联图谱
		$("#panel-4").addClass("active");
	
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('correlation-graph')); 
                
                option = {
        			    title : {
        			        text: '歌曲关联：推荐前50的关联拓扑',
        			        //subtext: '数据来自人立方',
        			        x:'right',
        			        y:'bottom'
        			    },
        			    tooltip : {
        			        trigger: 'item',
        			        formatter: '{a} : {b}'
        			    },
        			    toolbox: {
        			        show : true,
        			        feature : {
        			            restore : {show: true},
        			            magicType: {show: true, type: ['force', 'chord']},
        			            saveAsImage : {show: true}
        			        }
        			    },
        			    legend: {
        			        x: 'left',
        			        data:['关联目标','关联源']
        			    },
        	
        			};
                myChart.setOption(option); 
                $.post('getCorrelation.action').done(function(data){
                	myChart.setOption({       
            		    series : [
              			        {
              			            type:'force',
              			            name : "推荐关系",
              			            ribbonType: false,
              			            categories : [
              			                {
              			                    name: '关联目标'
              			                },
              			                {
              			                	name:'关联源'
              			                }
              			            ],
              			            itemStyle: {
              			                normal: {
              			                    label: {
              			                        show: false,//不显示节点上的标签
              			                        textStyle: {//节点文字的格式
              			                            color: '#333',
              			                            fontSize: 5
              			                        }
              			                    },
              			                    nodeStyle : {
              			                        brushType : 'both',
              			                        borderColor : 'rgba(255,215,0,0.4)',
              			                        borderWidth : 1
              			                    },
              			                    linkStyle: {
              			                        type: 'curve'
              			                    }
              			                },
              			                emphasis: {
              			                    label: {
              			                        show: false
              			                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
              			                    },
              			                    nodeStyle : {
              			                        //r: 30
              			                    },
              			                    linkStyle : {}
              			                }
              			            },
              			            useWorker: false,
              			            minRadius : 5,
              			            maxRadius : 10,
              			            gravity: 1.1,
              			            scaling: 1.1,
              			            roam: 'move',
              			            nodes:data.correlationTimeList,
              			            links:data.correlationList
              			        }
              			    ]
                		});
                	});
                
            }
        );	

	}