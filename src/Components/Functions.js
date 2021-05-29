/**
 * Functions.js
 * Author: Huy Nguyen
 * 
 * File that contains common functions
 * 
 * @param {current event} e 
 * @returns new color
 */

//Change color of hover element
export const onHover = e => e.target.style.color = '#1ee81e';
//Changed back to original color, in this case, just white
export const onLeave = e => e.target.style.color = 'white';