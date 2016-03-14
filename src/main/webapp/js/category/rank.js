	/**
	 * 音乐排行榜
	 */
var rankTable =	$('#rankSong').DataTable({
		"processing": true,
		//"serverSide": true,//这个打开会发送一个form，里面包含一些比如分页信息等默认参数
		"ajax":{
			"url":"getRankDetail.action",
			"type":"POST",
			"dataType":"json",
			"data":function(d){//既可以在reload的时候重新执行，又不影响默认参数的传递
				d.song=$("#songnamerank").val();
				d.singer=$("#singerrank").val();
				d.album=$("#albumrank").val();
				d.language=$("#languagerank option:selected").text() === "语言"?"":$("#languagereview option:selected").text();
				d.platform = $("input[name='platformrank']:checked").val();
//				if($("#QQ").is(":checked")){
//					d.platform = "QQ";
//				}else if($("#XM").is(":checked")){
//					d.platform = "XM";
//				}else{
//					d.platform = "KS";
//				}
					}
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
function searchSongsRank(){
	rankTable.ajax.reload();
}