const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
    const labelWidth = getComputedStyle(label).getPropertyValue('width');
    
    const rangeWidthAsNumber = +rangeWidth.substring(0 , rangeWidth.length - 2);
    const labelWidthAsNumber = +labelWidth.substring(0 , labelWidth.length - 2);
    
    const max = e.target.max;
    const min = e.target.min;

    const left = value * (rangeWidthAsNumber / max) - labelWidthAsNumber / 2 + scale(value, min, max, 10, -10);

    console.log(left, max, min, rangeWidthAsNumber, labelWidthAsNumber)
    
    label.style.left = `${left}px`;
    label.innerHTML = value;
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}