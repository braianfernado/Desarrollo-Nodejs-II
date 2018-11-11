create database crudnodejsmysql;

use crudnodejsmysql;

create table customer (

id int(15) AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
address VARCHAR(50)NOT NULL,
phone INT(50)
);


create table propietario (

id_propietario int(15) NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
lastname VARCHAR(50 )NOT NULL
);

create table vehiculo (

id_placa INT(15) NOT NULL PRIMARY KEY,
modelo VARCHAR(50)NOT NULL,
año VARCHAR(50)NOT NULL,

id_propietario_v int,
FOREIGN KEY (id_propietario_v) REFERENCES propietario(id_propietario)
);

create table multa (

id_multa INT(15) NOT NULL PRIMARY KEY,
fecha_multa VARCHAR(50) NOT NULL,
desc_multa VARCHAR(50)NOT NULL,
estado_multa VARCHAR(50)NOT NULL,
valor_multa VARCHAR(50)NOT NULL,

id_placa_m int,
FOREIGN KEY (id_placa_m) REFERENCES vehiculo(id_placa)
);

