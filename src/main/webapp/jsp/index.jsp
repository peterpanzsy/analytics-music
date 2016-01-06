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
	     <div id="line-container" style="min-width: 310px; height: 400px; margin-top:10px"></div>
	     
	     <div class="container-fluid">
			<div class="row-fluid">
				<div class="span" style="float:left;width:30%;margin-left:20px">
					<div>
						<strong>音乐排行榜</strong>
					</div>
					<ol>
						<li>
							新闻资讯
						</li>
						<li>
							体育竞技
						</li>
						<li>
							娱乐八卦
						</li>
						<li>
							前沿科技
						</li>
						<li>
							环球财经
						</li>
						<li>
							天气预报
						</li>
						<li>
							房产家居
						</li>
						<li>
							网络游戏
						</li>
					</ol>
				</div>
				<div class="span" style="float:left;width:30%;">
					<div>
						<strong>热门音乐推荐</strong>
					</div>
					<ol>
						<li>
							新闻资讯
						</li>
						<li>
							体育竞技
						</li>
						<li>
							娱乐八卦
						</li>
						<li>
							前沿科技
						</li>
						<li>
							环球财经
						</li>
						<li>
							天气预报
						</li>
						<li>
							房产家居
						</li>
						<li>
							网络游戏
						</li>
					</ol>
				</div>
				<div class="span" style="float:left;width:30%;font-size:15px;">
					<div>
						<strong>实时热门歌手(每周五更新)</strong>
					</div>
					<ol>
						<li>
							新闻资讯
						</li>
						<li>
							体育竞技
						</li>
						<li>
							娱乐八卦
						</li>
						<li>
							前沿科技
						</li>
						<li>
							环球财经
						</li>
						<li>
							天气预报
						</li>
						<li>
							房产家居
						</li>
						<li>
							网络游戏
						</li>
					</ol>
				</div>
			</div>
			<div class="row-fluid">
				<div id="map-container"></div>
			</div>
		</div>

      </div>
	
	<%@ include file="common/foot.jsp" %>

	<script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script> 
	<script src="echarts/build/dist/echarts.js"></script>

    <script type="text/javascript" src="js/index.js"></script>
  </body>
</html>