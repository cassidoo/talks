function draw_pizza() {
  var draw = SVG('drawing').size(800, 800);

  var circle = draw.circle(600);
  circle.move(30,30);
  circle.fill({ color: '#feff99'});
  circle.stroke({ color: '#fbcf66', width: 30 });

  for(var i = 0; i < 14; i++) {
    draw_pepperoni(draw);
  }
}

function draw_pepperoni(drawobj) {
  var clip = drawobj.circle(570);
  clip.move(45,45);
  var p = drawobj.circle(100);
  p.fill({ color: '#ff0000'});
  p.move(550*Math.random(), 550*Math.random());
  p.stroke({color: '#bb0000', width: 1, opacity: 1});
  p.clipWith(clip);
}

draw_pizza();
