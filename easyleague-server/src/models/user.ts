var crypto = require('crypto');
var jwt = require('jsonwebtoken');

export interface userSchema {
  email: string,
  name?: string,
  hash?: string,
  salt?: string
};

export class User {
   user: userSchema;
  constructor(user: userSchema) {
    console.log('users');
    console.log(user);
    this.user = user;
    console.log(this.user);

  }
  
  setPassword (password){
    this.user.salt = crypto.randomBytes(16).toString('hex');
    this.user.hash = crypto.pbkdf2Sync(password, this.user.salt, 1000, 64, 'sha512').toString('hex');
  }
  
  validPassword (password) {
    console.log('password123');
    console.log(password);
    console.log(this.user);

    var hash = crypto.pbkdf2Sync(password, this.user.salt, 1000, 64, 'sha512').toString('hex');
    console.log('hash');

    return this.user.hash === hash;
  }

  generateJwt () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      // _id: this._id,
      email: this.user.email,
      exp: +(expiry.getTime() / 1000)
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  }
}
