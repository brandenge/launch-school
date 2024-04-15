class DNA {
  #strand

  constructor(strand) {
    this.#strand = strand;
  }

  hammingDistance(strand) {
    const minLength = Math.min(this.#strand.length, strand.length);
    let distance = 0;
    for (let index = 0; index < minLength; index += 1) {
      if (this.#strand[index] !== strand[index]) distance += 1;
    }

    return distance;
  }
}

module.exports = DNA;
