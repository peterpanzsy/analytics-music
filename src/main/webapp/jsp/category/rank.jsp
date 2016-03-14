<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<div class="search-option-border">
歌曲选择:
<br>歌名:
<input id="songnamerank" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
歌手:
<input id="singerrank" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
专辑:
<input id="albumrank" style="margin-top:0px;width:100px;height:30px;" type="text" value="" />
<select id="languagerank">
  <option value="volvo" selected="selected">语言</option>
  <option value="saab">中文</option>
  <option value="opel">粤语</option>
  <option value="audi">英文</option>
  <option value="">中英文</option>
</select>

<br>不同平台:
<input id="XM" type="radio" name="platformrank" value="XM" />虾米音乐热度排行 
<input id="QQ" type="radio" name="platformrank" value="QQ" />QQ音乐热度排行
<input id="KS" type="radio" name="platformrank" value="KS" />Keystone音乐热度排行
<!-- <br>不同日期:
<input type="checkbox" value="" />最近一天
<input type="checkbox" value="" />最近一周
<input type="checkbox" value="" />最近一月
<input type="checkbox" value="" />最近三个月
<input type="checkbox" value="" />历史热度 -->

<br><button onclick="searchSongsRank()">搜索</button>
</div>

<div class="table-div-border">
<table id="rankSong" class="display dataTable" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>排名</th>
                <th>歌曲</th>
                <th>歌手</th>
                <th>语言</th>
                <th>所属专辑</th>
                <th>历史热度值</th>
                <th>歌曲类型</th>
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
                <th>歌曲类型</th>
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



