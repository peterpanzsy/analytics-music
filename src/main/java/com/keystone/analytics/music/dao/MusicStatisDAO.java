package com.keystone.analytics.music.dao;

import java.util.List;

import com.keystone.analytics.music.model.HotRank;
import com.keystone.analytics.music.model.HotSinger;
import com.keystone.analytics.music.model.RelatedSongs;
import com.keystone.analytics.music.model.ReviewLocationCount;

public interface MusicStatisDAO {
	
    public List<HotRank> getHotRank( );
    
    public List<HotSinger> getHotSingers( );
    
    public List<RelatedSongs> getRelatedSongs();
    
    public List<String> getProvinces();
    
    public List<ReviewLocationCount> getReviewCitys();
}
