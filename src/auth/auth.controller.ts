import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCrenetialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCrenetialsDto: AuthCrenetialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCrenetialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCrenetialsDto: AuthCrenetialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCrenetialsDto);
  }
}
