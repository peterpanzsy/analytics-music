<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="search-option-border">
<h3>歌手动态追踪</h3>
歌手选择:
<br>姓名:
<input id="singernametrace" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
所在地:
<input id="locationtrace" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
<select id="languagetrace">
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

<br><button onclick="searchSingerTends()">搜索</button>

</div>
<div class="row-fluid">
 	<div class="contain-border" id="singertrace-line-container" style="min-width: 310px; height: 400px; margin-top:0px;margin-bottom:5px;"></div>
</div>