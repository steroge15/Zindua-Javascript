function drawTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        // Print numbers from 1 to i
        for (let j = 1; j <= i; j++) {
            line += j;
        }
        console.log(line);
    }
}

// Test the function
drawTriangle(10);