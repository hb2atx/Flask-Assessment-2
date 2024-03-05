function snakeToCamel(snakeCaseStr) {
    const words = snakeCaseStr.split('_');
    const camelCaseStr = words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    return camelCaseStr;
}




