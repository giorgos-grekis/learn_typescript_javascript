/**
 * This method allows you to replace all occurrences of a substring.
 */

const str = "I really love cats.  My cat is such an amazing pet.  She loves to cuddle with me and play. What a great cAt. cat. CAT. cat.";

/*** before replaceAll ***/
// str.replace(new RegExp("cat", "g"), "dog");

str.replaceAll("cat", "dog");

// replace all and case insensitive
// gi => g = global,  i = insensitive
str.replaceAll(new RegExp("cat", "gi"), "dog");
