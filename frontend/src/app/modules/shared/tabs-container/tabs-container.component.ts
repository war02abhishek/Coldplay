import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabElementComponent } from '../tab-element/tab-element.component';

@Component({
  selector: 'app-tabs-container',
  standalone: false,
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css',
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabElementComponent) tabs!: QueryList<TabElementComponent>;

  selectedTabIndex = 0;

  ngAfterContentInit(): void {
    const active = this.tabs.toArray().findIndex((tab) => tab.active);
    this.selectTab(active !== -1 ? active : 0);
  }

  selectTab(index: number) {
    this.selectedTabIndex = index;
    this.tabs.forEach((tab, i) => (tab.active = i === index));
  }
}
