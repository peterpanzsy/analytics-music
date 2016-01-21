<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="label-border">
	<h3 class="title">粉丝整体形象标签</h3>
	<div id="label-div" class="label-div">
	</div>
</div>

<div class="search-option-border">
<h3>歌手粉丝详细分析</h3>
歌手选择:
<select>
  <option value="volvo" selected="selected">歌手所在地</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<select>
  <option value="volvo" selected="selected">语言</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<select>
  <option value="volvo" selected="selected">性别</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<select>
  <option value="volvo" selected="selected">姓名</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<select>
  <option value="volvo" selected="selected">专辑</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<select>
  <option value="volvo" selected="selected">歌曲</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<br>粉丝特征:
<input type="checkbox" value="" />地域特征
<input type="checkbox" value="" />性别比例
<input type="checkbox" value="" />年龄分布
<input type="checkbox" value="" />认证用户比例
<input type="checkbox" value="" />活跃粉丝统计
<input type="checkbox" value="" />粉丝喜好特征
<br>歌手搜索:
<input style="margin-top:5px;" type="text" value="" />
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
