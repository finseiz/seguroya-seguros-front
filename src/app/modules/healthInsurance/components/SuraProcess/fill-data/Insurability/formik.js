
export const initialValues = ( beneficiaries ) => {

    const newBeneficiaries = beneficiaries.map( ( beneficiary ) => ({
        ...beneficiary,
        diseaseList: [], 
        otherDisease: "", 
        familyDisease: []
    }));

    return newBeneficiaries;
}