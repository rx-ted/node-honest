import { Application, Controller, Get, Module, Service } from '.'

import { serve } from '@hono/node-server'

@Controller('users')
class UsersController {
    @Get()
    getUsers() {
        return { users: [] }
    }
}

@Module({
    controllers: [UsersController]
})
class AppModule { }


const { hono } = await Application.create(AppModule);



serve(hono, (info) => {

    console.log(`Listening on http://localhost:${info.port}`) // Listening on http://localhost:3000
})

