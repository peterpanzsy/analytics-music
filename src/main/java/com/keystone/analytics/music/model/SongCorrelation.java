package com.keystone.analytics.music.model;

public class SongCorrelation {
	private int id;
	private String order;
	private String name;
	private String singer;
	private String album;
	private String correlateCou;
	private String playCou;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
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
	public String getCorrelateCou() {
		return correlateCou;
	}
	public void setCorrelateCou(String correlateCou) {
		this.correlateCou = correlateCou;
	}
	public String getPlayCou() {
		return playCou;
	}
	public void setPlayCou(String playCou) {
		this.playCou = playCou;
	}
	
}
