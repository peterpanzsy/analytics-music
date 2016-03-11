package com.keystone.analytics.music.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {
	
	@RequestMapping("login")
    public String login(){
        return "login";
    }
	  
    @RequestMapping("index")
    public String index(){
        return "index";
    }
    
    @RequestMapping("category")
    public String category(){
    	return "category";
    }
    
    @RequestMapping("search")
    public String search(){
    	return "search";
    }
    
    @RequestMapping("singer")
    public String singer(){
    	return "singer";
    }
    
    @RequestMapping("report")
    public String report(){
    	return "report";
    }
    
    @RequestMapping("config")
    public String config(){
    	return "config";
    }
    
    @RequestMapping("contact")
    public String contact(){
    	return "contact";
    }
}
