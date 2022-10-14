package com.ozlemaglar.backendproject.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter

@MappedSuperclass

@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"created_date,updated_date"},allowGetters = true)

abstract public class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;


    @Column(name = "created_by")
    @CreatedBy
    private String createdBy;


    @Column(name = "created_user_date")
    @CreatedDate
    private Date createdDate;


    @Column(name = "update_by")
    @LastModifiedBy
    private String updateBy;


    @Column(name = "update_date")
    @LastModifiedDate
    private Date updateDate;


    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date systemCreatedDate;

}
