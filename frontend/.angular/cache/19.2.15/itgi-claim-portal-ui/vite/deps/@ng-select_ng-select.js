import {
  NG_VALUE_ACCESSOR
} from "./chunk-MV5DEMMS.js";
import {
  NgClass,
  NgTemplateOutlet
} from "./chunk-VCP6PZHG.js";
import {
  DOCUMENT
} from "./chunk-DEWRB63J.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  input,
  numberAttribute,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RFZ2BTTM.js";
import "./chunk-PEBH6BBU.js";
import {
  animationFrameScheduler,
  asapScheduler,
  fromEvent,
  merge
} from "./chunk-WPM5VTLQ.js";
import {
  Subject,
  auditTime,
  debounceTime,
  filter,
  map,
  startWith,
  takeUntil,
  tap
} from "./chunk-4S3KYZTJ.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@ng-select/ng-select/fesm2022/ng-select-ng-select.mjs
var _c0 = ["content"];
var _c1 = ["scroll"];
var _c2 = ["padding"];
var _c3 = ["*"];
var _c4 = (a0) => ({
  searchTerm: a0
});
function NgDropdownPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelementContainer(1, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, ctx_r0.filterValue));
  }
}
function NgDropdownPanelComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelementContainer(1, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, ctx_r0.filterValue));
  }
}
var _c5 = ["searchInput"];
var _c6 = ["clearButton"];
var _c7 = (a0, a1, a2) => ({
  item: a0,
  clear: a1,
  label: a2
});
var _c8 = (a0, a1) => ({
  items: a0,
  clear: a1
});
var _c9 = (a0, a1, a2, a3) => ({
  item: a0,
  item$: a1,
  index: a2,
  searchTerm: a3
});
function NgSelectComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.placeholder);
  }
}
function NgSelectComponent_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgSelectComponent_Conditional_2_ng_template_0_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(2, NgSelectComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultPlaceholderTemplate_r3 = ɵɵreference(1);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.placeholderTemplate || defaultPlaceholderTemplate_r3);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 23);
    ɵɵlistener("click", function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r4);
      const item_r5 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.unselect(item_r5));
    });
    ɵɵtext(1, "×");
    ɵɵelementEnd();
    ɵɵelement(2, "span", 24);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngItemLabel", item_r5.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtemplate(1, NgSelectComponent_Conditional_3_For_1_ng_template_1_Template, 3, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(3, NgSelectComponent_Conditional_3_For_1_ng_template_3_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const defaultLabelTemplate_r6 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("ng-value-disabled", item_r5.disabled);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.labelTemplate || defaultLabelTemplate_r6)("ngTemplateOutletContext", ɵɵpureFunction3(4, _c7, item_r5.value, ctx_r1.clearItem, item_r5.label));
  }
}
function NgSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NgSelectComponent_Conditional_3_For_1_Template, 4, 8, "div", 21, ɵɵcomponentInstance().trackByOption, true);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.selectedItems);
  }
}
function NgSelectComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgSelectComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c8, ctx_r1.selectedValues, ctx_r1.clearItem));
  }
}
function NgSelectComponent_Conditional_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 25);
  }
}
function NgSelectComponent_Conditional_8_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgSelectComponent_Conditional_8_ng_template_0_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor)(2, NgSelectComponent_Conditional_8_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultLoadingSpinnerTemplate_r8 = ɵɵreference(1);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.loadingSpinnerTemplate || defaultLoadingSpinnerTemplate_r8);
  }
}
function NgSelectComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 19);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.clearButtonTemplate);
  }
}
function NgSelectComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 26, 4)(2, "span", 27);
    ɵɵtext(3, "×");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r1.clearAllText);
    ɵɵattribute("tabindex", ctx_r1.tabFocusOnClearButton() ? 0 : -1);
  }
}
function NgSelectComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgSelectComponent_Conditional_9_Conditional_0_Template, 1, 1, "ng-container", 19)(1, NgSelectComponent_Conditional_9_Conditional_1_Template, 4, 2, "span", 26);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.clearButtonTemplate ? 0 : 1);
  }
}
function NgSelectComponent_Conditional_12_For_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 32);
  }
  if (rf & 2) {
    const item_r11 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngItemLabel", item_r11.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_12_For_3_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵlistener("click", function NgSelectComponent_Conditional_12_For_3_Template_div_click_0_listener() {
      const item_r11 = ɵɵrestoreView(_r10).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.toggleItem(item_r11));
    })("mouseover", function NgSelectComponent_Conditional_12_For_3_Template_div_mouseover_0_listener() {
      const item_r11 = ɵɵrestoreView(_r10).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onItemHover(item_r11));
    });
    ɵɵtemplate(1, NgSelectComponent_Conditional_12_For_3_ng_template_1_Template, 1, 2, "ng-template", null, 5, ɵɵtemplateRefExtractor)(3, NgSelectComponent_Conditional_12_For_3_ng_template_3_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const defaultOptionTemplate_r12 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("ng-option-disabled", item_r11.disabled)("ng-option-selected", item_r11.selected)("ng-optgroup", item_r11.children)("ng-option", !item_r11.children)("ng-option-child", !!item_r11.parent)("ng-option-marked", item_r11 === ctx_r1.itemsList.markedItem);
    ɵɵattribute("role", item_r11.children ? "group" : "option")("aria-selected", item_r11.selected)("id", item_r11 == null ? null : item_r11.htmlId)("aria-setsize", ctx_r1.itemsList.filteredItems.length)("aria-posinset", item_r11.index + 1);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", item_r11.children ? ctx_r1.optgroupTemplate || defaultOptionTemplate_r12 : ctx_r1.optionTemplate || defaultOptionTemplate_r12)("ngTemplateOutletContext", ɵɵpureFunction4(19, _c9, item_r11.value, item_r11, item_r11.index, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span")(1, "span", 34);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.addTagText);
    ɵɵadvance();
    ɵɵtextInterpolate1('"', ctx_r1.searchTerm, '"');
  }
}
function NgSelectComponent_Conditional_12_Conditional_4_ng_template_3_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 33);
    ɵɵlistener("mouseover", function NgSelectComponent_Conditional_12_Conditional_4_Template_div_mouseover_0_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.itemsList.unmarkItem());
    })("click", function NgSelectComponent_Conditional_12_Conditional_4_Template_div_click_0_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.selectTag());
    });
    ɵɵtemplate(1, NgSelectComponent_Conditional_12_Conditional_4_ng_template_1_Template, 4, 2, "ng-template", null, 6, ɵɵtemplateRefExtractor)(3, NgSelectComponent_Conditional_12_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultTagTemplate_r14 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("ng-option-marked", !ctx_r1.itemsList.markedItem);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.tagTemplate || defaultTagTemplate_r14)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.notFoundText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgSelectComponent_Conditional_12_Conditional_5_ng_template_0_Template, 2, 1, "ng-template", null, 7, ɵɵtemplateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_5_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultNotFoundTemplate_r15 = ɵɵreference(1);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.notFoundTemplate || defaultNotFoundTemplate_r15)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.typeToSearchText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template, 2, 1, "ng-template", null, 8, ɵɵtemplateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultTypeToSearchTemplate_r16 = ɵɵreference(1);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.typeToSearchTemplate || defaultTypeToSearchTemplate_r16);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.loadingText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template(rf, ctx) {
}
function NgSelectComponent_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template, 2, 1, "ng-template", null, 9, ɵɵtemplateRefExtractor)(2, NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultLoadingTextTemplate_r17 = ɵɵreference(1);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.loadingTextTemplate || defaultLoadingTextTemplate_r17)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ng-dropdown-panel", 28);
    ɵɵlistener("update", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_update_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.viewPortItems = $event);
    })("scroll", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scroll_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.scroll.emit($event));
    })("scrollToEnd", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.scrollToEnd.emit($event));
    })("outsideClick", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_outsideClick_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close());
    });
    ɵɵelementContainerStart(1);
    ɵɵrepeaterCreate(2, NgSelectComponent_Conditional_12_For_3_Template, 4, 24, "div", 29, ɵɵcomponentInstance().trackByOption, true);
    ɵɵtemplate(4, NgSelectComponent_Conditional_12_Conditional_4_Template, 4, 6, "div", 30);
    ɵɵelementContainerEnd();
    ɵɵtemplate(5, NgSelectComponent_Conditional_12_Conditional_5_Template, 3, 4)(6, NgSelectComponent_Conditional_12_Conditional_6_Template, 3, 1)(7, NgSelectComponent_Conditional_12_Conditional_7_Template, 3, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ng-select-multiple", ctx_r1.multiple);
    ɵɵproperty("virtualScroll", ctx_r1.virtualScroll)("bufferAmount", ctx_r1.bufferAmount)("appendTo", ctx_r1.appendTo)("position", ctx_r1.dropdownPosition)("headerTemplate", ctx_r1.headerTemplate)("footerTemplate", ctx_r1.footerTemplate)("filterValue", ctx_r1.searchTerm)("items", ctx_r1.itemsList.filteredItems)("markedItem", ctx_r1.itemsList.markedItem)("ngClass", ctx_r1.appendTo ? ctx_r1.ngClass ? ctx_r1.ngClass : ctx_r1.classes : null)("id", ctx_r1.dropdownId)("ariaLabelDropdown", ctx_r1.ariaLabelDropdown);
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r1.viewPortItems);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.showAddTag ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showNoItemsFound() ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showTypeToSearch() ? 6 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.loading && ctx_r1.itemsList.filteredItems.length === 0 ? 7 : -1);
  }
}
function NgSelectComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r1.notFoundText, " ");
  }
}
var unescapedHTMLExp = /[&<>"']/g;
var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function escapeHTML(value) {
  return value && hasUnescapedHTMLExp.test(value) ? value.replace(unescapedHTMLExp, (chr) => htmlEscapes[chr]) : value;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isObject(value) {
  return typeof value === "object" && isDefined(value);
}
function isPromise(value) {
  return value instanceof Promise;
}
function isFunction(value) {
  return value instanceof Function;
}
var NgItemLabelDirective = class _NgItemLabelDirective {
  constructor(element) {
    this.element = element;
    this.escape = true;
  }
  ngOnChanges(changes) {
    this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
  }
  static {
    this.ɵfac = function NgItemLabelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgItemLabelDirective)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgItemLabelDirective,
      selectors: [["", "ngItemLabel", ""]],
      inputs: {
        ngItemLabel: "ngItemLabel",
        escape: "escape"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgItemLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[ngItemLabel]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    ngItemLabel: [{
      type: Input
    }],
    escape: [{
      type: Input
    }]
  });
})();
var NgOptionTemplateDirective = class _NgOptionTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgOptionTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOptionTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgOptionTemplateDirective,
      selectors: [["", "ng-option-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptionTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-option-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgOptgroupTemplateDirective = class _NgOptgroupTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgOptgroupTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOptgroupTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgOptgroupTemplateDirective,
      selectors: [["", "ng-optgroup-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptgroupTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-optgroup-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgLabelTemplateDirective = class _NgLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgLabelTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgLabelTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgLabelTemplateDirective,
      selectors: [["", "ng-label-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLabelTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-label-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgMultiLabelTemplateDirective = class _NgMultiLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgMultiLabelTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgMultiLabelTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgMultiLabelTemplateDirective,
      selectors: [["", "ng-multi-label-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgMultiLabelTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-multi-label-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgHeaderTemplateDirective = class _NgHeaderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgHeaderTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgHeaderTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgHeaderTemplateDirective,
      selectors: [["", "ng-header-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgHeaderTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-header-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgFooterTemplateDirective = class _NgFooterTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgFooterTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgFooterTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgFooterTemplateDirective,
      selectors: [["", "ng-footer-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgFooterTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-footer-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgNotFoundTemplateDirective = class _NgNotFoundTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgNotFoundTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgNotFoundTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgNotFoundTemplateDirective,
      selectors: [["", "ng-notfound-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgNotFoundTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-notfound-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgPlaceholderTemplateDirective = class _NgPlaceholderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgPlaceholderTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgPlaceholderTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgPlaceholderTemplateDirective,
      selectors: [["", "ng-placeholder-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPlaceholderTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-placeholder-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgTypeToSearchTemplateDirective = class _NgTypeToSearchTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgTypeToSearchTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgTypeToSearchTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgTypeToSearchTemplateDirective,
      selectors: [["", "ng-typetosearch-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTypeToSearchTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-typetosearch-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgLoadingTextTemplateDirective = class _NgLoadingTextTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgLoadingTextTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgLoadingTextTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgLoadingTextTemplateDirective,
      selectors: [["", "ng-loadingtext-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLoadingTextTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-loadingtext-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgTagTemplateDirective = class _NgTagTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgTagTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgTagTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgTagTemplateDirective,
      selectors: [["", "ng-tag-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTagTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-tag-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgLoadingSpinnerTemplateDirective = class _NgLoadingSpinnerTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgLoadingSpinnerTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgLoadingSpinnerTemplateDirective,
      selectors: [["", "ng-loadingspinner-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLoadingSpinnerTemplateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[ng-loadingspinner-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NgClearButtonTemplateDirective = class _NgClearButtonTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function NgClearButtonTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgClearButtonTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgClearButtonTemplateDirective,
      selectors: [["", "ng-clearbutton-tmp", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClearButtonTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[ng-clearbutton-tmp]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
function newId() {
  return "axxxxxxxxxxx".replace(/[x]/g, () => {
    const val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}
var diacritics = {
  "Ⓐ": "A",
  "Ａ": "A",
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ầ": "A",
  "Ấ": "A",
  "Ẫ": "A",
  "Ẩ": "A",
  "Ã": "A",
  "Ā": "A",
  "Ă": "A",
  "Ằ": "A",
  "Ắ": "A",
  "Ẵ": "A",
  "Ẳ": "A",
  "Ȧ": "A",
  "Ǡ": "A",
  "Ä": "A",
  "Ǟ": "A",
  "Ả": "A",
  "Å": "A",
  "Ǻ": "A",
  "Ǎ": "A",
  "Ȁ": "A",
  "Ȃ": "A",
  "Ạ": "A",
  "Ậ": "A",
  "Ặ": "A",
  "Ḁ": "A",
  "Ą": "A",
  "Ⱥ": "A",
  "Ɐ": "A",
  "Ꜳ": "AA",
  "Æ": "AE",
  "Ǽ": "AE",
  "Ǣ": "AE",
  "Ꜵ": "AO",
  "Ꜷ": "AU",
  "Ꜹ": "AV",
  "Ꜻ": "AV",
  "Ꜽ": "AY",
  "Ⓑ": "B",
  "Ｂ": "B",
  "Ḃ": "B",
  "Ḅ": "B",
  "Ḇ": "B",
  "Ƀ": "B",
  "Ƃ": "B",
  "Ɓ": "B",
  "Ⓒ": "C",
  "Ｃ": "C",
  "Ć": "C",
  "Ĉ": "C",
  "Ċ": "C",
  "Č": "C",
  "Ç": "C",
  "Ḉ": "C",
  "Ƈ": "C",
  "Ȼ": "C",
  "Ꜿ": "C",
  "Ⓓ": "D",
  "Ｄ": "D",
  "Ḋ": "D",
  "Ď": "D",
  "Ḍ": "D",
  "Ḑ": "D",
  "Ḓ": "D",
  "Ḏ": "D",
  "Đ": "D",
  "Ƌ": "D",
  "Ɗ": "D",
  "Ɖ": "D",
  "Ꝺ": "D",
  "Ǳ": "DZ",
  "Ǆ": "DZ",
  "ǲ": "Dz",
  "ǅ": "Dz",
  "Ⓔ": "E",
  "Ｅ": "E",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ề": "E",
  "Ế": "E",
  "Ễ": "E",
  "Ể": "E",
  "Ẽ": "E",
  "Ē": "E",
  "Ḕ": "E",
  "Ḗ": "E",
  "Ĕ": "E",
  "Ė": "E",
  "Ë": "E",
  "Ẻ": "E",
  "Ě": "E",
  "Ȅ": "E",
  "Ȇ": "E",
  "Ẹ": "E",
  "Ệ": "E",
  "Ȩ": "E",
  "Ḝ": "E",
  "Ę": "E",
  "Ḙ": "E",
  "Ḛ": "E",
  "Ɛ": "E",
  "Ǝ": "E",
  "Ⓕ": "F",
  "Ｆ": "F",
  "Ḟ": "F",
  "Ƒ": "F",
  "Ꝼ": "F",
  "Ⓖ": "G",
  "Ｇ": "G",
  "Ǵ": "G",
  "Ĝ": "G",
  "Ḡ": "G",
  "Ğ": "G",
  "Ġ": "G",
  "Ǧ": "G",
  "Ģ": "G",
  "Ǥ": "G",
  "Ɠ": "G",
  "Ꞡ": "G",
  "Ᵹ": "G",
  "Ꝿ": "G",
  "Ⓗ": "H",
  "Ｈ": "H",
  "Ĥ": "H",
  "Ḣ": "H",
  "Ḧ": "H",
  "Ȟ": "H",
  "Ḥ": "H",
  "Ḩ": "H",
  "Ḫ": "H",
  "Ħ": "H",
  "Ⱨ": "H",
  "Ⱶ": "H",
  "Ɥ": "H",
  "Ⓘ": "I",
  "Ｉ": "I",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ĩ": "I",
  "Ī": "I",
  "Ĭ": "I",
  "İ": "I",
  "Ï": "I",
  "Ḯ": "I",
  "Ỉ": "I",
  "Ǐ": "I",
  "Ȉ": "I",
  "Ȋ": "I",
  "Ị": "I",
  "Į": "I",
  "Ḭ": "I",
  "Ɨ": "I",
  "Ⓙ": "J",
  "Ｊ": "J",
  "Ĵ": "J",
  "Ɉ": "J",
  "Ⓚ": "K",
  "Ｋ": "K",
  "Ḱ": "K",
  "Ǩ": "K",
  "Ḳ": "K",
  "Ķ": "K",
  "Ḵ": "K",
  "Ƙ": "K",
  "Ⱪ": "K",
  "Ꝁ": "K",
  "Ꝃ": "K",
  "Ꝅ": "K",
  "Ꞣ": "K",
  "Ⓛ": "L",
  "Ｌ": "L",
  "Ŀ": "L",
  "Ĺ": "L",
  "Ľ": "L",
  "Ḷ": "L",
  "Ḹ": "L",
  "Ļ": "L",
  "Ḽ": "L",
  "Ḻ": "L",
  "Ł": "L",
  "Ƚ": "L",
  "Ɫ": "L",
  "Ⱡ": "L",
  "Ꝉ": "L",
  "Ꝇ": "L",
  "Ꞁ": "L",
  "Ǉ": "LJ",
  "ǈ": "Lj",
  "Ⓜ": "M",
  "Ｍ": "M",
  "Ḿ": "M",
  "Ṁ": "M",
  "Ṃ": "M",
  "Ɱ": "M",
  "Ɯ": "M",
  "Ⓝ": "N",
  "Ｎ": "N",
  "Ǹ": "N",
  "Ń": "N",
  "Ñ": "N",
  "Ṅ": "N",
  "Ň": "N",
  "Ṇ": "N",
  "Ņ": "N",
  "Ṋ": "N",
  "Ṉ": "N",
  "Ƞ": "N",
  "Ɲ": "N",
  "Ꞑ": "N",
  "Ꞥ": "N",
  "Ǌ": "NJ",
  "ǋ": "Nj",
  "Ⓞ": "O",
  "Ｏ": "O",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Ồ": "O",
  "Ố": "O",
  "Ỗ": "O",
  "Ổ": "O",
  "Õ": "O",
  "Ṍ": "O",
  "Ȭ": "O",
  "Ṏ": "O",
  "Ō": "O",
  "Ṑ": "O",
  "Ṓ": "O",
  "Ŏ": "O",
  "Ȯ": "O",
  "Ȱ": "O",
  "Ö": "O",
  "Ȫ": "O",
  "Ỏ": "O",
  "Ő": "O",
  "Ǒ": "O",
  "Ȍ": "O",
  "Ȏ": "O",
  "Ơ": "O",
  "Ờ": "O",
  "Ớ": "O",
  "Ỡ": "O",
  "Ở": "O",
  "Ợ": "O",
  "Ọ": "O",
  "Ộ": "O",
  "Ǫ": "O",
  "Ǭ": "O",
  "Ø": "O",
  "Ǿ": "O",
  "Ɔ": "O",
  "Ɵ": "O",
  "Ꝋ": "O",
  "Ꝍ": "O",
  "Ƣ": "OI",
  "Ꝏ": "OO",
  "Ȣ": "OU",
  "Ⓟ": "P",
  "Ｐ": "P",
  "Ṕ": "P",
  "Ṗ": "P",
  "Ƥ": "P",
  "Ᵽ": "P",
  "Ꝑ": "P",
  "Ꝓ": "P",
  "Ꝕ": "P",
  "Ⓠ": "Q",
  "Ｑ": "Q",
  "Ꝗ": "Q",
  "Ꝙ": "Q",
  "Ɋ": "Q",
  "Ⓡ": "R",
  "Ｒ": "R",
  "Ŕ": "R",
  "Ṙ": "R",
  "Ř": "R",
  "Ȑ": "R",
  "Ȓ": "R",
  "Ṛ": "R",
  "Ṝ": "R",
  "Ŗ": "R",
  "Ṟ": "R",
  "Ɍ": "R",
  "Ɽ": "R",
  "Ꝛ": "R",
  "Ꞧ": "R",
  "Ꞃ": "R",
  "Ⓢ": "S",
  "Ｓ": "S",
  "ẞ": "S",
  "Ś": "S",
  "Ṥ": "S",
  "Ŝ": "S",
  "Ṡ": "S",
  "Š": "S",
  "Ṧ": "S",
  "Ṣ": "S",
  "Ṩ": "S",
  "Ș": "S",
  "Ş": "S",
  "Ȿ": "S",
  "Ꞩ": "S",
  "Ꞅ": "S",
  "Ⓣ": "T",
  "Ｔ": "T",
  "Ṫ": "T",
  "Ť": "T",
  "Ṭ": "T",
  "Ț": "T",
  "Ţ": "T",
  "Ṱ": "T",
  "Ṯ": "T",
  "Ŧ": "T",
  "Ƭ": "T",
  "Ʈ": "T",
  "Ⱦ": "T",
  "Ꞇ": "T",
  "Ꜩ": "TZ",
  "Ⓤ": "U",
  "Ｕ": "U",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ũ": "U",
  "Ṹ": "U",
  "Ū": "U",
  "Ṻ": "U",
  "Ŭ": "U",
  "Ü": "U",
  "Ǜ": "U",
  "Ǘ": "U",
  "Ǖ": "U",
  "Ǚ": "U",
  "Ủ": "U",
  "Ů": "U",
  "Ű": "U",
  "Ǔ": "U",
  "Ȕ": "U",
  "Ȗ": "U",
  "Ư": "U",
  "Ừ": "U",
  "Ứ": "U",
  "Ữ": "U",
  "Ử": "U",
  "Ự": "U",
  "Ụ": "U",
  "Ṳ": "U",
  "Ų": "U",
  "Ṷ": "U",
  "Ṵ": "U",
  "Ʉ": "U",
  "Ⓥ": "V",
  "Ｖ": "V",
  "Ṽ": "V",
  "Ṿ": "V",
  "Ʋ": "V",
  "Ꝟ": "V",
  "Ʌ": "V",
  "Ꝡ": "VY",
  "Ⓦ": "W",
  "Ｗ": "W",
  "Ẁ": "W",
  "Ẃ": "W",
  "Ŵ": "W",
  "Ẇ": "W",
  "Ẅ": "W",
  "Ẉ": "W",
  "Ⱳ": "W",
  "Ⓧ": "X",
  "Ｘ": "X",
  "Ẋ": "X",
  "Ẍ": "X",
  "Ⓨ": "Y",
  "Ｙ": "Y",
  "Ỳ": "Y",
  "Ý": "Y",
  "Ŷ": "Y",
  "Ỹ": "Y",
  "Ȳ": "Y",
  "Ẏ": "Y",
  "Ÿ": "Y",
  "Ỷ": "Y",
  "Ỵ": "Y",
  "Ƴ": "Y",
  "Ɏ": "Y",
  "Ỿ": "Y",
  "Ⓩ": "Z",
  "Ｚ": "Z",
  "Ź": "Z",
  "Ẑ": "Z",
  "Ż": "Z",
  "Ž": "Z",
  "Ẓ": "Z",
  "Ẕ": "Z",
  "Ƶ": "Z",
  "Ȥ": "Z",
  "Ɀ": "Z",
  "Ⱬ": "Z",
  "Ꝣ": "Z",
  "ⓐ": "a",
  "ａ": "a",
  "ẚ": "a",
  "à": "a",
  "á": "a",
  "â": "a",
  "ầ": "a",
  "ấ": "a",
  "ẫ": "a",
  "ẩ": "a",
  "ã": "a",
  "ā": "a",
  "ă": "a",
  "ằ": "a",
  "ắ": "a",
  "ẵ": "a",
  "ẳ": "a",
  "ȧ": "a",
  "ǡ": "a",
  "ä": "a",
  "ǟ": "a",
  "ả": "a",
  "å": "a",
  "ǻ": "a",
  "ǎ": "a",
  "ȁ": "a",
  "ȃ": "a",
  "ạ": "a",
  "ậ": "a",
  "ặ": "a",
  "ḁ": "a",
  "ą": "a",
  "ⱥ": "a",
  "ɐ": "a",
  "ꜳ": "aa",
  "æ": "ae",
  "ǽ": "ae",
  "ǣ": "ae",
  "ꜵ": "ao",
  "ꜷ": "au",
  "ꜹ": "av",
  "ꜻ": "av",
  "ꜽ": "ay",
  "ⓑ": "b",
  "ｂ": "b",
  "ḃ": "b",
  "ḅ": "b",
  "ḇ": "b",
  "ƀ": "b",
  "ƃ": "b",
  "ɓ": "b",
  "ⓒ": "c",
  "ｃ": "c",
  "ć": "c",
  "ĉ": "c",
  "ċ": "c",
  "č": "c",
  "ç": "c",
  "ḉ": "c",
  "ƈ": "c",
  "ȼ": "c",
  "ꜿ": "c",
  "ↄ": "c",
  "ⓓ": "d",
  "ｄ": "d",
  "ḋ": "d",
  "ď": "d",
  "ḍ": "d",
  "ḑ": "d",
  "ḓ": "d",
  "ḏ": "d",
  "đ": "d",
  "ƌ": "d",
  "ɖ": "d",
  "ɗ": "d",
  "ꝺ": "d",
  "ǳ": "dz",
  "ǆ": "dz",
  "ⓔ": "e",
  "ｅ": "e",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ề": "e",
  "ế": "e",
  "ễ": "e",
  "ể": "e",
  "ẽ": "e",
  "ē": "e",
  "ḕ": "e",
  "ḗ": "e",
  "ĕ": "e",
  "ė": "e",
  "ë": "e",
  "ẻ": "e",
  "ě": "e",
  "ȅ": "e",
  "ȇ": "e",
  "ẹ": "e",
  "ệ": "e",
  "ȩ": "e",
  "ḝ": "e",
  "ę": "e",
  "ḙ": "e",
  "ḛ": "e",
  "ɇ": "e",
  "ɛ": "e",
  "ǝ": "e",
  "ⓕ": "f",
  "ｆ": "f",
  "ḟ": "f",
  "ƒ": "f",
  "ꝼ": "f",
  "ⓖ": "g",
  "ｇ": "g",
  "ǵ": "g",
  "ĝ": "g",
  "ḡ": "g",
  "ğ": "g",
  "ġ": "g",
  "ǧ": "g",
  "ģ": "g",
  "ǥ": "g",
  "ɠ": "g",
  "ꞡ": "g",
  "ᵹ": "g",
  "ꝿ": "g",
  "ⓗ": "h",
  "ｈ": "h",
  "ĥ": "h",
  "ḣ": "h",
  "ḧ": "h",
  "ȟ": "h",
  "ḥ": "h",
  "ḩ": "h",
  "ḫ": "h",
  "ẖ": "h",
  "ħ": "h",
  "ⱨ": "h",
  "ⱶ": "h",
  "ɥ": "h",
  "ƕ": "hv",
  "ⓘ": "i",
  "ｉ": "i",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ĩ": "i",
  "ī": "i",
  "ĭ": "i",
  "ï": "i",
  "ḯ": "i",
  "ỉ": "i",
  "ǐ": "i",
  "ȉ": "i",
  "ȋ": "i",
  "ị": "i",
  "į": "i",
  "ḭ": "i",
  "ɨ": "i",
  "ı": "i",
  "ⓙ": "j",
  "ｊ": "j",
  "ĵ": "j",
  "ǰ": "j",
  "ɉ": "j",
  "ⓚ": "k",
  "ｋ": "k",
  "ḱ": "k",
  "ǩ": "k",
  "ḳ": "k",
  "ķ": "k",
  "ḵ": "k",
  "ƙ": "k",
  "ⱪ": "k",
  "ꝁ": "k",
  "ꝃ": "k",
  "ꝅ": "k",
  "ꞣ": "k",
  "ⓛ": "l",
  "ｌ": "l",
  "ŀ": "l",
  "ĺ": "l",
  "ľ": "l",
  "ḷ": "l",
  "ḹ": "l",
  "ļ": "l",
  "ḽ": "l",
  "ḻ": "l",
  "ſ": "l",
  "ł": "l",
  "ƚ": "l",
  "ɫ": "l",
  "ⱡ": "l",
  "ꝉ": "l",
  "ꞁ": "l",
  "ꝇ": "l",
  "ǉ": "lj",
  "ⓜ": "m",
  "ｍ": "m",
  "ḿ": "m",
  "ṁ": "m",
  "ṃ": "m",
  "ɱ": "m",
  "ɯ": "m",
  "ⓝ": "n",
  "ｎ": "n",
  "ǹ": "n",
  "ń": "n",
  "ñ": "n",
  "ṅ": "n",
  "ň": "n",
  "ṇ": "n",
  "ņ": "n",
  "ṋ": "n",
  "ṉ": "n",
  "ƞ": "n",
  "ɲ": "n",
  "ŉ": "n",
  "ꞑ": "n",
  "ꞥ": "n",
  "ǌ": "nj",
  "ⓞ": "o",
  "ｏ": "o",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "ồ": "o",
  "ố": "o",
  "ỗ": "o",
  "ổ": "o",
  "õ": "o",
  "ṍ": "o",
  "ȭ": "o",
  "ṏ": "o",
  "ō": "o",
  "ṑ": "o",
  "ṓ": "o",
  "ŏ": "o",
  "ȯ": "o",
  "ȱ": "o",
  "ö": "o",
  "ȫ": "o",
  "ỏ": "o",
  "ő": "o",
  "ǒ": "o",
  "ȍ": "o",
  "ȏ": "o",
  "ơ": "o",
  "ờ": "o",
  "ớ": "o",
  "ỡ": "o",
  "ở": "o",
  "ợ": "o",
  "ọ": "o",
  "ộ": "o",
  "ǫ": "o",
  "ǭ": "o",
  "ø": "o",
  "ǿ": "o",
  "ɔ": "o",
  "ꝋ": "o",
  "ꝍ": "o",
  "ɵ": "o",
  "ƣ": "oi",
  "ȣ": "ou",
  "ꝏ": "oo",
  "ⓟ": "p",
  "ｐ": "p",
  "ṕ": "p",
  "ṗ": "p",
  "ƥ": "p",
  "ᵽ": "p",
  "ꝑ": "p",
  "ꝓ": "p",
  "ꝕ": "p",
  "ⓠ": "q",
  "ｑ": "q",
  "ɋ": "q",
  "ꝗ": "q",
  "ꝙ": "q",
  "ⓡ": "r",
  "ｒ": "r",
  "ŕ": "r",
  "ṙ": "r",
  "ř": "r",
  "ȑ": "r",
  "ȓ": "r",
  "ṛ": "r",
  "ṝ": "r",
  "ŗ": "r",
  "ṟ": "r",
  "ɍ": "r",
  "ɽ": "r",
  "ꝛ": "r",
  "ꞧ": "r",
  "ꞃ": "r",
  "ⓢ": "s",
  "ｓ": "s",
  "ß": "s",
  "ś": "s",
  "ṥ": "s",
  "ŝ": "s",
  "ṡ": "s",
  "š": "s",
  "ṧ": "s",
  "ṣ": "s",
  "ṩ": "s",
  "ș": "s",
  "ş": "s",
  "ȿ": "s",
  "ꞩ": "s",
  "ꞅ": "s",
  "ẛ": "s",
  "ⓣ": "t",
  "ｔ": "t",
  "ṫ": "t",
  "ẗ": "t",
  "ť": "t",
  "ṭ": "t",
  "ț": "t",
  "ţ": "t",
  "ṱ": "t",
  "ṯ": "t",
  "ŧ": "t",
  "ƭ": "t",
  "ʈ": "t",
  "ⱦ": "t",
  "ꞇ": "t",
  "ꜩ": "tz",
  "ⓤ": "u",
  "ｕ": "u",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ũ": "u",
  "ṹ": "u",
  "ū": "u",
  "ṻ": "u",
  "ŭ": "u",
  "ü": "u",
  "ǜ": "u",
  "ǘ": "u",
  "ǖ": "u",
  "ǚ": "u",
  "ủ": "u",
  "ů": "u",
  "ű": "u",
  "ǔ": "u",
  "ȕ": "u",
  "ȗ": "u",
  "ư": "u",
  "ừ": "u",
  "ứ": "u",
  "ữ": "u",
  "ử": "u",
  "ự": "u",
  "ụ": "u",
  "ṳ": "u",
  "ų": "u",
  "ṷ": "u",
  "ṵ": "u",
  "ʉ": "u",
  "ⓥ": "v",
  "ｖ": "v",
  "ṽ": "v",
  "ṿ": "v",
  "ʋ": "v",
  "ꝟ": "v",
  "ʌ": "v",
  "ꝡ": "vy",
  "ⓦ": "w",
  "ｗ": "w",
  "ẁ": "w",
  "ẃ": "w",
  "ŵ": "w",
  "ẇ": "w",
  "ẅ": "w",
  "ẘ": "w",
  "ẉ": "w",
  "ⱳ": "w",
  "ⓧ": "x",
  "ｘ": "x",
  "ẋ": "x",
  "ẍ": "x",
  "ⓨ": "y",
  "ｙ": "y",
  "ỳ": "y",
  "ý": "y",
  "ŷ": "y",
  "ỹ": "y",
  "ȳ": "y",
  "ẏ": "y",
  "ÿ": "y",
  "ỷ": "y",
  "ẙ": "y",
  "ỵ": "y",
  "ƴ": "y",
  "ɏ": "y",
  "ỿ": "y",
  "ⓩ": "z",
  "ｚ": "z",
  "ź": "z",
  "ẑ": "z",
  "ż": "z",
  "ž": "z",
  "ẓ": "z",
  "ẕ": "z",
  "ƶ": "z",
  "ȥ": "z",
  "ɀ": "z",
  "ⱬ": "z",
  "ꝣ": "z",
  "Ά": "Α",
  "Έ": "Ε",
  "Ή": "Η",
  "Ί": "Ι",
  "Ϊ": "Ι",
  "Ό": "Ο",
  "Ύ": "Υ",
  "Ϋ": "Υ",
  "Ώ": "Ω",
  "ά": "α",
  "έ": "ε",
  "ή": "η",
  "ί": "ι",
  "ϊ": "ι",
  "ΐ": "ι",
  "ό": "ο",
  "ύ": "υ",
  "ϋ": "υ",
  "ΰ": "υ",
  "ω": "ω",
  "ς": "σ"
};
function stripSpecialChars(text) {
  const match = (a) => diacritics[a] || a;
  return text.replace(/[^\u0000-\u007E]/g, match);
}
var ItemsList = class {
  constructor(_ngSelect, _selectionModel) {
    this._ngSelect = _ngSelect;
    this._selectionModel = _selectionModel;
    this._items = [];
    this._filteredItems = [];
    this._markedIndex = -1;
  }
  get items() {
    return this._items;
  }
  get filteredItems() {
    return this._filteredItems;
  }
  get markedIndex() {
    return this._markedIndex;
  }
  get selectedItems() {
    return this._selectionModel.value;
  }
  get markedItem() {
    return this._filteredItems[this._markedIndex];
  }
  get noItemsToSelect() {
    return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
  }
  get maxItemsSelected() {
    return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
  }
  get lastSelectedItem() {
    let i = this.selectedItems.length - 1;
    for (; i >= 0; i--) {
      const item = this.selectedItems[i];
      if (!item.disabled) {
        return item;
      }
    }
    return null;
  }
  setItems(items) {
    this._items = items.map((item, index) => this.mapItem(item, index));
    if (this._ngSelect.groupBy) {
      this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
      this._items = this._flatten(this._groups);
    } else {
      this._groups = /* @__PURE__ */ new Map();
      this._groups.set(void 0, this._items);
    }
    this._filteredItems = [...this._items];
  }
  select(item) {
    if (item.selected || this.maxItemsSelected) {
      return;
    }
    const multiple = this._ngSelect.multiple;
    if (!multiple) {
      this.clearSelected();
    }
    this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
    if (this._ngSelect.hideSelected) {
      this._hideSelected(item);
    }
  }
  unselect(item) {
    if (!item.selected) {
      return;
    }
    this._selectionModel.unselect(item, this._ngSelect.multiple);
    if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
      this._showSelected(item);
    }
  }
  findItem(value) {
    let findBy;
    if (this._ngSelect.compareWith) {
      findBy = (item) => this._ngSelect.compareWith(item.value, value);
    } else if (this._ngSelect.bindValue) {
      findBy = (item) => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value;
    } else {
      findBy = (item) => item.value === value || !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel);
    }
    return this._items.find((item) => findBy(item));
  }
  addItem(item) {
    const option = this.mapItem(item, this._items.length);
    this._items.push(option);
    this._filteredItems.push(option);
    return option;
  }
  clearSelected(keepDisabled = false) {
    this._selectionModel.clear(keepDisabled);
    this._items.forEach((item) => {
      item.selected = keepDisabled && item.selected && item.disabled;
      item.marked = false;
    });
    if (this._ngSelect.hideSelected) {
      this.resetFilteredItems();
    }
  }
  findByLabel(term) {
    term = stripSpecialChars(term).toLocaleLowerCase();
    return this.filteredItems.find((item) => {
      const label = stripSpecialChars(item.label).toLocaleLowerCase();
      return label.substr(0, term.length) === term;
    });
  }
  filter(term) {
    if (!term) {
      this.resetFilteredItems();
      return;
    }
    this._filteredItems = [];
    term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
    const match = this._ngSelect.searchFn || this._defaultSearchFn;
    const hideSelected = this._ngSelect.hideSelected;
    for (const key of Array.from(this._groups.keys())) {
      const matchedItems = [];
      for (const item of this._groups.get(key)) {
        if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
          continue;
        }
        const searchItem = this._ngSelect.searchFn ? item.value : item;
        if (match(term, searchItem)) {
          matchedItems.push(item);
        }
      }
      if (matchedItems.length > 0) {
        const [last] = matchedItems.slice(-1);
        if (last.parent) {
          const head = this._items.find((x) => x === last.parent);
          this._filteredItems.push(head);
        }
        this._filteredItems.push(...matchedItems);
      }
    }
  }
  resetFilteredItems() {
    if (this._filteredItems.length === this._items.length) {
      return;
    }
    if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
      this._filteredItems = this._items.filter((x) => !x.selected);
    } else {
      this._filteredItems = this._items;
    }
  }
  unmarkItem() {
    this._markedIndex = -1;
  }
  markNextItem() {
    this._stepToItem(1);
  }
  markPreviousItem() {
    this._stepToItem(-1);
  }
  markItem(item) {
    this._markedIndex = this._filteredItems.indexOf(item);
  }
  markSelectedOrDefault(markDefault) {
    if (this._filteredItems.length === 0) {
      return;
    }
    const lastMarkedIndex = this._getLastMarkedIndex();
    if (lastMarkedIndex > -1) {
      this._markedIndex = lastMarkedIndex;
    } else {
      this._markedIndex = markDefault ? this.filteredItems.findIndex((x) => !x.disabled) : -1;
    }
  }
  resolveNested(option, key) {
    if (!isObject(option)) {
      return option;
    }
    if (key.indexOf(".") === -1) {
      return option[key];
    } else {
      const keys = key.split(".");
      let value = option;
      for (let i = 0, len = keys.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[keys[i]];
      }
      return value;
    }
  }
  mapItem(item, index) {
    const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
    const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
    return {
      index,
      label: isDefined(label) ? label.toString() : "",
      value,
      disabled: item.disabled,
      htmlId: `${this._ngSelect.dropdownId}-${index}`
    };
  }
  mapSelectedItems() {
    const multiple = this._ngSelect.multiple;
    for (const selected of this.selectedItems) {
      const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
      const item = isDefined(value) ? this.findItem(value) : null;
      this._selectionModel.unselect(selected, multiple);
      this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
    }
    if (this._ngSelect.hideSelected) {
      this._filteredItems = this.filteredItems.filter((x) => this.selectedItems.indexOf(x) === -1);
    }
  }
  _showSelected(item) {
    this._filteredItems.push(item);
    if (item.parent) {
      const parent = item.parent;
      const parentExists = this._filteredItems.find((x) => x === parent);
      if (!parentExists) {
        this._filteredItems.push(parent);
      }
    } else if (item.children) {
      for (const child of item.children) {
        child.selected = false;
        this._filteredItems.push(child);
      }
    }
    this._filteredItems = [...this._filteredItems.sort((a, b) => a.index - b.index)];
  }
  _hideSelected(item) {
    this._filteredItems = this._filteredItems.filter((x) => x !== item);
    if (item.parent) {
      const children = item.parent.children;
      if (children.every((x) => x.selected)) {
        this._filteredItems = this._filteredItems.filter((x) => x !== item.parent);
      }
    } else if (item.children) {
      this._filteredItems = this.filteredItems.filter((x) => x.parent !== item);
    }
  }
  _defaultSearchFn(search, opt) {
    const label = stripSpecialChars(opt.label).toLocaleLowerCase();
    return label.indexOf(search) > -1;
  }
  _getNextItemIndex(steps) {
    if (steps > 0) {
      return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
    }
    return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
  }
  _stepToItem(steps) {
    if (this._filteredItems.length === 0 || this._filteredItems.every((x) => x.disabled)) {
      return;
    }
    this._markedIndex = this._getNextItemIndex(steps);
    if (this.markedItem.disabled) {
      this._stepToItem(steps);
    }
  }
  _getLastMarkedIndex() {
    if (this._ngSelect.hideSelected) {
      return -1;
    }
    if (this._markedIndex > -1 && this.markedItem === void 0) {
      return -1;
    }
    const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
    if (this.lastSelectedItem && selectedIndex < 0) {
      return -1;
    }
    return Math.max(this.markedIndex, selectedIndex);
  }
  _groupBy(items, prop) {
    const groups = /* @__PURE__ */ new Map();
    if (items.length === 0) {
      return groups;
    }
    if (Array.isArray(items[0].value[prop])) {
      for (const item of items) {
        const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
        groups.set(item, children);
      }
      return groups;
    }
    const isFnKey = isFunction(this._ngSelect.groupBy);
    const keyFn = (item) => {
      const key = isFnKey ? prop(item.value) : item.value[prop];
      return isDefined(key) ? key : void 0;
    };
    for (const item of items) {
      const key = keyFn(item);
      const group = groups.get(key);
      if (group) {
        group.push(item);
      } else {
        groups.set(key, [item]);
      }
    }
    return groups;
  }
  _flatten(groups) {
    const isGroupByFn = isFunction(this._ngSelect.groupBy);
    const items = [];
    for (const key of Array.from(groups.keys())) {
      let i = items.length;
      if (key === void 0) {
        const withoutGroup = groups.get(void 0) || [];
        items.push(...withoutGroup.map((x) => {
          x.index = i++;
          return x;
        }));
        continue;
      }
      const isObjectKey = isObject(key);
      const parent = {
        label: isObjectKey ? "" : String(key),
        children: void 0,
        parent: null,
        index: i++,
        disabled: !this._ngSelect.selectableGroup,
        htmlId: newId()
      };
      const groupKey = isGroupByFn ? this._ngSelect.bindLabel : this._ngSelect.groupBy;
      const groupValue = this._ngSelect.groupValue || (() => {
        if (isObjectKey) {
          return key.value;
        }
        return {
          [groupKey]: key
        };
      });
      const children = groups.get(key).map((x) => {
        x.parent = parent;
        x.children = void 0;
        x.index = i++;
        return x;
      });
      parent.children = children;
      parent.value = groupValue(key, children.map((x) => x.value));
      items.push(parent);
      items.push(...children);
    }
    return items;
  }
};
var NgDropdownPanelService = class _NgDropdownPanelService {
  constructor() {
    this._dimensions = {
      itemHeight: 0,
      panelHeight: 0,
      itemsPerViewport: 0
    };
  }
  get dimensions() {
    return this._dimensions;
  }
  calculateItems(scrollPos, itemsLength, buffer) {
    const d = this._dimensions;
    const scrollHeight = d.itemHeight * itemsLength;
    const scrollTop = Math.max(0, scrollPos);
    const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
    let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
    const maxStartEnd = end;
    const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
    let start = Math.min(maxStart, Math.floor(indexByScrollTop));
    let topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
    topPadding = !isNaN(topPadding) ? topPadding : 0;
    start = !isNaN(start) ? start : -1;
    end = !isNaN(end) ? end : -1;
    start -= buffer;
    start = Math.max(0, start);
    end += buffer;
    end = Math.min(itemsLength, end);
    return {
      topPadding,
      scrollHeight,
      start,
      end
    };
  }
  setDimensions(itemHeight, panelHeight) {
    const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
    this._dimensions = {
      itemHeight,
      panelHeight,
      itemsPerViewport
    };
  }
  getScrollTo(itemTop, itemHeight, lastScroll) {
    const {
      panelHeight
    } = this.dimensions;
    const itemBottom = itemTop + itemHeight;
    const top = lastScroll;
    const bottom = top + panelHeight;
    if (panelHeight >= itemBottom && lastScroll === itemTop) {
      return null;
    }
    if (itemBottom > bottom) {
      return top + itemBottom - bottom;
    } else if (itemTop <= top) {
      return itemTop;
    }
    return null;
  }
  static {
    this.ɵfac = function NgDropdownPanelService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgDropdownPanelService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgDropdownPanelService,
      factory: _NgDropdownPanelService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDropdownPanelService, [{
    type: Injectable
  }], null, null);
})();
var CSS_POSITIONS = ["top", "right", "bottom", "left"];
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var NgDropdownPanelComponent = class _NgDropdownPanelComponent {
  constructor(_renderer, _zone, _panelService, _elementRef, _document) {
    this._renderer = _renderer;
    this._zone = _zone;
    this._panelService = _panelService;
    this._document = _document;
    this.items = [];
    this.position = "auto";
    this.virtualScroll = false;
    this.filterValue = null;
    this.ariaLabelDropdown = input(null);
    this.update = new EventEmitter();
    this.scroll = new EventEmitter();
    this.scrollToEnd = new EventEmitter();
    this.outsideClick = new EventEmitter();
    this._destroy$ = new Subject();
    this._scrollToEndFired = false;
    this._updateScrollHeight = false;
    this._lastScrollPosition = 0;
    this._dropdown = _elementRef.nativeElement;
  }
  get currentPosition() {
    return this._currentPosition;
  }
  get itemsLength() {
    return this._itemsLength;
  }
  set itemsLength(value) {
    if (value !== this._itemsLength) {
      this._itemsLength = value;
      this._onItemsLengthChanged();
    }
  }
  get _startOffset() {
    if (this.markedItem) {
      const {
        itemHeight,
        panelHeight
      } = this._panelService.dimensions;
      const offset = this.markedItem.index * itemHeight;
      return panelHeight > offset ? 0 : offset;
    }
    return 0;
  }
  ngOnInit() {
    this._select = this._dropdown.parentElement;
    this._virtualPadding = this.paddingElementRef.nativeElement;
    this._scrollablePanel = this.scrollElementRef.nativeElement;
    this._contentPanel = this.contentElementRef.nativeElement;
    this._handleScroll();
    this._handleOutsideClick();
    this._appendDropdown();
    this._setupMousedownListener();
  }
  ngOnChanges(changes) {
    if (changes.items) {
      const change = changes.items;
      this._onItemsChange(change.currentValue, change.firstChange);
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroy$.unsubscribe();
    if (this.appendTo) {
      this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
    }
  }
  scrollTo(option, startFromOption = false) {
    if (!option) {
      return;
    }
    const index = this.items.indexOf(option);
    if (index < 0 || index >= this.itemsLength) {
      return;
    }
    let scrollTo;
    if (this.virtualScroll) {
      const itemHeight = this._panelService.dimensions.itemHeight;
      scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
    } else {
      const item = this._dropdown.querySelector(`#${option.htmlId}`);
      const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
      scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
    }
    if (isDefined(scrollTo)) {
      this._scrollablePanel.scrollTop = scrollTo;
    }
  }
  scrollToTag() {
    const panel = this._scrollablePanel;
    panel.scrollTop = panel.scrollHeight - panel.clientHeight;
  }
  adjustPosition() {
    this._updateYPosition();
  }
  _handleDropdownPosition() {
    this._currentPosition = this._calculateCurrentPosition(this._dropdown);
    if (CSS_POSITIONS.includes(this._currentPosition)) {
      this._updateDropdownClass(this._currentPosition);
    } else {
      this._updateDropdownClass("bottom");
    }
    if (this.appendTo) {
      this._updateYPosition();
    }
    this._dropdown.style.opacity = "1";
  }
  _updateDropdownClass(currentPosition) {
    CSS_POSITIONS.forEach((position) => {
      const REMOVE_CSS_CLASS = `ng-select-${position}`;
      this._renderer.removeClass(this._dropdown, REMOVE_CSS_CLASS);
      this._renderer.removeClass(this._select, REMOVE_CSS_CLASS);
    });
    const ADD_CSS_CLASS = `ng-select-${currentPosition}`;
    this._renderer.addClass(this._dropdown, ADD_CSS_CLASS);
    this._renderer.addClass(this._select, ADD_CSS_CLASS);
  }
  _handleScroll() {
    this._zone.runOutsideAngular(() => {
      fromEvent(this.scrollElementRef.nativeElement, "scroll").pipe(takeUntil(this._destroy$), auditTime(0, SCROLL_SCHEDULER)).subscribe((e) => {
        const path = e.path || e.composedPath && e.composedPath();
        if (!path || path.length === 0 && !e.target) {
          return;
        }
        const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
        this._onContentScrolled(scrollTop);
      });
    });
  }
  _handleOutsideClick() {
    if (!this._document) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      merge(fromEvent(this._document, "touchstart", {
        capture: true
      }), fromEvent(this._document, "click", {
        capture: true
      })).pipe(takeUntil(this._destroy$)).subscribe(($event) => this._checkToClose($event));
    });
  }
  _checkToClose($event) {
    if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
      return;
    }
    const path = $event.path || $event.composedPath && $event.composedPath();
    if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
      return;
    }
    this._zone.run(() => this.outsideClick.emit());
  }
  _onItemsChange(items, firstChange) {
    this.items = items || [];
    this._scrollToEndFired = false;
    this.itemsLength = items.length;
    if (this.virtualScroll) {
      this._updateItemsRange(firstChange);
    } else {
      this._setVirtualHeight();
      this._updateItems(firstChange);
    }
  }
  _updateItems(firstChange) {
    this.update.emit(this.items);
    if (firstChange === false) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        const panelHeight = this._scrollablePanel.clientHeight;
        this._panelService.setDimensions(0, panelHeight);
        this._handleDropdownPosition();
        this.scrollTo(this.markedItem, firstChange);
      });
    });
  }
  _updateItemsRange(firstChange) {
    this._zone.runOutsideAngular(() => {
      this._measureDimensions().then(() => {
        if (firstChange) {
          this._renderItemsRange(this._startOffset);
          this._handleDropdownPosition();
        } else {
          this._renderItemsRange();
        }
      });
    });
  }
  _onContentScrolled(scrollTop) {
    if (this.virtualScroll) {
      this._renderItemsRange(scrollTop);
    }
    this._lastScrollPosition = scrollTop;
    this._fireScrollToEnd(scrollTop);
  }
  _updateVirtualHeight(height) {
    if (this._updateScrollHeight) {
      this._virtualPadding.style.height = `${height}px`;
      this._updateScrollHeight = false;
    }
  }
  _setVirtualHeight() {
    if (!this._virtualPadding) {
      return;
    }
    this._virtualPadding.style.height = `0px`;
  }
  _onItemsLengthChanged() {
    this._updateScrollHeight = true;
  }
  _renderItemsRange(scrollTop = null) {
    if (scrollTop && this._lastScrollPosition === scrollTop) {
      return;
    }
    scrollTop = scrollTop || this._scrollablePanel.scrollTop;
    const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
    this._updateVirtualHeight(range.scrollHeight);
    this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
    this._zone.run(() => {
      this.update.emit(this.items.slice(range.start, range.end));
      this.scroll.emit({
        start: range.start,
        end: range.end
      });
    });
    if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
      this._scrollablePanel.scrollTop = scrollTop;
      this._lastScrollPosition = scrollTop;
    }
  }
  _measureDimensions() {
    if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
      return Promise.resolve(this._panelService.dimensions);
    }
    const [first] = this.items;
    this.update.emit([first]);
    return Promise.resolve().then(() => {
      const option = this._dropdown.querySelector(`#${first.htmlId}`);
      const optionHeight = option.clientHeight;
      this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
      const panelHeight = this._scrollablePanel.clientHeight;
      this._panelService.setDimensions(optionHeight, panelHeight);
      return this._panelService.dimensions;
    });
  }
  _fireScrollToEnd(scrollTop) {
    if (this._scrollToEndFired || scrollTop === 0) {
      return;
    }
    const padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;
    if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
      this._zone.run(() => this.scrollToEnd.emit());
      this._scrollToEndFired = true;
    }
  }
  _calculateCurrentPosition(dropdownEl) {
    if (this.position !== "auto") {
      return this.position;
    }
    const selectRect = this._select.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const offsetTop = selectRect.top + window.pageYOffset;
    const height = selectRect.height;
    const dropdownHeight = dropdownEl.getBoundingClientRect().height;
    if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
      return "top";
    } else {
      return "bottom";
    }
  }
  _appendDropdown() {
    if (!this.appendTo) {
      return;
    }
    this._parent = this._dropdown.shadowRoot ? this._dropdown.shadowRoot.querySelector(this.appendTo) : document.querySelector(this.appendTo);
    if (!this._parent) {
      throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
    }
    this._updateXPosition();
    this._parent.appendChild(this._dropdown);
  }
  _updateXPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const offsetLeft = select.left - parent.left;
    this._dropdown.style.left = offsetLeft + "px";
    this._dropdown.style.width = select.width + "px";
    this._dropdown.style.minWidth = select.width + "px";
  }
  _updateYPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const delta = select.height;
    if (this._currentPosition === "top") {
      const offsetBottom = parent.bottom - select.bottom;
      this._dropdown.style.bottom = offsetBottom + delta + "px";
      this._dropdown.style.top = "auto";
    } else if (this._currentPosition === "bottom") {
      const offsetTop = select.top - parent.top;
      this._dropdown.style.top = offsetTop + delta + "px";
      this._dropdown.style.bottom = "auto";
    }
  }
  _setupMousedownListener() {
    this._zone.runOutsideAngular(() => {
      fromEvent(this._dropdown, "mousedown").pipe(takeUntil(this._destroy$)).subscribe((event) => {
        const target = event.target;
        if (target.tagName === "INPUT") {
          return;
        }
        event.preventDefault();
      });
    });
  }
  static {
    this.ɵfac = function NgDropdownPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgDropdownPanelComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NgDropdownPanelService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgDropdownPanelComponent,
      selectors: [["ng-dropdown-panel"]],
      viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7, ElementRef);
          ɵɵviewQuery(_c1, 7, ElementRef);
          ɵɵviewQuery(_c2, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentElementRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollElementRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paddingElementRef = _t.first);
        }
      },
      inputs: {
        items: "items",
        markedItem: "markedItem",
        position: "position",
        appendTo: "appendTo",
        bufferAmount: "bufferAmount",
        virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
        headerTemplate: "headerTemplate",
        footerTemplate: "footerTemplate",
        filterValue: "filterValue",
        ariaLabelDropdown: [1, "ariaLabelDropdown"]
      },
      outputs: {
        update: "update",
        scroll: "scroll",
        scrollToEnd: "scrollToEnd",
        outsideClick: "outsideClick"
      },
      features: [ɵɵNgOnChangesFeature],
      ngContentSelectors: _c3,
      decls: 9,
      vars: 7,
      consts: [["scroll", ""], ["padding", ""], ["content", ""], [1, "ng-dropdown-header"], ["role", "listbox", 1, "ng-dropdown-panel-items", "scroll-host"], [1, "ng-dropdown-footer"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgDropdownPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NgDropdownPanelComponent_Conditional_0_Template, 2, 4, "div", 3);
          ɵɵelementStart(1, "div", 4, 0);
          ɵɵelement(3, "div", null, 1);
          ɵɵelementStart(5, "div", null, 2);
          ɵɵprojection(7);
          ɵɵelementEnd()();
          ɵɵtemplate(8, NgDropdownPanelComponent_Conditional_8_Template, 2, 4, "div", 5);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.headerTemplate ? 0 : -1);
          ɵɵadvance();
          ɵɵattribute("aria-label", ctx.ariaLabelDropdown());
          ɵɵadvance(2);
          ɵɵclassProp("total-padding", ctx.virtualScroll);
          ɵɵadvance(2);
          ɵɵclassProp("scrollable-content", ctx.virtualScroll && ctx.items.length);
          ɵɵadvance(3);
          ɵɵconditional(ctx.footerTemplate ? 8 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDropdownPanelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "ng-dropdown-panel",
      template: `
		@if (headerTemplate) {
			<div class="ng-dropdown-header">
				<ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }" />
			</div>
		}
		<div #scroll role="listbox" class="ng-dropdown-panel-items scroll-host" [attr.aria-label]="ariaLabelDropdown()">
			<div #padding [class.total-padding]="virtualScroll"></div>
			<div #content [class.scrollable-content]="virtualScroll && items.length">
				<ng-content />
			</div>
		</div>
		@if (footerTemplate) {
			<div class="ng-dropdown-footer">
				<ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }" />
			</div>
		}
	`,
      imports: [NgTemplateOutlet]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: NgDropdownPanelService
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    items: [{
      type: Input
    }],
    markedItem: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    bufferAmount: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    headerTemplate: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    update: [{
      type: Output
    }],
    scroll: [{
      type: Output
    }],
    scrollToEnd: [{
      type: Output
    }],
    outsideClick: [{
      type: Output
    }],
    contentElementRef: [{
      type: ViewChild,
      args: ["content", {
        read: ElementRef,
        static: true
      }]
    }],
    scrollElementRef: [{
      type: ViewChild,
      args: ["scroll", {
        read: ElementRef,
        static: true
      }]
    }],
    paddingElementRef: [{
      type: ViewChild,
      args: ["padding", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var NgOptionComponent = class _NgOptionComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.disabled = false;
    this.stateChange$ = new Subject();
  }
  get label() {
    return (this.elementRef.nativeElement.textContent || "").trim();
  }
  ngOnChanges(changes) {
    if (changes.disabled) {
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled
      });
    }
  }
  ngAfterViewChecked() {
    if (this.label !== this._previousLabel) {
      this._previousLabel = this.label;
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled,
        label: this.elementRef.nativeElement.innerHTML
      });
    }
  }
  ngOnDestroy() {
    this.stateChange$.complete();
  }
  static {
    this.ɵfac = function NgOptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgOptionComponent)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgOptionComponent,
      selectors: [["ng-option"]],
      inputs: {
        value: "value",
        disabled: [2, "disabled", "disabled", booleanAttribute]
      },
      features: [ɵɵNgOnChangesFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function NgOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptionComponent, [{
    type: Component,
    args: [{
      selector: "ng-option",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`
    }]
  }], () => [{
    type: ElementRef
  }], {
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var KeyCode;
(function(KeyCode2) {
  KeyCode2["Tab"] = "Tab";
  KeyCode2["Enter"] = "Enter";
  KeyCode2["Esc"] = "Escape";
  KeyCode2["Space"] = " ";
  KeyCode2["ArrowUp"] = "ArrowUp";
  KeyCode2["ArrowDown"] = "ArrowDown";
  KeyCode2["Backspace"] = "Backspace";
})(KeyCode || (KeyCode = {}));
function DefaultSelectionModelFactory() {
  return new DefaultSelectionModel();
}
var DefaultSelectionModel = class {
  constructor() {
    this._selected = [];
  }
  get value() {
    return this._selected;
  }
  select(item, multiple, groupAsModel) {
    item.selected = true;
    if (!item.children || !multiple && groupAsModel) {
      this._selected.push(item);
    }
    if (multiple) {
      if (item.parent) {
        const childrenCount = item.parent.children.length;
        const selectedCount = item.parent.children.filter((x) => x.selected).length;
        item.parent.selected = childrenCount === selectedCount;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, true);
        this._removeChildren(item);
        if (groupAsModel && this._activeChildren(item)) {
          this._selected = [...this._selected.filter((x) => x.parent !== item), item];
        } else {
          this._selected = [...this._selected, ...item.children.filter((x) => !x.disabled)];
        }
      }
    }
  }
  unselect(item, multiple) {
    this._selected = this._selected.filter((x) => x !== item);
    item.selected = false;
    if (multiple) {
      if (item.parent && item.parent.selected) {
        const children = item.parent.children;
        this._removeParent(item.parent);
        this._removeChildren(item.parent);
        this._selected.push(...children.filter((x) => x !== item && !x.disabled));
        item.parent.selected = false;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, false);
        this._removeChildren(item);
      }
    }
  }
  clear(keepDisabled) {
    this._selected = keepDisabled ? this._selected.filter((x) => x.disabled) : [];
  }
  _setChildrenSelectedState(children, selected) {
    for (const child of children) {
      if (child.disabled) {
        continue;
      }
      child.selected = selected;
    }
  }
  _removeChildren(parent) {
    this._selected = [...this._selected.filter((x) => x.parent !== parent), ...parent.children.filter((x) => x.parent === parent && x.disabled && x.selected)];
  }
  _removeParent(parent) {
    this._selected = this._selected.filter((x) => x !== parent);
  }
  _activeChildren(item) {
    return item.children.every((x) => !x.disabled || x.selected);
  }
};
var NgSelectConfig = class _NgSelectConfig {
  constructor() {
    this.fixedPlaceholder = false;
    this.notFoundText = "No items found";
    this.typeToSearchText = "Type to search";
    this.addTagText = "Add item";
    this.loadingText = "Loading...";
    this.clearAllText = "Clear all";
    this.disableVirtualScroll = true;
    this.openOnEnter = true;
    this.appearance = "underline";
  }
  static {
    this.ɵfac = function NgSelectConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgSelectConfig,
      factory: _NgSelectConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConsoleService = class _ConsoleService {
  warn(message) {
    console.warn(message);
  }
  static {
    this.ɵfac = function ConsoleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsoleService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConsoleService,
      factory: _ConsoleService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SELECTION_MODEL_FACTORY = new InjectionToken("ng-select-selection-model");
var NgSelectComponent = class _NgSelectComponent {
  constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
    this.classes = classes;
    this.autoFocus = autoFocus;
    this.config = config;
    this._cd = _cd;
    this._console = _console;
    this.ariaLabelDropdown = "Options List";
    this.markFirst = true;
    this.fixedPlaceholder = false;
    this.preventToggleOnRightClick = false;
    this.dropdownPosition = "auto";
    this.loading = false;
    this.closeOnSelect = true;
    this.hideSelected = false;
    this.selectOnTab = false;
    this.bufferAmount = 4;
    this.selectableGroup = false;
    this.selectableGroupAsModel = true;
    this.searchFn = null;
    this.trackByFn = null;
    this.clearOnBackspace = true;
    this.labelForId = null;
    this.inputAttrs = {};
    this.tabFocusOnClearButton = input(true, {
      transform: booleanAttribute
    });
    this.readonly = false;
    this.searchWhileComposing = true;
    this.minTermLength = 0;
    this.editableSearchTerm = false;
    this.ngClass = null;
    this.multiple = false;
    this.addTag = false;
    this.searchable = true;
    this.clearable = true;
    this.isOpen = false;
    this.blurEvent = new EventEmitter();
    this.focusEvent = new EventEmitter();
    this.changeEvent = new EventEmitter();
    this.openEvent = new EventEmitter();
    this.closeEvent = new EventEmitter();
    this.searchEvent = new EventEmitter();
    this.clearEvent = new EventEmitter();
    this.addEvent = new EventEmitter();
    this.removeEvent = new EventEmitter();
    this.scroll = new EventEmitter();
    this.scrollToEnd = new EventEmitter();
    this.useDefaultClass = true;
    this.viewPortItems = [];
    this.searchTerm = null;
    this.dropdownId = newId();
    this.escapeHTML = true;
    this._defaultLabel = "label";
    this._pressedKeys = [];
    this._isComposing = false;
    this._destroy$ = new Subject();
    this._keyPress$ = new Subject();
    this._items = [];
    this.keyDownFn = (_) => true;
    this.clearItem = (item) => {
      const option = this.selectedItems.find((x) => x.value === item);
      this.unselect(option);
    };
    this.trackByOption = (_, item) => {
      if (this.trackByFn) {
        return this.trackByFn(item.value);
      }
      return item;
    };
    this._onChange = (_) => {
    };
    this._onTouched = () => {
    };
    this._mergeGlobalConfig(config);
    this.itemsList = new ItemsList(this, newSelectionModel ? newSelectionModel() : DefaultSelectionModelFactory());
    this.element = _elementRef.nativeElement;
  }
  get filtered() {
    return !!this.searchTerm && this.searchable || this._isComposing;
  }
  get single() {
    return !this.multiple;
  }
  get items() {
    return this._items;
  }
  set items(value) {
    this._itemsAreUsed = true;
    this._items = value ?? [];
  }
  get disabled() {
    return this.readonly || this._disabled;
  }
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (fn !== void 0 && fn !== null && !isFunction(fn)) {
      throw Error("`compareWith` must be a function.");
    }
    this._compareWith = fn;
  }
  get clearSearchOnAdd() {
    if (isDefined(this._clearSearchOnAdd)) {
      return this._clearSearchOnAdd;
    } else if (isDefined(this.config.clearSearchOnAdd)) {
      return this.config.clearSearchOnAdd;
    }
    return this.closeOnSelect;
  }
  set clearSearchOnAdd(value) {
    this._clearSearchOnAdd = value;
  }
  get deselectOnClick() {
    if (isDefined(this._deselectOnClick)) {
      return this._deselectOnClick;
    } else if (isDefined(this.config.deselectOnClick)) {
      return this.config.deselectOnClick;
    }
    return this.multiple;
  }
  set deselectOnClick(value) {
    this._deselectOnClick = value;
  }
  get selectedItems() {
    return this.itemsList.selectedItems;
  }
  get selectedValues() {
    return this.selectedItems.map((x) => x.value);
  }
  get hasValue() {
    return this.selectedItems.length > 0;
  }
  get currentPanelPosition() {
    if (this.dropdownPanel) {
      return this.dropdownPanel.currentPosition;
    }
    return void 0;
  }
  get showAddTag() {
    if (!this._validTerm) {
      return false;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.addTag && !this.itemsList.filteredItems.some((x) => x.label.toLowerCase() === term) && (!this.hideSelected && this.isOpen || !this.selectedItems.some((x) => x.label.toLowerCase() === term)) && !this.loading;
  }
  get _editableSearchTerm() {
    return this.editableSearchTerm && !this.multiple;
  }
  get _isTypeahead() {
    return this.typeahead && this.typeahead.observers.length > 0;
  }
  get _validTerm() {
    const term = this.searchTerm?.trim();
    return term && term.length >= this.minTermLength;
  }
  ngOnInit() {
    this._handleKeyPresses();
    this._setInputAttributes();
  }
  ngOnChanges(changes) {
    if (changes.multiple) {
      this.itemsList.clearSelected();
    }
    if (changes.items) {
      this._setItems(changes.items.currentValue || []);
    }
    if (changes.isOpen) {
      this._manualOpen = isDefined(changes.isOpen.currentValue);
    }
    if (changes.groupBy) {
      if (!changes.items) {
        this._setItems([...this.items]);
      }
    }
    if (changes.inputAttrs) {
      this._setInputAttributes();
    }
  }
  ngAfterViewInit() {
    if (!this._itemsAreUsed) {
      this.escapeHTML = false;
      this._setItemsFromNgOptions();
    }
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  handleKeyDown($event) {
    const keyName = $event.key;
    if (Object.values(KeyCode).includes(keyName)) {
      if (this.keyDownFn($event) === false) {
        return;
      }
      this.handleKeyCode($event);
    } else if (keyName && keyName.length === 1) {
      this._keyPress$.next(keyName.toLocaleLowerCase());
    }
  }
  handleKeyCode($event) {
    const target = $event.target;
    if (this.clearButton && this.clearButton.nativeElement === target) {
      this.handleKeyCodeClear($event);
    } else {
      this.handleKeyCodeInput($event);
    }
  }
  handleKeyCodeInput($event) {
    switch ($event.key) {
      case KeyCode.ArrowDown:
        this._handleArrowDown($event);
        break;
      case KeyCode.ArrowUp:
        this._handleArrowUp($event);
        break;
      case KeyCode.Space:
        this._handleSpace($event);
        break;
      case KeyCode.Enter:
        this._handleEnter($event);
        break;
      case KeyCode.Tab:
        this._handleTab($event);
        break;
      case KeyCode.Esc:
        this.close();
        $event.preventDefault();
        break;
      case KeyCode.Backspace:
        this._handleBackspace();
        break;
    }
  }
  handleKeyCodeClear($event) {
    switch ($event.key) {
      case KeyCode.Enter:
        this.handleClearClick();
        $event.preventDefault();
        break;
    }
  }
  handleMousedown($event) {
    if (this.preventToggleOnRightClick && $event.button === 2) {
      return false;
    }
    const target = $event.target;
    if (target.tagName !== "INPUT") {
      $event.preventDefault();
    }
    if (target.classList.contains("ng-clear-wrapper")) {
      this.handleClearClick();
      return;
    }
    if (target.classList.contains("ng-arrow-wrapper")) {
      this.handleArrowClick();
      return;
    }
    if (target.classList.contains("ng-value-icon")) {
      return;
    }
    if (!this.focused) {
      this.focus();
    }
    if (this.searchable) {
      this.open();
    } else {
      this.toggle();
    }
  }
  handleArrowClick() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  handleClearClick() {
    if (this.hasValue) {
      this.itemsList.clearSelected(true);
      this._updateNgModel();
    }
    this._clearSearch();
    this.focus();
    this.clearEvent.emit();
    this._onSelectionChanged();
  }
  clearModel() {
    if (!this.clearable) {
      return;
    }
    this.itemsList.clearSelected();
    this._updateNgModel();
  }
  writeValue(value) {
    this.itemsList.clearSelected();
    this._handleWriteValue(value);
    this._cd.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(state) {
    this._disabled = state;
    this._cd.markForCheck();
  }
  toggle() {
    if (!this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    if (this.disabled || this.isOpen || this._manualOpen) {
      return;
    }
    if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
      return;
    }
    this.isOpen = true;
    this.itemsList.markSelectedOrDefault(this.markFirst);
    this.openEvent.emit();
    if (!this.searchTerm) {
      this.focus();
    }
    this.detectChanges();
  }
  close() {
    if (!this.isOpen || this._manualOpen) {
      return;
    }
    this.isOpen = false;
    this._isComposing = false;
    if (!this._editableSearchTerm) {
      this._clearSearch();
    } else {
      this.itemsList.resetFilteredItems();
    }
    this.itemsList.unmarkItem();
    this._onTouched();
    this.closeEvent.emit();
    this._cd.markForCheck();
  }
  toggleItem(item) {
    if (!item || item.disabled || this.disabled) {
      return;
    }
    if (this.deselectOnClick && item.selected) {
      this.unselect(item);
    } else {
      this.select(item);
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
  }
  select(item) {
    if (!item.selected) {
      this.itemsList.select(item);
      if (this.clearSearchOnAdd && !this._editableSearchTerm) {
        this._clearSearch();
      }
      this._updateNgModel();
      if (this.multiple) {
        this.addEvent.emit(item.value);
      }
    }
    if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
      this.close();
    }
    this._onSelectionChanged();
  }
  focus() {
    this.searchInput.nativeElement.focus();
  }
  blur() {
    this.searchInput.nativeElement.blur();
  }
  unselect(item) {
    if (!item) {
      return;
    }
    this.itemsList.unselect(item);
    this.focus();
    this._updateNgModel();
    this.removeEvent.emit(item.value);
    this._onSelectionChanged();
  }
  selectTag() {
    let tag;
    if (isFunction(this.addTag)) {
      tag = this.addTag(this.searchTerm);
    } else {
      tag = this._primitive ? this.searchTerm : {
        [this.bindLabel]: this.searchTerm
      };
    }
    const handleTag = (item) => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
    if (isPromise(tag)) {
      tag.then((item) => this.select(handleTag(item))).catch(() => {
      });
    } else if (tag) {
      this.select(handleTag(tag));
    }
  }
  showClear() {
    return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
  }
  focusOnClear() {
    this.blur();
    if (this.clearButton) {
      this.clearButton.nativeElement.focus();
    }
  }
  showNoItemsFound() {
    const empty = this.itemsList.filteredItems.length === 0;
    return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
  }
  showTypeToSearch() {
    const empty = this.itemsList.filteredItems.length === 0;
    return empty && this._isTypeahead && !this._validTerm && !this.loading;
  }
  onCompositionStart() {
    this._isComposing = true;
  }
  onCompositionEnd(term) {
    this._isComposing = false;
    if (this.searchWhileComposing) {
      return;
    }
    this.filter(term);
  }
  filter(term) {
    if (this._isComposing && !this.searchWhileComposing) {
      return;
    }
    this.searchTerm = term;
    if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
      this.typeahead.next(term);
    }
    if (!this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
      if (this.isOpen) {
        this.itemsList.markSelectedOrDefault(this.markFirst);
      }
    }
    this.searchEvent.emit({
      term,
      items: this.itemsList.filteredItems.map((x) => x.value)
    });
    this.open();
  }
  onInputFocus($event) {
    if (this.focused) {
      return;
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.element.classList.add("ng-select-focused");
    this.focusEvent.emit($event);
    this.focused = true;
  }
  onInputBlur($event) {
    this.element.classList.remove("ng-select-focused");
    this.blurEvent.emit($event);
    if (!this.isOpen && !this.disabled) {
      this._onTouched();
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.focused = false;
  }
  onItemHover(item) {
    if (item.disabled) {
      return;
    }
    this.itemsList.markItem(item);
  }
  detectChanges() {
    if (!this._cd.destroyed) {
      this._cd.detectChanges();
    }
  }
  _setSearchTermFromItems() {
    const selected = this.selectedItems?.[0];
    this.searchTerm = selected?.label ?? null;
  }
  _setItems(items) {
    const firstItem = items[0];
    this.bindLabel = this.bindLabel || this._defaultLabel;
    this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
    this.itemsList.setItems(items);
    if (items.length > 0 && this.hasValue) {
      this.itemsList.mapSelectedItems();
    }
    if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
    }
    if (this._isTypeahead || this.isOpen) {
      this.itemsList.markSelectedOrDefault(this.markFirst);
    }
  }
  _setItemsFromNgOptions() {
    const mapNgOptions = (options) => {
      this.items = options.map((option) => ({
        $ngOptionValue: option.value,
        $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
        disabled: option.disabled
      }));
      this.itemsList.setItems(this.items);
      if (this.hasValue) {
        this.itemsList.mapSelectedItems();
      }
      this.detectChanges();
    };
    const handleOptionChange = () => {
      const changedOrDestroyed = merge(this.ngOptions.changes, this._destroy$);
      merge(...this.ngOptions.map((option) => option.stateChange$)).pipe(takeUntil(changedOrDestroyed)).subscribe((option) => {
        const item = this.itemsList.findItem(option.value);
        item.disabled = option.disabled;
        item.label = option.label || item.label;
        this._cd.detectChanges();
      });
    };
    this.ngOptions.changes.pipe(startWith(this.ngOptions), takeUntil(this._destroy$)).subscribe((options) => {
      this.bindLabel = this._defaultLabel;
      mapNgOptions(options);
      handleOptionChange();
    });
  }
  _isValidWriteValue(value) {
    if (!isDefined(value) || this.multiple && value === "" || Array.isArray(value) && value.length === 0) {
      return false;
    }
    const validateBinding = (item) => {
      if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
        this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
        return false;
      }
      return true;
    };
    if (this.multiple) {
      if (!Array.isArray(value)) {
        this._console.warn("Multiple select ngModel should be array.");
        return false;
      }
      return value.every((item) => validateBinding(item));
    } else {
      return validateBinding(value);
    }
  }
  _handleWriteValue(ngModel) {
    if (!this._isValidWriteValue(ngModel)) {
      return;
    }
    const select = (val) => {
      let item = this.itemsList.findItem(val);
      if (item) {
        this.itemsList.select(item);
      } else {
        const isValObject = isObject(val);
        const isPrimitive = !isValObject && !this.bindValue;
        if (isValObject || isPrimitive) {
          this.itemsList.select(this.itemsList.mapItem(val, null));
        } else if (this.bindValue) {
          item = {
            [this.bindLabel]: null,
            [this.bindValue]: val
          };
          this.itemsList.select(this.itemsList.mapItem(item, null));
        }
      }
    };
    if (this.multiple) {
      ngModel.forEach((item) => select(item));
    } else {
      select(ngModel);
    }
  }
  _handleKeyPresses() {
    if (this.searchable) {
      return;
    }
    this._keyPress$.pipe(takeUntil(this._destroy$), tap((letter) => this._pressedKeys.push(letter)), debounceTime(200), filter(() => this._pressedKeys.length > 0), map(() => this._pressedKeys.join(""))).subscribe((term) => {
      const item = this.itemsList.findByLabel(term);
      if (item) {
        if (this.isOpen) {
          this.itemsList.markItem(item);
          this._scrollToMarked();
          this._cd.markForCheck();
        } else {
          this.select(item);
        }
      }
      this._pressedKeys = [];
    });
  }
  _setInputAttributes() {
    const input2 = this.searchInput.nativeElement;
    const attributes = __spreadValues({
      type: "text",
      autocorrect: "off",
      autocapitalize: "off",
      autocomplete: "off",
      "aria-controls": this.dropdownId
    }, this.inputAttrs);
    for (const key of Object.keys(attributes)) {
      input2.setAttribute(key, attributes[key]);
    }
  }
  _updateNgModel() {
    const model = [];
    for (const item of this.selectedItems) {
      if (this.bindValue) {
        let value = null;
        if (item.children) {
          const groupKey = this.groupValue ? this.bindValue : this.groupBy;
          value = item.value[groupKey || this.groupBy];
        } else {
          value = this.itemsList.resolveNested(item.value, this.bindValue);
        }
        model.push(value);
      } else {
        model.push(item.value);
      }
    }
    const selected = this.selectedItems.map((x) => x.value);
    if (this.multiple) {
      this._onChange(model);
      this.changeEvent.emit(selected);
    } else {
      this._onChange(isDefined(model[0]) ? model[0] : null);
      this.changeEvent.emit(selected[0]);
    }
    this._cd.markForCheck();
  }
  _clearSearch() {
    if (!this.searchTerm) {
      return;
    }
    this._changeSearch(null);
    this.itemsList.resetFilteredItems();
  }
  _changeSearch(searchTerm) {
    this.searchTerm = searchTerm;
    if (this._isTypeahead) {
      this.typeahead.next(searchTerm);
    }
  }
  _scrollToMarked() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollTo(this.itemsList.markedItem);
  }
  _scrollToTag() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollToTag();
  }
  _onSelectionChanged() {
    if (this.isOpen && this.deselectOnClick && this.appendTo) {
      this._cd.detectChanges();
      this.dropdownPanel.adjustPosition();
    }
  }
  _handleTab($event) {
    if (this.isOpen === false) {
      if (this.showClear() && !$event.shiftKey && this.tabFocusOnClearButton()) {
        this.focusOnClear();
        $event.preventDefault();
      } else if (!this.addTag) {
        return;
      }
    }
    if (this.selectOnTab) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
        $event.preventDefault();
      } else if (this.showAddTag) {
        this.selectTag();
        $event.preventDefault();
      } else {
        this.close();
      }
    } else {
      this.close();
    }
  }
  _handleEnter($event) {
    if (this.isOpen || this._manualOpen) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
      } else if (this.showAddTag) {
        this.selectTag();
      }
    } else if (this.openOnEnter) {
      this.open();
    } else {
      return;
    }
    $event.preventDefault();
  }
  _handleSpace($event) {
    if (this.isOpen || this._manualOpen) {
      return;
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowDown($event) {
    if (this._nextItemIsTag(1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markNextItem();
      this._scrollToMarked();
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowUp($event) {
    if (!this.isOpen) {
      return;
    }
    if (this._nextItemIsTag(-1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markPreviousItem();
      this._scrollToMarked();
    }
    $event.preventDefault();
  }
  _nextItemIsTag(nextStep) {
    const nextIndex = this.itemsList.markedIndex + nextStep;
    return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
  }
  _handleBackspace() {
    if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
      return;
    }
    if (this.multiple) {
      this.unselect(this.itemsList.lastSelectedItem);
    } else {
      this.clearModel();
    }
  }
  _mergeGlobalConfig(config) {
    this.placeholder = this.placeholder || config.placeholder;
    this.fixedPlaceholder = this.fixedPlaceholder || config.fixedPlaceholder;
    this.notFoundText = this.notFoundText || config.notFoundText;
    this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
    this.addTagText = this.addTagText || config.addTagText;
    this.loadingText = this.loadingText || config.loadingText;
    this.clearAllText = this.clearAllText || config.clearAllText;
    this.virtualScroll = this.getVirtualScroll(config);
    this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
    this.appendTo = this.appendTo || config.appendTo;
    this.bindValue = this.bindValue || config.bindValue;
    this.bindLabel = this.bindLabel || config.bindLabel;
    this.appearance = this.appearance || config.appearance;
  }
  /**
   * Gets virtual scroll value from input or from config
   *
   *  @param config NgSelectConfig object
   *
   *  @returns `true` if virtual scroll is enabled, `false` otherwise
   */
  getVirtualScroll(config) {
    return isDefined(this.virtualScroll) ? this.virtualScroll : this.isVirtualScrollDisabled(config);
  }
  /**
   * Gets disableVirtualScroll value from input or from config
   *
   *  @param config NgSelectConfig object
   *
   *  @returns `true` if disableVirtualScroll is enabled, `false` otherwise
   */
  isVirtualScrollDisabled(config) {
    return isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
  }
  static {
    this.ɵfac = function NgSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectComponent)(ɵɵinjectAttribute("class"), ɵɵinjectAttribute("autofocus"), ɵɵdirectiveInject(NgSelectConfig), ɵɵdirectiveInject(SELECTION_MODEL_FACTORY, 8), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ConsoleService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgSelectComponent,
      selectors: [["ng-select"]],
      contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgOptionTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgOptgroupTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgLabelTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgMultiLabelTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgHeaderTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgFooterTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgNotFoundTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgPlaceholderTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgTypeToSearchTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgLoadingTextTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgTagTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgLoadingSpinnerTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgClearButtonTemplateDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NgOptionComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optgroupTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.multiLabelTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.notFoundTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.placeholderTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.typeToSearchTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTextTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tagTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingSpinnerTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearButtonTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ngOptions = _t);
        }
      },
      viewQuery: function NgSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NgDropdownPanelComponent, 5);
          ɵɵviewQuery(_c5, 7);
          ɵɵviewQuery(_c6, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownPanel = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.searchInput = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearButton = _t.first);
        }
      },
      hostVars: 20,
      hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("ng-select-typeahead", ctx.typeahead)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select", ctx.useDefaultClass)("ng-select-filtered", ctx.filtered)("ng-select-single", ctx.single)("ng-select-disabled", ctx.disabled);
        }
      },
      inputs: {
        ariaLabelDropdown: "ariaLabelDropdown",
        bindLabel: "bindLabel",
        bindValue: "bindValue",
        ariaLabel: "ariaLabel",
        markFirst: [2, "markFirst", "markFirst", booleanAttribute],
        placeholder: "placeholder",
        fixedPlaceholder: "fixedPlaceholder",
        notFoundText: "notFoundText",
        typeToSearchText: "typeToSearchText",
        preventToggleOnRightClick: "preventToggleOnRightClick",
        addTagText: "addTagText",
        loadingText: "loadingText",
        clearAllText: "clearAllText",
        appearance: "appearance",
        dropdownPosition: "dropdownPosition",
        appendTo: "appendTo",
        loading: [2, "loading", "loading", booleanAttribute],
        closeOnSelect: [2, "closeOnSelect", "closeOnSelect", booleanAttribute],
        hideSelected: [2, "hideSelected", "hideSelected", booleanAttribute],
        selectOnTab: [2, "selectOnTab", "selectOnTab", booleanAttribute],
        openOnEnter: [2, "openOnEnter", "openOnEnter", booleanAttribute],
        maxSelectedItems: [2, "maxSelectedItems", "maxSelectedItems", numberAttribute],
        groupBy: "groupBy",
        groupValue: "groupValue",
        bufferAmount: [2, "bufferAmount", "bufferAmount", numberAttribute],
        virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
        selectableGroup: [2, "selectableGroup", "selectableGroup", booleanAttribute],
        selectableGroupAsModel: [2, "selectableGroupAsModel", "selectableGroupAsModel", booleanAttribute],
        searchFn: "searchFn",
        trackByFn: "trackByFn",
        clearOnBackspace: [2, "clearOnBackspace", "clearOnBackspace", booleanAttribute],
        labelForId: "labelForId",
        inputAttrs: "inputAttrs",
        tabIndex: [2, "tabIndex", "tabIndex", numberAttribute],
        tabFocusOnClearButton: [1, "tabFocusOnClearButton"],
        readonly: [2, "readonly", "readonly", booleanAttribute],
        searchWhileComposing: [2, "searchWhileComposing", "searchWhileComposing", booleanAttribute],
        minTermLength: [2, "minTermLength", "minTermLength", numberAttribute],
        editableSearchTerm: [2, "editableSearchTerm", "editableSearchTerm", booleanAttribute],
        ngClass: "ngClass",
        typeahead: "typeahead",
        multiple: [2, "multiple", "multiple", booleanAttribute],
        addTag: "addTag",
        searchable: [2, "searchable", "searchable", booleanAttribute],
        clearable: [2, "clearable", "clearable", booleanAttribute],
        isOpen: "isOpen",
        items: "items",
        compareWith: "compareWith",
        clearSearchOnAdd: "clearSearchOnAdd",
        deselectOnClick: "deselectOnClick",
        keyDownFn: "keyDownFn"
      },
      outputs: {
        blurEvent: "blur",
        focusEvent: "focus",
        changeEvent: "change",
        openEvent: "open",
        closeEvent: "close",
        searchEvent: "search",
        clearEvent: "clear",
        addEvent: "add",
        removeEvent: "remove",
        scroll: "scroll",
        scrollToEnd: "scrollToEnd"
      },
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgSelectComponent),
        multi: true
      }, NgDropdownPanelService]), ɵɵNgOnChangesFeature],
      decls: 15,
      vars: 20,
      consts: [["searchInput", ""], ["defaultPlaceholderTemplate", ""], ["defaultLabelTemplate", ""], ["defaultLoadingSpinnerTemplate", ""], ["clearButton", ""], ["defaultOptionTemplate", ""], ["defaultTagTemplate", ""], ["defaultNotFoundTemplate", ""], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""], [1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-input"], ["aria-autocomplete", "list", "role", "combobox", 3, "blur", "change", "compositionend", "compositionstart", "focus", "input", "disabled", "readOnly", "value"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], [1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "ariaLabelDropdown"], ["aria-atomic", "true", "aria-live", "polite", "role", "status", 1, "ng-visually-hidden"], [3, "ngTemplateOutlet"], [1, "ng-placeholder"], [1, "ng-value", 3, "ng-value-disabled"], [1, "ng-value"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], [1, "ng-spinner-loader"], ["role", "button", "tabindex", "0", 1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], [1, "ng-dropdown-panel", 3, "update", "scroll", "scrollToEnd", "outsideClick", "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "ariaLabelDropdown"], [1, "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked"], ["role", "option", 1, "ng-option", 3, "ng-option-marked"], [1, "ng-option", 3, "click", "mouseover"], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], [1, "ng-tag-label"], [1, "ng-option", "ng-option-disabled"]],
      template: function NgSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 10);
          ɵɵlistener("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.handleMousedown($event));
          });
          ɵɵelementStart(1, "div", 11);
          ɵɵtemplate(2, NgSelectComponent_Conditional_2_Template, 3, 1)(3, NgSelectComponent_Conditional_3_Template, 2, 0)(4, NgSelectComponent_Conditional_4_Template, 1, 5, null, 12);
          ɵɵelementStart(5, "div", 13)(6, "input", 14, 0);
          ɵɵlistener("blur", function NgSelectComponent_Template_input_blur_6_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onInputBlur($event));
          })("change", function NgSelectComponent_Template_input_change_6_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView($event.stopPropagation());
          })("compositionend", function NgSelectComponent_Template_input_compositionend_6_listener() {
            ɵɵrestoreView(_r1);
            const searchInput_r7 = ɵɵreference(7);
            return ɵɵresetView(ctx.onCompositionEnd(searchInput_r7.value));
          })("compositionstart", function NgSelectComponent_Template_input_compositionstart_6_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onCompositionStart());
          })("focus", function NgSelectComponent_Template_input_focus_6_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onInputFocus($event));
          })("input", function NgSelectComponent_Template_input_input_6_listener() {
            ɵɵrestoreView(_r1);
            const searchInput_r7 = ɵɵreference(7);
            return ɵɵresetView(ctx.filter(searchInput_r7.value));
          });
          ɵɵelementEnd()()();
          ɵɵtemplate(8, NgSelectComponent_Conditional_8_Template, 3, 1)(9, NgSelectComponent_Conditional_9_Template, 2, 1);
          ɵɵelementStart(10, "span", 15);
          ɵɵelement(11, "span", 16);
          ɵɵelementEnd()();
          ɵɵtemplate(12, NgSelectComponent_Conditional_12_Template, 8, 18, "ng-dropdown-panel", 17);
          ɵɵelementStart(13, "div", 18);
          ɵɵtemplate(14, NgSelectComponent_Conditional_14_Template, 1, 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_8_0;
          ɵɵclassProp("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
          ɵɵadvance(2);
          ɵɵconditional(ctx.selectedItems.length === 0 && !ctx.searchTerm || ctx.fixedPlaceholder ? 2 : -1);
          ɵɵadvance();
          ɵɵconditional((!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0 ? 3 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0 ? 4 : -1);
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.disabled)("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("value", (tmp_8_0 = ctx.searchTerm) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "");
          ɵɵattribute("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null)("aria-expanded", ctx.isOpen)("aria-label", ctx.ariaLabel)("id", ctx.labelForId)("tabindex", ctx.tabIndex);
          ɵɵadvance(2);
          ɵɵconditional(ctx.loading ? 8 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.showClear() ? 9 : -1);
          ɵɵadvance(3);
          ɵɵconditional(ctx.isOpen ? 12 : -1);
          ɵɵadvance(2);
          ɵɵconditional(ctx.isOpen && ctx.showNoItemsFound() ? 14 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, NgClass],
      styles: ['@charset "UTF-8";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:"\\200b"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}.ng-visually-hidden{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0;white-space:nowrap}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectComponent, [{
    type: Component,
    args: [{
      selector: "ng-select",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgSelectComponent),
        multi: true
      }, NgDropdownPanelService],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, NgClass],
      template: `<div
	(mousedown)="handleMousedown($event)"
	[class.ng-appearance-outline]="appearance === 'outline'"
	[class.ng-has-value]="hasValue"
	class="ng-select-container">
	<div class="ng-value-container">
		@if ((selectedItems.length === 0 && !searchTerm) || fixedPlaceholder) {
			<ng-template #defaultPlaceholderTemplate>
				<div class="ng-placeholder">{{ placeholder }}</div>
			</ng-template>
			<ng-template [ngTemplateOutlet]="placeholderTemplate || defaultPlaceholderTemplate"> </ng-template>
		}

		@if ((!multiLabelTemplate || !multiple) && selectedItems.length > 0) {
			@for (item of selectedItems; track trackByOption($index, item)) {
				<div [class.ng-value-disabled]="item.disabled" class="ng-value">
					<ng-template #defaultLabelTemplate>
						<span class="ng-value-icon left" (click)="unselect(item)" aria-hidden="true">×</span>
						<span class="ng-value-label" [ngItemLabel]="item.label" [escape]="escapeHTML"></span>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="labelTemplate || defaultLabelTemplate"
						[ngTemplateOutletContext]="{ item: item.value, clear: clearItem, label: item.label }">
					</ng-template>
				</div>
			}
		}

		@if (multiple && multiLabelTemplate && selectedValues.length > 0) {
			<ng-template [ngTemplateOutlet]="multiLabelTemplate" [ngTemplateOutletContext]="{ items: selectedValues, clear: clearItem }">
			</ng-template>
		}

		<div class="ng-input">
			<input
				#searchInput
				(blur)="onInputBlur($event)"
				(change)="$event.stopPropagation()"
				(compositionend)="onCompositionEnd(searchInput.value)"
				(compositionstart)="onCompositionStart()"
				(focus)="onInputFocus($event)"
				(input)="filter(searchInput.value)"
				[attr.aria-activedescendant]="isOpen ? itemsList?.markedItem?.htmlId : null"
				[attr.aria-controls]="isOpen ? dropdownId : null"
				[attr.aria-expanded]="isOpen"
				[attr.aria-label]="ariaLabel"
				[attr.id]="labelForId"
				[attr.tabindex]="tabIndex"
				[disabled]="disabled"
				[readOnly]="!searchable || itemsList.maxItemsSelected"
				[value]="searchTerm ?? ''"
				aria-autocomplete="list"
				role="combobox" />
		</div>
	</div>

	@if (loading) {
		<ng-template #defaultLoadingSpinnerTemplate>
			<div class="ng-spinner-loader"></div>
		</ng-template>
		<ng-template [ngTemplateOutlet]="loadingSpinnerTemplate || defaultLoadingSpinnerTemplate"></ng-template>
	}

	@if (showClear()) {
		@if (clearButtonTemplate) {
			<ng-container [ngTemplateOutlet]="clearButtonTemplate"></ng-container>
		} @else {
			<span
				class="ng-clear-wrapper"
				role="button"
				tabindex="0"
				[attr.tabindex]="tabFocusOnClearButton() ? 0 : -1"
				title="{{ clearAllText }}"
				#clearButton>
				<span class="ng-clear" aria-hidden="true">×</span>
			</span>
		}
	}

	<span class="ng-arrow-wrapper">
		<span class="ng-arrow"></span>
	</span>
</div>

@if (isOpen) {
	<ng-dropdown-panel
		class="ng-dropdown-panel"
		[virtualScroll]="virtualScroll"
		[bufferAmount]="bufferAmount"
		[appendTo]="appendTo"
		[position]="dropdownPosition"
		[headerTemplate]="headerTemplate"
		[footerTemplate]="footerTemplate"
		[filterValue]="searchTerm"
		[items]="itemsList.filteredItems"
		[markedItem]="itemsList.markedItem"
		(update)="viewPortItems = $event"
		(scroll)="scroll.emit($event)"
		(scrollToEnd)="scrollToEnd.emit($event)"
		(outsideClick)="close()"
		[class.ng-select-multiple]="multiple"
		[ngClass]="appendTo ? (ngClass ? ngClass : classes) : null"
		[id]="dropdownId"
		[ariaLabelDropdown]="ariaLabelDropdown">
		<ng-container>
			@for (item of viewPortItems; track trackByOption($index, item)) {
				<div
					class="ng-option"
					[attr.role]="item.children ? 'group' : 'option'"
					(click)="toggleItem(item)"
					(mouseover)="onItemHover(item)"
					[class.ng-option-disabled]="item.disabled"
					[class.ng-option-selected]="item.selected"
					[class.ng-optgroup]="item.children"
					[class.ng-option]="!item.children"
					[class.ng-option-child]="!!item.parent"
					[class.ng-option-marked]="item === itemsList.markedItem"
					[attr.aria-selected]="item.selected"
					[attr.id]="item?.htmlId"
					[attr.aria-setsize]="itemsList.filteredItems.length"
					[attr.aria-posinset]="item.index + 1">
					<ng-template #defaultOptionTemplate>
						<span class="ng-option-label" [ngItemLabel]="item.label" [escape]="escapeHTML"></span>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="
							item.children ? optgroupTemplate || defaultOptionTemplate : optionTemplate || defaultOptionTemplate
						"
						[ngTemplateOutletContext]="{ item: item.value, item$: item, index: item.index, searchTerm: searchTerm }">
					</ng-template>
				</div>
			}
			@if (showAddTag) {
				<div
					class="ng-option"
					[class.ng-option-marked]="!itemsList.markedItem"
					(mouseover)="itemsList.unmarkItem()"
					role="option"
					(click)="selectTag()">
					<ng-template #defaultTagTemplate>
						<span
							><span class="ng-tag-label">{{ addTagText }}</span
							>"{{ searchTerm }}"</span
						>
					</ng-template>
					<ng-template
						[ngTemplateOutlet]="tagTemplate || defaultTagTemplate"
						[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
					</ng-template>
				</div>
			}
		</ng-container>
		@if (showNoItemsFound()) {
			<ng-template #defaultNotFoundTemplate>
				<div class="ng-option ng-option-disabled">{{ notFoundText }}</div>
			</ng-template>
			<ng-template
				[ngTemplateOutlet]="notFoundTemplate || defaultNotFoundTemplate"
				[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
			</ng-template>
		}
		@if (showTypeToSearch()) {
			<ng-template #defaultTypeToSearchTemplate>
				<div class="ng-option ng-option-disabled">{{ typeToSearchText }}</div>
			</ng-template>
			<ng-template [ngTemplateOutlet]="typeToSearchTemplate || defaultTypeToSearchTemplate"></ng-template>
		}
		@if (loading && itemsList.filteredItems.length === 0) {
			<ng-template #defaultLoadingTextTemplate>
				<div class="ng-option ng-option-disabled">{{ loadingText }}</div>
			</ng-template>
			<ng-template
				[ngTemplateOutlet]="loadingTextTemplate || defaultLoadingTextTemplate"
				[ngTemplateOutletContext]="{ searchTerm: searchTerm }">
			</ng-template>
		}
	</ng-dropdown-panel>
}

<!-- Always present aria-live region -->
<div aria-atomic="true" aria-live="polite" class="ng-visually-hidden" role="status">
	@if (isOpen && showNoItemsFound()) {
		{{ notFoundText }}
	}
</div>
`,
      styles: ['@charset "UTF-8";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:"\\200b"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}.ng-visually-hidden{position:absolute!important;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0;white-space:nowrap}\n']
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["class"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["autofocus"]
    }]
  }, {
    type: NgSelectConfig
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SELECTION_MODEL_FACTORY]
    }, {
      type: Optional
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ConsoleService
  }], {
    ariaLabelDropdown: [{
      type: Input
    }],
    bindLabel: [{
      type: Input
    }],
    bindValue: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    markFirst: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    fixedPlaceholder: [{
      type: Input
    }],
    notFoundText: [{
      type: Input
    }],
    typeToSearchText: [{
      type: Input
    }],
    preventToggleOnRightClick: [{
      type: Input
    }],
    addTagText: [{
      type: Input
    }],
    loadingText: [{
      type: Input
    }],
    clearAllText: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    dropdownPosition: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    closeOnSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideSelected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnTab: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    openOnEnter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maxSelectedItems: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    groupBy: [{
      type: Input
    }],
    groupValue: [{
      type: Input
    }],
    bufferAmount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectableGroup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectableGroupAsModel: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchFn: [{
      type: Input
    }],
    trackByFn: [{
      type: Input
    }],
    clearOnBackspace: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelForId: [{
      type: Input
    }],
    inputAttrs: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchWhileComposing: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    minTermLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    editableSearchTerm: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ngClass: [{
      type: Input
    }],
    typeahead: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.ng-select-typeahead"]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }, {
      type: HostBinding,
      args: ["class.ng-select-multiple"]
    }],
    addTag: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.ng-select-taggable"]
    }],
    searchable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }, {
      type: HostBinding,
      args: ["class.ng-select-searchable"]
    }],
    clearable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }, {
      type: HostBinding,
      args: ["class.ng-select-clearable"]
    }],
    isOpen: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.ng-select-opened"]
    }],
    blurEvent: [{
      type: Output,
      args: ["blur"]
    }],
    focusEvent: [{
      type: Output,
      args: ["focus"]
    }],
    changeEvent: [{
      type: Output,
      args: ["change"]
    }],
    openEvent: [{
      type: Output,
      args: ["open"]
    }],
    closeEvent: [{
      type: Output,
      args: ["close"]
    }],
    searchEvent: [{
      type: Output,
      args: ["search"]
    }],
    clearEvent: [{
      type: Output,
      args: ["clear"]
    }],
    addEvent: [{
      type: Output,
      args: ["add"]
    }],
    removeEvent: [{
      type: Output,
      args: ["remove"]
    }],
    scroll: [{
      type: Output,
      args: ["scroll"]
    }],
    scrollToEnd: [{
      type: Output,
      args: ["scrollToEnd"]
    }],
    optionTemplate: [{
      type: ContentChild,
      args: [NgOptionTemplateDirective, {
        read: TemplateRef
      }]
    }],
    optgroupTemplate: [{
      type: ContentChild,
      args: [NgOptgroupTemplateDirective, {
        read: TemplateRef
      }]
    }],
    labelTemplate: [{
      type: ContentChild,
      args: [NgLabelTemplateDirective, {
        read: TemplateRef
      }]
    }],
    multiLabelTemplate: [{
      type: ContentChild,
      args: [NgMultiLabelTemplateDirective, {
        read: TemplateRef
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: [NgHeaderTemplateDirective, {
        read: TemplateRef
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: [NgFooterTemplateDirective, {
        read: TemplateRef
      }]
    }],
    notFoundTemplate: [{
      type: ContentChild,
      args: [NgNotFoundTemplateDirective, {
        read: TemplateRef
      }]
    }],
    placeholderTemplate: [{
      type: ContentChild,
      args: [NgPlaceholderTemplateDirective, {
        read: TemplateRef
      }]
    }],
    typeToSearchTemplate: [{
      type: ContentChild,
      args: [NgTypeToSearchTemplateDirective, {
        read: TemplateRef
      }]
    }],
    loadingTextTemplate: [{
      type: ContentChild,
      args: [NgLoadingTextTemplateDirective, {
        read: TemplateRef
      }]
    }],
    tagTemplate: [{
      type: ContentChild,
      args: [NgTagTemplateDirective, {
        read: TemplateRef
      }]
    }],
    loadingSpinnerTemplate: [{
      type: ContentChild,
      args: [NgLoadingSpinnerTemplateDirective, {
        read: TemplateRef
      }]
    }],
    clearButtonTemplate: [{
      type: ContentChild,
      args: [NgClearButtonTemplateDirective, {
        read: TemplateRef
      }]
    }],
    dropdownPanel: [{
      type: ViewChild,
      args: [forwardRef(() => NgDropdownPanelComponent)]
    }],
    searchInput: [{
      type: ViewChild,
      args: ["searchInput", {
        static: true
      }]
    }],
    clearButton: [{
      type: ViewChild,
      args: ["clearButton"]
    }],
    ngOptions: [{
      type: ContentChildren,
      args: [NgOptionComponent, {
        descendants: true
      }]
    }],
    useDefaultClass: [{
      type: HostBinding,
      args: ["class.ng-select"]
    }],
    filtered: [{
      type: HostBinding,
      args: ["class.ng-select-filtered"]
    }],
    single: [{
      type: HostBinding,
      args: ["class.ng-select-single"]
    }],
    items: [{
      type: Input
    }],
    disabled: [{
      type: HostBinding,
      args: ["class.ng-select-disabled"]
    }],
    compareWith: [{
      type: Input
    }],
    clearSearchOnAdd: [{
      type: Input
    }],
    deselectOnClick: [{
      type: Input
    }],
    keyDownFn: [{
      type: Input
    }],
    handleKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var NgSelectModule = class _NgSelectModule {
  static {
    this.ɵfac = function NgSelectModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgSelectModule,
      imports: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgClearButtonTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgClearButtonTemplateDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: DefaultSelectionModelFactory
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgClearButtonTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgClearButtonTemplateDirective],
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: DefaultSelectionModelFactory
      }]
    }]
  }], null, null);
})();
export {
  ConsoleService,
  DefaultSelectionModel,
  DefaultSelectionModelFactory,
  NgClearButtonTemplateDirective,
  NgDropdownPanelComponent,
  NgDropdownPanelService,
  NgFooterTemplateDirective,
  NgHeaderTemplateDirective,
  NgItemLabelDirective,
  NgLabelTemplateDirective,
  NgLoadingSpinnerTemplateDirective,
  NgLoadingTextTemplateDirective,
  NgMultiLabelTemplateDirective,
  NgNotFoundTemplateDirective,
  NgOptgroupTemplateDirective,
  NgOptionComponent,
  NgOptionTemplateDirective,
  NgPlaceholderTemplateDirective,
  NgSelectComponent,
  NgSelectConfig,
  NgSelectModule,
  NgTagTemplateDirective,
  NgTypeToSearchTemplateDirective,
  SELECTION_MODEL_FACTORY
};
//# sourceMappingURL=@ng-select_ng-select.js.map
