//getting all data from yup
import * as Yup from 'yup'

const SignUpSchema = Yup.object({
    //validation on name length
    //intialvalues must match here -> name:firstName, name:surName, name:password and so on
    firstName : Yup.string().min(2).max(25).required(),
    surName : Yup.string().min(2).max(25).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(4).max(30).required(),
    //oneof is basically kind of.. confirm password matches with password (condition)
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match")
})

export default SignUpSchema;