import {userService} from "./service";



export class UserController {
    private userService = new userService();

    async getUserById(req:any, res:any) {
        const id = parseInt(req.params.id)
        const user = await this.userService.getUserbyId(id);
        return res.status(200).json(user)
    }

    async getUsers(req:any, res:any) {
        const users = await this.userService.getUsers;
        return res.status(200).json(users)
    }

    async createUser(req:any, res:any) {
        const {name, email} = req.body
        const user = await this.userService.createUser;
        return res.status(201).send(`User has created`)
    }

    async updateUser(req:any, res:any) {
        const id = parseInt(req.params.id)
        const { name, email } = req.body
        const user = await this.userService.updateUser;
        return res.status(200).send(`User modified with ID: ${id}`)
    }

    async deleteUser(req:any, res:any) {
        const id = parseInt(req.params.id)
        const user = await this.userService.deleteUser;
        return res.status(200).send(`User deleted with ID: ${id}`)
    }

    async deleteUsers(req:any, res:any) {
        const user = await this.userService.deleteUsers;
        return res.status(200).send(`Users deleted`)
    }
  }