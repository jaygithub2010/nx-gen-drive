export interface ApiEndPoints{
    
    getUser:string,
    getFiles:string,
    loginGoogle:string,
    loginDropBox:string,
    loginMicrosoft:string
}
export interface AppSettings{
    apiEndPoints:ApiEndPoints
}

