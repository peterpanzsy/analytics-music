package com.keystone.analytics.music.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.keystone.analytics.music.dao.MusicStatisDAO;
import com.keystone.analytics.music.model.GraphCorrelationTimes;
import com.keystone.analytics.music.model.HotRank;
import com.keystone.analytics.music.model.HotSinger;
import com.keystone.analytics.music.model.ProvinceCount;
import com.keystone.analytics.music.model.RankDetail;
import com.keystone.analytics.music.model.RelatedSongs;
import com.keystone.analytics.music.model.ReviewDetail;
import com.keystone.analytics.music.model.ReviewLocationCount;
import com.keystone.analytics.music.model.ReviewerLabel;
import com.keystone.analytics.music.model.GraphSongCorrelation;
import com.keystone.analytics.music.model.Song;
import com.keystone.analytics.music.model.SongCorrelation;
import com.keystone.analytics.music.model.SongRecommend;
import com.keystone.analytics.music.service.MusicStatisService;

@Service
public class MusicStatisServiceImpl implements MusicStatisService {

	@Autowired
	private MusicStatisDAO musicStatisDAO;
	
	/**
	 * 首页
	 */
	@Override
	public Map<String, Object> getHotTend() {
		// TODO Auto-generated method stub
		Map<String, Object> hotTendMap = new HashMap<String, Object>();
		List<HotRank> hotRankList = musicStatisDAO.getHotRank();
		List<Integer> firstHotTendList = musicStatisDAO.getHotTend(hotRankList.get(0).getSongid());
		List<Integer> secondHotTendList = musicStatisDAO.getHotTend(hotRankList.get(1).getSongid());
		List<Integer> thirdHotTendList = musicStatisDAO.getHotTend(hotRankList.get(2).getSongid());
		hotTendMap.put("first", getHourPlayCou(firstHotTendList));
		hotTendMap.put("second", getHourPlayCou(secondHotTendList));
		hotTendMap.put("third", getHourPlayCou(thirdHotTendList));
		hotTendMap.put("top1name",hotRankList.get(0).getName());
		hotTendMap.put("top2name",hotRankList.get(1).getName());
		hotTendMap.put("top3name",hotRankList.get(2).getName());
		return hotTendMap;
	}
	private static List<Integer> getHourPlayCou(List<Integer> originlist){
		List<Integer> resultlist = new ArrayList<Integer>();
		for(int i=1; i < originlist.size(); i++){
			resultlist.add(originlist.get(i)-originlist.get(i-1));
		}
		return resultlist;
	}
	
	@Override
	public List<ProvinceCount> getProvinceCou() {
		List<String> provinces = musicStatisDAO.getProvinces();	
		HashMap<String, Integer> provinceCount = new HashMap<String, Integer>();
		List<ReviewLocationCount> cityCouList = musicStatisDAO.getReviewCitys();
		for(int i=0; i < cityCouList.size(); i++){
			ReviewLocationCount cityCou = cityCouList.get(i);
			String location = cityCou.getLocation();
			int cou = cityCou.getCount();
			if(location.contains("内蒙古")){
				String pro = "内蒙古";
				if(provinceCount.containsKey(pro)){
					int count = provinceCount.get(pro);
					provinceCount.put(pro, count+1);
				}else{
					provinceCount.put(pro, 1);
				}
			}else if(location.contains("黑龙江")){
				String pro = "黑龙江";
				if(provinceCount.containsKey(pro)){
					int count = provinceCount.get(pro);
					provinceCount.put(pro, count+1);
				}else{
					provinceCount.put(pro, 1);
				}
			}else{
				String pro = location.substring(0,2);
				if(!provinces.contains(pro)){
					continue;
				}
				if(provinceCount.containsKey(pro)){
					int count = provinceCount.get(pro);
					provinceCount.put(pro, count+1);
				}else{
					provinceCount.put(pro, 1);
				}
			}
		}
		
		List<ProvinceCount> result = new ArrayList<ProvinceCount>();
		for (Entry<String, Integer> entry : provinceCount.entrySet()) {
			ProvinceCount p = new ProvinceCount();
			p.setName(entry.getKey());
			p.setValue(entry.getValue());
			result.add(p);
		}
		return result;
	};
	
	@Override
	public List<HotRank> getHotRank() {
		// TODO Auto-generated method stub
		return musicStatisDAO.getHotRank();
	}
	
	@Override
	public List<HotSinger> getHotSingers(){
		return musicStatisDAO.getHotSingers();
	}
	
