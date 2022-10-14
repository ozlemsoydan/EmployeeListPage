package com.ozlemaglar.backendproject.data.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.annotation.processing.Generated;
import javax.persistence.*;
import java.awt.font.LayoutPath;
import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder


@Entity
@Table(name="employee")

public class EmployeeEntity extends BaseEntity implements Serializable {
public  static final long serialVersionUID=1L;


    private Long id;
    private String username;
    private String email;
    private String password;
    private double price;

}
