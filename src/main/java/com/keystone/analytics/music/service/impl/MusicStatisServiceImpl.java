package com.keystone.analytics.music.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.keystone.analytics.music.dao.MusicStatisDAO;
import com.keystone.analytics.music.model.HotRank;
import com.keystone.analytics.music.model.HotSinger;
import com.keystone.analytics.music.model.ProvinceCount;
import com.keystone.analytics.music.model.RelatedSongs;
import com.keystone.analytics.music.model.ReviewLocationCount;
import com.keystone.analytics.music.model.SongRecommend;
import com.keystone.analytics.music.service.MusicStatisService;

@Service
public class MusicStatisServiceImpl implements MusicStatisService {

	@Autowired
	private MusicStatisDAO musicStatisDAO;
	
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
			songRecommend.setName(songTimes.getKey());
			songRecommend.setReTimes(songTimes.getValue().toString());
			songRecommendList.add(songRecommend);
		}
		return songRecommendList;		
	}
}
