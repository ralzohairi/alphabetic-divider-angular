import { Injectable } from "@angular/core";
import { DividerCharStatus } from "../models/divider-char-status.model";

@Injectable({
  providedIn: "root",
})

export class AlphabeticDividerService {

  /** Stores the character of the last alphabetic divider*/
  charOfLastAlphabeticDivider = "";

  constructor() { }

  /** Returns the status of the divider character based on the passed string to divide upon
   * with respect to the character of last alphabetic divider
   * @param {String} stringToDivideUpon - string that determines the divider character
   * status
   * @returns {Object} the divider character's status, including the character and whether there should be a divider 
   * created for it or it will be included in the previous divider
   */
  getDividerCharStatus(stringToDivideUpon: string): DividerCharStatus {

    // Initialize the divider character status properties
    let includeUnderPreviousDivider = true;
    let newDividerChar = "";

    const noPreviousDividerIsCreatedYet = this.charOfLastAlphabeticDivider === "";
    const prevDividerCharDoesntMatchCharOfPassedString = this.charOfLastAlphabeticDivider !== stringToDivideUpon.trim().charAt(0).toUpperCase();

    // If no previous divdier is created yet or if the prev divider doesnt martch the character of the 
    // passed string, then in those two cases a new alphaebtic divider should be created
    if (noPreviousDividerIsCreatedYet || prevDividerCharDoesntMatchCharOfPassedString) {

      /*1. Set includeUnderPreviousDivider to false to create a new divider as divider
           character is new i.e. doesn't match the previous divider*/
      includeUnderPreviousDivider = false;

      // 2. Set the first non-whitespace character in string as the new divider character
      newDividerChar = stringToDivideUpon.trim().charAt(0).toUpperCase();

      // 3. Update the character of the last alphabetic divider to be the new found divider character
      this.charOfLastAlphabeticDivider = newDividerChar;
    }

    const dividerCharStatus: DividerCharStatus = {
      dividerChar: newDividerChar,
      includeUnderPreviousDivider: includeUnderPreviousDivider
    };

    return dividerCharStatus;
  }
}
