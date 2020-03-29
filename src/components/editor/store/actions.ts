
/**
 * Save:
 * selected theme
 * stations number
 * station : [{image,text}...]
 */

export function setTheme(themeId) {
  return {
    type: 'Set_Theme_Image_Src',
    themeId: { themeId }
  }
}

export function setStationNumber(stationNumber) {
  return {
    type: 'Set_Station_Number',
    stationNumber: { stationNumber },
  }
}

export function setMainTitle(mainTitle) {
  return {
    type: 'Set_Main_Title',
    mainTitle: { mainTitle }
  }
}

export function setSelectedThemeId(selectedStationId) {
  return {
    type: 'Set_Selected_Station_Id',
    selectedStationId: {selectedStationId},
  }
}

export function setSelectedStationAttribute(type, attribute) {
  return {
    type: 'Set_Selected_Station_Attribute',
    attribute: { [type]: attribute },
  }
}
