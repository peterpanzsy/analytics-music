package com.keystone.analytics.music.model;

public class RelatedSongs {
	int id;
	String name;
	String rsongs;
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
	
	public void setRsongs(String rsongs) {
		this.rsongs = rsongs;
	}
	public String getRsongs() {
		return rsongs;
	}
	
}
