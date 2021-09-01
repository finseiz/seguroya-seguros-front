import moment from "moment";

export const formatGeneralDate = ( date ) => {
    return moment(date).format('YYYY-MM-DD');
}