const cleanUp = string => string.replace(/[^a-z]+/gi, ' ');

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
