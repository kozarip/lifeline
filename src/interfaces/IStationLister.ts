export interface IStationLister{
  isSelectedFilterWordEmpty: Function;
  selectFilter: Function;
  items: Item[];
}

interface Item{
  name: string,
  image: string
}
