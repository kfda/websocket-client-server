import Db from "./Db"

const db = new Db()

export default class User{
    
  init(){
    return true
  }

  getUsers(id: number){
    if (!id) {
      return db.getUsers()
    } else {
      return db.getUser(id)
    }
  }

  addUser(id: number, firstName: string, email: string){
    return db.addUser(id, firstName, email)
  }

  removeUser(id: number){
    return db.removeUser(id)
  }

  editUser(id: number, firstName: string, email: string){
    return db.editUser(id, firstName, email)
  }
}