// TODO: add user interface and logic for storing and fetching
import pool from "./index";

export interface User {
    id: number,
    name: string,
    email: string
}

export class UserDao {

    async getUsers(): Promise<User> {
        return pool.query('SELECT * FROM users ORDER BY id ASC')
};

    async getUserById(id:any): Promise<User> {
        return pool.query('SELECT * FROM users WHERE id = $1', [id])
    };


    async createUser(name:any,email:any): Promise<User> {
        return pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name,email])
    }

    async updateUser(id:any,name:any,email:any): Promise<User> {
        return pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name,email,id])
    }

    async deleteUser(id:any): Promise<User> {
        return pool.query('DELETE FROM users WHERE id = $1', [id])
    }

    async deleteUsers(): Promise<User> {
        return pool.query('DELETE FROM users')
    }
}
