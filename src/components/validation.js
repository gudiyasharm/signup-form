
const validation = (values) => {
    let errors ={};

    if(!values.fullName){
        errors.fullName="Name is Required."
    }if(!values.email){
        errors.email="Please Enter Valid Email"
    // }if(!values.password.length < 6){
    //     errors.password="Please Enter your password"
    }if(values.confirmPassword !== values.password){
        errors.confirmPassword = "Password do not match"
    }
  return errors
}

export default validation