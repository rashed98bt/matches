package com.mycompany.matches.core;

import org.apache.http.client.ClientProtocolException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MatchesRepository {
    private String url = "http://api.football-data.org/v4/competitions/PL/matches/matchday=1";
    private String token = "f70da37828874c54b788f08c477bee4c";

    public MatchesRepository()  {
    }

    public String getAllMatches() throws IOException{
        URL url = null;
        url = new URL(this.url);
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
