import PropertyCard from '../../components/PropertyCard/PropertyCard'

const PropertyList = ({ properties }) => {
    return (
        <>
            <div>
                <h1>This Is The Property List</h1>
                { properties.map((property) => ( 
                    <PropertyCard
                      property={property}
                      key={property.id}
                    />
                ))}
            </div>
        </>
    )
}

    export default PropertyList
