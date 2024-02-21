export interface SideBarModel{
    optionList?: OptionListModel,
    optionProperties?: Array<OptionPropertiesModel>,
    availableGroups?: Array<AvailableGroups>,
    availableGroupsProperties?: Array<AvailableGroupsProperties>
}

interface OptionListModel{
    id: number,
    descriptiveName: string,
    associatedModule: string,
    icon: string
}

interface OptionPropertiesModel{
    optionId: number,
    moduleName: string,
    descriptiveName: string,
    icon: string
}

interface AvailableGroups{
    bundle:number
}

interface AvailableGroupsProperties{
    id: number,
    internalKey: number,
    descriptiveName: string,
    bundle: string
}
