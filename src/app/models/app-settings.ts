export interface ApiEndPoints{
    
    getUser:string,
    getFiles:string,
    getDriveItemParents:string,
    getRecentFolders:string,
    getDriveItemNameById:string,
    loginGoogle:string,
    loginDropBox:string,
    loginMicrosoft:string
}
export interface AppSettings{
    apiEndPoints:ApiEndPoints
}

