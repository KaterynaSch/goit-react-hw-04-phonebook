import { DeleteBtn, ListItem } from "./ContactListItem.styled"

export const ContactListItem = ({contact, onDelete}) => {
    return(
        <ListItem key={contact.id}>
            <span>{contact.name}: {contact.number}</span>             
            <DeleteBtn type="button" onClick={() => onDelete(contact.id)}>
                Delete
            </DeleteBtn>
        </ListItem>
    )
}