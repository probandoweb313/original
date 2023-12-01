class AventuraGrafica {
  constructor() {
    this.estado = 0;
    this.pantalla = new Pantalla();
    this.cantPantallas = 36;
    this.fondos = [];
    this.textos = [];
    
    
    for(this.i=0;this.i<this.cantPantallas;this.i++)
    {
      this.fondos[this.i] = loadImage('assets/fondo_'+this.i.toString().padStart(2,'0')+'.jpg');
      this.textos[this.i] = loadStrings("assets/textos_"+this.i.toString().padStart(2,'0')+".txt");
    }
   
      
  }

  actualizar() {
  background(200, 100, 0);
  this.pantalla.actualizar(this.fondos[this.estado], this.textos[this.estado]);
  
  for(this.i=0; this.i < botones[this.estado].length; this.i++){botones[this.estado][this.i].mostrar();}
 
}
}
