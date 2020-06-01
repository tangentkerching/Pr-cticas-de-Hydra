noise(1,1,1).rotate(20).
add(
  shape(100).
  color(0,100,1).
  scale(() => a.fft[1] > 0.1 ? time % 0.9 : 2)
    .repeatX(3)
    .color(1,1,0.8)
)
.add(src(o3).color(0,0,1))
.add(src(o2).color(0,0,1))
.add(src(o1).color(0,0,1))
.scrollX(() => Math.sin(time))
.hue(255)
.modulate(src(o0))
.color(0.3,0,0.2)
.out(o0)

shape(10).
rotate(() => a.fft[2] > 0.1 ? time % -0.9: time*0.1)
.scale(() => a.fft[1] > 0.1 ? time % 0.9 : 2)
.out(o1)

src(o3)
  	.color(255,0,0.2)
	.rotate(() => a.fft[3] > 0.1 ? time % 0.9 : time * 0.1)
	.modulate(osc(() => a.fft[3] / 1000),100,100)  
  .out(o2)

osc(10,1,10)
.mask(shape(2).rotate(() => Math.sin(time)))
.color(50,0,150)
.repeatY(2)
.rotate(0,0.1)
.kaleid(2)
  .out(o3)

render()