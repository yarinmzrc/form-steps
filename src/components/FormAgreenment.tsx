
import { Button } from "./Button";
import { Input } from "./Input";

export const FormAgreenment = () => {
    return <div className="agreenment-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue quisque egestas diam in arcu cursus euismod quis. A lacus vestibulum sed arcu non odio euismod lacinia at. Venenatis urna cursus eget nunc scelerisque. Tristique magna sit amet purus gravida. Et netus et malesuada fames. Turpis egestas pretium aenean pharetra magna. Orci eu lobortis elementum nibh tellus molestie nunc non. Lacinia at quis risus sed. Imperdiet sed euismod nisi porta. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Tincidunt id aliquet risus feugiat in ante metus dictum at. Venenatis urna cursus eget nunc scelerisque viverra mauris. Donec massa sapien faucibus et molestie ac feugiat. Dui nunc mattis enim ut tellus elementum sagittis vitae. Ac orci phasellus egestas tellus rutrum. Quam pellentesque nec nam aliquam sem et. Leo a diam sollicitudin tempor id eu. Et leo duis ut diam quam nulla porttitor.</p>
        <Input value={"checkbox"} inputType="checkbox" required={true} placeholder="" id="agreenment" min="" maxlength={25} />
        <Button text="Done" nextStep={false} finish={true} />
    </div>;
};
