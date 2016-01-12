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
	<link href="bootstrap/css/bootstrap.css" rel="stylesheet">
	<link href="bootstrap/css/bootstrap-combined.min.css" rel="stylesheet">
	 <link href="css/global.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  	
	 <%@ include file="common/head.jsp" %>
     
     <div class="container">
	     	<div class="row-fluid">
		     	<div class="contain-border" id="line-container" style="min-width: 310px; height: 400px; margin-top:10px;margin-bottom:5px;"></div>
		     </div>
	     
			<div class="row-fluid">
				<div class="span6 span-border" style="margin-left:0px;width:50%">
					<div class="list-title">
						<strong>音乐排行榜</strong>
					</div>
					<div class="row-fluid">
						<div class="span6">
							<ul id="hotRank1" class="unstyled">		
							</ul>
						</div>
						<div class="span6">
							<ul id="hotRank2" class="unstyled">		
							</ul><a href="/analytics-music/category.action#panel-1" style="float:right;color:#0088CC">更多</a>
						</div>
					</div>		
				</div>
				<div class="span6 span-border" style="width:50%;margin-left:-1.7px;">
					<div class="list-title">
						<strong>热门音乐推荐</strong>
					</div>
					<div class="row-fluid">
						<div class="span6">
							<ul id="recTimes1" class="unstyled">		
							</ul>
						</div>
						<div class="span6">
							<ul id="recTimes2" class="unstyled">		
							</ul><a href="/analytics-music/category.action#panel-2" style="float:right;color:#0088CC">更多</a>
						</div>
					</div>	
				</div>
			</div>
			<div class="row-fluid" style="margin-top:5px;">
				<div class="span6 span-border" style="margin-left:0px;width:35%">
					<div class="list-title">
						<strong>实时热门歌手</strong>(每周五更新)
					</div>
					<ul id="hotSinger" class="unstyled">		
					</ul><a href="/analytics-music/category.action#panel-3" style="float:right;color:#0088CC">更多</a>
				</div>
				<div class="span6 span-border" style="width:65%;margin-left:-1.7px;">
					<div id="map-container"></div>
				</div>
			</div>
		</div>

   
	
	<%@ include file="common/foot.jsp" %>

	<script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script> 

 	<script src="echarts/dist/echarts.min.js"></script>echart3
	<script src="echarts/map/js/china.js"></script>echart3
	<script src="echarts/theme/dark.js"></script>echart3	
	<script src="echarts/theme/vintage.js"></script>

    <script type="text/javascript" src="js/index.js"></script>
  </body>
</html>