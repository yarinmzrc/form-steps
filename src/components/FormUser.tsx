import { useAppSelector } from "../redux/hooks/hooks";
import { Button } from "./Button";
import { Input } from "./Input";

export const FormUser = () => {
    const step = useAppSelector(state => state.user.step);
    const { name, age } = useAppSelector(state => state.user);
    return (
        <div className="user-form">
            <h3>Personal Info</h3>
            <div className={step === 1 ? 'personal-form active' : 'personal-form'}>
                <Input value={name} id="name" inputType="text" required={true} placeholder="Name" min="0" maxlength={25} />
                <Input value={age} id="age" inputType="number" required={true} placeholder="Age" min="0" maxlength={25} />
                <Button nextStep={true} finish={false} text="Next" />
            </div>
        </div>
    );
};


