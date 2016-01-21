package com.keystone.analytics.music.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {
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
}
