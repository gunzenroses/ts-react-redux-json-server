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

  async getContacts(data: AuthInfo) {
    await this.updateContacts(data.id);
    return this.db;
  }
}

export default Contacts;