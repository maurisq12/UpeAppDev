USE UpeAppDB

CREATE TABLE Vendedor
(
    IDVendedor INT PRIMARY KEY IDENTITY(1,1),
    Nombres VARCHAR(40) NOT NULL,
    Apellidos VARCHAR(30) NOT NULL,
    CorreoElectronico VARCHAR(30) NOT NULL,
    Contacto INT NOT NULL,
    Facebook VARCHAR(30) NOT NULL,
    Instagram VARCHAR(20) NOT NULL,
    Fotografia VARBINARY(100)      
);

CREATE TABLE TipoProducto
(
    IDTipoProducto INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(50) NOT NULL   
);


CREATE TABLE Producto
(
    IDProducto INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(50) NOT NULL,
    Costo INT NOT NULL,
    Detalles VARCHAR(100) NOT NULL,
    Fotografia VARBINARY(100),
	 IDTipo int FOREIGN KEY REFERENCES TipoProducto(IDTipoProducto)      
);

CREATE TABLE Provincia
(
    IDProvincia INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(50) NOT NULL   
);

CREATE TABLE Canton
(
    IDCanton INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(50) NOT NULL   
);

CREATE TABLE Distrito
(
    IDDistrito INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(50) NOT NULL   
);

CREATE TABLE Zona
(
    IDZona INT PRIMARY KEY IDENTITY(1,1),
	 IDProvincia int FOREIGN KEY REFERENCES Provincia(IDProvincia), 
	 IDCanton int FOREIGN KEY REFERENCES Canton(IDCanton),
	 IDDistrito int FOREIGN KEY REFERENCES Distrito(IDDistrito),	  
);

CREATE TABLE ZonasPorVendedor
(
    IDZona int FOREIGN KEY REFERENCES Zona(IDZona), 
    IDVendedor int FOREIGN KEY REFERENCES Vendedor(IDVendedor)
);

CREATE TABLE ProductosPorVendedor
(
    IDProducto int FOREIGN KEY REFERENCES Producto(IDProducto), 
    IDVendedor int FOREIGN KEY REFERENCES Vendedor(IDVendedor)
);


SELECT * FROM ProductosPorVendedor