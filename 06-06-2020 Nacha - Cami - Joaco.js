a.show()

osc(100,2,30)
.mask(shape(100).scale(10))
.kaleid(5)
.pixelate(20)
.scrollX(0.10)
.out(o0)

var rota = 0;
osc( ( () => a.fft[2] + 1 ) ,1 , 1)
  .mask(shape(4))
  .repeatY(10)
  .repeatX(15)
  .color(50,0,100)
  .kaleid(1)
  .modulate(noise(5))
  .rotate(() => {
    rota = rota + a.fft[0] /100
    return rota
  })
  .out(o1)


osc(10,20,50)
  .mask(shape(100).scale(10))
  .color(125,0,225)
  .kaleid(5)
  .pixelate(20)
  .modulate(noise(3))
  .scrollX(0.10)
  .out(o2)

src(o1)
  .modulate(src(o0))
  .mask(shape(1))
  .repeat(2)
  .scrollX(() => Math.sin(time) * 0.6)
  .color(0.1,0,255)
  .out(o3)






render();