	//歌曲推荐列表
	@Override
	public List<SongRecommend> getSongsRecommend(){
		List<RelatedSongs> relatedSongs = musicStatisDAO.getRelatedSongs();
		HashMap<String,Integer> songRTimes = new HashMap<String,Integer>();
		for(int i=0; i < relatedSongs.size(); i++){
			RelatedSongs row = relatedSongs.get(i);
			String songStr = row.getRsongs();
			String[] songs = songStr.split(",");
			for(int j = 0; j < songs.length; j++){
				String song = songs[j];
				Integer times = songRTimes.get(song);
				if(times == null || times.toString().equals("")){
					songRTimes.put(song, 1);
				}else{
					songRTimes.put(song, times.intValue()+1);
				}
			}
		}
		List<Map.Entry<String, Integer>> songTimesList =
			    new ArrayList<Map.Entry<String, Integer>>(songRTimes.entrySet());
		//排序
		Collections.sort(songTimesList, new Comparator<Map.Entry<String, Integer>>() {   
		    public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {      
		        return (o2.getValue() - o1.getValue()); 
		        //return (o1.getKey()).toString().compareTo(o2.getKey());
		    }
		}); 
		
		List<SongRecommend> songRecommendList = new ArrayList<SongRecommend>();
		for(int k = 0; k <songTimesList.size(); k++){
			Map.Entry<String, Integer> songTimes =  songTimesList.get(k);
			SongRecommend songRecommend = new SongRecommend();
			songRecommend.setId(k+1);
			songRecommend.setName(songTimes.getKey());
			songRecommend.setReTimes(songTimes.getValue().toString());
			songRecommendList.add(songRecommend);
		}
		return songRecommendList;		
	}
	
	@Override
	public List<RankDetail> getRankDetail() {
		// TODO Auto-generated method stub
		
		return musicStatisDAO.getRankDetail();
	}

	@Override
	public List<ReviewDetail> getReviewDetail(int start, int length) {
		// TODO Auto-generated method stub
		return musicStatisDAO.getReviewDetail(start, length);
	}
	@Override
	public int countReviewDetail(){
		return musicStatisDAO.countReviewDetail();
	}
	@Override
	public List<ReviewerLabel> getReviewerLabel() {
		// TODO Auto-generated method stub
		return musicStatisDAO.getReviewerLabel();
	}
	
	@Override
	public List<SongCorrelation> getSongCorrelation(){
		List<RelatedSongs> relatedSongs = musicStatisDAO.getRelatedSongs();
		HashMap<String,Integer> songRTimes = new HashMap<String,Integer>();
		for(int i=0; i < relatedSongs.size(); i++){
			RelatedSongs row = relatedSongs.get(i);
			String songStr = row.getRsongs();
			String[] songs = songStr.split(",");
			for(int j = 0; j < songs.length; j++){
				String song = songs[j];
				Integer times = songRTimes.get(song);
				if(times == null || times.toString().equals("")){
					songRTimes.put(song, 1);
				}else{
					songRTimes.put(song, times.intValue()+1);
				}
			}
		}
		List<Map.Entry<String, Integer>> songTimesList =
			    new ArrayList<Map.Entry<String, Integer>>(songRTimes.entrySet());
		//排序
		Collections.sort(songTimesList, new Comparator<Map.Entry<String, Integer>>() {   
		    public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {      
		        return (o2.getValue() - o1.getValue()); 
		        //return (o1.getKey()).toString().compareTo(o2.getKey());
		    }
		}); 
		
		List<SongCorrelation> songRecommendList = new ArrayList<SongCorrelation>();
		for(int k = 0; k <songTimesList.size(); k++){
			Map.Entry<String, Integer> songTimes =  songTimesList.get(k);
			SongCorrelation songRecommend = new SongCorrelation();
			songRecommend.setId(k+1);
			songRecommend.setName(songTimes.getKey());
			songRecommend.setCorrelateCou(songTimes.getValue().toString());
			songRecommendList.add(songRecommend);
		}
		return songRecommendList;	
	}
	
