<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<div class="label-border">
	<div id="label-div">
		<a href="#">JS课程</a>
		<a href="#" class="red">教程</a>
		<a href="#">回头一眸</a>
		<a href="#">精品</a>
		<a href="#" class="blue">源码下载</a>
		<a href="#">SEO</a>
		<a href="#" class="red">特效</a>
		<a href="#">继承</a>
		<a href="#" class="red">源码爱好者</a>
		<a href="#" class="blue">OOP</a>
		<a href="#">XHTML</a>
		<a href="#">W3C</a>
		<a href="#">石川</a>
		<a href="#" class="yellow">人生如歌</a>
		<a href="#">blue</a>
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
                <th>排名</th>
                <th>歌曲</th>
                <th>歌手</th>
                <th>语言</th>
                <th>所属专辑</th>
                <th>历史热度值</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>排名</th>
                <th>歌曲</th>
                <th>歌手</th>
                <th>语言</th>
                <th>所属专辑</th>
                <th>历史热度值</th>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>1</td>
                <td>幸福了，然后呢</td>
                <td>A-Lin</td>
                <td>中文</td>
                <td>幸福了，然后呢</td>
                <td>320,800</td>
            </tr>
            <tr>
                <td>2</td>
                <td>喜欢你</td>
                <td>BEYOND</td>
                <td>粤语 </td>
                <td>秘密警察</td>
                <td>170,750</td>
            </tr>
            <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>86,000</td>
            </tr>
            <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>433,060</td>
            </tr>
            <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>162,700</td>
            </tr>
            </tbody>
    </table>
</div>