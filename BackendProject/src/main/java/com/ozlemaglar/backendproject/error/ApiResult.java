package com.ozlemaglar.backendproject.error;


import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Map;

@Data

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResult {

    private int status;
    private String path;
    private String message;
    private String createdData=nowDate();
    private Map<String,String> validationErrors;

    public ApiResult(int status, String path, String message) {
        this.status = status;
        this.path = path;
        this.message = message;
    }

    private String nowDate(){
        Locale locale =new Locale("tr","TR");
        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("dd-MM-yyyy HH:mm:ss",locale);
         return simpleDateFormat.format(new Date());
    }

}
