/**
 condition ? value if true : value if false
 */
let age = 21;

const result_1 = age >= 18 ? 'You are an adult.' : 'You are a minor.';

console.log(result_1);

// Nested ternary operator example
let n_age = 21;
let country = 'India';

const result_2 =
   n_age >= 18
      ? country === 'India'
         ? 'You are an adult in India.'
         : 'You are an adult.'
      : 'You are a minor.';

console.log(result_2);
