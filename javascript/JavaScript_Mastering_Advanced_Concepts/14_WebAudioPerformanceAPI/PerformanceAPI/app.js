/**
 * Performance API
 * 
 * Allows measurement of the performance of web pages and web apps.
 * 
 * const performanceEntries = performance.getEntriesByType("resource");
performanceEntries.forEach(entry => {
  console.log(`Name: ${entry.name}, Duration: ${entry.duration}`);
});
 */

window.addEventListener("load", () => {
  performance
    .getEntriesByType("resource")
    .filter((entry) => entry.initiatorType === "img")
    .forEach(({ name, duration }) => {
      console.log(`The image at this URL: ${name} took ${duration}ms to load`);
    });
});
