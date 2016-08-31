import _ from 'lodash'

export function uppercase (event, context, cb){
  cb(null,
    { message: _.upperCase('will this be uppercase?') }
  );
}

export function lowercase (event, context, cb){
  cb(null,
    { message: _.lowerCase('THIS WAS UPPERCASE') }
  );
}


