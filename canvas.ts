function veduongthang() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.moveTo(0, 0);
            ctx.lineTo(200, 100);
            ctx.stroke();
        } else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}

function vehinhtron() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.beginPath();
            ctx.arc(95,50,45,0,2 * Math.PI);
            ctx.stroke();

        }else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
    
function vehinhchunhat() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.lineWidth = 5;
            ctx.strokeStyle ="#FF0000"; 
            ctx.strokeRect(50,50,100,50);
            ctx.fillStyle ="#ccc";
            ctx.fillRect (50,50,100,50);
        }else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}
function vetext() : void {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;

    if (c) {
        var ctx = c.getContext("2d");
        if (ctx) {
            ctx.font = "30px Arial";
            ctx.fillText("hello BINH DINH", 10, 50); 
        }else {
            console.error("Context không được hỗ trợ");
        }
    } else {
        console.error("Không tìm thấy phần tử Canvas");
    }
}