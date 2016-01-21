<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<div class="label-border">
	<h3 class="title">听众标签</h3>
	<div id="label-div">
		<a href="#">音乐</a>
		<a href="#" class="red">旅游</a>
		<a href="#" class="blue">电影</a>
		<a href="#" class="green">宅</a>
		<a href="#" class="blue">游戏动漫</a>
		<a href="#">90后</a>
		<a href="#" class="green">自由</a>
		<a href="#">娱乐</a>
		<a href="#" class="green">美女</a>
		<a href="#" class="blue">名人</a>
		<a href="#">明星</a>
		<a href="#" class="blue">腐女</a>
		<a href="#" class="green">天蝎座</a>
		<a href="#" class="yellow">文艺</a>
		<a href="#" class="blue">睡觉</a>
		
		<a href="#">美容</a>
		<a href="#" class="red">教育就业</a>
		<a href="#" class="blue">IT数码</a>
		<a href="#">码农</a>
		<a href="#" class="blue">产品狗</a>
		<a href="#">00后</a>
		<a href="#" class="green">读书</a>
		<a href="#">街舞</a>
		<a href="#" class="green">星座控</a>
		<a href="#" class="blue">萝莉控</a>
		<a href="#">大叔</a>
		<a href="#" class="blue">直男</a>
		<a href="#">写作</a>
		<a href="#" class="yellow">摄影</a>
		<a href="#" class="blue">睡觉</a>
	</div>
</div>
<div id="review-detail" class="table-div-border">
	<h3>曲库音乐评论详情</h3>
	歌曲选择:
	<select>
	  <option value="volvo" selected="selected">所在地</option>
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
	<br>评论标签:
	<input type="checkbox" value="" />虾米音乐 
	<input type="checkbox" value="" />QQ音乐
	<input type="checkbox" value="" />网易云音乐
	<br>歌曲搜索:
	<input style="margin-top:5px;" type="text" value="" />
	<table id="reviewTable" class="display dataTable" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th width="10%">歌名</th>
                <th width="10%">歌手</th>
                <th width="10%">评论者</th>
                <th width="10%">地区</th>
                <th>内容</th>
                <th width="20%">时间</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>歌名</th>
                <th>歌手</th>
                <th>评论者</th>
                <th>地区</th>
                <th>内容</th>
                <th>时间</th>
            </tr>
        </tfoot>
        <tbody>
        </tbody>
    </table>
</div>