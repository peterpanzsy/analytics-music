<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
    
    <script src="echarts-2.2.7/build/dist/echarts.js"></script>
    <script type="text/javascript">
        // 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
    </script>

  </head>
  <body>
  
	 <%@ include file="common/head.jsp" %>
     <div class="container" style="margin-top:10px;">
		<div class="row">
			<div class="span12">
				<div class="tabbable tabs-left" id="tabs-42902">
					<ul class="nav nav-tabs" style="border:1px solid #ddd;">
						<li class="active">
							<a data-toggle="tab" href="#panel-1">► My音乐排行榜</a>
						</li>
						<li onclick="drawHotLineChart();">
							<a data-toggle="tab" href="#panel-2">► My音乐热度24h</a>
						</li>
						<li onclick="drawListenerDistribution();">
							<a data-toggle="tab" href="#panel-3">► My音乐听众属性</a>
						</li>
						<li onclick="showCorrelation();">
							<a data-toggle="tab" href="#panel-4">► My音乐关联分析</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-5">► 听众评论分析</a>
						</li>
						<li onclick="drawTendLineChart();">
							<a data-toggle="tab" href="#panel-6">► My音乐热度趋势分析</a>
						</li>
						<li>
							<a data-toggle="tab" href="#panel-7">► 热门音乐预测</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="panel-1">
							<%@ include file="category/rank.jsp" %>
						</div>
						<div class="tab-pane" id="panel-2">
							<%@ include file="category/hot.jsp" %>
						</div>
						<div class="tab-pane" id="panel-3">
							<%@ include file="category/listener.jsp" %>
						</div>
						<div class="tab-pane" id="panel-4">
							<%@ include file="category/correlation.jsp" %>
						</div>
						<div class="tab-pane" id="panel-5">
							<%@ include file="category/review.jsp" %>
						</div>
						<div class="tab-pane" id="panel-6">
							<%@ include file="category/tend.jsp" %>
						</div>
						<div class="tab-pane" id="panel-7">
							<%@ include file="category/predict.jsp" %>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<%@ include file="common/foot.jsp" %>
	
	<script src="js/label-cloud.js"></script><!-- 标签云 -->
   	<script type="text/javascript" src="js/category.js"></script> 
   	<script type="text/javascript" src="js/category/rank.js"></script> 
  	<script type="text/javascript" src="js/category/correlation.js"></script> 
	<script type="text/javascript" src="js/category/hot24.js"></script> 
	<script type="text/javascript" src="js/category/review.js"></script> 
	<script type="text/javascript" src="js/category/listener.js"></script> 
  </body>
</html>