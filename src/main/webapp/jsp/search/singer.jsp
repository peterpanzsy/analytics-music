<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="search-div-border">
	<h3><button onclick="searchSinger()">歌手搜索</button><input id="singerKey" style="margin-top:10px;margin-left:5px;width:80%;height:30px;" type="text" value="" /></h3>
	<h3>歌手资料:</h3>
	<div class="row-fluid songinfo">
		<div class="span6">
			<ul class="unstyled">
				<li class="song-info">姓名:<span id="singerSinger">蔡健雅</span></li>	
				<li class="song-info">性别:<span id="genderSinger">中文</span></li>	
				<li class="song-info">出生日期:<span id="birthSinger">2013-7-8</span></li>	
			</ul>
		</div>
		<div class="span6">
			<ul class="unstyled">		
				<li class="song-info">热门专辑:<span id="albumsSinger">蔡健雅</span></li>		
				<li class="song-info">热门新闻:<span id="newsSinger">蔡健雅</span></li>	
			</ul>
		</div>
	</div>	
</div>
<div class="song-div-border">
	<h3>歌手网络提及率</h3>
	<div class="contain-border" id="nethot-line-container" style="min-width: 310px; height: 400px; margin-top:10px;margin-bottom:5px;"></div>
</div>
<div class="song-div-border">
	<h3>歌手属性</h3>
	<div class="listener-chart-border">
		 <div>
		 	<div class="map-container" id="fan-map-container" ></div> 
		 </div>
		 <div class="line"> </div>
		 <div>
		 	<div id="fan-sex-pie" style="float:left;width:50%;height:400px;"></div>
		 	<div id="fan-age-bar" style="float:left;width:40%;height:400px;"></div>
		 </div>	
	</div>
</div>