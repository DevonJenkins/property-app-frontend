import PropertyCard from '../../components/PropertyCard/PropertyCard'

const PropertyList = ({ properties }) => {
    return (
        <>
        { properties.map((property) => ( 
            <PropertyCard
            property={property}
            key={property.id}
            />
        ))}
        </>
    )
}

    export default PropertyList
