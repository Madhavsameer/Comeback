import React from 'react'

function DataFetch() {

    const data=[
        {
        "id": 1,
        "name": "John",
        "age": 30
    },
    {
        "id":2,
        "name":"Madhav",
        "age":30
    }

   

]

  return (
    <div>
        <h1>Fetching Data</h1>
        <div id='data'>

            {data.map(function(data) {
                return (
                    <>
            <h1>{data.name}</h1>
            <h1>{data.age}</h1>

            </>

                )
            })}
            
        </div>
      
    </div>
  )
}

export default DataFetch
