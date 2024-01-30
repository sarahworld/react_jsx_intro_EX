const  Person = (props)=>{
    return (
        <div>
            <p>Some Information about the person</p>
            {props.personData.map((person) => <h4>Name:{person.name}  Age:{person.age} {person.age >= 18 ? 
            <span>GO Vote!</span>: <span>Go Study!</span>}
            <h4>HOBBIES:{person.hobbies.map(each => <span> {each} </span>)}</h4>
            
            </h4>
            
            )}
         
            
          
        
        </div>

        
    )
}

