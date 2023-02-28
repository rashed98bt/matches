package com.mycompany.matches.core.laliga;

import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("laLigaAPI")
@CrossOrigin("*")
public class LaligaController {
    LaLigaRepository matcesrepository = new LaLigaRepository();



    @PostMapping("/matchbyday")
    public String getPremierLeagueMatchesByRound(@RequestBody String day,@RequestHeader String auth)throws IOException {
            if(auth.equals("rashed")){
                return this.matcesrepository.getLaLigaMatchesByRound(day);
            }else {
                return "404";
            }

    }
    @PostMapping("/topscooreleague")
    public String gettopscooreleague(@RequestHeader String auth)throws IOException {
        if(auth.equals("rashed")){
            return this.matcesrepository.getTopScore();
        }else {
            return "404";
        }

    }

}
