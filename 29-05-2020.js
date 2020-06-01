osc(1,1,1).out(o1);
osc(2,1,3).out(o3);

solid(0.1,0.1,0.3,0).add(noise(() => time % 10)).add(src(s0))
  .posterize([10,20,5,3], 0.6)
  .scrollY(
  	() => time * 0.01 + 0.6 + (Math.random() * 0.01)
  )
  .modulate(
  	voronoi().add(osc(1,1,1)
   ))
  .scale(() => Math.cos(time * 0.01))
  .scrollX(() => Math.sin(time * 1))
  .kaleid(6)
  .repeat(4,4,4,4)
  .add(shape(3).repeatX(3).scrollX(() => time * 0.5))
  .out(o0);

src(o0)
	.add(solid(0.1,0,0.3,0))
  	.modulate(
  		src(s0).add( osc(10,1,1))
	)
  	.pixelate(100,100)
  	.add( shape(4) )
    .scale(0.1)
  	.modulate( src(s0) )
	.diff(shape(4))
	.diff(shape(4))
	.scale(2)
  	.out(o2);

src(o2)
	.out(o1)
src(o0)
	.scrollX(() => - Math.sin(time * 2))
	.out(o3)

kaleid(19).out(o2)

render()
