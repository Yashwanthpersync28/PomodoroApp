export const handlePasswordvalidation =(val) => {
    // setPassword(val);
  
    const minLength = 6;
    const hasNumber = /\d/.test(val);
    const hasSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(val);
    const hasUpperCase = /[A-Z]/.test(val);
  
    // let error = '';
  
    if (val.length < minLength) {
      return (`Password must be at least ${minLength} characters. `);
    }
  
    else if (!hasNumber) {
        return ('Password must contain at least one number. ');
    }
  
    else if (!hasSpecialSymbol) {
        return ('Password must contain at least one special symbol. ');
    }
  
    else if (!hasUpperCase) {
        return ('Password must contain at least one uppercase letter. ');
    }
    else{
        return('')
    }
  };