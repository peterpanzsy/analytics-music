<%@ page language="java" import="java.util.*, com.keystone.analytics.music.model.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String spath = request.getServletPath();

//String uri = request.getRequestURI();
String userlogin=(String)(session.getAttribute("username"));
int sessionNum = 0;
if (userlogin==null || userlogin.equals("")){
	response.sendRedirect("login.action");
return;
}

%>
<h3 class="navbar navbar-default text-muted" style="color:#377BB5;font-weight:bold;padding-top:5px;margin-top:10px;margin-bottom:10px;padding-left:23.5%;">音乐数据采集分析系统</h3>
<div class="blog-masthead">
 <div class="container">
    <nav class="blog-nav">
     <a class="<%if (spath.equals("/jsp/index.jsp")){%>active<%}%> blog-nav-item" href="index.action">首页</a>
     <a class="<%if (spath.equals("/jsp/category.jsp")){%>active<%}%> blog-nav-item" href="category.action">音乐分类信息</a>
     <a class="<%if (spath.equals("/jsp/search.jsp")){%>active<%}%> blog-nav-item" href="search.action">高级搜索</a>
     <a class="<%if (spath.equals("/jsp/singer.jsp")){%>active<%}%> blog-nav-item" href="singer.action">歌手分类信息</a>
     <a class="<%if (spath.equals("/jsp/report.jsp")){%>active<%}%> blog-nav-item" href="report.action">报告生成</a>
     <a class="<%if (spath.equals("/jsp/config.jsp")){%>active<%}%> blog-nav-item" href="config.action">用户数据源配置</a>
     <a class="<%if (spath.equals("/jsp/contact.jsp")){%>active<%}%> blog-nav-item" href="contact.action">联系keydata</a>
     <span style="color:#F1A625;margin-right:5px;">欢迎你! &nbsp;<%=(String) session.getAttribute("username")%></span>
	 <input type="button" onclick="logout()"
	            value="退出">
   </nav>
 </div>
</div>
<script>
function logout(){
	$.ajax({
		 type: "POST",
         url: "logout.action",
         dataType: "json",
         async: false,
         success: function(data){
        	 if(data.success==1){
        		 window.location = "login.action";
        	 }
              }
	});
} 

</script>
