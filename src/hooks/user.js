

export function userInfo(param){
    const userDetail = JSON.parse(localStorage.getItem('wipUserInfo'))
    if(userDetail){
        if(param === 'all'){
            return userDetail
        }
        else if(param === 'avatar') {
            return userDetail['firstName'].slice(0,1) + userDetail['lastName'].slice(0,1)
        }
        else{
            return userDetail[param] ?  userDetail[param] :  null
        }
        
    }
}