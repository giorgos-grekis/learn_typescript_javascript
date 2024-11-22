/**
 * Intersection Observer API
 *
 * Provides a way to asynchronously observe changes in the intersection of a target element with its parent or the viewport.
 *
 *
 */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Element is in view!");
    }
  });
});
const target = document.querySelector(".targetElement");
observer.observe(target);
