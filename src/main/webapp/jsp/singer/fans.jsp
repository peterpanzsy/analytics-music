<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="label-border">
	<h3 class="title">粉丝整体形象标签</h3>
	<div id="label-div" class="label-div">
	</div>
</div>

<div class="search-option-border">
<h3>歌手粉丝详细分析</h3>
歌手选择:
<br>姓名:
<input id="singerfans" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
歌曲:
<input id="songfans" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
专辑:
<input id="albumfans" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
所在地:
<input id="locationfans" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
<select id="languagefans">
  <option value="volvo" selected="selected">语言</option>
  <option value="saab">中文</option>
  <option value="opel">粤语</option>
  <option value="audi">英文</option>
  <option value="">中英文</option>
</select>
<select>
  <option value="volvo" selected="selected">性别</option>
  <option value="saab">男</option>
  <option value="opel">女</option>
</select>

<br>粉丝特征:
<input type="checkbox" value="" />地域特征
<input type="checkbox" value="" />性别比例
<input type="checkbox" value="" />年龄分布
<input type="checkbox" value="" />认证用户比例
<input type="checkbox" value="" />活跃粉丝统计
<input type="checkbox" value="" />粉丝喜好特征
<br><button onclick="searchFansOfSinger()">搜索</button>
</div>

<div class="fans-chart-border">
	 <div style="margin-bottom:51px;height:400px;">
	 	<div id="map-container" style="float:left;width:60%;height:400px;"></div>
	 	<div id="sex-pie" style="float:left;width:40%;height:400px;"></div>
	 </div>
	 <div class="line"> </div>
	 <div style="margin-bottom:51px;height:400px;">
	 	<div id="age-bar" style="float:left;width:60%;height:400px;"></div>
	 	<div id="vip-pie" style="float:left;width:40%;height:400px;"></div>
	 </div>
	 <div class="line"> </div>
	 <div class="label-border">
		 <div id="label-div-fan" class="label-div">
		 </div>	
	 </div>
</div>
