export default function sketch(p) {

    p.setup = function () {
        p.createCanvas(p.windowWidth/1.785, p.windowHeight/2.44);
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth/1.785, p.windowHeight/2.44);
    }

    p.draw = function () {
        p.background(36);
        p.rect(30, 20, 55, 55, 100);
    };
};