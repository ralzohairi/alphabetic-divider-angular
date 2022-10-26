/**
 * defines a model interface for the status of a divider character
 */
export interface DividerCharStatus {
    /**
     * defines the divider character
     */
    dividerChar: string;
    /**
     * defines whether the current element to create a divider for
     * should be included under the previous divider or not
     */
    includeUnderPreviousDivider: boolean;
}