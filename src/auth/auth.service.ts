import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    registerUser() {
        
        return { message: 'Registration successful' };
    }

    loginUser() {
        return { message: 'Login successful' };
    }

}
