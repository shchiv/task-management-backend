import { AuthCrenetialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCrenetialsDto: AuthCrenetialsDto): Promise<void>;
    signIn(authCrenetialsDto: AuthCrenetialsDto): Promise<{
        accessToken: string;
    }>;
}
