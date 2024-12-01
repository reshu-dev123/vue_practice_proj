import React ,{memo} from 'react'

const Child = ({name,age}) => {
    console.log('state independent child also  rendering----') 
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default memo(Child);// also we can use React.memo 
// avoid unecessary re-render as it's state nad props are not changing. 
