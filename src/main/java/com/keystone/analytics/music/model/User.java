package com.keystone.analytics.music.model;

public class User {
	private int id;
	private int state;
	private String nickname;
	private String password;
	public int getId() {
	    return id;
	}
	public void setId(int id) {
	    this.id = id;
	}
	public int getState() {
	    return state;
	}
	public void setState(int state) {
	    this.state = state;
	}
	public String getNickname() {
	    return nickname;
	}
	public void setNickname(String nickname) {
	    this.nickname = nickname;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPassword() {
		return password;
	}
}
