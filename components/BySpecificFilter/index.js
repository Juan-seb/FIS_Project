const BySpecificFilter = (Component) => {
  
  const SpecificFilter = ({...props}) => {
    return (
      <Component {...props} />
    )
  } 
  return SpecificFilter
}

export default BySpecificFilter