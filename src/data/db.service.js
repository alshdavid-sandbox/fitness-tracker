import alasql from 'alasql'

export class DB {
    bootstraped = false
    db = alasql

    static init() {
        alasql('CREATE localStorage DATABASE IF NOT EXISTS db');
        alasql('ATTACH localStorage DATABASE db');
        alasql('USE db');

        alasql(`
            CREATE TABLE IF NOT EXISTS 
                app_exercises (
                    id STRING PRIMARY KEY, 
                    date DATE, 
                    movement STRING
                ) 
        `)

        alasql(`
            CREATE TABLE IF NOT EXISTS 
                app_movements (
                    name STRING PRIMARY KEY, 
                    type STRING
                ) 
        `)

        alasql(`
            CREATE TABLE IF NOT EXISTS 
                app_sets (
                    exercise STRING, 
                    reps INT,
                    weight INT
                ) 
        `)

        alasql(`
            CREATE TABLE IF NOT EXISTS 
                app_types (
                    id STRING PRIMARY KEY,
                    exercise STRING, 
                    reps INT,
                    weight INT
                ) 
        `)
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