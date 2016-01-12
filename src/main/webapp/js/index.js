
$(function () {
	
    /**
     * 音乐热度排行榜
     */
     $.ajax({
         type: "POST",
         url: "hotRank.action",
         //data: {username:$("#username").val(), content:$("#content").val()},
         dataType: "json",
         success: function(data){
        	  $('#hotRank1').empty();   //清空resText里面的所有内容
              var html1 = ''; 
              var html2 = '';
              $.each(data.hotRankList, function(index, song){
            	  index+=1;   
            	  if(index<=10){
                    html1 += '<li>'+ index +"&nbsp&nbsp" + song['name']
                              + '&nbsp&nbsp' + song['hot']
                              + '</li>';
            	  }else if(index>10&&index<=20){
                    	 html2 += '<li>' + index +"&nbsp&nbsp" + song['name']
                         + '&nbsp&nbsp' + song['hot']
                         + '</li>';             
	               }else{
	                	return false;//跳出循环
	               }
              });
              $('#hotRank1').html(html1);
              $('#hotRank2').html(html2);
            /*         $('#resText').empty();   //清空resText里面的所有内容
                     var html = ''; 
                     $.each(data, function(commentIndex, comment){
                           html += '<div class="comment"><h6>' + comment['username']
                                     + ':</h6><p class="para"' + comment['content']
                                     + '</p></div>';
                     });
                     $('#resText').html(html);*/
                  }
     });
     /**
      * 热门音乐推荐
      */
      $.ajax({
          type: "POST",
          url: "songsRecommend.action",
          dataType: "json",
          success: function(data){
         	  $('#recTimes1').empty();   //清空resText里面的所有内容
               var html1 = ''; 
               var html2 = '';
               $.each(data.songs, function(index, song){
             	  index+=1;   
             	  if(index<=10){
                     html1 += '<li>'+ index +"&nbsp&nbsp" + song['name']
                               + '&nbsp&nbsp' + song['reTimes']
                               + '</li>';
             	  }else if(index>10&&index<=20){
                     	 html2 += '<li>' + index +"&nbsp&nbsp" + song['name']
                          + '&nbsp&nbsp' + song['reTimes']
                          + '</li>';             
 	               }else{
 	                	return false;//跳出循环
 	               }
               });
               $('#recTimes1').html(html1);
               $('#recTimes2').html(html2);
                   }
      });
      /**
       * 实时热门歌手
       */
       $.ajax({
           type: "POST",
           url: "hotSingers.action",
           dataType: "json",
           success: function(data){
          	  $('#hotSinger').empty();   //清空resText里面的所有内容
                var html1 = ''; 
                var html2 = '';
                $.each(data.singers, function(index, singer){
              	  index+=1;   
              	  if(index<=15){
                      html1 += '<li>'+ index +"&nbsp&nbsp" + singer['singer']
                                + '&nbsp&nbsp&nbsp&nbsp' + singer['song']
                      			+ '&nbsp&nbsp&nbsp&nbsp' + singer['hot']+ '</li>';
              	  }else{
  	                	return false;//跳出循环
  	               }
                });
                $('#hotSinger').html(html1);
                
                    }
       });    
            
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
      
      /**
       * 热度趋势折线图
       */
      var lineChart = echarts.init(document.getElementById('line-container'),"macarons"); 
      
      lineChart.setOption({
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
    		                    
        	                    
});
    

