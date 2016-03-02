
$(function () {
	 /**
     * 热度趋势折线图
     */
    var lineChart = echarts.init(document.getElementById('line-container'),"macarons"); 
    
    lineChart.setOption({
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
    	lineChart.setOption({
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
                    html1 += '<li><div class="song-info"><span class="index">'+ index +'</span>&nbsp&nbsp<span class="song">' + song['name']
                              + '</span><span class="listen-times">' + song['hot']
                              + '</span></div></li>';
            	  }else if(index>10&&index<=20){
                    	 html2 += '<li><div class="song-info"><span class="index">' + index +'</span>&nbsp&nbsp<span class="song">' + song['name']
                         + '</span><span class="listen-times">' + song['hot']
                         + '</span></div></li>';             
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
                     html1 += '<li><div class="song-info"><span class="index">'+ index +'</span>&nbsp&nbsp;<span class="song">' + song['name']
                               + '</span><span class="rec-times">' + song['reTimes']
                               + '</span></div></li>';
             	  }else if(index>10&&index<=20){
                     	 html2 += '<li><div class="song-info"><span class="index">' + index +'</span>&nbsp&nbsp;<span class="song">' + song['name']
                          + '</span><span class="rec-times">' + song['reTimes']
                          + '</span></div></li>';             
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
                      html1 += '<li><div class="singer-info"><span class="index">'+ index +"</span>&nbsp&nbsp" + singer['singer']
                                + '<span class="song">' + singer['song']
                      			+ '</span><span class="hot">' + singer['hot']+ '</span></div></li>';
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
        	                    
});
    

