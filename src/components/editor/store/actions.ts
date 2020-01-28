
/**
 * Save:
 * selected theme
 * stations number
 * station : [{image,text}...]
 */

export function changeTheme(themeImageSrc) {
  return {
    type: 'Change_Theme_Image_Src',
    themeImageSrc: { themeImageSrc }
  }
}

export function changeStationNumber(stationNumber) {
  return {
    type: 'Change_Station_Number',
    stationNumber: { stationNumber },
  }
}
