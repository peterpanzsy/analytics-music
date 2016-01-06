package com.keystone.analytics.music.dao;

import com.keystone.analytics.music.model.User;

public interface UserDAO {
	/**
     * 添加新用户
     * @param user
     * @return
     */
    public int insertUser(User user);
}
