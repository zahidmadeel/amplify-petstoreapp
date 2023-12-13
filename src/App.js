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



  const formOverrides = 
  {
      "MyIcon":
      {
        "onClick":() => setShowForm(false),
        "style":{cursor: "pointer"}
      }, 
      TextField29766922:{
        // onChange: (e) => setName(e.target.value),
        placeholder: name
      },
      TextField29766923:{
        // onChange: (e) => setAge(e.target.value),
        placeholder: age
      },
      TextField29766924:{
        // onChange: (e) => setBreed(e.target.value),
        placeholder: breed
      },
      TextField3957549:{
        // onChange: (e) => setAbout(e.target.value),
        placeholder: about   
      },
      TextField3957556: {
        // onChange: (e) => setColor(e.target.value),
        placeholder: color
      },
      TextField3957563: {
        // onChange: (e) => setImage(e.target.value),
        placeholder: image
      },
      image: {
        src: updatePet == null? "https://images.unsplash.com/photo-1557053503-0c252e5c8093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmlzaHx8fHx8fDE2NTI3MzMxMTE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080": updatePet.image      
      },
      Button3958439: {
        isDisabled: updatePet == null? true: false
      },
      Button29766926: {
        isDisabled: updatePet? true: false
      },
      Button29766925: {
        onClick: () => {
          setShowForm(false);
          setUpdatePet(false);
        }
      }
    };
  const detailOverrides = {"MyIcon":{"onClick":() => setshowDetails(false), "style":{cursor: "pointer"}}};
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
          Button39493891:{
            onClick: () => {
              if(!showForm) setShowForm(true);
              setUpdatePet(item);
              setName(item.name);
              setAge(item.age);
              setBreed(item.breed);
              setAbout(item.about);
              setColor(item.color);
              setImage(item.image);
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
