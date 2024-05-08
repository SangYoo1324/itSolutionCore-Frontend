/*
* return value example {Authorization: 'ajsdlkf;jasdfjalsdkfasdfja;djlfasdf'}
* if no Authorization cookie found, return null
* */
export const getTokenFromCookie = ()=>{

    const cookies = document.cookie.split(';');
    const cookieValues = {};
    cookies.forEach(cookie=>{
        const [key, value] =  cookie.split('=').map(item => item.trim());
        if (key === 'Authorization' || key === 'Role') {
            cookieValues[key] = value;
        }

        if(Object.keys(cookieValues).length !==0){
            console.log('Authorization:', cookieValues.Authorization);
        }else{
            console.log("No Authorization header on current cookie. need login ")
            return null;
        }


    })
    //  cookieValues contains no properties = No Authorization Token exist, so return null
    return Object.keys(cookieValues).length>0 ? cookieValues: null;
}
