const convertToINR = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 71
    } else {
        throw Error('Amount neds to be in number')
    }
}

try {
    const myValue = convertToINR(5)
    console.log(myValue);

} catch (error) {
    console.log(error);
}

