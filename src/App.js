import Tab from './Components/Table'
import { faker } from '@faker-js/faker';

function App() {
  return (
    <>
    <div style={{marginTop:'50px',marginLeft:'500px'}}>
    <Tab
    img = {faker.image.avatar(true)}/>
    </div>
    </>
  );
}

export default App;
