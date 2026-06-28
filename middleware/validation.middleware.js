import {validationResult} from "express-validator";

const validateRequest = (viewName) =>{
    return  (req, res, next) => {
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.render(viewName, {
                    errors: errors.array(),
                    oldData: req.body,
                });
            }

            next();
        };
}



export default validateRequest;