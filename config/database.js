import { Sequelize } from "sequelize";

const db = new Sequelize("notes", "root", "tugas3123", {
    host: "34.135.207.75",
    dialect: "mysql",
    timezone: "+07:00"
}) 

export default db
