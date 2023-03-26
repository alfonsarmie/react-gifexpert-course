import { useState } from "react"

 

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState();
    
    const onInputValue = ({target}) => {
    
        setInputValue(target.value)
    }

    const onSubmitValue = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        
        setInputValue('') 
    }


    return (
    <>   
        <form onSubmit={onSubmitValue}>
            <input
                placeholder="Buscar gifs"
                type="text"
                value={inputValue || ''}
                onChange={onInputValue}
            />
        </form>   
    </>
  )
}
