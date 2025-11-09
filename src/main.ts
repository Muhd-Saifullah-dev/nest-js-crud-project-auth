import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transform:true,
    exceptionFactory:(ValidationError=[])=>{
      const message=ValidationError.map(err=>Object.values(err.constraints ?? {})).flat();
      const firstMesage=message[0] || "validation Error";
      return new BadRequestException(firstMesage)
    }
   }));
  const port=process.env.PORT ?? 3000
  await app.listen(port,()=>console.log(`server is running on port ${port}`));
}
bootstrap();
