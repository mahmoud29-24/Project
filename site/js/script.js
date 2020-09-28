const navlist = document.querySelector('.navlist');
const container = document.querySelector('.container');
const nav = document.querySelector('.nav');
const left = document.querySelector('.left');
const left2 = document.querySelector('.left2');
const buttons = document.querySelector('.buttons');

var tl = new TimelineMax();


tl.fromTo(navlist, 1.2, {
    x: "-10%",
    opacity: 0,
},
{
    x: "0",
    opacity: 1
});

tl.fromTo(nav, 1.2, {
    height: 0,
    opacity: 0
}, {
    height: "70vh",
    opacity: 1
});

tl.fromTo(left, 1, {
    x: 0,
    opacity: 0
}, {
    x: "2%",
    opacity: 1
});

tl.fromTo(left2, 1, {
    x: 0,
    opacity: 0
}, {
    x: "2%",
    opacity: 1
}, "-=1");

tl.fromTo(buttons, 1, {
    x: 0,
    opacity: 0
}, {
    x: "2%",
    opacity: 1
}, "-=1");

