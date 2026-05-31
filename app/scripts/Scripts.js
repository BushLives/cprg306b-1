function converter(convertFromUnit, convertToUnit){
    const conversions = {
        'pounds-kilos': (x) => x * 0.45359237,
        'kilos-pounds': (x) => x * 2.2046226218,
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
