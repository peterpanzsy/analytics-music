package com.keystone.analytics.music.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.keystone.analytics.music.dao.UserDAO;
import com.keystone.analytics.music.model.User;
import com.keystone.analytics.music.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDAO userDAO;
	
	@Override
	public int insertUser(User user) {
        // TODO Auto-generated method stub
        return userDAO.insertUser(user);
    }
	
	@Override
	public int selectUser(User user){
		return userDAO.selectUser(user);
	}

}
