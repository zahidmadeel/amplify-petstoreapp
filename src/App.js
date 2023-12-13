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
 import {
  PetDetails 
 } from './ui-components';
 
 

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setshowDetails] = useState(false);
  const [updatePet, setUpdatePet] = useState(false); 
  const [pet, setPet] = useState();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");



  const formOverrides = {"MyIcon":{"onClick":() => setShowForm(false), "style":{cursor: "pointer"}}};
  const detailOverrides = {"MyIcon":{"onClick":() => setshowDetails(false), "style":{cursor: "pointer"}}};
  const navOverrides = 
  {
    TextField29766922:{
      onChange: (e) => setName(e.target.value)
    },
    TextField29766923:{
      onChange: (e) => setAge(e.target.value)
    },
    TextField29766924:{
      onChange: (e) => setBreed(e.target.value)
    },
    TextField3957549:{
      onChange: (e) => setAbout(e.target.value)    
    },
    TextField3957556: {
      onChange: (e) => setColor(e.target.value)
    },
    TextField3957563: {
      onChange: (e) => setImage(e.target.value)
    },
    
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
      {showDetails && 
      <PetDetails pet={pet}         
        overrides={detailOverrides}
      />}
        {showForm && (<AddPet pet={updatePet}
        overrides={formOverrides}
        style={{
          textAlign: "left",
          margin: "1rem"
        }}/>)
        }
        
        
        <Pets overrideItems={({item, index}) => ({
          overrides: {Breed:{"color":"blue"},
          Button29766907:{
            onClick: () => {
              setshowDetails(!showDetails);
              setPet(item);
            }
          },
          Button3958439:{
            onClick: () => {
              if(!showForm) setShowForm(true);
              setUpdatePet(item);
              setShowForm(!showForm);
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
