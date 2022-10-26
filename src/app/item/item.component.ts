import { Component, Input, OnInit } from '@angular/core';
import { DividerCharStatus } from '../shared/models/divider-char-status.model';
import { AlphabeticDividerService } from '../shared/services/alphabetic-divider.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  /** Stores the list item */
  @Input() item: string;

  /** Determines whether an alphabetic divider should be enabled */
  @Input() enableAlphabeticDivider: boolean;

  /** Stores the status of the divider character for this contact detail, if alphabetic divider is enabled*/
  dividerStatus: DividerCharStatus = { dividerChar: "", includeUnderPreviousDivider: true };

  constructor(private alphabeticDividerService: AlphabeticDividerService,) {
  }

  ngOnInit(): void {
    // Handle the alphabetic divider upon component initialization
    this.handleAlphabeticDivider();
  }

  /** Handles the alphabetic divider*/
  handleAlphabeticDivider() {
    // only handle alphabetic dividers if it's enabled
    if (this.enableAlphabeticDivider) {
      this.dividerStatus = this.alphabeticDividerService.getDividerCharStatus(this.item);
    }
  }

}
