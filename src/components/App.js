import React, {Component, useState} from "react";
import '../styles/App.css';

const App=()=>{
    
        let [FirstName,setFirstName]=useState("");
        let [SecondName,setSecondName]=useState("");
        let [relationshipStatus,setRelationshipStatus]=useState('')
        const handleFirstName=(event)=>{
            setFirstName(event.target.value);
        }
        const handleSecondName=(event)=>{
            setSecondName(event.target.value);
        }

        const calculateRelationship=()=>{
            if(FirstName===''||SecondName===''){
                setRelationshipStatus('Please enter valid input');
                return;

            }
            const firstname=FirstName.toLowerCase();
            let secondname=SecondName.toLowerCase();
    
            let remainingFirstName='';
            let remainingSecondName='';

            
    for (let i = 0; i < firstname.length; i++) {
        if (!secondname.includes(firstname[i])) {
          remainingFirstName += firstname[i];
        }
        else{
            secondname=secondname.replace(firstname[i],'');
        }
      }
      console.log(remainingFirstName)
  
      for (let i = 0; i < secondname.length; i++) {
        
          remainingSecondName += secondname[i];
        
      }
      console.log(remainingSecondName);
  
      const remainingLength = remainingFirstName.length + remainingSecondName.length;
      console.log(remainingLength);
      const result = remainingLength % 6;
  
      switch (result) {
        case 1:
          setRelationshipStatus('Friends');
          break;
        case 2:
          setRelationshipStatus('Love');
          break;
        case 3:
          setRelationshipStatus('Affection');
          break;
        case 4:
          setRelationshipStatus('Marriage');
          break;
        case 5:
          setRelationshipStatus('Enemy');
          break;
        case 0:
          setRelationshipStatus('Siblings');
          break;
        default:
          setRelationshipStatus('');
      }
    

        }

        const clearInputs = () => {
            setFirstName('');
            setSecondName('');
            setRelationshipStatus('');
          };
      


        return(
            <div id="main">
               
               <input name="name1" value={FirstName} type="text" data-testid="input1" 
               placeholder="Enter first name" onChange={handleFirstName}/>
               <input name="name2" value={SecondName} type="text" data-testid="input2" 
               placeholder="Enter second name" onChange={handleSecondName}/>
               <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship Future</button>
               <button onClick={clearInputs} data-testid="clear">Clear</button>

               <h3 data-testid="answer">{relationshipStatus}</h3>

               
               
               
               
               
               
              
            </div>
        )    
}


export default App;
