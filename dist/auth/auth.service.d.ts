import { UserRepository } from './user.repository';
import { AuthCrenetialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private logger;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authCrenetialsDto: AuthCrenetialsDto): Promise<void>;
    signIn(authCrenetialsDto: AuthCrenetialsDto): Promise<{
        accessToken: string;
    }>;
}
