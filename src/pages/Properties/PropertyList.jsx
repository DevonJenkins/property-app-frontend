import PropertyCard from '../../components/PropertyCard/PropertyCard'

const PropertyList = ({ properties, user }) => {
    return (
      <>
        <div>
            { properties.map((property) => ( 
                <PropertyCard
                property={property}
                key={property.id}
                user={user}
                />
            ))}
        </div>
      </>
  )

}

    export default PropertyList
