const createUserBody = {
    username: {
        isLength: {
            options: { min: 5, max: 32 },
            errorMessage: "Username must be 5-32 charcaters long",
        },
        notEmpty: { errorMessage: "Username must not be empty" },
        isString: { errorMessage: "Username must be a string" },
    },
    email: {
        notEmpty: { errorMessage: "Email must not be empty" },
        isEmail: { errorMessage: "Must be a proper email" },
    },
}

const createUserQuery = {
    filter:{
        isString: {errorMessage:"filter must be a string"},
        notEmpty:{errorMessage: "filter must not be empty"},
    },
    value:{
        notEmpty:{errorMessage:"value must not be empty"},
    }
}

const createFoodQuery = {
   filter:{
        isString: {errorMessage:"filter must be a string"},
        notEmpty:{errorMessage: "filter must not be empty"},
    },
    value:{
        notEmpty:{errorMessage:"value must not be empty"},
    }
}

export {createUserBody,createUserQuery,createFoodQuery,}