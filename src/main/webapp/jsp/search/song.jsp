<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="search-div-border">
	<h3><button>单曲搜索</button><input style="margin-top:10px;margin-left:5px;width:80%;height:30px;" type="text" value="" /></h3>
	<h3>歌曲资料:</h3>
	<div class="row-fluid songinfo">
		<div class="span6">
			<ul class="unstyled">
				<li class="song-info">歌手:<span id="singer">蔡健雅</span></li>	
				<li class="song-info">语言:<span id="language">中文</span></li>	
				<li class="song-info">发行时间:<span id="pubdate">2013-7-8</span></li>	
			</ul>
		</div>
		<div class="span6">
			<ul class="unstyled">		
				<li class="song-info">所属专辑:<span id="album">蔡健雅</span></li>		
				<li class="song-info">歌曲类型:<span id="type">蔡健雅</span></li>	
				<li class="song-info">历史热度:<span id="hot">蔡健雅</span></li>	
			</ul>
		</div>
	</div>	
</div>
<div class="song-div-border">
	<h3>歌曲热度变化曲线</h3>
	<div class="contain-border" id="line-container" style="min-width: 310px; height: 400px; margin-top:10px;margin-bottom:5px;"></div>
</div>
<div class="song-div-border">
	<h3>歌曲听众属性</h3>
	 <div class="listener-chart-border">
	 <div>
	 	<div  class="map-container" id="map-container" ></div> 
	 </div>
	 <div class="line"> </div>
	 <div >
	 	<div id="sex-pie" style="float:left;width:50%;height:400px;"></div>
	 	<div id="age-bar" style="float:left;width:40%;height:400px;"></div>
	 </div>	
	</div>
</div>