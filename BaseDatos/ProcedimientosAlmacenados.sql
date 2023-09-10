USE UpeAppDB



-------------------------------------------------------------Vendedor-------------------------------------------------------------------------------------
---------------------------------------------------------------|Agregar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE agregarVendedor(
@pNombres VARCHAR(40),
@pApellidos VARCHAR(30),
@pCorreoElectronico VARCHAR(30),
@pContacto INT,
@pFacebook VARCHAR(30),
@pInstagram VARCHAR(20),
@pFotografia VARBINARY(100))
AS
BEGIN
INSERT INTO Vendedor (Nombres,Apellidos,CorreoElectronico,Contacto,Facebook,Instagram,Fotografia)
VALUES (@pNombres,@pApellidos,@pCorreoElectronico,@pContacto,@pFacebook,@pInstagram,@pFotografia)
END;
---------------------------------------------------------------|Editar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE editarVendedor(
@pIDVendedor INT, 
@pNombres VARCHAR(40),
@pApellidos VARCHAR(30),
@pCorreoElectronico VARCHAR(30),
@pContacto INT,
@pFacebook VARCHAR(30),
@pInstagram VARCHAR(20),
@pFotografia VARBINARY(100))
AS
BEGIN
UPDATE Vendedor SET 
Nombres = @pNombres, Apellidos = @pApellidos, CorreoElectronico = @pCorreoElectronico ,Contacto = @pContacto,
Facebook = @pFacebook,Instagram = @pInstagram,Fotografia = @pFotografia
WHERE IDVendedor = @pIDVendedor
END;
---------------------------------------------------------------|Eliminar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE eliminarVendedor
@pIDVendedor INT
AS
BEGIN
DELETE FROM Vendeor WHERE IDVendedor = @pIDVendedor
END;
---------------------------------------------------------------|Consultar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE consultarVendedores
AS
BEGIN
SELECT Nombres,Apellidos,CorreoElectronico,Contacto,Facebook,Instagram,Fotografia
FROM Vendedor
END;

CREATE OR ALTER PROCEDURE consultarVendedor
@pIDVendedor INT
AS
BEGIN
SELECT Nombres,Apellidos,CorreoElectronico,Contacto,Facebook,Instagram,Fotografia
FROM Vendedor
WHERE IDVendedor = @pIDVendedor
END;

-------------------------------------------------------------TipoProducto-------------------------------------------------------------------------------------
---------------------------------------------------------------|Agregar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE agregarTipoProducto
@pNombre VARCHAR(50)
AS
BEGIN
INSERT INTO TipoProducto (Nombre)
VALUES (@pNombre)
END;
---------------------------------------------------------------|Editar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE editarTipoProducto(
@pIDTipoProducto INT, 
@pNombre VARCHAR(50))
AS
BEGIN
UPDATE TipoProducto SET 
Nombre = @pNombre
WHERE IDTipoProducto = @pIDTipoProducto
END;
---------------------------------------------------------------|Eliminar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE eliminarTipoProducto
@pIDTipoProducto INT
AS
BEGIN
DELETE FROM TipoProducto WHERE IDTipoProducto = @pIDTipoProducto
END;
---------------------------------------------------------------|Consultar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE consultarTipoProducto
AS
BEGIN
SELECT Nombre
FROM TipoProducto
END;

-------------------------------------------------------------Producto-------------------------------------------------------------------------------------
---------------------------------------------------------------|Agregar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE agregarProducto(
    @pNombre VARCHAR(50),
    @pCosto INT,
    @pDetalles VARCHAR(100),
    @pFotografia VARBINARY(100),
    @pIDTipo int)
AS
BEGIN
INSERT INTO Producto (Nombre,Costo,Detalles,Fotografia,IDTipo)
VALUES (@pNombre,@pCosto,@pDetalles,@pFotografia,@pIDTipo)
END;
---------------------------------------------------------------|Editar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE editarProducto(
	 @pIDProducto INT, 
    @pNombre VARCHAR(50),
    @pCosto INT,
    @pDetalles VARCHAR(100),
    @pFotografia VARBINARY(100),
    @pIDTipo int)
AS
BEGIN
UPDATE Producto SET 
Nombre = @pNombre, Costo = @pCosto, Detalles = @pDetalles ,Fotografia = @pFotografia,
IDTipo = @pIDTipo
WHERE IDProducto = @pIDProducto
END;
---------------------------------------------------------------|Eliminar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE eliminarProducto
@pIDProducto INT
AS
BEGIN
DELETE FROM Producto WHERE IDProducto = @pIDProducto
END;
---------------------------------------------------------------|Consultar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE consultarProducto
AS
BEGIN
SELECT Nombre,Costo,Detalles,Fotografia,IDTipo
FROM Producto
END;


-------------------------------------------------------------Zona-------------------------------------------------------------------------------------
---------------------------------------------------------------|Agregar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE agregarZona(
	 @pIDProvincia INT,
	 @pIDCanton INT,
	 @pIDDistrito INT)
AS
BEGIN
INSERT INTO Zona (IDProvincia,IDCanton,IDDistrito)
VALUES (@pIDProvincia,@pIDCanton,@pIDDistrito)
END;

---------------------------------------------------------------|Eliminar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE eliminarZona
@pIDZona INT
AS
BEGIN
DELETE FROM Zona WHERE IDZona = @pIDZona
END;
---------------------------------------------------------------|Consultar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE consultarZona
AS
BEGIN
SELECT IDProvincia,IDCanton,IDDistrito
FROM Zona
END;

-------------------------------------------------------------ProductosPorVendedor-------------------------------------------------------------------------------------
---------------------------------------------------------------|Agregar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE agregarProductoAVendedor(
    @pIDProducto INT,
    @pIDVendedor int)
AS
BEGIN
INSERT INTO ProductosPorVendedor (IDProducto,IDVendedor)
VALUES (@pIDProducto,@pIDVendedor)
END;
---------------------------------------------------------------|Eliminar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE eliminarProductoAVendedor
@pIDProducto INT
AS
BEGIN
DELETE FROM ProductosPorVendedor WHERE IDProducto = @pIDProducto
END;
---------------------------------------------------------------|Consultar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE consultarProductosAVendedor
@pIDVendedor INT
AS
BEGIN
SELECT (IDProducto)
FROM ProductosPorVendedor
WHERE IDVendedor=@pIDVendedor
END;


-------------------------------------------------------------ZonasPorVendedor-------------------------------------------------------------------------------------
---------------------------------------------------------------|Agregar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE agregarZonaAVendedor(
    @pIDZona INT,
    @pIDVendedor int)
AS
BEGIN
INSERT INTO ZonasPorVendedor (IDZona,IDVendedor)
VALUES (@pIDZona,@pIDVendedor)
END;
---------------------------------------------------------------|Eliminar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE eliminarZonaAVendedor
@pIDZona INT
AS
BEGIN
DELETE FROM ZonasPorVendedor WHERE IDZona = @pIDZona
END;
---------------------------------------------------------------|Consultar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE consultarZonasAVendedor
@pIDVendedor INT
AS
BEGIN
SELECT (IDZona)
FROM ZonasPorVendedor
WHERE IDVendedor=@pIDVendedor
END;

