// here you can find some of functionality which is supposed to be on server-side
class ApiUsers {
  private db: User[];

  constructor() {
    this.db = [];
  }

  private async updateUsers() {
    this.db = [];
    const userInfo: User[] = await fetch('http://localhost:3001/users').then(res => res.json());
    userInfo.forEach((user) => {
      this.db.push(user);
    });
  }

  async checkEmail(data: string) {
    await this.updateUsers();
    const userExists = this.db.find((user) => user.email === data);
    return !!userExists;
  }

  async logInUser(data: UserInfo) {
    await this.updateUsers();
    const validUser = this.db.find((user) => 
      user.email === data.email 
      && user.password === data.password
    );
    if (validUser !== undefined) {
      return {
        email: validUser.email,
        id: validUser.id,
      };
    }
  }

  async addUser(data: UserInfo) {
    await fetch('http://localhost:3001/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Credentials': 'include',
      },
      body: JSON.stringify(data),
    });
    return (await this.logInUser(data)) as AuthInfo;
  }

  deleteUser(id: string) {
    fetch(`http://localhost:3001/users/${id}`, {
      method: 'delete',
      headers: {
        ContentType: 'application/json',
        Credentials: 'include',
      },
    });
  }
}

export default ApiUsers;