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

var reviewTable = $('#reviewTable').DataTable({
	//"paging":   false,
    //"ordering": false,
	"processing": true,
	"serverSide": true,//这个打开会发送一个form，里面包含一些比如分页信息等默认参数
	"ajax":{
		"url":"getReviewDetail.action",
		"type":"POST",
		"dataType":"json",
		"data":function(d){//既可以在reload的时候重新执行，又不影响默认参数的传递
			d.song=$("#songnamereview").val();
			d.singer=$("#singerreview").val();
			d.album=$("#albumreview").val();
			d.language=$("#languagereview option:selected").text() === "语言"?"":$("#languagereview option:selected").text();
//			    return { 这种方法会使得默认的参数比如start length等失效
//			    	"song":$("#songnamereview").val(),
//					"singer":$("#singerreview").val(),
//					"album":$("#albumreview").val(), 
//					"language":$("#languagereview option:selected").text() === "语言"?"":$("#languagereview option:selected").text()
//			    }
			}
			},
	"columns":[
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
 * 评论列表 后台分页
 */
function searchReviews(){
//	var $song = $("#songnamereview").val();
//	var $singer = $("#singerreview").val();
//	var $album = $("#albumreview").val();
//	var $language = $("#languagereview option:selected").text();
//	if($language === "语言"){
//		$language="";
//	}
	reviewTable.ajax.reload();
}