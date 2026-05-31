document.getElementById('convertbutton').addEventListener('click', () => {
    const MtoKM = converter(miles, kilometers);
    const mileNum = Number(document.getElementById('milesInput').value);
    const resultKM = MtoKM(mileNum);

    document.getElementById('outputKM').textContent = "${mileNum} Miles = ${resultKM} Kilometres";
})

function converter(convertFromUnit, convertToUnit){
    const conversions = {
        'pounds-kilos': (x) => x * 0.45359237,
        'kilos-pounds': (x) => x * 2.2046226218,
        'miles-kilometers': (x) => x * 1.60934,
        'kilometers-miles': (x) => x * 0.621371,
    }

    const key = `${convertFromUnit}-${convertToUnit}`
    const conversionType = conversions[key];

    return(value) => {
        if (Array.isArray(value)){
            return value.map(conversionType);
        }else{
            return conversionType(value);
        }
    }
}