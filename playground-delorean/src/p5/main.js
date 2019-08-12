export default function sketch(p) {
    let snapshots = [];
    let selectedTimepoint = '';
    let X = 0, Y = 0;

    p.setup = function () {
        p.createCanvas(p.windowWidth/1.785, p.windowHeight/2.44);
    };
    
    p.draw = function () {
        p.background(36);
        let x = 100;
        let y = 100;

        let colorStart = p.color('green');
        p.fill(colorStart);
        p.noStroke();
        p.circle(x, y, 40);
        p.stroke(255)
        p.line(x+20, y, 180, y);
        
        x += 100;

        snapshots.forEach((snapshot) => {
            if(snapshot.timePointId === selectedTimepoint){
                let colorSelectedTimepoit = p.color('rgb(0, 122, 204)');
                p.fill(colorSelectedTimepoit);
                X = x;
                Y = y;
            } else {
                p.fill(255)
            }
            p.noStroke();
            p.circle(x, y, 40);
            p.stroke(255)
            x += 100;
            p.line(x-80, y, x-20, y);
        })

        let colorEnd = p.color('red');
        p.noStroke();
        p.fill(colorEnd);
        p.circle(x, y, 40);
        if(X > 0 && Y > 0){
            p.noFill();
            p.stroke('white')
            p.curve(x, y+400, x, y-20, X, Y-25, X, y+400);
            p.fill(255)
            p.triangle(X-5, Y-25, X, Y-20, X+5, Y-25);
        }
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        if(props.selectedTimePoint) selectedTimepoint = props.selectedTimePoint;
        if(props.snapshots) snapshots = props.snapshots;
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth/1.785, p.windowHeight/2.44);
    }


};