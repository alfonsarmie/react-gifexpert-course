import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rocky'])

    const addCategory = (newCategory) => {

        if (categories.includes(newCategory)) return 
        setCategories([newCategory, ...categories])

    }


    return (

    <>

        
        <h1>GifExpertApp</h1>

        <AddCategory
            onNewCategory = {(newCategory) => addCategory(newCategory)}
        />

        

        {
            categories.map( (category) =>(
                <GifGrid 
                    key={category} category={category}
                />
                )
            )
        }

            
        


    </>    

  )
}


