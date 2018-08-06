import alasql from 'alasql'

export class DB {
    static bootstraped = false
    static db = alasql

    static tables = {
        exercises: 'app_exercises',
        movements: 'app_movements',
        sets: 'app_sets',
        tags: 'app_tags'
    }

    static connect() {
        alasql('CREATE localStorage DATABASE IF NOT EXISTS db');
        alasql('ATTACH localStorage DATABASE db');
        alasql('USE db');
    }

    static setup() {
        alasql(`
            CREATE TABLE IF NOT EXISTS 
                ${this.tables.exercises} (
                    id STRING PRIMARY KEY, 
                    date DATE, 
                    movement STRING
                ) 
        `)

        alasql(`
            CREATE TABLE IF NOT EXISTS 
                ${this.tables.movements} (
                    name STRING
                ) 
        `)

        alasql(`
            CREATE TABLE IF NOT EXISTS 
                ${this.tables.sets} (
                    exercise STRING, 
                    reps INT,
                    weight INT
                ) 
        `)

        alasql(`
            CREATE TABLE IF NOT EXISTS 
                ${this.tables.tags} (
                    tag STRING,
                    movement STRING
                ) 
        `)
    }

    static init() {
        this.connect()
        this.setup()
        this.bootstraped = true
    }

    static unique() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + s4()
    }

    static exec(q) {
        if (!this.bootstraped) {
            this.init()
        }
        return alasql(q)
    }
}