<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="search-option-border">
歌曲选择:
<!-- <select>
  <option value="volvo" selected="selected">所在地</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select> -->
<br>歌名:
<input id="songnamehot" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
歌手:
<input id="singerhot" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
专辑:
<input id="albumhot" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
<select id="languagehot">
  <option value="volvo" selected="selected">语言</option>
  <option value="saab">中文</option>
  <option value="opel">粤语</option>
  <option value="audi">英文</option>
  <option value="">中英文</option>
</select>
<!-- <select id="gengderhot">
  <option value="volvo" selected="selected">性别</option>
  <option value="saab">男</option>
  <option value="opel">女</option>
</select> -->

<br>不同平台:
<input type="radio" name="platformhot" value="XM" />虾米音乐热度排行 
<input type="radio" name="platformhot" value="QQ" />QQ音乐热度排行
<input type="radio" name="platformhot" value="KS" />Keystone音乐热度排行
<br>不同日期:
<input type="checkbox" value="" />最近一天
<input type="checkbox" value="" />最近一周
<input type="checkbox" value="" />最近一月
<input type="checkbox" value="" />最近三个月
<input type="checkbox" value="" />历史热度

<br><button onclick="searchSongTends()">搜索</button>
</div>

<div class="row-fluid">
 	<div class="contain-border" id="line-container" style="min-width: 310px; height: 400px; margin-top:0px;margin-bottom:5px;"></div>
</div>
    
 
