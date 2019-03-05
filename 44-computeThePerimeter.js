// Write a function called “computePerimeterOfARectangle”.

// Given a length and a width describing a rectangle, “computePerimeterOfARectangle” returns its perimter.

function computePerimeterOfARectangle(length, width) {
    const perimeter = (length + width) * 2
    return perimeter
}

const output = computePerimeterOfARectangle(6,2)
console.log(output)