	//歌曲关联图
	@Override
	public Map<String, Object> getGraphCorrelation() {
		Map<String, Object> res = new HashMap<String, Object>();
		// TODO Auto-generated method stub
		List<GraphSongCorrelation> correlationList = new ArrayList<GraphSongCorrelation>();
		List<RelatedSongs> relatedSongs = musicStatisDAO.getRelatedSongs();
		HashMap<String,Integer> songRTimes = new HashMap<String,Integer>();
		for(int i=0; i < relatedSongs.size(); i++){
			RelatedSongs row = relatedSongs.get(i);
			String sourceSong = row.getName();//判断原歌曲是否在列表中
			Integer stimes = songRTimes.get(sourceSong);
			if(stimes == null || stimes.toString().equals("")){
				songRTimes.put(sourceSong, 1);
			}else{
				songRTimes.put(sourceSong, stimes.intValue()+1);
			}
			//遍历原歌曲的推荐歌曲们
			String songStr = row.getRsongs();
			String[] songs = songStr.split(",");
			for(int j = 0; j < songs.length; j++){
				String song = songs[j];
				GraphSongCorrelation sc = new GraphSongCorrelation();//关联关系
				sc.setSource(sourceSong);//原歌曲
				sc.setTarget(song);//关联歌曲
				correlationList.add(sc);
				Integer times = songRTimes.get(song);
				if(times == null || times.toString().equals("")){
					songRTimes.put(song, 1);
				}else{
					songRTimes.put(song, times.intValue()+1);
				}
			}
		}
		List<Map.Entry<String, Integer>> songTimesList =
			    new ArrayList<Map.Entry<String, Integer>>(songRTimes.entrySet());
		//排序
		Collections.sort(songTimesList, new Comparator<Map.Entry<String, Integer>>() {   
		    public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {      
		        return (o2.getValue() - o1.getValue()); 
		        //return (o1.getKey()).toString().compareTo(o2.getKey());
		    }
		}); 
		//过滤关联图谱关系，留下前n相关的，被推荐次数为前n的相关歌曲
		List<GraphSongCorrelation> rescorrelationList = new ArrayList<GraphSongCorrelation>();
		Set<String> songSet = new HashSet<String>();////被推荐前n相关歌曲的集合
		Set<String> topSet = new HashSet<String>();//被推荐前50
		for(int i=0;i<50;i++){//被推荐前50
			topSet.add(songTimesList.get(i).getKey());		
		}
		for(GraphSongCorrelation c:correlationList){
			if(topSet.contains(c.getTarget())){
				GraphSongCorrelation newc = new GraphSongCorrelation();
				newc.setSource(c.getTarget());
				newc.setTarget(c.getSource());
				songSet.add(c.getSource());
				songSet.add(c.getTarget());
				rescorrelationList.add(newc);
			}
		}
		//关联次数列表
		List<GraphCorrelationTimes> correlationTimeList = new ArrayList<GraphCorrelationTimes>();
		for(int k = 0; k <songTimesList.size(); k++){
			Map.Entry<String, Integer> songTimes =  songTimesList.get(k);
			if(songSet.contains(songTimes.getKey())){//只保留跟前三有关联关系的节点
				GraphCorrelationTimes ct = new GraphCorrelationTimes();
				if(topSet.contains(songTimes.getKey())){
					ct.setCategory(0);
				}else{
					ct.setCategory(1);
				}
				ct.setName(songTimes.getKey());
				ct.setValue(songTimes.getValue());
				correlationTimeList.add(ct);
			}			
		}

		res.put("correlationTimeList", correlationTimeList);
		res.put("correlationList", rescorrelationList);
		return res;
	}
	/**
	 * 高级搜索
	 */
	@Override
	public List<Song> searchSongs(Song song){
		return musicStatisDAO.searchSongs(song);
	}
	@Override
	public Map<String, Object> getHotTend(String songid, String song) {
		// TODO Auto-generated method stub
		Map<String, Object> hotTendMap = new HashMap<String, Object>();
		List<Integer> hotTendList = musicStatisDAO.getHotTend(songid);
		hotTendMap.put("tendList", getHourPlayCou(hotTendList));
		hotTendMap.put("name",song);
		return hotTendMap;
	}
	@Override
	public Map<String, Object> getHotSingerTend() {
		// TODO Auto-generated method stub
		Map<String, Object> hotTendMap = new HashMap<String, Object>();
		List<HotRank> hotRankList = musicStatisDAO.getHotRank();
		List<Integer> firstHotTendList = musicStatisDAO.getHotTend(hotRankList.get(0).getSongid());
		List<Integer> secondHotTendList = musicStatisDAO.getHotTend(hotRankList.get(1).getSongid());
		List<Integer> thirdHotTendList = musicStatisDAO.getHotTend(hotRankList.get(2).getSongid());
		hotTendMap.put("first", getHourPlayCou(firstHotTendList));
		hotTendMap.put("second", getHourPlayCou(secondHotTendList));
		hotTendMap.put("third", getHourPlayCou(thirdHotTendList));
		hotTendMap.put("top1name",hotRankList.get(0).getSinger());
		hotTendMap.put("top2name",hotRankList.get(1).getSinger());
		hotTendMap.put("top3name",hotRankList.get(2).getSinger());
		return hotTendMap;
	}
	//热度24H，根据搜索条件搜索一堆歌曲的热度列表
	@Override
	public Map<String, Object> searchHotTends(Song song) {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
		Map<String, Object> hotTendMap = new HashMap<String, Object>();
		List<Song> songList = musicStatisDAO.searchSongs(song);
		if(songList.size()>10){
			hotTendMap.put("result", 0);//搜索结果太多无法展示
			return hotTendMap;
		}
		for(Song s:songList){
			List<Integer> hotTendList = musicStatisDAO.getHotTend(s.getSongid());
			hotTendMap.put(s.getName(), getHourPlayCou(hotTendList));
		}
		return hotTendMap;
	}

	
}
