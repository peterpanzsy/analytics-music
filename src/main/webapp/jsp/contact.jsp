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
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=4bfe7b8632739c89a1b8e95529da1d97"></script>
  </head>
  
  <body>
    <%@ include file="common/head.jsp" %>
    	    <div class="container" style="margin-top:10px;">
		<!--百度地图容器-->
  		<div style="width:100%;height:550px;border:#ccc solid 1px;" id="dituContent"></div>
  		<table class="table table-hover" style="margin-top: 20px">
  			<tr>
  				<td>
  					<strong>Keydata地址：</strong>
  				<td>
  				<td>
  					西咸新区沣西新城西部云谷E3楼8层
  				</td>
  			</tr>
  			<tr>
  				<td>
  					<strong>邮编</strong>
  				<td>
  				<td>
  					712000
  				</td>
  			</tr>
  			<tr>
  				<td>
  					<strong>电话</strong>
  				<td>
  				<td>
  					029-38025055
  				</td>
  			</tr>
  			<tr>
  				<td>
  					<strong>传真</strong>
  				<td>
  				<td>
  					029-38025055
  				</td>
  			</tr>
  			<tr>
  				<td>
  					<strong>客服：</strong>
  				<td>
  				<td>
  					029-38025055
  				</td>
  			</tr>
  		</table>
	 </div>
    	
    <%@ include file="common/foot.jsp" %>
    <script type="text/javascript" src="js/map.js"></script> 
  </body>
</html>
