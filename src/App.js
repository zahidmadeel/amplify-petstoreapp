import './App.css';
import {
  // PetProfile,
  Pets 
 } from './ui-components';
 import {useState} from 'react';

 import {NavBarHeader} from './ui-components';
 import {
  MarketingFooter 
 } from './ui-components';
 import {
  AddPet 
 } from './ui-components';
 
 
 

function App() {
  const [showForm, setShowForm] = useState(false);
  const navOverrides = 
  {
    "Add Pets":
    {
      onClick:  () => 
      {
        setShowForm(!showForm);
      },
      style: {cursor: "pointer"}
    }
  };
  // const overrides = {"Breed":{"color":"blue"}};
  return (
    
    <div className="App">
      <NavBarHeader overrides={navOverrides}/>
      <header className="App-header">
        {showForm && (<AddPet style={{
          textAlign: "left",
          margin: "1rem"
        }}/>)
        }
        
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
