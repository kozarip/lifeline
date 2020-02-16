
/**
 * Save:
 * selected theme
 * stations number
 * station : [{image,text}...]
 */

export function changeTheme(themeId) {
  return {
    type: 'Change_Theme_Image_Src',
    themeId: { themeId }
  }
}

export function changeStationNumber(stationNumber) {
  return {
    type: 'Change_Station_Number',
    stationNumber: { stationNumber },
  }
}
