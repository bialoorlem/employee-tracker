-- * **department**:

--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name

-- * **role**:

--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

15:38:02	CREATE TABLE employee (  id INT NOT NULL AUTO_INCREMENT, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(30) NOT NULL, role_id INT NOT NULL, manager_id INT AUTO_INCREMENT, PRIMARY KEY(id)  )	Error Code: 1075. Incorrect table definition; there can be only one auto column and it must be defined as a key	0.0053 sec


DROP DATABASE IF EXISTS ee_info_db;

CREATE DATABASE ee_info_db;

USE ee_info_db;

CREATE TABLE department (

id INT NOT NULL AUTO_INCREMENT,

name VARCHAR(30) NOT NULL,

PRIMARY KEY(id)

);

CREATE TABLE role (

id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY(id)

);

CREATE TABLE employee (

id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT AUTO_INCREMENT,
PRIMARY KEY(id)

);