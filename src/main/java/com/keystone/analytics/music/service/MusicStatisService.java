package com.keystone.analytics.music.service;

import java.util.List;
import java.util.Map;

import com.keystone.analytics.music.model.HotRank;
import com.keystone.analytics.music.model.HotSinger;
import com.keystone.analytics.music.model.ProvinceCount;
import com.keystone.analytics.music.model.RankDetail;
import com.keystone.analytics.music.model.ReviewDetail;
import com.keystone.analytics.music.model.ReviewerLabel;
import com.keystone.analytics.music.model.Song;
import com.keystone.analytics.music.model.SongCorrelation;
import com.keystone.analytics.music.model.SongRecommend;

public interface MusicStatisService {
	/**
	 * 首页
	 */
	public  Map<String, Object> getHotTend();
	
	public List<HotRank> getHotRank();
	
	public List<HotSinger> getHotSingers();
	
	public List<SongRecommend> getSongsRecommend();
	
	public List<ProvinceCount> getProvinceCou();
	/**
	 * 音乐分类信息
	 */
	public List<RankDetail> getRankDetail();
	//听众标签
	public List<ReviewerLabel> getReviewerLabel();
	// 听众评论信息
	public List<ReviewDetail> getReviewDetail(int start, int length, Song song);
	public int countReviewDetail(Song song);
	//获取所有歌曲直接关联关系，被推荐关系
	public Map<String, Object> getGraphCorrelation();
	//歌曲关联列表，类似推荐列表
	List<SongCorrelation> getSongCorrelation();
	//根据条件搜索歌曲们的热度趋势
	public Map<String, Object> searchHotTends(Song song);
	/**
	 * 高级搜索
	 */
	public List<Song> searchSongs(Song song);
	public Map<String, Object> getHotSingerTend();
	//搜索一首歌的24H热度趋势
	Map<String, Object> getHotTend(String songid, String song);
}

