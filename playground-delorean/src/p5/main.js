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

        if(snapshots.length > 0){           
            x += 15;
            y -= 8;
            
            snapshots.forEach((snapshot) => {
                if(snapshot.timePointId === selectedTimepoint){
                    let colorSelectedTimepoit = p.color('rgb(0, 122, 204)');
                    p.fill(colorSelectedTimepoit);
                    X = x + 50;
                    Y = y + 10;
                } else {
                    p.fill(255)
                }
                let color = [15, 123, 192];
                if (snapshot.timePointId.startsWith("Implicit")) color = [78, 174, 184];
                p.noStroke();
                p.quad(x, y, x, y+16, x+100, y+16, x+100, y);
                p.stroke('gray')
                p.circle(x+50, y+8, 4);
                p.line(x+50, y+10, x+50, y+50);
                p.noStroke();
                p.fill(color);
                p.circle(x+50, y+90, 80);
                p.fill('white');
                p.text(snapshot.timePointId, x+30, y+70);
                p.text('t:' + snapshot.timePointTimestamp + 'ms', x+30, y+90);
                if(snapshot.timePointLoc != null){
                    p.text('LOC:' + snapshot.timePointLoc, x+30, y+110);
                }
                x += 101;
               
            })

            let colorStart = p.color('green');
            p.fill(colorStart);
            p.noStroke();
            p.circle(100, 100, 40);

            y += 8;
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
        }
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        snapshots = [];
        selectedTimepoint = '';
        X = 0;
        Y = 0;

        if(props.selectedTimePoint) selectedTimepoint = props.selectedTimePoint;
        if(props.snapshots) snapshots = props.snapshots;
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth/1.785, p.windowHeight/2.44);
    }


};