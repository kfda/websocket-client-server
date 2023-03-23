export default class Db{
  // will using only hash table
  // users will start with test data
  users: any = {
    1: {
      id: 1,
      firstName: 'alex',
      lastName: 'jonathan',
      email: 'John@email.com'
    },
    2: {
      id: 2,
      firstName: 'janeth',
      lastName: 'carton',
      email: 'Jane@email.com',
    }
  }


  // add user to hash table
  addUser(id: number, firstName: string, email: string){
    this.users[id] = {
      id,
      firstName,
      email: email
    }
  }

  // get user from hash table
  getUser(id: number){
    return this.users[id]
  }

  // get all users from hash table
  getUsers(){
    return this.users
  }

  // remove user from hash table
  removeUser(id: number){
    delete this.users[id]
  }

  // edit user from hash table
  editUser(id: number, name: string, email: string){
    this.users[id] = {
      id: id,
      name: name,
      email: email
    }
  }

}