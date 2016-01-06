<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<h3 class="navbar navbar-default text-muted" style="color:#377BB5;font-weight:bold;padding-top:5px;margin-top:10px;margin-bottom:10px;padding-left:23.5%;">音乐数据采集分析系统</h3>
<div class="blog-masthead">
 <div class="container">
    <nav class="blog-nav">
     <a class="blog-nav-item active" href="#">首页</a>
     <a class="blog-nav-item" href="category.action">音乐分类信息</a>
     <a class="blog-nav-item" href="#">高级搜索</a>
     <a class="blog-nav-item" href="#">歌手分类信息</a>
     <a class="blog-nav-item" href="#">报告生成</a>
     <a class="blog-nav-item" href="#">用户数据源配置</a>
     <a class="blog-nav-item" href="#">联系keydata</a>
   </nav>
 </div>
</div>
