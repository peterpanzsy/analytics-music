package com.keystone.analytics.music.model;

public class RelatedSongs {
	int id;
	String name;
	private String singer;
	private String album;
	String rsongs;
	
	public String getSinger() {
		return singer;
	}
	public void setSinger(String singer) {
		this.singer = singer;
	}
	public String getAlbum() {
		return album;
	}
	public void setAlbum(String album) {
		this.album = album;
	}
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
