// 3D scrolling 

const frames = document.getElementsByClassName('frame');

const frame = Array.from(frames);
const zVals = [];
const zSpacing = -1000;

let lastPos = zSpacing / 5;

window.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop;
    const delta = lastPos - top;

    lastPos = top;

    frame.forEach((value, index) => {
        zVals.push((index * zSpacing) + zSpacing);
        zVals[index] += delta * -5; // -5 speed of scrolling

        const frame = frames[index];
        const transform = `translateZ(${zVals[index]}px)`;
        const opacity = zVals[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })
})

window.scrollTo(0, 1);

document.getElementById('video').playbackRate = .8;
