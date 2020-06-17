noise(50,1)
  .modulate(
      noise(6).modulate(osc(1,1,1))
   )
  .kaleid(10)
  .modulate(
      voronoi()
  )
  .out(o0)

s0.init
// CAMI

//FUENTE X DE ALGUNA WEA

s0.initCam();

var constante = 0;
shape(2)
.pixelate(50,50)
.rotate(()=> {
  constante += 0.01
  return a.fft[3] *1 + constante
})
.repeat(4)
.modulate(
  //FUENTE DE LOS CUADRADOS
  src(o0)
  .modulate( shape(4).scrollX(1,10).scrollY(1,10))
  .kaleid(5)
  .mult(shape(4).scrollX(2,0.2).scrollY(8,0.1))
)
.color(255/255, 167/255, 167/255)
.add(shape(100).mult(src(s0).scale(1)).scale(1.5).scrollY(10,0.3)).scrollX(3,0.01)
.scrollX(10,0.5)
.add(shape(1).mult(src(s0).scale(1)).scale(1).scrollY(10,0.1)).scrollX(1,0.01)
.scrollX(10,0.5)
.out(o1)

noise(20,0.1)
  .kaleid(4)
  .diff(solid(0.1,0,0.1))
  .add(noise(20,0.2))
  .blend(shape(4).color(0,0,0))
  .out(o2)


render()
