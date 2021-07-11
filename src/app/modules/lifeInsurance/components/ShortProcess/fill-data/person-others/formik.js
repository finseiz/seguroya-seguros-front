import * as Yup from "yup";

export const otherInitValues = {
    publicly_exposed: "",
    publicly_exposed_vinculation: "",
    manages_public_resources: "",
    obligations: "",
    countys_obligations: "",
    
    us_tax_resident_or_player: "",
    tax_obligations_outside_colombia: "",
};

export const othersSchema = Yup.object().shape({
    publicly_exposed: Yup.string().required("Campo requerido"),
    publicly_exposed_vinculation: Yup.string().required("Campo requerido"),
    manages_public_resources: Yup.string().required("Campo requerido"),
    obligations: Yup.bool().required("Campo requerido"),
    countys_obligations: Yup.string().when( "obligations", { is: true, then: Yup.string().required("Campo requerido") } ),

    us_tax_resident_or_player: Yup.string().required("Campo requerido"),
    tax_obligations_outside_colombia: Yup.string().required("Campo requerido"),
});
