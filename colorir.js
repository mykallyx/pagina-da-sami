// ── COLORIR ──
    // ── COLORIR ──
(function(){

const PALETTE = [
  '#000000','#ffffff','#ff0000','#ff6b00','#ffd600','#00c853',
  '#0091ea','#7c4dff','#e91e8c','#ff80ab','#a5d6a7','#80deea',
  '#ffcc80','#bcaaa4','#ef9a9a','#ce93d8','#90caf9','#fff176',
  '#b0bec5','#795548'
];

const DRAWINGS = [
  { name:'Rosa', emoji:'🌹', paths:[
    // pétalas
    {d:'M50,90 C30,70 20,50 50,30 C80,50 70,70 50,90Z', fill:'#ffb6c8'},
    {d:'M50,90 C70,60 90,55 80,30 C60,40 50,70 50,90Z', fill:'#ffb6c8'},
    {d:'M50,90 C30,60 10,55 20,30 C40,40 50,70 50,90Z', fill:'#ffb6c8'},
    {d:'M50,90 C50,65 65,45 50,25 C35,45 50,65 50,90Z', fill:'#ff6b9d'},
    // caule
    {d:'M48,90 L44,130 Q50,135 56,130 L52,90Z', fill:'#4caf50'},
    // folha
    {d:'M44,110 Q30,100 25,115 Q38,118 44,110Z', fill:'#66bb6a'},
    {d:'M56,115 Q70,105 75,120 Q62,123 56,115Z', fill:'#66bb6a'},
  ]},
  { name:'Borboleta', emoji:'🦋', paths:[
    {d:'M50,50 C30,20 5,25 10,50 C15,70 35,65 50,50Z', fill:'#ce93d8'},
    {d:'M50,50 C70,20 95,25 90,50 C85,70 65,65 50,50Z', fill:'#ce93d8'},
    {d:'M50,55 C35,65 20,80 30,90 C42,85 50,70 50,55Z', fill:'#ba68c8'},
    {d:'M50,55 C65,65 80,80 70,90 C58,85 50,70 50,55Z', fill:'#ba68c8'},
    {d:'M47,45 Q50,35 53,45 Q55,60 50,65 Q45,60 47,45Z', fill:'#4a148c'},
    // antenas
    {d:'M49,43 Q44,30 40,22', stroke:'#4a148c', fill:'none', sw:'2'},
    {d:'M51,43 Q56,30 60,22', stroke:'#4a148c', fill:'none', sw:'2'},
    {d:'M40,22', r:'3', cx:'40', cy:'22', fill:'#7b1fa2', circle:true},
    {d:'M60,22', r:'3', cx:'60', cy:'22', fill:'#7b1fa2', circle:true},
  ]},
  { name:'Gatinho', emoji:'🐱', paths:[
    // corpo
    {d:'M25,60 Q25,95 50,95 Q75,95 75,60 Q75,40 50,38 Q25,40 25,60Z', fill:'#ffcc80'},
    // cabeça
    {d:'M30,45 Q30,20 50,18 Q70,20 70,45 Q70,55 50,56 Q30,55 30,45Z', fill:'#ffcc80'},
    // orelhas
    {d:'M32,28 L28,12 L42,22Z', fill:'#ffcc80'},
    {d:'M68,28 L72,12 L58,22Z', fill:'#ffcc80'},
    {d:'M33,27 L30,15 L41,23Z', fill:'#f48fb1'},
    {d:'M67,27 L70,15 L59,23Z', fill:'#f48fb1'},
    // olhos
    {cx:'42', cy:'38', r:'4', fill:'#1a237e', circle:true},
    {cx:'58', cy:'38', r:'4', fill:'#1a237e', circle:true},
    {cx:'43', cy:'37', r:'1.5', fill:'#fff', circle:true},
    {cx:'59', cy:'37', r:'1.5', fill:'#fff', circle:true},
    // nariz
    {cx:'50', cy:'45', r:'2.5', fill:'#f48fb1', circle:true},
    // boca
    {d:'M47,47 Q50,50 53,47', stroke:'#e91e63', fill:'none', sw:'1.5'},
    // bigodes
    {d:'M35,44 L48,46', stroke:'#bdbdbd', fill:'none', sw:'1'},
    {d:'M65,44 L52,46', stroke:'#bdbdbd', fill:'none', sw:'1'},
    {d:'M35,47 L48,47', stroke:'#bdbdbd', fill:'none', sw:'1'},
    {d:'M65,47 L52,47', stroke:'#bdbdbd', fill:'none', sw:'1'},
    // cauda
    {d:'M75,80 Q95,70 90,55 Q85,65 75,75Z', fill:'#ffcc80'},
  ]},
  { name:'Flor', emoji:'🌸', paths:[
    {d:'M50,50 C50,30 35,20 30,35 C25,50 38,55 50,50Z', fill:'#f48fb1'},
    {d:'M50,50 C70,50 80,35 65,30 C50,25 45,38 50,50Z', fill:'#f48fb1'},
    {d:'M50,50 C50,70 65,80 70,65 C75,50 62,45 50,50Z', fill:'#f48fb1'},
    {d:'M50,50 C30,50 20,65 35,70 C50,75 55,62 50,50Z', fill:'#f48fb1'},
    {d:'M50,50 C35,35 20,38 25,53 C30,68 45,58 50,50Z', fill:'#f8bbd0'},
    {d:'M50,50 C65,35 80,38 75,53 C70,68 55,58 50,50Z', fill:'#f8bbd0'},
    {cx:'50', cy:'50', r:'10', fill:'#ffd600', circle:true},
    // caule
    {d:'M49,60 L47,95 Q50,97 53,95 L51,60Z', fill:'#66bb6a'},
    {d:'M47,78 Q35,70 33,80 Q42,82 47,78Z', fill:'#81c784'},
  ]},
  { name:'Coelho', emoji:'🐰', paths:[
    // orelhas
    {d:'M35,40 Q32,10 38,8 Q44,6 45,40Z', fill:'#ffcdd2'},
    {d:'M65,40 Q68,10 62,8 Q56,6 55,40Z', fill:'#ffcdd2'},
    {d:'M36,38 Q34,14 39,12 Q43,11 44,38Z', fill:'#f48fb1'},
    {d:'M64,38 Q66,14 61,12 Q57,11 56,38Z', fill:'#f48fb1'},
    // cabeça
    {d:'M28,48 Q28,28 50,27 Q72,28 72,48 Q72,62 50,63 Q28,62 28,48Z', fill:'#fff8f8'},
    // corpo
    {d:'M22,75 Q22,100 50,100 Q78,100 78,75 Q78,58 50,62 Q22,58 22,75Z', fill:'#fff8f8'},
    // olhos
    {cx:'40', cy:'46', r:'4', fill:'#e91e63', circle:true},
    {cx:'60', cy:'46', r:'4', fill:'#e91e63', circle:true},
    {cx:'41', cy:'45', r:'1.5', fill:'#fff', circle:true},
    {cx:'61', cy:'45', r:'1.5', fill:'#fff', circle:true},
    // nariz
    {cx:'50', cy:'53', r:'3', fill:'#f48fb1', circle:true},
    {d:'M47,56 Q50,59 53,56', stroke:'#e91e63', fill:'none', sw:'1.5'},
    // patinhas
    {d:'M28,95 Q22,90 20,100 Q30,103 28,95Z', fill:'#ffcdd2'},
    {d:'M72,95 Q78,90 80,100 Q70,103 72,95Z', fill:'#ffcdd2'},
  ]},
  { name:'Sol', emoji:'☀️', paths:[
    {cx:'50', cy:'50', r:'20', fill:'#ffd600', circle:true},
    {d:'M50,10 L53,25 L47,25Z', fill:'#ffab00'},
    {d:'M50,90 L53,75 L47,75Z', fill:'#ffab00'},
    {d:'M10,50 L25,53 L25,47Z', fill:'#ffab00'},
    {d:'M90,50 L75,53 L75,47Z', fill:'#ffab00'},
    {d:'M22,22 L33,33 L29,37Z', fill:'#ffab00'},
    {d:'M78,22 L67,33 L71,37Z', fill:'#ffab00'},
    {d:'M22,78 L33,67 L29,63Z', fill:'#ffab00'},
    {d:'M78,78 L67,67 L71,63Z', fill:'#ffab00'},
    {cx:'50', cy:'50', r:'13', fill:'#ffee58', circle:true},
  ]},
  { name:'Tartaruga', emoji:'🐢', paths:[
    // corpo
    {d:'M20,65 Q18,85 50,88 Q82,85 80,65 Q80,45 50,43 Q20,45 20,65Z', fill:'#66bb6a'},
    // carapaça
    {d:'M28,62 Q28,45 50,43 Q72,45 72,62 Q72,75 50,76 Q28,75 28,62Z', fill:'#388e3c'},
    // padrão carapaça
    {d:'M50,50 Q58,50 62,58 Q58,66 50,66 Q42,66 38,58 Q42,50 50,50Z', fill:'#2e7d32'},
    {d:'M36,52 Q40,46 48,48 Q44,56 38,58Z', fill:'#2e7d32'},
    {d:'M64,52 Q60,46 52,48 Q56,56 62,58Z', fill:'#2e7d32'},
    {d:'M36,68 Q40,74 48,72 Q44,64 38,62Z', fill:'#2e7d32'},
    {d:'M64,68 Q60,74 52,72 Q56,64 62,62Z', fill:'#2e7d32'},
    // cabeça
    {d:'M42,38 Q42,28 50,27 Q58,28 58,38 Q58,44 50,44 Q42,44 42,38Z', fill:'#81c784'},
    // olhos
    {cx:'46', cy:'35', r:'2.5', fill:'#1b5e20', circle:true},
    {cx:'54', cy:'35', r:'2.5', fill:'#1b5e20', circle:true},
    // patas
    {d:'M22,72 Q12,70 10,78 Q18,82 22,76Z', fill:'#66bb6a'},
    {d:'M78,72 Q88,70 90,78 Q82,82 78,76Z', fill:'#66bb6a'},
    {d:'M25,82 Q15,85 15,93 Q23,92 25,84Z', fill:'#66bb6a'},
    {d:'M75,82 Q85,85 85,93 Q77,92 75,84Z', fill:'#66bb6a'},
    // cauda
    {d:'M50,87 Q50,95 48,97 Q52,97 50,87Z', fill:'#66bb6a'},
  ]},
  { name:'Arco-íris', emoji:'🌈', paths:[
    {d:'M5,75 Q5,25 50,25 Q95,25 95,75 L85,75 Q85,35 50,35 Q15,35 15,75Z', fill:'#ef5350'},
    {d:'M15,75 Q15,40 50,40 Q85,40 85,75 L75,75 Q75,48 50,48 Q25,48 25,75Z', fill:'#ff9800'},
    {d:'M25,75 Q25,52 50,52 Q75,52 75,75 L65,75 Q65,60 50,60 Q35,60 35,75Z', fill:'#fdd835'},
    {d:'M35,75 Q35,62 50,62 Q65,62 65,75 L55,75 Q55,70 50,70 Q45,70 45,75Z', fill:'#4caf50'},
    // nuvens
    {cx:'15', cy:'72', r:'10', fill:'#fff', circle:true},
    {cx:'25', cy:'70', r:'12', fill:'#fff', circle:true},
    {cx:'15', cy:'80', r:'8', fill:'#fff', circle:true},
    {cx:'85', cy:'72', r:'10', fill:'#fff', circle:true},
    {cx:'75', cy:'70', r:'12', fill:'#fff', circle:true},
    {cx:'85', cy:'80', r:'8', fill:'#fff', circle:true},
  ]},
  { name:'Peixe', emoji:'🐟', paths:[
    // corpo
    {d:'M15,50 Q15,35 50,35 Q80,35 85,50 Q80,65 50,65 Q15,65 15,50Z', fill:'#80deea'},
    // cauda
    {d:'M80,50 L100,35 L100,65Z', fill:'#4dd0e1'},
    // barbatana cima
    {d:'M40,35 Q50,22 60,35Z', fill:'#4dd0e1'},
    // barbatana baixo
    {d:'M45,65 Q50,78 55,65Z', fill:'#4dd0e1'},
    // escamas
    {d:'M35,44 Q42,40 45,47 Q38,50 35,44Z', fill:'#4fc3f7'},
    {d:'M50,42 Q57,38 60,45 Q53,48 50,42Z', fill:'#4fc3f7'},
    {d:'M42,52 Q49,48 52,55 Q45,58 42,52Z', fill:'#4fc3f7'},
    // olho
    {cx:'28', cy:'47', r:'5', fill:'#fff', circle:true},
    {cx:'28', cy:'47', r:'3', fill:'#0d47a1', circle:true},
    {cx:'27', cy:'46', r:'1', fill:'#fff', circle:true},
    // boca
    {d:'M18,53 Q22,56 20,50', stroke:'#0097a7', fill:'none', sw:'1.5'},
  ]},
  { name:'Estrela', emoji:'⭐', paths:[
    {d:'M50,10 L58,35 L85,35 L63,52 L71,78 L50,62 L29,78 L37,52 L15,35 L42,35Z', fill:'#ffd600'},
    {d:'M50,18 L56,37 L76,37 L61,49 L67,68 L50,56 L33,68 L39,49 L24,37 L44,37Z', fill:'#ffee58'},
  ]},
  { name:'Casa', emoji:'🏠', paths:[
    // telhado
    {d:'M10,55 L50,15 L90,55Z', fill:'#ef5350'},
    {d:'M15,55 L50,20 L85,55Z', fill:'#e57373'},
    // chaminé
    {d:'M60,20 L60,40 L68,40 L68,28Z', fill:'#8d6e63'},
    {d:'M58,18 L70,18 L70,22 L58,22Z', fill:'#795548'},
    // parede
    {d:'M18,55 L18,90 L82,90 L82,55Z', fill:'#ffe082'},
    // porta
    {d:'M40,65 L40,90 L60,90 L60,65 Q50,58 40,65Z', fill:'#a1887f'},
    {cx:'57', cy:'78', r:'2', fill:'#ffd600', circle:true},
    // janelas
    {d:'M22,60 L22,75 L35,75 L35,60Z', fill:'#80deea'},
    {d:'M65,60 L65,75 L78,75 L78,60Z', fill:'#80deea'},
    {d:'M28,60 L28,75', stroke:'#fff', fill:'none', sw:'1'},
    {d:'M22,67 L35,67', stroke:'#fff', fill:'none', sw:'1'},
    {d:'M71,60 L71,75', stroke:'#fff', fill:'none', sw:'1'},
    {d:'M65,67 L78,67', stroke:'#fff', fill:'none', sw:'1'},
    // grama
    {d:'M5,90 L95,90 L95,96 Q50,92 5,96Z', fill:'#66bb6a'},
  ]},
  { name:'Unicórnio', emoji:'🦄', paths:[
    // corpo
    {d:'M20,70 Q20,95 55,95 Q85,95 85,70 Q85,55 65,50 Q55,48 50,55 Q35,48 20,70Z', fill:'#fce4ec'},
    // cabeça
    {d:'M55,28 Q40,28 38,42 Q38,58 55,58 Q70,58 72,44 Q72,28 55,28Z', fill:'#fce4ec'},
    // pescoço
    {d:'M48,56 Q42,62 45,70 Q55,72 60,65 Q62,58 58,56Z', fill:'#fce4ec'},
    // crina
    {d:'M55,28 Q58,20 62,28 Q65,22 68,30 Q70,25 72,32Z', fill:'#f48fb1'},
    {d:'M55,28 Q52,22 48,30 Q45,24 42,32Z', fill:'#ce93d8'},
    // chifre
    {d:'M58,28 L55,10 L62,28Z', fill:'#ffd600'},
    // olho
    {cx:'62', cy:'42', r:'4', fill:'#311b92', circle:true},
    {cx:'63', cy:'41', r:'1.5', fill:'#fff', circle:true},
    // orelha
    {d:'M45,32 L40,22 L50,28Z', fill:'#fce4ec'},
    {d:'M46,31 L42,24 L49,29Z', fill:'#f48fb1'},
    // pernas
    {d:'M30,90 L28,110 L34,110 L36,90Z', fill:'#fce4ec'},
    {d:'M45,92 L43,112 L49,112 L51,92Z', fill:'#fce4ec'},
    {d:'M60,92 L58,112 L64,112 L66,92Z', fill:'#fce4ec'},
    {d:'M75,90 L73,110 L79,110 L81,90Z', fill:'#fce4ec'},
    // cascos
    {d:'M27,108 L35,108 L35,113 L27,113Z', fill:'#ce93d8'},
    {d:'M42,110 L50,110 L50,115 L42,115Z', fill:'#ce93d8'},
    {d:'M57,110 L65,110 L65,115 L57,115Z', fill:'#ce93d8'},
    {d:'M72,108 L80,108 L80,113 L72,113Z', fill:'#ce93d8'},
    // cauda
    {d:'M85,75 Q98,60 95,50 Q88,65 85,80Z', fill:'#f48fb1'},
    {d:'M85,78 Q100,70 98,60 Q91,72 85,82Z', fill:'#ce93d8'},
  ]},
  { name:'Dinossauro', emoji:'🦕', paths:[
    // corpo
    {d:'M30,60 Q28,85 50,88 Q72,85 72,65 Q72,50 60,48 Q48,46 30,60Z', fill:'#81c784'},
    // pescoço
    {d:'M55,48 Q52,30 48,18 Q44,25 42,35 Q44,45 55,48Z', fill:'#81c784'},
    // cabeça
    {d:'M40,15 Q35,10 32,18 Q30,25 38,28 Q48,28 50,20 Q50,12 40,15Z', fill:'#81c784'},
    // olho
    {cx:'37', cy:'20', r:'3', fill:'#1b5e20', circle:true},
    {cx:'37', cy:'20', r:'1', fill:'#fff', circle:true},
    // boca
    {d:'M32,24 Q36,27 40,24', stroke:'#2e7d32', fill:'none', sw:'1.5'},
    // puas costas
    {d:'M55,48 L58,38 L62,48', fill:'#66bb6a'},
    {d:'M60,52 L64,43 L67,53', fill:'#66bb6a'},
    // pernas
    {d:'M35,85 L33,105 L39,105 L40,85Z', fill:'#81c784'},
    {d:'M55,86 L53,106 L59,106 L60,86Z', fill:'#81c784'},
    // pés
    {d:'M30,103 L41,103 L41,108 Q35,112 30,108Z', fill:'#66bb6a'},
    {d:'M50,104 L61,104 L61,109 Q55,113 50,109Z', fill:'#66bb6a'},
    // rabinho
    {d:'M70,68 Q85,62 88,72 Q78,76 70,72Z', fill:'#81c784'},
  ]},
  { name:'Cupcake', emoji:'🧁', paths:[
    // forma
    {d:'M25,70 Q25,90 50,90 Q75,90 75,70 L68,55 L32,55Z', fill:'#ffcc80'},
    // listras forma
    {d:'M35,55 L32,90 L38,90 L40,55Z', fill:'#ffb74d'},
    {d:'M50,55 L50,90 L56,90 L56,55Z', fill:'#ffb74d'},
    {d:'M65,55 L68,90 L62,90 L60,55Z', fill:'#ffb74d'},
    // cobertura
    {d:'M22,55 Q22,40 50,38 Q78,40 78,55 Q75,65 50,65 Q25,65 22,55Z', fill:'#f06292'},
    // decoração cobertura
    {d:'M30,48 Q38,38 46,48 Q38,55 30,48Z', fill:'#fff'},
    {d:'M54,48 Q62,38 70,48 Q62,55 54,48Z', fill:'#fff'},
    // pitanga
    {cx:'50', cy:'35', r:'5', fill:'#e53935', circle:true},
    {d:'M48,30 L50,22 L52,30', stroke:'#388e3c', fill:'none', sw:'2'},
    // granulados
    {cx:'35', cy:'58', r:'2', fill:'#ffd600', circle:true},
    {cx:'45', cy:'54', r:'2', fill:'#7c4dff', circle:true},
    {cx:'55', cy:'54', r:'2', fill:'#00bcd4', circle:true},
    {cx:'65', cy:'58', r:'2', fill:'#ff4081', circle:true},
  ]},
  { name:'Elefante', emoji:'🐘', paths:[
    // corpo
    {d:'M18,55 Q18,90 50,92 Q82,90 82,55 Q82,38 50,36 Q18,38 18,55Z', fill:'#bdbdbd'},
    // cabeça
    {d:'M28,42 Q28,20 50,18 Q72,20 72,42 Q72,55 50,56 Q28,55 28,42Z', fill:'#bdbdbd'},
    // orelhas
    {d:'M28,35 Q10,25 12,48 Q20,55 28,48Z', fill:'#e0e0e0'},
    {d:'M72,35 Q90,25 88,48 Q80,55 72,48Z', fill:'#e0e0e0'},
    // tromba
    {d:'M42,55 Q36,65 34,78 Q38,80 42,78 Q44,65 50,58Z', fill:'#bdbdbd'},
    {d:'M34,76 Q30,82 36,84 Q42,82 42,78Z', fill:'#9e9e9e'},
    // olhos
    {cx:'40', cy:'36', r:'4', fill:'#37474f', circle:true},
    {cx:'60', cy:'36', r:'4', fill:'#37474f', circle:true},
    {cx:'41', cy:'35', r:'1.5', fill:'#fff', circle:true},
    {cx:'61', cy:'35', r:'1.5', fill:'#fff', circle:true},
    // pernas
    {d:'M22,88 L20,110 L30,110 L32,88Z', fill:'#bdbdbd'},
    {d:'M40,90 L38,112 L48,112 L50,90Z', fill:'#bdbdbd'},
    {d:'M55,90 L53,112 L63,112 L65,90Z', fill:'#bdbdbd'},
    {d:'M72,88 L70,110 L80,110 L82,88Z', fill:'#bdbdbd'},
    // cauda
    {d:'M82,70 Q92,65 90,75 Q84,78 82,72Z', fill:'#9e9e9e'},
  ]},
  { name:'Margarida', emoji:'🌼', paths:[
    // pétalas
    {d:'M50,50 C50,30 44,18 50,15 C56,18 50,30 50,50Z', fill:'#fff9c4'},
    {d:'M50,50 C65,38 74,28 78,33 C76,39 65,44 50,50Z', fill:'#fff9c4'},
    {d:'M50,50 C68,55 78,65 75,70 C70,73 62,65 50,50Z', fill:'#fff9c4'},
    {d:'M50,50 C55,68 52,80 47,80 C42,80 45,68 50,50Z', fill:'#fff9c4'},
    {d:'M50,50 C32,65 22,68 20,63 C18,58 28,50 50,50Z', fill:'#fff9c4'},
    {d:'M50,50 C34,44 22,36 24,30 C28,25 38,32 50,50Z', fill:'#fff9c4'},
    {d:'M50,50 C60,35 68,25 72,28 C70,34 62,42 50,50Z', fill:'#fffde7'},
    {d:'M50,50 C62,62 66,74 62,77 C58,78 52,68 50,50Z', fill:'#fffde7'},
    {d:'M50,50 C44,66 38,76 34,74 C30,72 36,62 50,50Z', fill:'#fffde7'},
    {d:'M50,50 C36,40 26,32 27,26 C30,22 40,30 50,50Z', fill:'#fffde7'},
    // centro
    {cx:'50', cy:'50', r:'14', fill:'#ffd600', circle:true},
    {cx:'50', cy:'50', r:'9', fill:'#ffab00', circle:true},
    // caule
    {d:'M49,64 L47,100 Q50,102 53,100 L51,64Z', fill:'#66bb6a'},
    {d:'M47,82 Q35,74 33,84 Q42,86 47,82Z', fill:'#81c784'},
  ]},
  { name:'Pinguim', emoji:'🐧', paths:[
    // corpo
    {d:'M28,55 Q28,92 50,94 Q72,92 72,55 Q72,40 50,38 Q28,40 28,55Z', fill:'#212121'},
    // barriga
    {d:'M36,55 Q36,85 50,87 Q64,85 64,55 Q64,44 50,43 Q36,44 36,55Z', fill:'#fff8e1'},
    // cabeça
    {d:'M32,40 Q32,20 50,18 Q68,20 68,40 Q68,52 50,53 Q32,52 32,40Z', fill:'#212121'},
    // rosto branco
    {d:'M38,40 Q38,26 50,25 Q62,26 62,40 Q62,50 50,51 Q38,50 38,40Z', fill:'#fff8e1'},
    // olhos
    {cx:'43', cy:'36', r:'4', fill:'#fff', circle:true},
    {cx:'57', cy:'36', r:'4', fill:'#fff', circle:true},
    {cx:'43', cy:'36', r:'2.5', fill:'#1a237e', circle:true},
    {cx:'57', cy:'36', r:'2.5', fill:'#1a237e', circle:true},
    {cx:'43', cy:'35', r:'1', fill:'#fff', circle:true},
    {cx:'57', cy:'35', r:'1', fill:'#fff', circle:true},
    // bico
    {d:'M46,44 L50,50 L54,44 Q50,42 46,44Z', fill:'#ff8f00'},
    // asas
    {d:'M28,55 Q15,50 12,65 Q18,75 28,70Z', fill:'#212121'},
    {d:'M72,55 Q85,50 88,65 Q82,75 72,70Z', fill:'#212121'},
    // pés
    {d:'M38,92 Q32,95 30,102 Q40,102 42,95Z', fill:'#ff8f00'},
    {d:'M62,92 Q68,95 70,102 Q60,102 58,95Z', fill:'#ff8f00'},
  ]},
  { name:'Baleia', emoji:'🐳', paths:[
    // corpo
    {d:'M10,55 Q10,75 50,78 Q88,75 92,55 Q88,35 50,33 Q12,35 10,55Z', fill:'#80deea'},
    // barriga
    {d:'M20,60 Q20,73 50,75 Q80,73 80,60 Q80,50 50,48 Q20,50 20,60Z', fill:'#e0f7fa'},
    // cauda
    {d:'M88,55 L105,40 L108,50 L98,55 L108,60 L105,70Z', fill:'#4dd0e1'},
    // nadadeira cima
    {d:'M40,33 Q50,18 62,33Z', fill:'#4dd0e1'},
    // olho
    {cx:'30', cy:'48', r:'6', fill:'#fff', circle:true},
    {cx:'30', cy:'48', r:'3.5', fill:'#0d47a7', circle:true},
    {cx:'29', cy:'47', r:'1.5', fill:'#fff', circle:true},
    // sorriso
    {d:'M20,60 Q28,68 36,60', stroke:'#0097a7', fill:'none', sw:'2'},
    // jato d'água
    {d:'M55,30 Q52,18 50,10 Q48,18 45,30', stroke:'#29b6f6', fill:'none', sw:'3'},
    {d:'M58,28 Q60,18 62,12', stroke:'#29b6f6', fill:'none', sw:'2'},
  ]},
  { name:'Coroa', emoji:'👑', paths:[
    {d:'M15,80 L15,55 L30,70 L50,40 L70,70 L85,55 L85,80Z', fill:'#ffd600'},
    {d:'M12,78 L15,80 L85,80 L88,78 L88,85 L12,85Z', fill:'#ffab00'},
    // gemas
    {cx:'50', cy:'55', r:'7', fill:'#e53935', circle:true},
    {cx:'28', cy:'68', r:'5', fill:'#7c4dff', circle:true},
    {cx:'72', cy:'68', r:'5', fill:'#1e88e5', circle:true},
    // brilhos
    {cx:'50', cy:'54', r:'2', fill:'#fff', circle:true},
    {d:'M15,82 L85,82', stroke:'#ffab00', fill:'none', sw:'1'},
    // ponteiros brilho
    {d:'M50,40 L48,33 L50,36 L52,33Z', fill:'#ffd600'},
    {d:'M30,70 L26,65 L30,68 L34,65Z', fill:'#ffd600'},
    {d:'M70,70 L66,65 L70,68 L74,65Z', fill:'#ffd600'},
  ]},
  { name:'Cogumelo', emoji:'🍄', paths:[
    // chapéu
    {d:'M10,60 Q10,25 50,22 Q90,25 90,60Z', fill:'#e53935'},
    // pintas
    {cx:'35', cy:'40', r:'7', fill:'#fff', circle:true},
    {cx:'60', cy:'32', r:'6', fill:'#fff', circle:true},
    {cx:'72', cy:'52', r:'5', fill:'#fff', circle:true},
    {cx:'22', cy:'55', r:'5', fill:'#fff', circle:true},
    {cx:'50', cy:'48', r:'8', fill:'#fff', circle:true},
    // caule
    {d:'M32,60 Q30,85 50,87 Q70,85 68,60Z', fill:'#fff8e1'},
    // cara
    {cx:'43', cy:'70', r:'4', fill:'#ffcc80', circle:true},
    {cx:'57', cy:'70', r:'4', fill:'#ffcc80', circle:true},
    {cx:'43', cy:'70', r:'2', fill:'#795548', circle:true},
    {cx:'57', cy:'70', r:'2', fill:'#795548', circle:true},
    {d:'M44,78 Q50,82 56,78', stroke:'#795548', fill:'none', sw:'2'},
    // grama
    {d:'M15,87 Q50,84 85,87 L85,95 Q50,90 15,95Z', fill:'#66bb6a'},
  ]},
];

let currentDrawing = null;
let colorSelected = PALETTE[2]; // vermelho padrão
let savedColors = {}; // {drawingIndex: {pathIndex: color}}

function initColorir() {
  buildGallery();
  buildPalette();
  loadSaved();
}

function buildGallery() {
  const gallery = document.getElementById('colorir-gallery');
  gallery.innerHTML = '';
  DRAWINGS.forEach((d, i) => {
    const item = document.createElement('div');
    item.style.cssText = 'background:#fff;border:2px solid #ffb6c8;border-radius:14px;padding:6px;text-align:center;cursor:pointer;transition:transform 0.15s;';
    item.innerHTML = `<div style="font-size:1.8rem;">${d.emoji}</div><div style="font-size:0.62rem;font-weight:700;color:#d63870;margin-top:2px;">${d.name}</div>`;
    item.addEventListener('click', () => openDrawing(i));
    item.addEventListener('touchstart', () => item.style.transform='scale(0.92)', {passive:true});
    item.addEventListener('touchend', () => item.style.transform='scale(1)', {passive:true});
    gallery.appendChild(item);
  });
}

function buildPalette() {
  const pal = document.getElementById('colorir-palette');
  pal.innerHTML = '';
  PALETTE.forEach(color => {
    const btn = document.createElement('button');
    btn.style.cssText = `width:28px;height:28px;border-radius:50%;background:${color};border:2px solid ${color==='#ffffff'?'#ffb6c8':'transparent'};cursor:pointer;transition:transform 0.1s;box-shadow:0 2px 4px rgba(0,0,0,0.2);`;
    btn.addEventListener('click', () => {
      colorSelected = color;
      document.querySelectorAll('#colorir-palette button').forEach(b => b.style.border = '2px solid transparent');
      btn.style.border = '3px solid #d63870';
      btn.style.transform = 'scale(1.2)';
    });
    if (color === colorSelected) { btn.style.border = '3px solid #d63870'; btn.style.transform = 'scale(1.2)'; }
    pal.appendChild(btn);
  });
}

function openDrawing(idx) {
  currentDrawing = idx;
  document.getElementById('colorir-gallery').style.display = 'none';
  const cs = document.getElementById('colorir-canvas-screen');
  cs.style.display = 'flex';
  document.getElementById('colorir-title').textContent = DRAWINGS[idx].emoji + ' ' + DRAWINGS[idx].name;
  renderSVG(idx);
}

function colorirBack() {
  currentDrawing = null;
  document.getElementById('colorir-canvas-screen').style.display = 'none';
  document.getElementById('colorir-gallery').style.display = 'grid';
}

function renderSVG(idx) {
  const wrap = document.getElementById('colorir-svg-wrap');
  const d = DRAWINGS[idx];
  const saved = savedColors[idx] || {};
  let pathsHtml = '';
  d.paths.forEach((p, pi) => {
    const fillColor = saved[pi] || p.fill || 'none';
    if (p.circle) {
      pathsHtml += `<circle cx="${p.cx}" cy="${p.cy}" r="${p.r}" fill="${fillColor}" stroke="#333" stroke-width="0.5" data-pi="${pi}" style="cursor:pointer;"/>`;
    } else {
      const stroke = p.stroke || '#333';
      const sw = p.sw || '0.5';
      const fillAttr = p.stroke && !p.fill ? 'none' : fillColor;
      pathsHtml += `<path d="${p.d}" fill="${fillAttr}" stroke="${stroke}" stroke-width="${sw}" data-pi="${pi}" stroke-linejoin="round" stroke-linecap="round" style="cursor:pointer;"/>`;
    }
  });
  wrap.innerHTML = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">${pathsHtml}</svg>`;
  // Event listeners
  wrap.querySelectorAll('[data-pi]').forEach(el => {
    el.addEventListener('click', () => {
      const pi = parseInt(el.getAttribute('data-pi'));
      const path = d.paths[pi];
      if (path.stroke && !path.fill) return; // não pintar linhas
      el.setAttribute('fill', colorSelected);
      if (!savedColors[idx]) savedColors[idx] = {};
      savedColors[idx][pi] = colorSelected;
      persistSave();
    });
  });
}

function colorirClear() {
  if (currentDrawing === null) return;
  savedColors[currentDrawing] = {};
  persistSave();
  renderSVG(currentDrawing);
}

function persistSave() {
  try { localStorage.setItem('colorir_saved', JSON.stringify(savedColors)); } catch(e){}
}

function loadSaved() {
  try {
    const raw = localStorage.getItem('colorir_saved');
    if (raw) savedColors = JSON.parse(raw);
  } catch(e){}
}

function colorirSave() {
  if (currentDrawing === null) return;
  const svg = document.querySelector('#colorir-svg-wrap svg');
  if (!svg) return;
  // Converter SVG para imagem e baixar
  const svgData = new XMLSerializer().serializeToString(svg);
  const canvas = document.createElement('canvas');
  canvas.width = 500; canvas.height = 500;
  const ctx2 = canvas.getContext('2d');
  ctx2.fillStyle = '#fff';
  ctx2.fillRect(0,0,500,500);
  const img = new Image();
  const blob = new Blob([svgData], {type:'image/svg+xml'});
  const url = URL.createObjectURL(blob);
  img.onload = function() {
    ctx2.drawImage(img, 0, 0, 500, 500);
    URL.revokeObjectURL(url);
    const a = document.createElement('a');
    a.download = DRAWINGS[currentDrawing].name + '.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  };
  img.src = url;
}

// Inicializar ao carregar
document.addEventListener('DOMContentLoaded', function() {
  initColorir();
});

})(); // fim colorir