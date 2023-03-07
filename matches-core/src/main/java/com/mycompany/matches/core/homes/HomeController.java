package com.mycompany.matches.core.homes;

import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("homeAPI")
@CrossOrigin("*")
public class HomeController {

    HomeRepository matcesrepository = new HomeRepository();


    @PostMapping("/allMatches")
    public String getAllMatches(@RequestHeader String auth) throws IOException {

        if (auth.equals("rashed")) {
            return this.matcesrepository.getAllMatches();
        } else {
            return "404";
        }

    }
}
