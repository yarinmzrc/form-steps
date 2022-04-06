
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { Button } from "./Button";
import { Input } from "./Input";

import { Pet } from "../types/enums";

const petTypes = [['cat', Pet.Cat], ['dog', Pet.Dog], ['horse', Pet.Horse]];

export const FormPet = () => {
    const step = useAppSelector(state => state.user.step);
    const { petName } = useAppSelector(state => state.user);

    const dispatch = useAppDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'updateFields', payload: { key: "petType", value: e.target.value } })
    }

    return (
        <div className="pet-form-wrapper">
            <h3>Pet Info</h3>
            <div className={step === 2 ? 'pet-form active' : 'pet-form'}>
                <Input value={petName} id="petName" inputType="text" required={true} placeholder="Name" min="0" maxlength={25} />
                <select onChange={handleChange} name="Pet Type" id="petType">
                    {petTypes.map((type, index) => (
                        <option key={index} value={type[0]}>{type[1]}</option>
                    ))}
                </select>
                <Button nextStep={true} finish={false} text="Next" />
            </div>
        </div>
    );
};
