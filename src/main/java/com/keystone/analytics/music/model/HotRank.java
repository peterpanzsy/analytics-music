package com.keystone.analytics.music.model;

public class HotRank {
	String id;
	String songid;//mid
	String name;
	String singer;
	String hot;//听歌次数 
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSongid() {
		return songid;
	}
	public void setSongid(String songid) {
		this.songid = songid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setSinger(String singer) {
		this.singer = singer;
	}
	public String getSinger() {
		return singer;
	}
	public String getHot() {
		return hot;
	}
	public void setHot(String hot) {
		this.hot = hot;
	}
	
}
