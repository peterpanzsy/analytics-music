$(document).ready(function() {
	//时间轴
    $().timelinr({
		autoPlay: 'true',
		autoPlayDirection: 'forward',
		startAt: 4
	})
	/**
	 * 歌手粉丝属性
	 */
	//粉丝标签
	$.ajax({
		 type: "POST",
         url: "getReviewerLabel.action",
         dataType: "json",
         async: false, 
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
	//指定歌手粉丝标签
	$.ajax({
		 type: "POST",
         url: "getReviewerLabel.action",
         dataType: "json",
         async: false, 
         success: function(data){
	        	  $('#label-div-fan').empty();   //清空resText里面的所有内容
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
	              $('#label-div-fan').html(html);
              }
	});
	drawLabelCloud('label-div-fan');
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
	 //vip比例
	  var vipChart = echarts.init(document.getElementById('vip-pie')); 
	  option = {
			    title : {
			        text: '粉丝V认证比例',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        left: 'left',
			        data: ['非V','V']
			    },
			    series : [
			        {
			            name: '粉丝V认证比例',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:95.5, name:'非V'},
			                {value:4.5, name:'V'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			};
	  vipChart.setOption(option);
});

//歌手动态追踪
function drawSingerTraceLineChart(){
	$("#panel-2").addClass("active");
	var hotLineChart = echarts.init(document.getElementById('singertrace-line-container'),"macarons");

    hotLineChart.setOption({
	  		theme:'dark',
		    title : {
		        text: 'Top3歌手热度趋势',
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
	$.post('hotSingerTend.action').done(function(data){
		hotLineChart.setOption({
		   legend: {
			        data:[data.hotSingerTendMap.top1name,data.hotSingerTendMap.top2name,data.hotSingerTendMap.top3name]
			    },
		    series : [
		  		        {
		  		            name:data.hotSingerTendMap.top1name,
		  		            type:'line',
		  		            data:data.hotSingerTendMap.first,
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
		  		            name:data.hotSingerTendMap.top2name,
		  		            type:'line',
		  		            data:data.hotSingerTendMap.second,
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
		  		            name:data.hotSingerTendMap.top3name,
		  		            type:'line',
		  		            data:data.hotSingerTendMap.third,
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
