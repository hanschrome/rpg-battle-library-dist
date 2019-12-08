(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-mat-rpg-battle', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ngx-mat-rpg-battle'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-mat-rpg-battle.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxMatRpgBattleService = /** @class */ (function () {
        function NgxMatRpgBattleService() {
        }
        NgxMatRpgBattleService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxMatRpgBattleService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxMatRpgBattleService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxMatRpgBattleService_Factory() { return new NgxMatRpgBattleService(); }, token: NgxMatRpgBattleService, providedIn: "root" });
        return NgxMatRpgBattleService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-mat-rpg-battle.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxMatRpgBattleComponent = /** @class */ (function () {
        function NgxMatRpgBattleComponent() {
        }
        /**
         * @return {?}
         */
        NgxMatRpgBattleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        NgxMatRpgBattleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-NgxMatRpgBattle',
                        template: "\n    <p>\n      ngx-mat-rpg-battle works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgxMatRpgBattleComponent.ctorParameters = function () { return []; };
        return NgxMatRpgBattleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-mat-rpg-battle.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxMatRpgBattleModule = /** @class */ (function () {
        function NgxMatRpgBattleModule() {
        }
        NgxMatRpgBattleModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgxMatRpgBattleComponent],
                        imports: [],
                        exports: [NgxMatRpgBattleComponent]
                    },] }
        ];
        return NgxMatRpgBattleModule;
    }());

    exports.NgxMatRpgBattleComponent = NgxMatRpgBattleComponent;
    exports.NgxMatRpgBattleModule = NgxMatRpgBattleModule;
    exports.NgxMatRpgBattleService = NgxMatRpgBattleService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-mat-rpg-battle.umd.js.map
