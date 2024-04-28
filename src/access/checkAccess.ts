import ACCESS_ENUM from "@/access/accessEnum";
/**
 * 检查权限
 * @param loginUser 当前登录的用户
 * @param needAccess 需要有的权限
 * @return boolean 有无权限
 */
const checkAccess = (loginUser : any, needAccess = ACCESS_ENUM.NOT_LOGIN) =>{
    //获取当前用户具有的权限,如果没有loginUser则表示未登录
    // console.log(loginUser + "    " + needAccess);
    const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN
    if(needAccess === ACCESS_ENUM.NOT_LOGIN){
        return true;
    }
    //需要用户才能访问
    if(needAccess === ACCESS_ENUM.USER){
        //如果用户没登录，那么表示无权限
        if(loginUserAccess === ACCESS_ENUM.NOT_LOGIN){
            return false;
        }
    }
    //需要管理员权限
    if(needAccess === ACCESS_ENUM.ADMIN){
        //如果不为管理员则返回false
        if(loginUserAccess !== ACCESS_ENUM.ADMIN){
            return false;
        }
    }

    return true;

}

export default checkAccess;