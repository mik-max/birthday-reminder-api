import bcrypt from 'bcrypt'
export function encrypt (password){
     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(password, salt);
     return hash;
}


export function compareHash (password, passwordHash){
     let result = bcrypt.compareSync(password, passwordHash); // true
     return result;
}