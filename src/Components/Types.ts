export type Views = {
    total: string;
    skyGo: number;
    nowTv: number,
    peacock: number
}

export type Item = {
    name: string;
    totalViews: Views;
    prevTotalViews: Views;
    description: string;
    duration: number;
    assetImage: string;
    videoImage: string;
    provider: string;
    genre: string[];
} 

export type InformationItemType = {
  name: string,
  information: string
}

export type IndividualFrameItem = {
  item: Item
}

export type State = {
  filmInformationData: any; 
  displayData: any;
  searchTerm: string;
  allGenresArray: string[];
}

export type Action = 
  | {type: 'SET_DATA'; filmInformationData: Item[]}
  | {type: 'SET_DISPLAY_DATA'; displayData: Item[]}
  | {type: 'SET_SEARCH_TERM'; searchTerm: string}
  | {type: 'SET_GENRES_ARRAY'; allGenresArray: string[]};

export type TimeSeriesObjectType ={
  timestamp: number;
  value: number;
}