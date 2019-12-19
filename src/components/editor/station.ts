import { IStation } from 'interfaces/IStation'

export default class StationFilter {

  stations: IStation[];

  constructor(stations: IStation[]) {
    this.stations = stations;
  }

  getStationsByCategory(keyword: string){
    return this.getStationsByParameterName(keyword, 'categories');
  }

  getStationsByTag(keyword: string){
    return this.getStationsByParameterName(keyword, 'tags');
  }

  private getStationsByParameterName(keyword: string, parameter: string) {
    if (keyword === '' || parameter === '') {
      return [];
    }
    const filteredStations = this.stations.filter(station => {
      const parameterItems: string[] = station[parameter]
      console.log(parameterItems);
      console.log(keyword);
      console.log(parameterItems.includes[keyword]);
      return parameterItems.includes[keyword];
    })
    return filteredStations;
  }
}

