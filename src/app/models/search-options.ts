export interface SearchOptions {
    searchFileName: string[];
    noSearchFileName: string[];
    fileType: string[];
    createdDateRange: string[];
    modifiedDateRange: string[];
    owner: string[];
    sharedWith: string[];
    sharedBy: string[];
    fullTextSearch: string[];
    noFullTextSearch: string[];
    searchLocation: string[];
    labelName: string[];
    isDeleted: boolean;
    isArchived: boolean;
    isStarred: boolean;
}
