package com.keystone.analytics.music.controller;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.keystone.analytics.music.model.HotRank;
import com.keystone.analytics.music.model.HotSinger;
import com.keystone.analytics.music.model.ProvinceCount;
import com.keystone.analytics.music.model.ReviewLocationCount;
import com.keystone.analytics.music.model.SongRecommend;
import com.keystone.analytics.music.service.MusicStatisService;


@Controller
@RequestMapping("/")
public class MusicStatisController {
	@Autowired
	MusicStatisService musicStatisService;
	
    @RequestMapping("hotRank")
    @ResponseBody
    public Map<String,List<HotRank>> hotRank(){
    	List<HotRank> hotRankList = new ArrayList<HotRank>();
    	hotRankList = musicStatisService.getHotRank();
    	Map<String, List<HotRank>> result = new HashMap<String, List<HotRank>>();
    	result.put("hotRankList", hotRankList);
        return result;
    }
    
    @RequestMapping("songsRecommend")
    @ResponseBody
    public Map<String,List<SongRecommend>> songRecommend(){
    	List<SongRecommend> songs = new ArrayList<SongRecommend>();
    	songs = musicStatisService.getSongsRecommend();
    	Map<String, List<SongRecommend>> result = new HashMap<String, List<SongRecommend>>();
    	result.put("songs", songs);
        return result;
    }
    
    @RequestMapping("hotSingers")
    @ResponseBody
    public Map<String,List<HotSinger>> hotSingers(){
    	List<HotSinger> singers = new ArrayList<HotSinger>();
    	singers = musicStatisService.getHotSingers();
    	Map<String, List<HotSinger>> result = new HashMap<String, List<HotSinger>>();
    	result.put("singers", singers);
        return result;
    }
    
    @RequestMapping("reviewProvinces")
    @ResponseBody
    public Map<String,List<ProvinceCount>> reviewProvinceCount(){
    	List<ProvinceCount> pros = new ArrayList<ProvinceCount>();
    	pros = musicStatisService.getProvinceCou();
    	Map<String,List<ProvinceCount>> result = new HashMap<String, List<ProvinceCount>>();
    	result.put("provinceCou", pros);
    	return result;
    }

 
    
}
