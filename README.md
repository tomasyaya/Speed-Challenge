# Speed-Challenge

DESCRIPTION

Speed-Challenge es un juego donde debes esquivar autos por la carretera. El jugador inicial puede moverse de izquierda a derecha por la carretera mientras autos vienen de frente, su intencion es no chocar. Mientras mas tiempo dures sin chocar mas puntos sumas!!.

MVP

BACKLOG


- Colision Lateral()*
- Change Level()*
- Player Selection()*
- Extra Score()*
- Select Player *
- Clase Camiones *


ESTRUCTURA DE DATOS

Clase Player

Propiedades:
  - Direccion
  - Vida
  - Tamaño
  - Posicion Inicial
  - Velocidad

 Metodos:
  - Move()
  - Colision()
  - Contention()
  - Colision Lateral()*


Clase Autos

Propiedades:
  - Direccion
  - Vida
  - Tamaño
  - Posicion Inicial
  - Velocidad
  - Array Autos

 Metodos:
  - Move()
  - Start()

Clase Camiones *

Propiedades:
  - Direccion
  - Vida
  - Tamaño
  - Posicion Inicial
  - Velocidad
  - Array Autos

 Metodos:
  - Move()
  - Start()

Clase Game

Propiedades:
  - Player
  - Autos
  - Camiones*

  Metodos:
  - Build Dom()
  - Start Game()
  - Score()
  - Game Over()
  - Reset()
  - Change Level()*
  - Player Selection()*
  - Extra Score()*


STATES / STATES TRANSITION

Splash Game 
  - Start Button
  - Select Player *

  Transition ---> GameScreen

Game Screen

  Transition ----> Game Over / Win Screen

Game Over / Win Screen
  
  - Reset Button
  - Select Player Button

  Transition ----> Game Screen
  Transition ----> Select Player *

Select Player *

  - Player Selection Buttons
  - Start Game Button

  Transition ----> Game Screen

TASK

- Generar Files
- Generar Main
- Generar Pantalla Start
-  "        "      Game
-  "        "      Game Over
- Conectar Tres Pantallas
- Crear Clase Game / Propiedades
- Crear Metodos Game
- Crear Clase Personaje / Propiedades
- Crear Metodos Personaje
- Crear Clase Autos / Propiedades
- Crar Metodos Autos
- Integrar Player a Game
-  "       Autos a Game
- Probar funcionabilidad Basica
- *

GitHub URL https://github.com/tomasyaya/Speed-Challenge

Slides URL https://slides.com/tomasyaya




