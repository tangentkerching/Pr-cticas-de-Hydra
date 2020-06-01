// Witral Mapuche
// IG: ejtklfvvvvvvvvvvvvvv

shape(4).scale(1,5,4).scrollY(0.3).mask(noise(20)).repeatX(2).color(0.1,0.3,0.9).scrollX(() => time / 100)
.add(
	shape(4).scale(1,5,4).scrollY(-0.9).color(0.8,0.1,0.2).mask(voronoi(100)).pixelate(300,300)
)
.add(shape(4).rotate(0.8).scale(1).repeat(3).color(0.6,0.5,0).scrollX(() => time / 10))
.add(shape(4).rotate(0.8).scale(0.4).repeat(3).color(0,0.6,0).scrollX(() => time / 30))
.add(
  shape(4).scale(1,0.3,2).scrollY(-0.4,0)
  .add(
     shape(4).scale(1,0.03,0.7).rotate(-0.3).scrollY(0).scrollX(0.07) 
  )
  .add(
    shape(4).scale(1,0.03,0.7).rotate(0.3).scrollY(0).scrollX(-0.07)
  )
  .add(
    shape(4).scale(1,0.03,0.7).rotate(0).scrollY(0).scrollX(0)
  ).
  repeatX(2).
  color( 0.2, 0.8, 0.4 ) 
 )
.pixelate(500,500)
 .out();