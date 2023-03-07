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
                return this.matcesrepository.getPremierLeagueMatchesByRound(day,leageName);
            }else {
                return "404";
            }

    }
    @PostMapping("/weekmatches")
    public String getWeekMatches(@RequestBody String leageName,@RequestHeader String auth)throws IOException {
        if(auth.equals("rashed")){
            return this.matcesrepository.getWeekMatches(leageName);
        }else {
            return "404";
        }

    }



}
