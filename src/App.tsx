
import tw from 'tailwind-styled-components';
import './App.css';
import { Form } from './components/Form';

function App() {

  return (
    <AppStyled>
      <Form />
    </AppStyled>
  );
}

const AppStyled = tw.div`
w-full
p-3
bg-black
`

export default App;
