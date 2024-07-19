use ventacigarrillos;
CREATE TABLE `user` (
  `userCod` int NOT NULL AUTO_INCREMENT,
  `userUsu` varchar(50) NOT NULL,
  `userPas` varchar(50) NOT NULL,
  `userPerCod` int NOT NULL,
  PRIMARY KEY (`userCod`),
  KEY `fk_UserPerson` (`userPerCod`),
  CONSTRAINT `fk_UserPerson` FOREIGN KEY (`userPerCod`) REFERENCES `person` (`personCod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `person` (
  `personCod` int NOT NULL AUTO_INCREMENT,
  `personNom` varchar(50) NOT NULL,
  `personApeP` varchar(50) NOT NULL,
  `personApeM` varchar(50) NOT NULL,
  `personFecha` date NOT NULL,
  `personEmail` varchar(50) NOT NULL,
  PRIMARY KEY (`personCod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE Fabricantes (
  fabricanteCod INT PRIMARY KEY AUTO_INCREMENT,
  fabricanteNom VARCHAR(50) NOT NULL,
  paisCod INT NOT NULL
);

create table pais(
	paisCod int primary key auto_increment,
    paisNom varchar (50) not null
    );
CREATE TABLE Cigarrillos (
  cigarrillosCod INT PRIMARY KEY AUTO_INCREMENT,
  cigarrillosFiltro VARCHAR(1) NOT NULL,
  cigarrillosColor VARCHAR(1) NOT NULL,
  cigarrillosClase VARCHAR(20) NOT NULL,
  cigarrillosAlquitran INT NOT NULL,
  cigarrillosMentol BOOLEAN NOT NULL,
  cigarrillosNicotina FLOAT NOT NULL,
  cigarrillosPrecioVenta DECIMAL(10,2) NOT NULL,
  cigarrillosPrecioCompra DECIMAL(10,2) NOT NULL
);

create table Manufactura(
	cigarrillosCod INT ,
    fabricanteCod INT ,
    cigarrillosCarton int (2),
    cigarrillosEmbalaje int (2)
);
CREATE TABLE Almacen (
  cigarillosCod INT NOT NULL,
  estancoNif VARCHAR(12) NOT NULL,
  cigarrillosUnidades INT NOT NULL,
  FOREIGN KEY (cigarillosCod) REFERENCES Cigarrillos(cigarrillosCod),
  FOREIGN KEY (estancoNif) REFERENCES Estancos(estancoNif)
);
CREATE TABLE Estancos (
  estancoNif VARCHAR(12) NOT NULL PRIMARY KEY,
  provinicaCod INT NOT NULL,
  estancoExpendiduria VARCHAR(50) NOT NULL,
  estancoDireccion VARCHAR(255) NOT NULL,
  estancoLocalidad VARCHAR(50) NOT NULL,
  estancoCodPostal VARCHAR(5) NOT NULL,
  estancoNombre VARCHAR(50) NOT NULL,
  FOREIGN KEY (provinicaCod) REFERENCES Provincias(provinciaCod)
);
CREATE TABLE Provincias (
  provinciaCod INT PRIMARY KEY AUTO_INCREMENT,
  provinciaNombre VARCHAR(50) NOT NULL
);
CREATE TABLE Compras (
  compraCod INT PRIMARY KEY AUTO_INCREMENT,
  estancoNif VARCHAR(12) NOT NULL,
  cigarrillosCod INT NOT NULL,
  compraFechaDia INT NOT NULL,
  compraFechaMes INT NOT NULL,
  compraFechaAño INT NOT NULL,
  compraCantidad INT NOT NULL,
  compraPrecio DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (estancoNif) REFERENCES Estancos(estancoNif),
  FOREIGN KEY (cigarrillosCod) REFERENCES Cigarrillos(cigarrillosCod)
);
CREATE TABLE Ventas (
  ventaCod INT PRIMARY KEY AUTO_INCREMENT,
  estancoNif VARCHAR(12) NOT NULL,
  cigarrillosCod INT NOT NULL,
  ventaFechaDia INT NOT NULL,
  ventaFechaMes INT NOT NULL,
  ventaFechaAño INT NOT NULL,
  ventaCantidad INT NOT NULL,
  ventaPrecio DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (estancoNif) REFERENCES Estancos(estancoNif),
  FOREIGN KEY (cigarrillosCod) REFERENCES Cigarrillos(cigarrillosCod)
);
ALTER TABLE Manufactura
ADD CONSTRAINT fk_ManufacturaCigarrillos FOREIGN KEY (cigarrillosCod) REFERENCES Cigarrillos(cigarrillosCod);   
ALTER TABLE Manufactura
ADD CONSTRAINT fk_ManufacturaFabricante FOREIGN KEY (fabricanteCod) REFERENCES Fabricantes(fabricanteCod);   
ALTER TABLE fabricantes
ADD CONSTRAINT fk_FabricantesPais FOREIGN KEY (paisCod) REFERENCES pais(paisCod);    