/**
 * Centro de Aprendizaje — Teoría General de Sistemas (TGS)
 * Universidad Simón Bolívar · Campus Cúcuta
 */
const LEARNING_DATA = {
  guide: [
    {
      id: 'def', title: 'OVA 01 — Definiciones de Sistema', ova: 'Brayan Casanova Flórez', color: 'lex',
      steps: [
        { heading: 'Qué estudia', text: 'Los conceptos fundacionales de sistema, entorno, frontera y los aportes de Bertalanffy, Hegel y Wiener al pensamiento sistémico.' },
        { heading: 'Cómo utilizarla', text: 'Navega por Teoría → Ejemplos → Video. Completa la sopa de letras, el emparejamiento y el quiz para validar comprensión.' },
        { heading: 'Conceptos clave', text: 'Sistema, subsistema, entorno, emergencia, holismo y enfoque interdisciplinar.' },
        { heading: 'Resultados esperados', text: 'Definir sistema con precisión académica y distinguirlo de un simple conjunto de elementos.' }
      ]
    },
    {
      id: 'ori', title: 'OVA 02 — Orígenes y Principios', ova: 'Cristian Miranda Zuluaga', color: 'syn',
      steps: [
        { heading: 'Qué estudia', text: 'Historia de la TGS, principios de von Bertalanffy y evolución del paradigma sistémico en ciencia y organizaciones.' },
        { heading: 'Cómo utilizarla', text: 'Recorre las secciones en orden. Usa las actividades interactivas al final de cada bloque teórico.' },
        { heading: 'Conceptos clave', text: 'Generalidad, interdisciplinariedad, relaciones, totalidad y principio de equifinalidad.' },
        { heading: 'Resultados esperados', text: 'Ubicar históricamente la TGS y explicar por qué surge como alternativa al reduccionismo.' }
      ]
    },
    {
      id: 'cla', title: 'OVA 06 — Clasificación de Sistemas', ova: 'José Chávez Ramírez', color: 'sem',
      steps: [
        { heading: 'Qué estudia', text: 'Criterios para clasificar sistemas: naturaleza, estructura, comportamiento y grado de complejidad.' },
        { heading: 'Cómo utilizarla', text: 'Explora las tarjetas interactivas y el simulador de clasificación. Refuerza con el quiz final.' },
        { heading: 'Conceptos clave', text: 'Sistemas abiertos/cerrados, simples/complejos, deterministas/probabilísticos.' },
        { heading: 'Resultados esperados', text: 'Clasificar un sistema real según múltiples criterios simultáneos.' }
      ]
    },
    {
      id: 'cib', title: 'OVA 12 — Cibernética y Organización', ova: 'Juan Angarita', color: 'tac',
      steps: [
        { heading: 'Qué estudia', text: 'Control, comunicación, retroalimentación y el Modelo de Sistema Viable de Stafford Beer.' },
        { heading: 'Cómo utilizarla', text: 'Usa las pestañas temáticas. Observa los ejemplos organizacionales y el video de cierre.' },
        { heading: 'Conceptos clave', text: 'Cibernética de 1.º y 2.º orden, homeostasis organizacional, MSV.' },
        { heading: 'Resultados esperados', text: 'Describir cómo una organización se autorregula mediante flujos de información.' }
      ]
    },
    {
      id: 'cao', title: 'OVA 11 — Caos en los Sistemas', ova: 'Robinson Meza', color: 'aut',
      steps: [
        { heading: 'Qué estudia', text: 'Teoría del caos, sensibilidad a condiciones iniciales, atractores y fractales.' },
        { heading: 'Cómo utilizarla', text: 'Interactúa con simulaciones y herramientas del módulo. Completa ejercicios y el caso integrador.' },
        { heading: 'Conceptos clave', text: 'Efecto mariposa, determinismo caótico, atractor extraño, fractal.' },
        { heading: 'Resultados esperados', text: 'Diferenciar caos matemático de desorden aleatorio y reconocer sistemas caóticos reales.' }
      ]
    }
  ],

  examples: [
    { id: 'ex1', title: 'Sistema escolar', topic: 'Fundamentos',
      code: 'Entradas: estudiantes, docentes, recursos\nProceso: enseñanza-aprendizaje\nSalidas: graduados, informes\nEntorno: comunidad, MEN',
      explanation: 'Un colegio es un sistema abierto que transforma insumos educativos en resultados formativos, intercambiando energía e información con su entorno.',
      result: 'Se identifican frontera (campus), subsistemas (académico, administrativo) y retroalimentación (evaluaciones).' },
    { id: 'ex2', title: 'Retroalimentación negativa', topic: 'Cibernética',
      code: 'Sensor → Comparador → Actuador → Sistema\nDesviación detectada → Corrección → Vuelta al set point',
      explanation: 'La retroalimentación negativa estabiliza el sistema reduciendo la desviación respecto al valor de referencia.',
      result: 'Ejemplo: termostato que activa calefacción cuando la temperatura baja del umbral.' },
    { id: 'ex3', title: 'Homeostasis corporal', topic: 'Dinámica',
      code: 'Set point: 37°C\nReceptor: termorreceptores\nControl: hipotálamo\nEfector: sudor / escalofríos',
      explanation: 'El cuerpo humano mantiene temperatura estable ante perturbaciones del entorno mediante un circuito de control.',
      result: 'Variable regulada vuelve al rango aceptable sin intervención consciente.' },
    { id: 'ex4', title: 'Sinergia en equipo', topic: 'Propiedades',
      code: 'Individuo A: 10 uds\nIndividuo B: 10 uds\nEquipo coordinado: 25 uds (no 20)',
      explanation: 'La sinergia implica que la interacción genera un resultado superior a la suma de capacidades individuales.',
      result: 'El todo supera la suma de las partes cuando hay cooperación efectiva.' },
    { id: 'ex5', title: 'Sistema abierto vs cerrado', topic: 'Tipos',
      code: 'Abierto: intercambia materia/energía/info con entorno\nCerrado: intercambia energía pero no materia\nAislado: sin intercambio',
      explanation: 'La clasificación depende del tipo y magnitud de intercambio a través de la frontera del sistema.',
      result: 'Un ecosistema es abierto; un termómetro de laboratorio idealizado puede modelarse como cerrado.' },
    { id: 'ex6', title: 'Entropía e información', topic: 'Cibernética',
      code: 'Mensaje con ruido → Canal → Receptor\nEntropía alta = incertidumbre mayor',
      explanation: 'La teoría de la información cuantifica cuánta novedad aporta un mensaje y el grado de desorden en una fuente.',
      result: 'Códigos redundantes reducen errores pero aumentan el volumen transmitido.' },
    { id: 'ex7', title: 'Efecto mariposa', topic: 'Dinámica / Caos',
      code: 'Condición inicial: 0.0001 de diferencia\nTras N iteraciones: trayectorias divergentes',
      explanation: 'En sistemas caóticos deterministas, pequeñas variaciones iniciales producen resultados muy distintos.',
      result: 'Predicción a largo plazo es prácticamente imposible sin medición perfecta.' },
    { id: 'ex8', title: 'Modelo de colas', topic: 'Aplicaciones',
      code: 'λ = tasa de llegada\nμ = tasa de servicio\nρ = λ/μ (utilización)',
      explanation: 'La teoría de colas modela sistemas de espera: bancos, call centers, servidores y urgencias hospitalarias.',
      result: 'Si ρ ≥ 1 el sistema es inestable y la cola crece sin límite.' },
    { id: 'ex9', title: 'Error: confundir partes con sistema', topic: 'Detecta el error',
      code: '"Un átomo de oxígeno es un sistema respiratorio"',
      explanation: 'Un componente aislado no constituye el sistema completo; carece de la organización que genera la función emergente.',
      result: 'Error: confundir elemento con sistema. El sistema respiratorio requiere múltiples órganos relacionados.' },
    { id: 'ex10', title: 'Construcción de un sistema de riego', topic: 'Construye el sistema',
      code: 'Entradas: agua, energía\nSubsistemas: bomba, sensores, válvulas\nSalida: cultivo hidratado\nRetroalimentación: humedad del suelo',
      explanation: 'Armar un sistema implica definir frontera, componentes, flujos y mecanismo de control.',
      result: 'Sistema viable que mantiene humedad óptima con mínimo consumo de agua.' }
  ],

  quiz: [
    { cat: 'bas', q: '¿Quién es considerado el principal impulsor de la TGS?', options: ['Norbert Wiener', 'Ludwig von Bertalanffy', 'Claude Shannon', 'Edward Lorenz'], correct: 1 },
    { cat: 'bas', q: 'Un sistema es…', options: ['Un conjunto sin relaciones', 'Un conjunto de elementos interrelacionados con un objetivo', 'Solo un organismo vivo', 'Una máquina cerrada'], correct: 1 },
    { cat: 'bas', q: 'El entorno de un sistema es…', options: ['Todo lo interno', 'Lo externo que influye o es influido', 'Solo el mercado', 'El hardware'], correct: 1 },
    { cat: 'bas', q: 'La sinergia significa que…', options: ['Las partes se anulan', 'El todo puede superar la suma de las partes', 'No hay interacción', 'El sistema es cerrado'], correct: 1 },
    { cat: 'tip', q: 'Un sistema abierto intercambia…', options: ['Nada', 'Solo energía', 'Materia, energía y/o información con el entorno', 'Solo dinero'], correct: 2 },
    { cat: 'tip', q: 'Un sistema complejo se caracteriza por…', options: ['Pocas variables', 'Muchas interacciones no lineales', 'Ausencia de retroalimentación', 'Ser siempre pequeño'], correct: 1 },
    { cat: 'tip', q: 'La equifinalidad indica que…', options: ['Un solo camino al resultado', 'Diferentes caminos pueden llevar al mismo resultado', 'No hay objetivos', 'El sistema es estático'], correct: 1 },
    { cat: 'tip', q: 'Un subsistema es…', options: ['El entorno', 'Un sistema dentro de otro sistema', 'Un error de diseño', 'Una frontera'], correct: 1 },
    { cat: 'cib', q: 'La retroalimentación negativa…', options: ['Amplifica desviaciones', 'Estabiliza y corrige desviaciones', 'Elimina el entorno', 'Impide la comunicación'], correct: 1 },
    { cat: 'cib', q: 'La cibernética estudia principalmente…', options: ['Rocas y minerales', 'Control y comunicación en sistemas', 'Solo redes sociales', 'Únicamente hardware'], correct: 1 },
    { cat: 'cib', q: 'La homeostasis es…', options: ['Crecimiento ilimitado', 'Mantenimiento del equilibrio interno', 'Destrucción del sistema', 'Aislamiento total'], correct: 1 },
    { cat: 'cib', q: 'Wiener es referente de…', options: ['Fractales', 'Cibernética', 'Teoría de juegos', 'Colas'], correct: 1 },
    { cat: 'din', q: 'El efecto mariposa pertenece a…', options: ['Teoría del caos', 'Lógica proposicional', 'Teoría de colas', 'Álgebra booleana'], correct: 0 },
    { cat: 'din', q: 'Un attractor extraño se asocia con…', options: ['Sistemas lineales simples', 'Trayectorias caóticas acotadas', 'Estasis total', 'Sistemas cerrados sin energía'], correct: 1 },
    { cat: 'din', q: 'La emergencia describe…', options: ['Propiedades del todo no presentes en las partes aisladas', 'Suma aritmética simple', 'Descomposición lineal', 'Ausencia de niveles'], correct: 0 },
    { cat: 'din', q: 'Un sistema dinámico evoluciona…', options: ['Solo en el tiempo', 'En el tiempo según reglas de cambio', 'Sin variables de estado', 'Sin entorno'], correct: 1 },
    { cat: 'app', q: 'La teoría de colas modela…', options: ['Sistemas de espera y servicio', 'Solo circuitos eléctricos', 'Únicamente ecosistemas', 'Lenguajes formales'], correct: 0 },
    { cat: 'app', q: 'En teoría de juegos se analiza…', options: ['Decisiones estratégicas interdependientes', 'Solo temperatura', 'Tokens léxicos', 'Fractales únicamente'], correct: 0 },
    { cat: 'app', q: 'El pensamiento sistémico se aplica a…', options: ['Solo biología', 'Múltiples disciplinas', 'Solo programación', 'Ningún campo práctico'], correct: 1 },
    { cat: 'app', q: 'La frontera del sistema define…', options: ['Qué pertenece al sistema y qué al entorno', 'Solo el color de la interfaz', 'El autor de la OVA', 'La versión del software'], correct: 0 },
    { cat: 'bas', q: '¿Qué concepto describe el retorno de información al sistema?', options: ['Entropía', 'Retroalimentación', 'Equifinalidad', 'Fractal'], correct: 1 },
    { cat: 'cib', q: 'Shannon aportó a…', options: ['Teoría de la información', 'Geología', 'Botánica', 'Teoría de números'], correct: 0 },
    { cat: 'tip', q: 'Un sistema determinista…', options: ['No tiene reglas', 'Su estado futuro depende del estado actual por reglas fijas', 'Es siempre aleatorio', 'No tiene entradas'], correct: 1 },
    { cat: 'din', q: 'Poincaré sentó bases matemáticas relacionadas con…', options: ['Caos y dinámica', 'Solo estadística descriptiva', 'Compiladores', 'Bases de datos'], correct: 0 }
  ],

  hangmanWords: [
    'SISTEMA', 'ENTORNO', 'RETROALIMENTACION', 'HOMEOSTASIS', 'SINERGIA',
    'CIBERNETICA', 'SUBSISTEMA', 'ENTRADAS', 'SALIDAS', 'CONTROL',
    'ADAPTACION', 'COMPLEJIDAD'
  ],

  wordSearchLevels: {
    basico: ['SISTEMA', 'ENTORNO', 'ENTRADA', 'SALIDA', 'CONTROL', 'ORDEN', 'CAOS', 'TIPO'],
    intermedio: ['HOMEOSTASIS', 'SINERGIA', 'EMERGENCIA', 'CIBERNETICA', 'RETROALIMENTACION', 'SUBSISTEMA', 'FRONTERA', 'ENTROPIA'],
    avanzado: ['EQUIFINALIDAD', 'DETERMINISMO', 'COMPLEJIDAD', 'AUTORREGULACION', 'INTERDISCIPLINAR', 'HOLOISMO', 'ATRACTOR', 'VIABILIDAD']
  },

  wordSearchWords: [
    'SISTEMA', 'ENTORNO', 'HOMEOSTASIS', 'SINERGIA', 'CIBERNETICA',
    'RETROALIMENTACION', 'SUBSISTEMA', 'ENTRADAS', 'SALIDAS', 'CONTROL',
    'EMERGENCIA', 'ENTROPIA', 'COMPLEJIDAD', 'FRONTERA', 'ADAPTACION'
  ],

  matchingPairs: [
    { term: 'HOMEOSTASIS', definition: 'Equilibrio dinámico interno ante perturbaciones' },
    { term: 'SINERGIA', definition: 'El todo supera la suma de las partes' },
    { term: 'RETROALIMENTACION', definition: 'Retorno de información al sistema' },
    { term: 'EMERGENCIA', definition: 'Propiedad nueva del conjunto, no de las partes' },
    { term: 'ENTORNO', definition: 'Todo lo externo que afecta o es afectado por el sistema' },
    { term: 'SUBSISTEMA', definition: 'Componente que funciona como sistema dentro de otro' },
    { term: 'ENTROPIA', definition: 'Medida de desorden o incertidumbre' },
    { term: 'CIBERNETICA', definition: 'Ciencia del control y la comunicación' },
    { term: 'EQUIFINALIDAD', definition: 'Mismo resultado por caminos distintos' },
    { term: 'FRONTERA', definition: 'Límite entre sistema y entorno' }
  ],

  detectErrors: [
    { text: 'Un sistema cerrado intercambia materia y energía libremente con su entorno.', error: 'Un sistema cerrado no intercambia materia; solo energía (o ninguno en el aislado).' },
    { text: 'La retroalimentación positiva siempre estabiliza el sistema.', error: 'La retroalimentación positiva amplifica cambios; la que estabiliza es la negativa.' },
    { text: 'La sinergia implica que el todo es menor que la suma de las partes.', error: 'La sinergia implica que el todo puede ser mayor que la suma de las partes.' },
    { text: 'El entorno es todo lo que está dentro de la frontera del sistema.', error: 'El entorno es lo externo a la frontera; lo interno es el sistema.' },
    { text: 'La homeostasis elimina toda variación en el sistema.', error: 'La homeostasis mantiene variables en rangos viables, no elimina toda variación.' }
  ],

  buildScenarios: [
    {
      title: 'Sistema de climatización',
      parts: ['Sensor de temperatura', 'Unidad de enfriamiento', 'Set point 22°C', 'Actuador de ventilación', 'Retroalimentación negativa'],
      correct: ['Sensor de temperatura', 'Set point 22°C', 'Actuador de ventilación', 'Retroalimentación negativa', 'Unidad de enfriamiento']
    },
    {
      title: 'Sistema educativo',
      parts: ['Estudiantes (entrada)', 'Proceso pedagógico', 'Graduados (salida)', 'Comunidad (entorno)', 'Biblioteca (entorno interno)'],
      correct: ['Estudiantes (entrada)', 'Proceso pedagógico', 'Graduados (salida)', 'Comunidad (entorno)']
    }
  ],

  challenges: [
    {
      level: 1, title: 'Conceptos básicos', color: 'lex',
      questions: [
        { q: '¿Qué es un sistema?', options: ['Elementos interrelacionados con propósito', 'Un archivo HTML', 'Una base de datos', 'Un error'], correct: 0 },
        { q: '¿Qué es el entorno?', options: ['Lo externo al sistema', 'El CPU', 'Un subsistema', 'Un quiz'], correct: 0 },
        { q: '¿Qué es un subsistema?', options: ['Sistema dentro de otro', 'El autor de la OVA', 'Un servidor', 'Un color'], correct: 0 }
      ]
    },
    {
      level: 2, title: 'Tipos de sistemas', color: 'syn',
      questions: [
        { q: 'Sistema abierto…', options: ['Intercambia con el entorno', 'No tiene frontera', 'Es solo digital', 'No tiene salidas'], correct: 0 },
        { q: 'Sistema complejo…', options: ['Muchas interacciones no lineales', 'Siempre pequeño', 'Sin variables', 'Sin entorno'], correct: 0 },
        { q: 'Equifinalidad…', options: ['Mismo fin por distintos medios', 'Un solo camino', 'Sin objetivo', 'Caos puro'], correct: 0 }
      ]
    },
    {
      level: 3, title: 'Cibernética', color: 'sem',
      questions: [
        { q: 'Retroalimentación negativa…', options: ['Estabiliza', 'Siempre destruye', 'Es el entorno', 'Es entropía'], correct: 0 },
        { q: 'Wiener aportó a…', options: ['Cibernética', 'Fractales únicamente', 'Teoría de colas solamente', 'HTML'], correct: 0 },
        { q: 'Homeostasis…', options: ['Equilibrio dinámico', 'Crecimiento infinito', 'Aislamiento total', 'Aleatoriedad pura'], correct: 0 }
      ]
    },
    {
      level: 4, title: 'Dinámica de sistemas', color: 'tac',
      questions: [
        { q: 'Efecto mariposa…', options: ['Sensibilidad a condiciones iniciales', 'Ausencia de reglas', 'Sistema cerrado', 'Sin tiempo'], correct: 0 },
        { q: 'Emergencia…', options: ['Propiedad del todo', 'Suma trivial', 'Solo en hardware', 'Error léxico'], correct: 0 },
        { q: 'Atractor extraño…', options: ['Trayectoria caótica acotada', 'Punto fijo trivial', 'Base de datos', 'Token'], correct: 0 }
      ]
    },
    {
      level: 5, title: 'Aplicaciones reales', color: 'aut',
      questions: [
        { q: 'Teoría de colas modela…', options: ['Espera y servicio', 'Solo compiladores', 'Solo redes neuronales', 'Solo CSS'], correct: 0 },
        { q: 'Teoría de juegos analiza…', options: ['Decisiones estratégicas', 'Temperatura corporal', 'Tokens', 'AST'], correct: 0 },
        { q: 'Pensamiento sistémico…', options: ['Es interdisciplinar', 'Solo matemáticas', 'No es aplicable', 'Es reduccionismo'], correct: 0 }
      ]
    }
  ]
};
