var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World,
    Composite = Matter.Composite;
    Composites = Matter.Composites,
    Svg = Matter.Svg;

    var engine = Engine.create();

    // create a renderer
    var render = Render.create({
    // element: document.body,
    element: $("#matter_canvas")[0],
    engine: engine,
    options:{
        width: 500,
        height:800, 
        // background: '#ffffff',
        // wireframeBackground: '#ffffff'
    }
    });
    Matter.Render.setPixelRatio(render, 1);
    var runner = Runner.create();

    
function build_galton(){
        // module aliases
    // var Engine = Matter.Engine,
    // Render = Matter.Render,
    // Runner = Matter.Runner,
    // Bodies = Matter.Bodies,
    // Composite = Matter.Composite;
    // Composites = Matter.Composites,
    // Svg = Matter.Svg;

    // create an engine
    // var engine = Engine.create();

    // // create a renderer
    // var render = Render.create({
    // // element: document.body,
    // element: $("#matter_canvas")[0],
    // engine: engine,
    // options:{
    //     width: 500,
    //     height:800, 
    //     // background: '#ffffff',
    //     // wireframeBackground: '#ffffff'
    // }
    // });

    // create two boxes and a ground
    // var boxA = Bodies.circle(400, 200, 80, 80);
    // var boxB = Bodies.rectangle(450, 50, 80, 80);
    // add bodies
    var balls = Composites.stack(150, -300, 25, $("#number_of_ball").val()/25, 3, 7, function(x, y) {
        return Bodies.circle(x, y, 3, {friction: 0.1, frictionStatic: 0.5, density: 1e-10, restitution: 0.9});
        // return Bodies.circle(x, y, 3.5, {friction: 0.1, frictionStatic: 0.5, density: 1e-10, restitution: 0.9});
    });
    var slots = Composites.stack(0, 600, 80, 1, 15, 0, function(x, y){
        return Bodies.rectangle(x, y, 3, 200, {isStatic: true, friction: 0, frictionStatic:0});
    });
    var pillars1 = Composites.stack(10, 320, 35, $("#number_of_pillar").val()/2 ,$("#pillar_offset").val()*1, $("#pillar_offset").val()*2, function(x, y){
        // return Bodies.polygon(x, y, 3, 6, {angle: -3.14159265/6, isStatic: true });
        return Bodies.circle(x, y, 2, {angle: -3.14159265/6, isStatic: true, friction: 0.0, frictionStatic: 0 });
        // return Bodies.circle(x, y, 2, {angle: -3.14159265/6, isStatic: true, friction: 0.8, frictionStatic: 0.8 });
    });
    var pillars2 = Composites.stack(2, 320+$("#pillar_offset").val()*1, 35, $("#number_of_pillar").val()/2, $("#pillar_offset").val()*1, $("#pillar_offset").val()*2, function(x, y){
        // return Bodies.polygon(x, y, 3, 6, {angle: -3.14159265/6, isStatic: true });
        return Bodies.circle(x, y, 2, {angle: -3.14159265/6, isStatic: true, friction: 0.0, frictionStatic: 0 });
        // return Bodies.circle(x, y, 2, {angle: -3.14159265/6, isStatic: true, friction: 0.8, frictionStatic: 0.8 });
    });
    var left_baffle = Bodies.rectangle(123, 150, 350, 10, {isStatic: true, angle: 3.14159*95/360,friction: 0, frictionStatic: 0});
    // var left_baffle = Bodies.rectangle(113, 150, 350, 10, {isStatic: true, angle: 3.14159*95/360,friction: 0, frictionStatic: 0});
    var right_baffle = Bodies.rectangle(377, 150, 350, 10, {isStatic: true, angle: -3.14159*95/360, friction: 0, frictionStatic: 0});
    // var right_baffle = Bodies.rectangle(387, 150, 350, 10, {isStatic: true, angle: -3.14159*95/360, friction: 0, frictionStatic: 0});
    var ground = Bodies.rectangle(400, 810, 810, 60, { isStatic: true, restitution: 1 });

    // var select = function(root, selector) {
    //     return Array.prototype.slice.call(root.querySelectorAll(selector));
    // };

    // var loadSvg = function(url) {
    //     return fetch(url)
    //         .then(function(response) { return response.text(); })
    //         .then(function(raw) { return (new window.DOMParser()).parseFromString(raw, './svg+xml'); });
    // };

    // loadSvg('./svg/normal_distribution.svg')
    //             .then(function(root) {
    //                 var paths = select(root, 'path');

    //                 // var vertexSets = paths.map(function(path) { return Svg.pathToVertices(path, 30); });

    //                 var curve = Bodies.fromVertices(400, 350, Svg.pathToVectices('./svg/normal_distribution.svg', 30), {isStatic: true,}, true);
    //                 Composite.add(engine.world, curve);
    //                 console.log("finish");
    //             });

    // var curve = Bodies.fromVertices(400, 350, Svg.pathToVertices('./svg/normal_distribution.svg'), {isStatic: true,}, true);
    // Composite.add(engine.world, curve);
    // add all of the bodies to the world

    // Create an HTML image element
    // var img = document.createElement('img');
    // img.src = './svg/normal_distribution.svg'; // Replace with the path to your image

    // // Create a Matter.js sprite using the image
    // var sprite = Matter.Bodies.rectangle(400, 300, 100, 100, {
    //     render: {
    //         sprite: {
    //             texture: img.src,
    //             xScale: 0.5, // Adjust the scale as needed
    //             yScale: 0.5 // Adjust the scale as needed
    //         }
    //     }
    // });

    Composite.add(engine.world, [
        ground,
        balls,
        slots,
        pillars1,
        pillars2,
        left_baffle,
        right_baffle
    ]);

    // run the renderer
    Render.run(render);

    // create runner
    // var runner = Runner.create();
    // run the engine
    Runner.run(runner, engine);

    // $("#normal_distribution").hide();
}

function run_galton(){
    Engine.clear(engine);
    World.clear(engine.world);
    Runner.stop(runner);
    // Render.clear(render);
    build_galton();
    // var runner = Runner.create();
    // Runner.run(runner, engine);
    // console.log('hi');
}
