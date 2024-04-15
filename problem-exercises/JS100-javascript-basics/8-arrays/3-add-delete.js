const energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift();
energy.push('geothermal');
console.log(energy);

/*
Other options:

energy = energy.slice(1);
energy.splice(0, 1);
*/
