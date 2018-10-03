import mongoose from '../lib/mongo';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const UserModel = mongoose.model('user', UserSchema)

export default UserModel