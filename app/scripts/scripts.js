document.addEventListener('DOMContentLoaded', () => {
    
    const convert = document.getElementById('convert-button')

    convert.addEventListener('click', () => {
        const MtoKM = convert('miles', 'kilometers');
        const miles = document.getElementById('miles').value;

        const kilometers = MtoKM(miles)

        document.getElementById("resultKM").textContent = `${miles} Miles = ${kilometers} kilometres`;
    })
})

function converter(convertFromUnit, convertToUnit){
    const conversions = {
        'pounds-kilos': (x) => x * 0.45359237,
        'kilos-pounds': (x) => x * 2.2046226218,
        'miles-kilometers': (x) => x * 1.60934,
        'kilometers-miles': (x) => x * 0.621371,
        'celcius-fahrenheit': (x) =>(x * 1.8) + 32,
        'fahrenheit-celcius':(x) => (x * 0.5556) - 32
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