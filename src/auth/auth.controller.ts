import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get("/api/v1/register")
    register(){
        return {
            message:"registered"
        }
    }
}
