export interface IThemeSelectorStates {
  themeId: number;
  isModalOpen: boolean;
}

export interface IThemeSelectorProps{
  appStationNumber: number;
  saveSelectedTheme: any;
}

export interface IThemeSelectorImage {
  src: string;
  value: number;
}
