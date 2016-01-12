package com.keystone.analytics.music.model;

public class SongRecommend {
	int id;
	String name;
	String reTimes;//推荐次数
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getReTimes() {
		return reTimes;
	}
	public void setReTimes(String reTimes) {
		this.reTimes = reTimes;
	}
	
	
}
