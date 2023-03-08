package com.mycompany.matches.core.premierleague;

import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("apiController")
@CrossOrigin("*")
public class PremierLeagueController {
    PremierLeagueRepository matcesrepository = new PremierLeagueRepository();



    @PostMapping("/matchbyday")
    public String getPremierLeagueMatchesByRound(@RequestBody String day,@RequestBody String leageName,@RequestHeader String auth)throws IOException {
            if(auth.equals("rashed")){
                return this.matcesrepository.getLeageMatchesByRound(day,leageName);
            }else {
                return "404";
            }

    }
    @PostMapping("/leageweekmatches")
    public String getLeageWeekMatches(@RequestBody String leageName,@RequestHeader String auth)throws IOException {
        if(auth.equals("rashed")){
            return this.matcesrepository.getLeageWeekMatches(leageName);
        }else {
            return "404";
        }

    }

    @PostMapping("/leagetopscore")
    public String getLeageTopScore(@RequestBody String leageName,@RequestHeader String auth)throws IOException {
        if(auth.equals("rashed")){
            return this.matcesrepository.getLeageTopScore(leageName);
        }else {
            return "404";
        }

    }

    @PostMapping("/leagestandings")
    public String getLeageStandings(@RequestBody String leageName,@RequestHeader String auth)throws IOException {
        if(auth.equals("rashed")){
            return this.matcesrepository.getLeageStandings(leageName);
        }else {
            return "404";
        }

    }



}
