<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="search-option-border">
不同平台:
<input type="checkbox" value="" />虾米音乐热度排行 
<input type="checkbox" value="" />QQ音乐热度排行
<input type="checkbox" value="" />Keystone音乐热度排行
<br>不同日期:
<input type="checkbox" value="" />最近一天
<input type="checkbox" value="" />最近一周
<input type="checkbox" value="" />最近一月
<input type="checkbox" value="" />最近三个月
<input type="checkbox" value="" />历史热度
<!-- <br>语言:
<input type="checkbox" value="" />国语
<input type="checkbox" value="" />粤语
<input type="checkbox" value="" />英语
<input type="checkbox" value="" />韩语
<input type="checkbox" value="" />日语
<input type="checkbox" value="" />其他 -->
<br>歌手性别
<input type="checkbox" value="" />男
<input type="checkbox" value="" />女
<br>
歌曲选择:
<br>歌名:
<input id="songnamelisten" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
歌手:
<input id="singerlisten" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
专辑:
<input id="albumlisten" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
<select id="languagelisten">
  <option value="volvo" selected="selected">语言</option>
  <option value="saab">中文</option>
  <option value="opel">粤语</option>
  <option value="audi">英文</option>
  <option value="">中英文</option>
</select>
<br><button onclick="searchListeners()">搜索</button>
	
</div>
<div class="listener-chart-border">
	 <div>
	 	<div class="map-container" id="map-container" ></div> 
	 </div>
	 <div class="line"> </div>
	 <div >
	 	<div id="sex-pie" style="float:left;width:50%;height:400px;"></div>
	 	<div id="age-bar" style="float:left;width:40%;height:400px;"></div>
	 </div>	
</div>



