// Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
// G -> C
// C -> G
// T -> A
// A -> U

const dnaToRna = dna => {
  let Rna = '';
  for (let i = 0; i < dna.length; i+=1) {
    if (dna[i] === 'G') {
      Rna+='C';
    }
    else if (dna[i] === 'C') {
      Rna+='G';
    }
     else if (dna[i] === 'T') {
      Rna+='A';
    }
     else if (dna[i] === 'A') {
      Rna+='U';
    }
     else if (dna === '') {
      return '';
    }
    else {
      return null;
    }
  }
  return Rna;
}
