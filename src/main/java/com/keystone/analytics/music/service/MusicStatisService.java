package com.keystone.analytics.music.service;

import java.util.List;

import com.keystone.analytics.music.model.HotRank;
import com.keystone.analytics.music.model.HotSinger;
import com.keystone.analytics.music.model.ProvinceCount;
import com.keystone.analytics.music.model.SongRecommend;

public interface MusicStatisService {
	
	public List<HotRank> getHotRank();
	
	public List<HotSinger> getHotSingers();
	
	public List<SongRecommend> getSongsRecommend();
	
	public List<ProvinceCount> getProvinceCou();
	
}
