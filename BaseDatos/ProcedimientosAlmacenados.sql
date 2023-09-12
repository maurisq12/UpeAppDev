USE UpeAppDB



-------------------------------------------------------------Vendedor-------------------------------------------------------------------------------------
---------------------------------------------------------------|Agregar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE agregarVendedor(
@pNombres VARCHAR(40),
@pApellidos VARCHAR(30),
@pCorreoElectronico VARCHAR(30),
@pContrasena VARCHAR(30),
@pContacto INT,
@pFacebook VARCHAR(30),
@pInstagram VARCHAR(20),
@pFotografia VARBINARY(100))
AS
BEGIN
INSERT INTO Vendedor (Nombres,Apellidos,CorreoElectronico,Contrasena,Contacto,Facebook,Instagram,Fotografia)
VALUES (@pNombres,@pApellidos,@pCorreoElectronico,@pContrasena,@pContacto,@pFacebook,@pInstagram,@pFotografia)
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
DELETE FROM Vendedor WHERE IDVendedor = @pIDVendedor
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
SELECT IDTipoProducto, Nombre
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
SELECT SCOPE_IDENTITY() AS Agregado
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
@pIDProducto INT
AS
BEGIN
SELECT Nombre,Costo,Detalles,Fotografia,IDTipo
FROM Producto
WHERE IDProducto = @pIDProducto
END;

CREATE OR ALTER PROCEDURE consultarProductos
AS
BEGIN
SELECT IDProducto, Producto.Nombre AS Nombre,Costo,Detalles,Fotografia,IDTipo, TipoProducto.Nombre AS Tipo
FROM Producto
INNER JOIN TipoProducto ON Producto.IDTipo = TipoProducto.IDTipoProducto
END;


-------------------------------------------------------------Zona-------------------------------------------------------------------------------------
---------------------------------------------------------------|Agregar|-----------------------------------------------------------------------------------
--Provincias
CREATE OR ALTER PROCEDURE getProvincias
AS
BEGIN
SELECT IDProvincia, Nombre 
FROM Provincia
END;

CREATE OR ALTER PROCEDURE getCantones
@pIDProvincia INT
AS
BEGIN
SELECT IDCanton, Nombre 
FROM Canton
WHERE IDProvincia = @pIDProvincia
END;

CREATE OR ALTER PROCEDURE getDistritos
@pIDCanton INT
AS
BEGIN
SELECT IDDistrito, Nombre 
FROM Distrito
WHERE IDCanton = @pIDCanton
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
    @pIDVendedor INT)
AS
BEGIN
INSERT INTO ZonasPorVendedor (IDZona,IDVendedor,FechaAgregado)
VALUES (@pIDZona,@pIDVendedor,(SELECT CAST( GETDATE() AS Date )))
END;
---------------------------------------------------------------|Eliminar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE eliminarZonaAVendedor
@pIDZona INT,
@pIDVendedor INT 
AS
BEGIN
DELETE FROM ZonasPorVendedor WHERE IDZona = @pIDZona AND IDVendedor=@pIDVendedor
END;
---------------------------------------------------------------|Consultar|-----------------------------------------------------------------------------------
CREATE OR ALTER PROCEDURE consultarZonasAVendedor
@pIDVendedor INT
AS
BEGIN
SELECT IDZona, Distrito.Nombre AS Distrito, Canton.Nombre AS Canton, Provincia.Nombre AS Provincia, FechaAgregado
FROM ZonasPorVendedor
INNER JOIN Distrito ON ZonasPorVendedor.IDZona=Distrito.IDDistrito
INNER JOIN Canton ON Distrito.IDCanton = Canton.IDCanton
INNER JOIN Provincia ON Canton.IDProvincia = Provincia.IDProvincia
WHERE IDVendedor=@pIDVendedor
END;

-------------------------------------------------------------LOGIN----------------------------------------------------------------------


CREATE OR ALTER PROCEDURE iniciarSesion
@pCorreoElectronico VARCHAR(30),
@pContrasena VARCHAR(30)
AS
BEGIN
SELECT Nombres,Apellidos,CorreoElectronico,Contacto,Facebook,Instagram,Fotografia
FROM Vendedor
WHERE CorreoElectronico = @pCorreoElectronico AND Contrasena = @pContrasena
END;
