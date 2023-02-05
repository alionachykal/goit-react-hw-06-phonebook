export const getContacts = (state) => state.contacts.contacts;
export const getFilter = (state) => state.filter;

export const getFilteredContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const lowerCasedFilter = filter.toLowerCase();

  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(lowerCasedFilter);
  });
};
