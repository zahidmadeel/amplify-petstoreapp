import './App.css';
import {
  // PetProfile,
  Pets 
 } from './ui-components';

 import {NavBarHeader} from './ui-components';
 import {
  MarketingFooter 
 } from './ui-components';
 
 <MarketingFooter />

function App() {
  // const overrides = {"Breed":{"color":"blue"}};
  return (
    
    <div className="App">
      <NavBarHeader />
      <header className="App-header">
      
        <Pets overrideItems={({item, index}) => ({
          overrides: {Breed:{"color":"blue"},
          Button29766907:{
            onClick: () => {
              alert(`${item.name} clicked`);
            }
          }
        }
        })}/>  
        {/* <PetProfile overrides={overrides}/> */}
      
      </header>
      <MarketingFooter />
    </div>
  );
}

export default App;
