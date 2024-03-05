function animation() {
    const img = new Image();

    // User Variables - customize these to change the image being scrolled, its
    // direction, and the speed.
    img.src = "https://th.bing.com/th?id=OIP.4APu5g1MVLsPrTg-ZGgwowHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    const canvasXSize = 800;
    const canvasYSize = 200;
    const speed = 200; // lower is faster
    const scale = 1.05;
    const y = -4.5; // vertical offset

    // Main program
    const dx = 0.75;
    let imgW;
    let imgH;
    let x = 0;
    let clearX;
    let clearY;
    let ctx;

    img.onload = () => {
        imgW = img.width * scale;
        imgH = img.height * scale;

        if (imgW > canvasXSize) {
            // Image larger than canvas
            x = canvasXSize - imgW;
        }

        // Check if image dimension is larger than canvas
        clearX = Math.max(imgW, canvasXSize);
        clearY = Math.max(imgH, canvasYSize);

        // Get canvas context
        ctx = document.getElementById("canvas").getContext("2d");

        // Set refresh rate
        setInterval(draw, speed);
    };

    function draw() {
        ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

        // If image is <= canvas size
        if (imgW <= canvasXSize) {
            // Reset, start from beginning
            if (x > canvasXSize) {
                x = -imgW + x;
            }

            // Draw additional image1
            if (x > 0) {
                ctx.drawImage(img, -imgW + x, y, imgW, imgH);
            }

            // Draw additional image2
            if (x - imgW > 0) {
                ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
            }
        } else {
            // Image is > canvas size
            // Reset, start from beginning
            if (x > canvasXSize) {
                x = canvasXSize - imgW;
            }

            // Draw additional image
            if (x > canvasXSize - imgW) {
                ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
            }
        }

        // Draw image
        ctx.drawImage(img, x, y, imgW, imgH);

        // Amount to move
        x += dx;
    }
}
