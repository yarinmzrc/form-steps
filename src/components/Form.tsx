import tw from "tailwind-styled-components";
import { FormAgreenment } from "./FormAgreenment";
import { FormPet } from "./FormPet";
import { FormUser } from "./FormUser";

export const Form = () => {

    return (
        <FormStyled>
            <FormUser />
            <FormPet />
            <FormAgreenment />
        </FormStyled>
    )
};


const FormStyled = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-9/12
`