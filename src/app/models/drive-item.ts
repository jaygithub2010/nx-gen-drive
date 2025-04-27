export enum ItemType{
    FILE='File',
    FOLDER='Folder'
}

export interface DriveItem{
    id:string,
    name:string,
    itemType:ItemType,
    size:number,
    mimeType:string,
    entityType:string
}