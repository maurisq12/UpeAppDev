USE CubiculosTEC



-- EstadosEstudiante

INSERT INTO dbo.EstadosEstudiante (estado)
VALUES ('Activo')

INSERT INTO dbo.EstadosEstudiante (estado)
VALUES ('Suspendido')

SELECT * FROM dbo.EstadosEstudiante



-- EstadosCubiculo

INSERT INTO dbo.EstadosCubiculo (estadoActual)
VALUES ('Libre')

INSERT INTO dbo.EstadosCubiculo (estadoActual)
VALUES ('Ocupado')

INSERT INTO dbo.EstadosCubiculo (estadoActual)
VALUES ('En Mantenimiento')

SELECT * FROM dbo.EstadosCubiculo



-- ServiciosEspeciales

INSERT INTO dbo.ServiciosEspeciales (servicioEspecial)
VALUES ('NVDA')

INSERT INTO dbo.ServiciosEspeciales (servicioEspecial)
VALUES ('Landa 1.4')

INSERT INTO dbo.ServiciosEspeciales (servicioEspecial)
VALUES ('JAWS')

INSERT INTO dbo.ServiciosEspeciales (servicioEspecial)
VALUES ('Teclado Especial')

INSERT INTO dbo.ServiciosEspeciales (servicioEspecial)
VALUES ('Línea Braille')

INSERT INTO dbo.ServiciosEspeciales (servicioEspecial)
VALUES ('Impresora Fuse')

SELECT * FROM dbo.ServiciosEspeciales



-- "Estudiante" administrador (para bloquear cubiculos)

INSERT INTO dbo.Estudiantes (correo, contrasena, cedula, carne, nombre, apellido1, apellido2, edad, fechaDeNacimiento, idEstadoEstudiante)
VALUES ('', '', 0, 0, '', '', '', 0,
'', 1)

SELECT * FROM dbo.Estudiantes



-- Preguntas

INSERT INTO dbo.Preguntas (pregunta)
VALUES ('¿Cómo calificarías la disponibilidad de los cubículos?')

INSERT INTO dbo.Preguntas (pregunta)
VALUES ('¿Cómo calificarías la limpieza de los cubículos?')

INSERT INTO dbo.Preguntas (pregunta)
VALUES ('¿Cómo calificarías la comodidad de los cubículos?')

INSERT INTO dbo.Preguntas (pregunta)
VALUES ('¿Cómo calificarías la facilidad para reservar un cubículo?')

INSERT INTO dbo.Preguntas (pregunta)
VALUES ('¿Recomendarías los cubículos de la biblioteca a otros usuarios?')

INSERT INTO dbo.Preguntas (pregunta)
VALUES ('¿Tienes algún comentario adicional o sugerencia para mejorar los
cubículos de la biblioteca?')


SELECT * FROM dbo.Preguntas



-- Respuestas

INSERT INTO dbo.Respuestas (idPregunta, respuesta)
VALUES (1, 'Excelente'),
(1, 'Buena'),
(1, 'Regular'),
(1, 'Mala'),
(2, 'Excelente'),
(2, 'Buena'),
(2, 'Regular'),
(2, 'Mala'),
(3, 'Excelente'),
(3, 'Buena'),
(3, 'Regular'),
(3, 'Mala'),
(4, 'Excelente'),
(4, 'Buena'),
(4, 'Regular'),
(4, 'Mala'),
(5, 'Sí, definitivamente'),
(5, 'Probablemente sí'),
(5, 'No estoy seguro'),
(5, 'Probablemente no'),
(5, 'No, definitivamente no')

SELECT * FROM dbo.Respuestas