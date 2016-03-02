package com.keystone.analytics.music.dao;

import java.util.List;

import com.keystone.analytics.music.model.HotRank;
import com.keystone.analytics.music.model.HotSinger;
import com.keystone.analytics.music.model.RankDetail;
import com.keystone.analytics.music.model.RelatedSongs;
import com.keystone.analytics.music.model.ReviewDetail;
import com.keystone.analytics.music.model.ReviewLocationCount;
import com.keystone.analytics.music.model.ReviewerLabel;
import com.keystone.analytics.music.model.SongCorrelation;
import com.keystone.analytics.music.model.SongRecommend;

public interface MusicStatisDAO {
	
	/**
	 * 首页
	 */
	public List<Integer> getHotTend(String songid);//一天的试听次数走势
	
    public List<HotRank> getHotRank( );
    
    public List<HotSinger> getHotSingers( );
    
    public List<RelatedSongs> getRelatedSongs();
    
    public List<String> getProvinces();
    
    public List<ReviewLocationCount> getReviewCitys();
    
    /**
     * 音乐分类信息
     */
    public List<RankDetail> getRankDetail();
    //听众标签
    public List<ReviewerLabel> getReviewerLabel();
    // 听众评论
    public List<ReviewDetail> getReviewDetail(int start,int length);
    public int countReviewDetail();
    //所有歌曲被推荐次数
    public List<SongRecommend> getAllRecommendCou();
    //歌曲被关联次数列表
    public List<SongCorrelation> getCorrelateddSongs();
}
