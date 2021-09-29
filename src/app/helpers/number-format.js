
export const simpleNumberFormat = (num) => {
    try {        
        debugger;
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    } catch (error) {
        return '';
    }
}