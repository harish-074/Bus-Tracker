CREATE DATABASE bus_tracker;

USE bus_tracker;

-- =====================================
-- STUDENT TABLE
-- =====================================

CREATE TABLE student (

                         ```
                         student_id INT AUTO_INCREMENT PRIMARY KEY,

                         name VARCHAR(100) NOT NULL,

                         email VARCHAR(100) UNIQUE NOT NULL,

                         password VARCHAR(100) NOT NULL,

                         bus_number VARCHAR(20)
                         ```

);

-- =====================================
-- BUS TABLE
-- =====================================

CREATE TABLE bus (

                     ```
                     bus_id INT AUTO_INCREMENT PRIMARY KEY,

                     bus_number VARCHAR(20) UNIQUE NOT NULL,

                     route VARCHAR(200),

                     driver_name VARCHAR(100),

                     contact_number VARCHAR(20),

                     status VARCHAR(50)
                     ```

);

-- =====================================
-- SAMPLE BUS DATA
-- =====================================

INSERT INTO bus
(bus_number, route, driver_name, contact_number, status)
VALUES

    ('1',
     'Karur Bus Stand → MKCE',
     'Ramesh',
     '9876543210',
     'Running'),

    ('2',
     'Rayanur → MKCE',
     'Suresh',
     '9876543211',
     'Running'),

    ('3',
     'Vangal → MKCE',
     'Karthik',
     '9876543212',
     'Running');

-- =====================================
-- SAMPLE STUDENT DATA
-- =====================================

INSERT INTO student
(name, email, password, bus_number)
VALUES

    ('Harish',
     '[harish@gmail.com](mailto:harish@gmail.com)',
     '1234',
     '1');
