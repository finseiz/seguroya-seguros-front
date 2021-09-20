
export const parseCurrency = (value) => {
    const options = { style: "currency", currency: "COP", minimumFractionDigits: 0 };
    const numberFormat = new Intl.NumberFormat('es-CO', options);
    return  numberFormat.format(value);
}