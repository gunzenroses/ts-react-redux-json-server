class Contacts {
  private db: string[];

  constructor() {
    this.db = [];
  }

  private async updateContacts(id: string) {
    this.db = [];
    const list: string[] = await fetch(`http://localhost:3001/contacts/${id}`)
      .then((res) => res.json())
      .then((res) => res.list);
    list.forEach((contact) => {
      this.db.push(contact);
    });
  }

  async getContacts(id: string) {
    await this.updateContacts(id);
    return this.db;
  }

  async addContact(data: {id: string, newContactName: string}) {
    const { id, newContactName } = data;
    await this.updateContacts(id);
    const list: string[] = [...this.db, newContactName];
    await fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Credentials': 'include',
      },
      body: JSON.stringify({ list: list }),
    });
    return this.getContacts(id);
  }

  async deleteContact(data: { id: string; contactName: string }) {
    const { id, contactName } = data;
    await this.updateContacts(id);
    const list: string[] = this.db.filter(contact => contact !== contactName);
    await fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Credentials': 'include',
      },
      body: JSON.stringify({ list: list }),
    });
    return this.getContacts(id);
  }
}

export default Contacts;