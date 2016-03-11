<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>音乐数据采集分析系统</title>
    <!-- Bootstrap -->
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="bootstrap/css/bootstrap-combined.min.css" rel="stylesheet">
 	<link href="DataTables/media/css/jquery.dataTables.min.css" rel="stylesheet">
	<link href="css/global.css" rel="stylesheet" rel="stylesheet">
	    	
    <script src="jquery/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script> 

  </head>
  <body>
  <h3 class="navbar navbar-default text-muted" style="color:#377BB5;font-weight:bold;padding-top:5px;margin-top:10px;margin-bottom:10px;padding-left:23.5%;">音乐数据采集分析系统</h3>
  
     <div class="container" style="margin-top:10px;margin-bottom:10%;">
		<div class="row">
			<div class="span12">
				<div class="tabbable tabs-center" style="text-align:center;margin-top:40px;margin-left:-80px;" id="tabs-42902">
					<form action="logincheck.action" method="post">
						<fieldset>
			<!-- 			<legend contenteditable="true">登陆</legend>  -->
						<span>用户名</span> 
						<input id="username" name="username" style="height:30px;" type="text" /><br> 
						<span>密码</span> 
						<input id="password" name="password" style="height:30px;margin-left:16px;" type="password" /> 
						<label class="checkbox" contenteditable="true"> <input type="checkbox" /> 保存密码 </label>
						<button class="btn" type="submit">登陆</button></fieldset>
					</form>

				</div>
			</div>
		</div>
	</div>
	
	<%@ include file="common/foot.jsp" %>
	
	<script>
/* 	function login(){
		$.ajax({
			 type: "POST",
	         url: "logincheck.action",
	         dataType: "json",
	         data:{
	        	 username:$("#username").val(),
	        	 password:$("#password").val()
	         },
	         success: function(data){
	              }
		});
	} */
	</script>
  </body>
</html>