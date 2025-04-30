package com.goodperson.backend.controller;

import com.goodperson.backend.request.RequestService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;


@SpringBootTest
class ApiControllerTest {

    private final MockMvc mockMvc;

    private final RequestService requestService;


    @Autowired
    ApiControllerTest(RequestService requestService) {
        this.requestService = requestService;
        ApiController apiController = new ApiController(requestService);
        mockMvc = MockMvcBuilders.standaloneSetup(apiController).build();
    }

    @Test
    void apiTest() throws Exception {

        MvcResult result = mockMvc.perform(get("/api/test")
                        .contentType(APPLICATION_JSON))
                .andDo(print())
                .andReturn();

        int status = result.getResponse().getStatus();


        assertEquals(200, status);

    }


}