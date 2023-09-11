USE [CubiculosTEC]
GO
/****** Object:  Table [dbo].[Administradores]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Administradores](
	[idAdministradores] [int] IDENTITY(1,1) NOT NULL,
	[correo] [varchar](50) NOT NULL,
	[contrasena] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Administradores] PRIMARY KEY CLUSTERED 
(
	[idAdministradores] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cubiculos]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cubiculos](
	[idCubiculo] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[idEstado] [smallint] NOT NULL,
	[capacidad] [int] NOT NULL,
	[tiempoMaximo] [time](0) NULL,
 CONSTRAINT [PK_Cubiculos] PRIMARY KEY CLUSTERED 
(
	[idCubiculo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EstadosCubiculo]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EstadosCubiculo](
	[idEstado] [smallint] IDENTITY(1,1) NOT NULL,
	[estadoActual] [varchar](50) NOT NULL,
 CONSTRAINT [PK_EstadosCubiculo] PRIMARY KEY CLUSTERED 
(
	[idEstado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EstadosEstudiante]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EstadosEstudiante](
	[idEstadoEstudiante] [smallint] IDENTITY(1,1) NOT NULL,
	[estado] [varchar](50) NOT NULL,
 CONSTRAINT [PK_EstadosEstudiante] PRIMARY KEY CLUSTERED 
(
	[idEstadoEstudiante] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Estudiantes]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estudiantes](
	[idEstudiante] [int] IDENTITY(1,1) NOT NULL,
	[correo] [varchar](50) NOT NULL,
	[contrasena] [varchar](50) NOT NULL,
	[cedula] [int] NOT NULL,
	[carne] [int] NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[apellido1] [varchar](50) NOT NULL,
	[apellido2] [varchar](50) NOT NULL,
	[edad] [smallint] NOT NULL,
	[fechaDeNacimiento] [date] NOT NULL,
	[idEstadoEstudiante] [smallint] NOT NULL,
 CONSTRAINT [PK_Estudiantes] PRIMARY KEY CLUSTERED 
(
	[idEstudiante] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Preguntas]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Preguntas](
	[idPregunta] [int] IDENTITY(1,1) NOT NULL,
	[pregunta] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Preguntas] PRIMARY KEY CLUSTERED 
(
	[idPregunta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reservaciones]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reservaciones](
	[idCubiculo] [int] NOT NULL,
	[idEstudiante] [int] NOT NULL,
	[fechaDeUso] [date] NOT NULL,
	[horaInicio] [time](0) NOT NULL,
	[horaFinal] [time](0) NOT NULL,
	[confirmacion] [bit] NOT NULL,
	[fechaDeReservacion] [date] NOT NULL,
	[idReservacion] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Reservaciones] PRIMARY KEY CLUSTERED 
(
	[idReservacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Respuestas]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuestas](
	[idRespuesta] [int] IDENTITY(1,1) NOT NULL,
	[idPregunta] [int] NOT NULL,
	[respuesta] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Respuestas] PRIMARY KEY CLUSTERED 
(
	[idRespuesta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RespuestasEstudiantes]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RespuestasEstudiantes](
	[idRespuestaEstudiante] [int] IDENTITY(1,1) NOT NULL,
	[idEstudiante] [int] NOT NULL,
	[idPregunta] [int] NOT NULL,
	[idRespuesta] [int] NOT NULL,
	[idReservacion] [int] NOT NULL,
 CONSTRAINT [PK_RespuestasEstudiantes] PRIMARY KEY CLUSTERED 
(
	[idRespuestaEstudiante] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServiciosCubiculo]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiciosCubiculo](
	[idServicioEspecial] [smallint] NOT NULL,
	[idReservacion] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServiciosEspeciales]    Script Date: 6/4/2023 4:45:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiciosEspeciales](
	[idServicioEspecial] [smallint] IDENTITY(1,1) NOT NULL,
	[servicioEspecial] [varchar](50) NOT NULL,
 CONSTRAINT [PK_ServiciosEspeciales] PRIMARY KEY CLUSTERED 
(
	[idServicioEspecial] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Cubiculos]  WITH CHECK ADD  CONSTRAINT [FK_Cubiculos_EstadosCubiculo] FOREIGN KEY([idEstado])
REFERENCES [dbo].[EstadosCubiculo] ([idEstado])
GO
ALTER TABLE [dbo].[Cubiculos] CHECK CONSTRAINT [FK_Cubiculos_EstadosCubiculo]
GO
ALTER TABLE [dbo].[Estudiantes]  WITH CHECK ADD  CONSTRAINT [FK_Estudiantes_EstadosEstudiante] FOREIGN KEY([idEstadoEstudiante])
REFERENCES [dbo].[EstadosEstudiante] ([idEstadoEstudiante])
GO
ALTER TABLE [dbo].[Estudiantes] CHECK CONSTRAINT [FK_Estudiantes_EstadosEstudiante]
GO
ALTER TABLE [dbo].[Reservaciones]  WITH CHECK ADD  CONSTRAINT [FK_Reservaciones_Cubiculos] FOREIGN KEY([idCubiculo])
REFERENCES [dbo].[Cubiculos] ([idCubiculo])
GO
ALTER TABLE [dbo].[Reservaciones] CHECK CONSTRAINT [FK_Reservaciones_Cubiculos]
GO
ALTER TABLE [dbo].[Reservaciones]  WITH CHECK ADD  CONSTRAINT [FK_Reservaciones_Estudiantes] FOREIGN KEY([idEstudiante])
REFERENCES [dbo].[Estudiantes] ([idEstudiante])
GO
ALTER TABLE [dbo].[Reservaciones] CHECK CONSTRAINT [FK_Reservaciones_Estudiantes]
GO
ALTER TABLE [dbo].[Respuestas]  WITH CHECK ADD  CONSTRAINT [FK_Respuestas_Preguntas] FOREIGN KEY([idPregunta])
REFERENCES [dbo].[Preguntas] ([idPregunta])
GO
ALTER TABLE [dbo].[Respuestas] CHECK CONSTRAINT [FK_Respuestas_Preguntas]
GO
ALTER TABLE [dbo].[RespuestasEstudiantes]  WITH CHECK ADD  CONSTRAINT [FK_RespuestasEstudiantes_Estudiantes] FOREIGN KEY([idEstudiante])
REFERENCES [dbo].[Estudiantes] ([idEstudiante])
GO
ALTER TABLE [dbo].[RespuestasEstudiantes] CHECK CONSTRAINT [FK_RespuestasEstudiantes_Estudiantes]
GO
ALTER TABLE [dbo].[RespuestasEstudiantes]  WITH CHECK ADD  CONSTRAINT [FK_RespuestasEstudiantes_Preguntas] FOREIGN KEY([idPregunta])
REFERENCES [dbo].[Preguntas] ([idPregunta])
GO
ALTER TABLE [dbo].[RespuestasEstudiantes] CHECK CONSTRAINT [FK_RespuestasEstudiantes_Preguntas]
GO
ALTER TABLE [dbo].[RespuestasEstudiantes]  WITH CHECK ADD  CONSTRAINT [FK_RespuestasEstudiantes_Reservaciones] FOREIGN KEY([idReservacion])
REFERENCES [dbo].[Reservaciones] ([idReservacion])
GO
ALTER TABLE [dbo].[RespuestasEstudiantes] CHECK CONSTRAINT [FK_RespuestasEstudiantes_Reservaciones]
GO
ALTER TABLE [dbo].[RespuestasEstudiantes]  WITH CHECK ADD  CONSTRAINT [FK_RespuestasEstudiantes_Respuestas] FOREIGN KEY([idRespuesta])
REFERENCES [dbo].[Respuestas] ([idRespuesta])
GO
ALTER TABLE [dbo].[RespuestasEstudiantes] CHECK CONSTRAINT [FK_RespuestasEstudiantes_Respuestas]
GO
ALTER TABLE [dbo].[ServiciosCubiculo]  WITH CHECK ADD  CONSTRAINT [FK_ServiciosCubiculo_Reservaciones] FOREIGN KEY([idReservacion])
REFERENCES [dbo].[Reservaciones] ([idReservacion])
GO
ALTER TABLE [dbo].[ServiciosCubiculo] CHECK CONSTRAINT [FK_ServiciosCubiculo_Reservaciones]
GO
ALTER TABLE [dbo].[ServiciosCubiculo]  WITH CHECK ADD  CONSTRAINT [FK_ServiciosCubiculo_ServiciosEspeciales] FOREIGN KEY([idServicioEspecial])
REFERENCES [dbo].[ServiciosEspeciales] ([idServicioEspecial])
GO
ALTER TABLE [dbo].[ServiciosCubiculo] CHECK CONSTRAINT [FK_ServiciosCubiculo_ServiciosEspeciales]
GO
