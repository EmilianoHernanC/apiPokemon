import express from 'express'

class Server{
    constructor(){
        this.port= process.env.PORT || 3000;
        this.app=express();
        // this.routers();
    }


    listen(){
        this.app.listen(this.port, () =>  {
            console.log(`Esta app corre en el puerto ${this.port}`)
        })
    }
}

export default Server;