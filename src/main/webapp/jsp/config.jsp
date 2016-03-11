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
     <div class="container" style="margin-top:10px;">
		<div class="row">
			<div class="span12">
				<div class="tabbable tabs-left" id="tabs-42902">
					<ul class="nav nav-tabs" style="border:1px solid #ddd;">
						<li onclick="defaultSongDraw();" class="active">
							<a data-toggle="tab" href="#panel-1">► 曲库配置</a>
						</li>
						<li onclick="singerDraw();">
							<a data-toggle="tab" href="#panel-2">► 歌手数据配置</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="panel-1">
							<%@ include file="config/song.jsp" %>
						</div>
						<div class="tab-pane" id="panel-2">
							<%@ include file="config/singer.jsp" %>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <%@ include file="common/foot.jsp" %>
  </body>
</html>
