package com.keystone.analytics.music.controller;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.keystone.analytics.music.model.HotRank;
import com.keystone.analytics.music.model.HotSinger;
import com.keystone.analytics.music.model.ProvinceCount;
import com.keystone.analytics.music.model.RankDetail;
import com.keystone.analytics.music.model.ReviewDetail;
import com.keystone.analytics.music.model.ReviewerLabel;
import com.keystone.analytics.music.model.SongCorrelation;
import com.keystone.analytics.music.model.SongRecommend;
import com.keystone.analytics.music.service.MusicStatisService;


@Controller
@RequestMapping("/")
public class MusicStatisController {
	@Autowired
	MusicStatisService musicStatisService;
	/*
	 * 首页的action
	 */
	@RequestMapping("hotTend")
	@ResponseBody
	public Map<String,Map<String, Object>> hotTend(){
		Map<String, Object> hotTendMap = new HashMap<String, Object>();
		hotTendMap = musicStatisService.getHotTend();
		Map<String, Map<String, Object>> result = new HashMap<String, Map<String, Object>>();
    	result.put("hotTendMap", hotTendMap);
        return result;
	}
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
    /*
     * 音乐分类信息
     */
    @RequestMapping("getRankDetail")
    @ResponseBody
    public Map<String,List<RankDetail>> getRankDetail(){
    	List<RankDetail> rankList = musicStatisService.getRankDetail();
    	Map<String, List<RankDetail>> result = new HashMap<String, List<RankDetail>>();
    	result.put("data", rankList);//前端是datatables请求的，所以必须命名为data,除非在js中重新指定名字
    	return result;
    }
    //歌曲关联信息
    @RequestMapping("getCorrelationList")
    @ResponseBody
    public Map<String,List<SongCorrelation>>  getCorrelationList(){
    	Map<String,List<SongCorrelation>> result = new HashMap<String,List<SongCorrelation>>();
    	List<SongCorrelation>  res = musicStatisService.getSongCorrelation();
    	result.put("songs", res);
    	return result;
    }
    @RequestMapping("getCorrelation")
    @ResponseBody
    public Map<String, Object> getCorrelation(){
    	Map<String, Object> res = musicStatisService.getGraphCorrelation();
    	return res;
    }
    //听众标签
    @RequestMapping("getReviewerLabel")
    @ResponseBody
    public Map<String,List<ReviewerLabel>> getReviewerLabel(){
    	List<ReviewerLabel> labellist = musicStatisService.getReviewerLabel();
    	Map<String,List<ReviewerLabel>> result = new HashMap<String, List<ReviewerLabel>>();
    	result.put("labels", labellist);
    	return result;
    }
    
    //用户评论列表
    @RequestMapping("getReviewDetail")
    @ResponseBody
    public Map<String,Object> getReviewDetail(HttpServletRequest request){
    	int start=0;
    	int length = 0;
    	try{
    		start = Integer.parseInt(request.getParameter("start"));  
    	    length = Integer.parseInt(request.getParameter("length"));  
    	}catch(Exception e){
    		e.printStackTrace();
    	}
    	List<ReviewDetail> relist = musicStatisService.getReviewDetail(start, length);
    	int count = musicStatisService.countReviewDetail();
    	Map<String, Object> result = new HashMap<String, Object>();
    	//List<T> aaData; //aaData 与datatales 加载的“dataSrc"对应  
    	result.put("data", relist);//默认命名为data,否则必须在datatables前端指定"dataSrc": "aaData",   
    	result.put("recordsTotal", count);
    	result.put("recordsFiltered", count);
    	return result;
    }
    /**
     * 高级搜索
     */
    //歌手热度趋势
    @RequestMapping("hotSingerTend")
	@ResponseBody
	public Map<String,Map<String, Object>> hotSingerTend(){
		Map<String, Object> hotTendMap = new HashMap<String, Object>();
		hotTendMap = musicStatisService.getHotSingerTend();
		Map<String, Map<String, Object>> result = new HashMap<String, Map<String, Object>>();
    	result.put("hotSingerTendMap", hotTendMap);
        return result;
	}
    
}
