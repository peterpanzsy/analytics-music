package com.keystone.analytics.music.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.keystone.analytics.music.model.User;
import com.keystone.analytics.music.service.UserService;

@Controller
@RequestMapping("/")
public class UserController {
   @Autowired
   UserService userService;
   
   @RequestMapping("logincheck")
    public String login(HttpServletRequest request){
	   String username = request.getParameter("username");
	   String password = request.getParameter("password");
	   if(username==null || username.equals("") || password==null || password.equals("")){
		   return "login";
	   }else{
		   User u = new User();
		   u.setNickname(username);
		   u.setPassword(password);
		   int res = userService.selectUser(u);
		   if(res>0){
			    request.getSession().setAttribute("username", username);
			    return "redirect:index.action";
		   }else{
			    return "redirect:login.action";
		   }
	   }
    }
   
    @RequestMapping("logout")
    @ResponseBody
    public Map<String, Integer> logout(HttpServletRequest request){
    	Map<String, Integer> res = new HashMap<String, Integer>();
        request.getSession().removeAttribute("username");
        res.put("success", 1);
        return res;
    }
     
}