import _ from 'lodash'
import fetch from 'node-fetch'

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

export function nodefetch (event, context, cb){
  fetch('https://github.com/')
  .then(res => {
    cb(null,
      { response: res }
    )
  })
}


