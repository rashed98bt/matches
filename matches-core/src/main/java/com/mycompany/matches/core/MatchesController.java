package com.mycompany.matches.core;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("matchescontroller")
public class MatchesController {
    MatchesRepository matcesrepository = new MatchesRepository();
    @GetMapping("allMatchesThisDay")
    public String allMatchesThisDay() throws IOException {
        return this.matcesrepository.getAllMatches();
    }


}
