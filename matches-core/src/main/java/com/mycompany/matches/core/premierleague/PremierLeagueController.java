package com.mycompany.matches.core.premierleague;

import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("x")
@CrossOrigin("*")
public class PremierLeagueController {
    PremierLeagueRepository matcesrepository = new PremierLeagueRepository();

    @GetMapping("y")
    public String test(){
        return "test";
    }

    @PostMapping("/matchbyday")
    public String getPremierLeagueMatchesByRound(@RequestBody String day,@RequestHeader String auth)throws IOException {
            if(auth.equals("rashed")){
                return this.matcesrepository.getPremierLeagueMatchesByRound(day);
            }else {
                return "404";
            }

    }


}
