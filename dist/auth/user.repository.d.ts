import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCrenetialsDto } from './dto/auth-credentials.dto';
export declare class UserRepository extends Repository<User> {
    signUp(authCrenetialsDto: AuthCrenetialsDto): Promise<void>;
    validateUserPassword(authCrenetialsDto: AuthCrenetialsDto): Promise<string>;
    private hashPassword;
}
