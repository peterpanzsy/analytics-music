package com.keystone.analytics.music.service;

import java.util.List;

import com.keystone.analytics.music.model.HotRank;
import com.keystone.analytics.music.model.HotSinger;
import com.keystone.analytics.music.model.ProvinceCount;
import com.keystone.analytics.music.model.RankDetail;
import com.keystone.analytics.music.model.ReviewDetail;
import com.keystone.analytics.music.model.ReviewerLabel;
import com.keystone.analytics.music.model.SongRecommend;

public interface MusicStatisService {
	/**
	 * 首页
	 */
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
	public List<ReviewDetail> getReviewDetail();
	
}
