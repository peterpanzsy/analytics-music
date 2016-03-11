<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>音乐数据采集分析系统</title>
    <!-- Bootstrap -->
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="bootstrap/css/bootstrap-combined.min.css" rel="stylesheet">
 	<link href="DataTables/media/css/jquery.dataTables.min.css" rel="stylesheet">
	<link href="css/global.css" rel="stylesheet" rel="stylesheet">
	    	
    <script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script> 
    <script src="DataTables/media/js/jquery.dataTables.min.js" type="text/javascript"></script> 
    
 	<script src="echarts/dist/echarts.min.js"></script><!-- echart3 -->
	<script src="echarts/map/js/china.js"></script>
	<script src="echarts/theme/dark.js"></script>	
	<script src="echarts/theme/vintage.js"></script>
	<script src="echarts/dist/extension/dataTool.js"></script>
 
  </head>
  
  <body>
    <%@ include file="common/head.jsp" %>
     <div class="container">
		<div class="row">
		<div class="col-md-1"></div>
			<div class="span12 title" style="width:900px;">			
	     		<span>标题:</span><input style="margin-top:10px;margin-left:5px;width:70%;height:30px;" type="text" value="" /><br>
	     		<span>摘要:</span><textarea style="margin-left:5px;margin-top: 10px; width: 70%; height: 200px"></textarea><br>
	     		<div style="margin-top:10px;">
		     		<span>原始数据项选择:</span><br>
					<div style="margin-top:10px;margin-left:40px;font-size:17px;">
						<span>歌名:</span>
						<input id="songnamelisten" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
						<span>歌手:</span>
						<input id="singerlisten" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
						<span>专辑:</span>
						<input id="albumlisten" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
						<select id="languagelisten" style="width:120px;">
						  <option value="volvo" selected="selected">语言</option>
						  <option value="saab">中文</option>
						  <option value="opel">粤语</option>
						  <option value="audi">英文</option>
						  <option value="">中英文</option>
						</select>
					</div>
				</div>
				
				<div style="margin-top:10px;">
		     		<span>展示目标数据项选择:</span>
					<input type="checkbox" value="" />热度
					<input type="checkbox" value="" />排行
					<input type="checkbox" value="" />关联
				</div>
				<div>
					<div class="col-md-3"></div>
					<input class="btn btn-default btn-success col-md-1" type="submit" value="确定" style="margin-top: 60px">
					<div class="col-md-2"></div>
					<input class="btn btn-default btn-warning col-md-1" type="submit" value="取消" style="margin-top: 60px">
				</div>
			
			</div>	
		</div>
	</div>
    <%@ include file="common/foot.jsp" %>
  </body>
</html>
