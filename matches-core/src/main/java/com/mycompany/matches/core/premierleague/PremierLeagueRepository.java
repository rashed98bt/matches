package com.mycompany.matches.core.premierleague;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDate;

@Service
public class PremierLeagueRepository {

    @Value("${api.url}")
    private String apiUrl;
    @Value("${api.token}")
    private String token ;

//    private String apiUrl ;
//    private String token ;
//
//    public PremierLeagueRepository()  {
//        apiUrl = "https://api.football-data.org/v4/competitions/";
//        token  = "f70da37828874c54b788f08c477bee4c";
//    }



    public String getLeageMatchesByRound(String dayNumber,String leageName) throws IOException {
        URL url = null;
        url = new URL(this.apiUrl+leageName+"/matches?matchday="+dayNumber);
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



    public String getLeageWeekMatches(String leageName) throws IOException {
        URL url = null;
        url = new URL(this.apiUrl+leageName+"/matches?dateFrom="+ LocalDate.now()+"&dateTo="+LocalDate.now().plusDays(7));
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

    public String getLeageTopScore(String leageName) throws IOException {
        URL url = null;
        url = new URL(this.apiUrl+leageName+"/scorers");
        URL na = url;
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestProperty("X-Auth-Token","f70da37828874c54b788f08c477bee4c");
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

    public String getLeageStandings(String leageName) throws IOException {
        URL url = null;
        url = new URL(this.apiUrl+leageName+"/standings");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestProperty("X-Auth-Token","f70da37828874c54b788f08c477bee4c");
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
