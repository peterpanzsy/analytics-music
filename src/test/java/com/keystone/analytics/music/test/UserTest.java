package com.keystone.analytics.music.test;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.keystone.analytics.music.model.User;
import com.keystone.analytics.music.service.UserService;

public class UserTest {

	private UserService userService;
	     
	    @Before
	    public void before(){                                                                   
	        @SuppressWarnings("resource")
	        ApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"classpath:conf/spring.xml"
	                ,"classpath:conf/spring-mybatis.xml"});
	        userService = (UserService) context.getBean("userServiceImpl");
	    }
	     
	    @Test
	    public void addUser(){
	        User user = new User();
	        user.setNickname("你好");
	        user.setState(2);
	        System.out.println(userService.insertUser(user));
	    }

}
