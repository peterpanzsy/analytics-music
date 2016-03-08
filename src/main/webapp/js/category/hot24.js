function searchSongTends(){
	var $song = $("#songnamehot").val();
	var $singer = $("#singerhot").val();
	var $album = $("#albumhot").val();
	var $language = $("#languagehot option:selected").text();
	if($language === "语言"){
		$language="";
	}
	var $gender = $("#gengderhot option:selected").text();
	//音乐热度
	var hotLineChart = echarts.init(document.getElementById('line-container'),"macarons");
	var option = {
	  		theme:'dark',
		    title : {
		        text: '歌曲热度趋势',
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
		};
    hotLineChart.setOption(option);
	$.post(
			'searchHotTends.action',
			{song:$song, singer:$singer, album:$album, language:$language, gender:$gender}	
	).done(function(data){
		if(data.success==0){
			alert("搜索结果太多，无法展示，请细化搜索条件！");
		}else{
			var $keys=[];
			var i=0;
			for(var key in data.tends){  
				$keys[i]=key;
				i++;
	        }  
			hotLineChart.setOption({
			   legend: {
				        data:$keys
				    },
			    series : function(){
			    	var serie=[];
			    	for(var key in data.tends){  
			    		var item={
		    		    	name:key,
		    		    	data:data.tends[key],
		    		    	type:'line'
			    		}
			    		serie.push(item);
			        }  
			    	return serie;
			    	}()
	/*	    	[
		  		        {
		  		            name:data.hotTendMap.name,
		  		            type:'line',
		  		            data:data.hotTendMap.tendList,
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
		  		        }		  		
		  		    ]   */			
			});
		}
	});
}