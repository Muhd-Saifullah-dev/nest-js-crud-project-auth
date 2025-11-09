import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
    authService:AuthService;
    constructor(authService:AuthService){
        this.authService=authService
    }
    @Post("register")
    register(@Body() registerDto:RegisterDto){
        return this.authService.register()
    }
}
