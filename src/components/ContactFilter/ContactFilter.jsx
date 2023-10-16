import { FilterInput, FilterLabel } from "./ContactFilter.styled"


export const ContactFilter = ({filter, onChangeFilter}) => {
    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput type="text" name="filter" value= {filter}
            onChange={onChangeFilter}/>
        </FilterLabel>
        
    )
}