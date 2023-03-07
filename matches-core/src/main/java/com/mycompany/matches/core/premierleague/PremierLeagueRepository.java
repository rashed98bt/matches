package com.mycompany.matches.core.premierleague;

import org.springframework.beans.factory.annotation.Value;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDate;

public class PremierLeagueRepository {

    @Value("${api.url}")
    private String apiUrl;

    @Value("${api.token}")
    private String token ;

    public PremierLeagueRepository()  {
    }



    public String getPremierLeagueMatchesByRound(String dayNumber,String leageName) throws IOException {
        URL url = null;
        url = new URL(this.apiUrl+"/competitions/"+leageName+"/matches?matchday="+dayNumber);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestProperty("X-Auth-Token",this.token);
        con.setRequestMethod("GET");
        InputStream in = con.getInputStream();
        StringBuffer sb = new StringBuffer();
        BufferedReader br = new BufferedReader(new InputStreamReader(in));
        String line = br.readLine();
        while (line != null){
            sb.append(line);
            line = br.readLine();
        }
        return sb.toString();
    }



    public String getWeekMatches(String leageName) throws IOException {
        URL url = null;
        url = new URL(this.apiUrl+"/competitions/"+leageName+"/matches?dateFrom="+ LocalDate.now()+"&dateTo="+LocalDate.now().plusDays(7));
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestProperty("X-Auth-Token",this.token);
        con.setRequestMethod("GET");
        InputStream in = con.getInputStream();
        StringBuffer sb = new StringBuffer();
        BufferedReader br = new BufferedReader(new InputStreamReader(in));
        String line = br.readLine();
        while (line != null){
            sb.append(line);
            line = br.readLine();
        }
        return sb.toString();
    }
}
