const BySpecificFilter = (Component, route) => {

  console.log(route)
  
  const SpecificFilter = ({filter,...props}) => {

    console.log(filter)

    return (
      <Component {...props} />
    )
  } 
  return SpecificFilter
}

export default BySpecificFilter