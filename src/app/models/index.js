export const lifeFormData = (data) => {
  return {
    address: data.address,
    documentType: data.document_type,
    identification: data.identification,
    firstName: data.fullname,
    firstLastName: data.fullname,
    email: data.email,
    issueDate: data.issue_date,
    bithDate: data.birth_date,
    ocupation: data.ocupation,
    cellphone: data.cellphone,
    discountCode: data.discount_code,
    gender: data.gender,
    currentInsurance: data.current_insurance,
    knowledgeOfInsuranceCoverage: data.knowledge_of_insurance_coverage,
    searchToProject: data.search_to_project,
    dataProcessingLicence: data.data_processing_licence,
  };
};

export const lifeData = (data) => {
  return {
    acceptContent: data.accept_content,
    cardiovascularDisease: data.cardiovascular_disease,
    diagnosedVIH: data.diagnosed_VIH,
    managesPublicResources: data.manages_public_resources,
    nameTaxObligation: data.name_tax_obligation,
    processingOfPersonalData: data.processing_of_personal_data,
    publiclyExposed: data.publicly_exposed,
    publiclyExposedVinculation: data.publicly_exposed_vinculation,
    question4: data.question4,
    taxObligationsOutsideColombia: data.tax_obligations_outside_colombia,
    termsAndConditions: data.terms_and_conditions,
    usTaxResidentOrPlayer: data.us_tax_resident_or_player,
  };
};
