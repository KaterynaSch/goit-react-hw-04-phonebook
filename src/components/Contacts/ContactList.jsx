import { ContactListItem } from "components/ContactListItem/ContactListItem"
import { List } from "./ContactList.styled"


export const ContactList = ( {contacts, onDelete }) => {
    return (
        <List>
            {contacts.map(item =>         
                <ContactListItem key = {item.id } contact={item} onDelete={onDelete}/>
             ) }               
        </List>        
    )
} 