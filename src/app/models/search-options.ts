export interface SearchOptions {
    searchFileName: string[];
    nosearchFileName: string[];
    fileType: string[];
    createdDateRange: Date[];
    modifiedDateRange: Date[];
    owner: string[];
    sharedWith: string[];
    sharedBy: string[];
    fullTextSearch: boolean;
    nofullTextSearch: boolean;
    searchLocation: string[];
    labelName: string[];
    isDeleted: boolean;
    isArchived: boolean;
    isStarred: boolean;
}
