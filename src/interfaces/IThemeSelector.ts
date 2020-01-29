export interface IThemeSelectorStates {
  image: IThemeSelectorImage;
  isModalOpen: boolean;
}

export interface IThemeSelectorProps{
  saveSelectedTheme: any;
}

export interface IThemeSelectorImage {
  src: string;
  value: number;
}
