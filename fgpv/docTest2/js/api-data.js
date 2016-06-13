angular.module('app')
.constant('API', [
  {
    "name": "app",
    "outputPath": "./partials/partials/api/app/index.html",
    "url": "/api/app"
  },
  {
    "name": "app.common.router",
    "outputPath": "./partials/partials/api/app.common.router/index.html",
    "url": "/api/app.common.router"
  },
  {
    "name": "app.core",
    "outputPath": "./partials/partials/api/app.core/index.html",
    "url": "/api/app.core"
  },
  {
    "name": "app.geo",
    "outputPath": "./partials/partials/api/app.geo/index.html",
    "url": "/api/app.geo"
  },
  {
    "name": "app.layout",
    "outputPath": "./partials/partials/api/app.layout/index.html",
    "url": "/api/app.layout"
  },
  {
    "name": "app.ui.appbar",
    "outputPath": "./partials/partials/api/app.ui.appbar/index.html",
    "url": "/api/app.ui.appbar"
  },
  {
    "name": "app.ui.basemap",
    "outputPath": "./partials/partials/api/app.ui.basemap/index.html",
    "url": "/api/app.ui.basemap"
  },
  {
    "name": "app.ui.common",
    "outputPath": "./partials/partials/api/app.ui.common/index.html",
    "url": "/api/app.ui.common"
  },
  {
    "name": "app.ui.common.stepper",
    "outputPath": "./partials/partials/api/app.ui.common.stepper/index.html",
    "url": "/api/app.ui.common.stepper"
  },
  {
    "name": "app.ui.details",
    "outputPath": "./partials/partials/api/app.ui.details/index.html",
    "url": "/api/app.ui.details"
  },
  {
    "name": "app.ui.filters",
    "outputPath": "./partials/partials/api/app.ui.filters/index.html",
    "url": "/api/app.ui.filters"
  },
  {
    "name": "app.ui.help",
    "outputPath": "./partials/partials/api/app.ui.help/index.html",
    "url": "/api/app.ui.help"
  },
  {
    "name": "app.ui.loader",
    "outputPath": "./partials/partials/api/app.ui.loader/index.html",
    "url": "/api/app.ui.loader"
  },
  {
    "name": "app.ui.mapnav",
    "outputPath": "./partials/partials/api/app.ui.mapnav/index.html",
    "url": "/api/app.ui.mapnav"
  },
  {
    "name": "app.ui.metadata",
    "outputPath": "./partials/partials/api/app.ui.metadata/index.html",
    "url": "/api/app.ui.metadata"
  },
  {
    "name": "app.ui.panels",
    "outputPath": "./partials/partials/api/app.ui.panels/index.html",
    "url": "/api/app.ui.panels"
  },
  {
    "name": "app.ui.settings",
    "outputPath": "./partials/partials/api/app.ui.settings/index.html",
    "url": "/api/app.ui.settings"
  },
  {
    "name": "app.ui.sidenav",
    "outputPath": "./partials/partials/api/app.ui.sidenav/index.html",
    "url": "/api/app.ui.sidenav"
  },
  {
    "name": "app.ui.toc",
    "outputPath": "./partials/partials/api/app.ui.toc/index.html",
    "url": "/api/app.ui.toc"
  },
  {
    "name": "app.ui.toolbox",
    "outputPath": "./partials/partials/api/app.ui.toolbox/index.html",
    "url": "/api/app.ui.toolbox"
  },
  {
    "name": "app.ui",
    "outputPath": "./partials/partials/api/app.ui/index.html",
    "url": "/api/app.ui"
  },
  {
    "name": "displayManager",
    "outputPath": "./partials/partials/api/app.common.router/service/displayManager.html",
    "url": "/api/app.common.router/service/displayManager"
  },
  {
    "name": "initialState",
    "outputPath": "./partials/partials/api/app.common.router/service/initialState.html",
    "url": "/api/app.common.router/service/initialState"
  },
  {
    "name": "initialDisplay",
    "outputPath": "./partials/partials/api/app.common.router/service/initialDisplay.html",
    "url": "/api/app.common.router/service/initialDisplay"
  },
  {
    "name": "stateManager",
    "outputPath": "./partials/partials/api/app.common/service/stateManager.html",
    "url": "/api/app.common/service/stateManager"
  },
  {
    "name": "common",
    "outputPath": "./partials/partials/api/app.core/service/common.html",
    "url": "/api/app.core/service/common"
  },
  {
    "name": "configService",
    "outputPath": "./partials/partials/api/app.core/service/configService.html",
    "url": "/api/app.core/service/configService"
  },
  {
    "name": "configDefaults",
    "outputPath": "./partials/partials/api/app.core/service/configDefaults.html",
    "url": "/api/app.core/service/configDefaults"
  },
  {
    "name": "templateRegistry",
    "outputPath": "./partials/partials/api/app.core/service/templateRegistry.html",
    "url": "/api/app.core/service/templateRegistry"
  },
  {
    "name": "configBlock",
    "outputPath": "./partials/partials/api/app.core/function/configBlock.html",
    "url": "/api/app.core/function/configBlock"
  },
  {
    "name": "runBlock",
    "outputPath": "./partials/partials/api/app.core/function/runBlock.html",
    "url": "/api/app.core/function/runBlock"
  },
  {
    "name": "globalRegistry",
    "outputPath": "./partials/partials/api/app.core/service/globalRegistry.html",
    "url": "/api/app.core/service/globalRegistry"
  },
  {
    "name": "version",
    "outputPath": "./partials/partials/api/app.core/service/version.html",
    "url": "/api/app.core/service/version"
  },
  {
    "name": "gapi",
    "outputPath": "./partials/partials/api/app.geo/service/gapi.html",
    "url": "/api/app.geo/service/gapi"
  },
  {
    "name": "Geo",
    "outputPath": "./partials/partials/api/app.geo/service/Geo.html",
    "url": "/api/app.geo/service/Geo"
  },
  {
    "name": "geoService",
    "outputPath": "./partials/partials/api/app.geo/service/geoService.html",
    "url": "/api/app.geo/service/geoService"
  },
  {
    "name": "identifyService",
    "outputPath": "./partials/partials/api/app.geo/service/identifyService.html",
    "url": "/api/app.geo/service/identifyService"
  },
  {
    "name": "rvInitMap",
    "outputPath": "./partials/partials/api/app.geo/directive/rvInitMap.html",
    "url": "/api/app.geo/directive/rvInitMap"
  },
  {
    "name": "LayerBlueprintUserOptions",
    "outputPath": "./partials/partials/api/app.geo/service/LayerBlueprintUserOptions.html",
    "url": "/api/app.geo/service/LayerBlueprintUserOptions"
  },
  {
    "name": "LayerBlueprint",
    "outputPath": "./partials/partials/api/app.geo/service/LayerBlueprint.html",
    "url": "/api/app.geo/service/LayerBlueprint"
  },
  {
    "name": "layerRegistry",
    "outputPath": "./partials/partials/api/app.geo/service/layerRegistry.html",
    "url": "/api/app.geo/service/layerRegistry"
  },
  {
    "name": "legendEntryFactory",
    "outputPath": "./partials/partials/api/app.geo/service/legendEntryFactory.html",
    "url": "/api/app.geo/service/legendEntryFactory"
  },
  {
    "name": "legendService",
    "outputPath": "./partials/partials/api/app.geo/service/legendService.html",
    "url": "/api/app.geo/service/legendService"
  },
  {
    "name": "mapService",
    "outputPath": "./partials/partials/api/app.geo/service/mapService.html",
    "url": "/api/app.geo/service/mapService"
  },
  {
    "name": "metadataService",
    "outputPath": "./partials/partials/api/app.geo/service/metadataService.html",
    "url": "/api/app.geo/service/metadataService"
  },
  {
    "name": "layoutService",
    "outputPath": "./partials/partials/api/app.layout/service/layoutService.html",
    "url": "/api/app.layout/service/layoutService"
  },
  {
    "name": "rvShell",
    "outputPath": "./partials/partials/api/app.layout/directive/rvShell.html",
    "url": "/api/app.layout/directive/rvShell"
  },
  {
    "name": "storageService",
    "outputPath": "./partials/partials/api/app.layout/service/storageService.html",
    "url": "/api/app.layout/service/storageService"
  },
  {
    "name": "rvAppbar",
    "outputPath": "./partials/partials/api/app.ui.appbar/directive/rvAppbar.html",
    "url": "/api/app.ui.appbar/directive/rvAppbar"
  },
  {
    "name": "rvBasemapItem",
    "outputPath": "./partials/partials/api/app.ui.basemap/directive/rvBasemapItem.html",
    "url": "/api/app.ui.basemap/directive/rvBasemapItem"
  },
  {
    "name": "rvBasemap",
    "outputPath": "./partials/partials/api/app.ui.basemap/directive/rvBasemap.html",
    "url": "/api/app.ui.basemap/directive/rvBasemap"
  },
  {
    "name": "rvDetectScrollbar",
    "outputPath": "./partials/partials/api/app.ui.common/directive/rvDetectScrollbar.html",
    "url": "/api/app.ui.common/directive/rvDetectScrollbar"
  },
  {
    "name": "rvDragula",
    "outputPath": "./partials/partials/api/app.ui.common/directive/rvDragula.html",
    "url": "/api/app.ui.common/directive/rvDragula"
  },
  {
    "name": "errorService",
    "outputPath": "./partials/partials/api/app.ui.common/service/errorService.html",
    "url": "/api/app.ui.common/service/errorService"
  },
  {
    "name": "fullscreen",
    "outputPath": "./partials/partials/api/app.ui.common/service/fullscreen.html",
    "url": "/api/app.ui.common/service/fullscreen"
  },
  {
    "name": "mdMenuItemDirectiveDecorator",
    "outputPath": "./partials/partials/api/material.components.menuBar/object/mdMenuItemDirectiveDecorator.html",
    "url": "/api/material.components.menuBar/object/mdMenuItemDirectiveDecorator"
  },
  {
    "name": "rvMorph",
    "outputPath": "./partials/partials/api/app.ui.common/directive/rvMorph.html",
    "url": "/api/app.ui.common/directive/rvMorph"
  },
  {
    "name": "rvPlugSlide",
    "outputPath": "./partials/partials/api/app.ui.common/service/rvPlugSlide.html",
    "url": "/api/app.ui.common/service/rvPlugSlide"
  },
  {
    "name": "rvReverse",
    "outputPath": "./partials/partials/api/app.common/filter/rvReverse.html",
    "url": "/api/app.common/filter/rvReverse"
  },
  {
    "name": "rvStepperItem",
    "outputPath": "./partials/partials/api/app.ui.common.stepper/directive/rvStepperItem.html",
    "url": "/api/app.ui.common.stepper/directive/rvStepperItem"
  },
  {
    "name": "Stepper",
    "outputPath": "./partials/partials/api/app.ui.common.stepper/object/Stepper.html",
    "url": "/api/app.ui.common.stepper/object/Stepper"
  },
  {
    "name": "rvToggleSlide",
    "outputPath": "./partials/partials/api/app.ui.common/service/rvToggleSlide.html",
    "url": "/api/app.ui.common/service/rvToggleSlide"
  },
  {
    "name": "rvTruncate",
    "outputPath": "./partials/partials/api/app.ui.common/directive/rvTruncate.html",
    "url": "/api/app.ui.common/directive/rvTruncate"
  },
  {
    "name": "rvDetailsContent",
    "outputPath": "./partials/partials/api/app.ui.details/directive/rvDetailsContent.html",
    "url": "/api/app.ui.details/directive/rvDetailsContent"
  },
  {
    "name": "rvDetailsExpand",
    "outputPath": "./partials/partials/api/app.ui.details/directive/rvDetailsExpand.html",
    "url": "/api/app.ui.details/directive/rvDetailsExpand"
  },
  {
    "name": "rvDetails",
    "outputPath": "./partials/partials/api/app.ui.details/directive/rvDetails.html",
    "url": "/api/app.ui.details/directive/rvDetails"
  },
  {
    "name": "rvFiltersDefaultMenu",
    "outputPath": "./partials/partials/api/app.ui.filters/directive/rvFiltersDefaultMenu.html",
    "url": "/api/app.ui.filters/directive/rvFiltersDefaultMenu"
  },
  {
    "name": "rvFiltersDefault",
    "outputPath": "./partials/partials/api/app.ui.filters/directive/rvFiltersDefault.html",
    "url": "/api/app.ui.filters/directive/rvFiltersDefault"
  },
  {
    "name": "rvHelpOverlay",
    "outputPath": "./partials/partials/api/app.ui.help/directive/rvHelpOverlay.html",
    "url": "/api/app.ui.help/directive/rvHelpOverlay"
  },
  {
    "name": "rvHelp",
    "outputPath": "./partials/partials/api/app.ui.help/directive/rvHelp.html",
    "url": "/api/app.ui.help/directive/rvHelp"
  },
  {
    "name": "helpService",
    "outputPath": "./partials/partials/api/app.ui.help/service/helpService.html",
    "url": "/api/app.ui.help/service/helpService"
  },
  {
    "name": "rv-loader-file",
    "outputPath": "./partials/partials/api/app.ui.loader/directive/rv-loader-file.html",
    "url": "/api/app.ui.loader/directive/rv-loader-file"
  },
  {
    "name": "rvLoaderMenu",
    "outputPath": "./partials/partials/api/app.ui.loader/directive/rvLoaderMenu.html",
    "url": "/api/app.ui.loader/directive/rvLoaderMenu"
  },
  {
    "name": "rv-loader-service",
    "outputPath": "./partials/partials/api/app.ui.loader/directive/rv-loader-service.html",
    "url": "/api/app.ui.loader/directive/rv-loader-service"
  },
  {
    "name": "rvMapnavButton",
    "outputPath": "./partials/partials/api/app.ui.mapnav/directive/rvMapnavButton.html",
    "url": "/api/app.ui.mapnav/directive/rvMapnavButton"
  },
  {
    "name": "rvMapnav",
    "outputPath": "./partials/partials/api/app.ui.mapnav/directive/rvMapnav.html",
    "url": "/api/app.ui.mapnav/directive/rvMapnav"
  },
  {
    "name": "mapNavigationService",
    "outputPath": "./partials/partials/api/app.ui.mapnav/service/mapNavigationService.html",
    "url": "/api/app.ui.mapnav/service/mapNavigationService"
  },
  {
    "name": "rvMetadataContent",
    "outputPath": "./partials/partials/api/app.ui.metadata/directive/rvMetadataContent.html",
    "url": "/api/app.ui.metadata/directive/rvMetadataContent"
  },
  {
    "name": "rvMetadataExpand",
    "outputPath": "./partials/partials/api/app.ui.metadata/directive/rvMetadataExpand.html",
    "url": "/api/app.ui.metadata/directive/rvMetadataExpand"
  },
  {
    "name": "rvMetadataPanel",
    "outputPath": "./partials/partials/api/app.ui.metadata/directive/rvMetadataPanel.html",
    "url": "/api/app.ui.metadata/directive/rvMetadataPanel"
  },
  {
    "name": "rvContentPane",
    "outputPath": "./partials/partials/api/app.ui.panels/directive/rvContentPane.html",
    "url": "/api/app.ui.panels/directive/rvContentPane"
  },
  {
    "name": "rvFiltersPanel",
    "outputPath": "./partials/partials/api/app.ui.panels/directive/rvFiltersPanel.html",
    "url": "/api/app.ui.panels/directive/rvFiltersPanel"
  },
  {
    "name": "rvSettings",
    "outputPath": "./partials/partials/api/app.ui.settings/directive/rvSettings.html",
    "url": "/api/app.ui.settings/directive/rvSettings"
  },
  {
    "name": "rvMenuLink",
    "outputPath": "./partials/partials/api/app.ui.sidenav/directive/rvMenuLink.html",
    "url": "/api/app.ui.sidenav/directive/rvMenuLink"
  },
  {
    "name": "sideNavigationService",
    "outputPath": "./partials/partials/api/app.ui.sidenav/service/sideNavigationService.html",
    "url": "/api/app.ui.sidenav/service/sideNavigationService"
  },
  {
    "name": "rvTocEntryControl",
    "outputPath": "./partials/partials/api/ap/directive/rvTocEntryControl.html",
    "url": "/api/ap/directive/rvTocEntryControl"
  },
  {
    "name": "rvTocEntryFlag",
    "outputPath": "./partials/partials/api/app.ui.toc/directive/rvTocEntryFlag.html",
    "url": "/api/app.ui.toc/directive/rvTocEntryFlag"
  },
  {
    "name": "rvLayerItemSymbology",
    "outputPath": "./partials/partials/api/app.ui.toc/directive/rvLayerItemSymbology.html",
    "url": "/api/app.ui.toc/directive/rvLayerItemSymbology"
  },
  {
    "name": "rvTocEntry",
    "outputPath": "./partials/partials/api/app.ui.toc/directive/rvTocEntry.html",
    "url": "/api/app.ui.toc/directive/rvTocEntry"
  },
  {
    "name": "rvToc",
    "outputPath": "./partials/partials/api/app.ui.toc/directive/rvToc.html",
    "url": "/api/app.ui.toc/directive/rvToc"
  },
  {
    "name": "tocService",
    "outputPath": "./partials/partials/api/app.ui.toc/service/tocService.html",
    "url": "/api/app.ui.toc/service/tocService"
  },
  {
    "name": "rvToolbox",
    "outputPath": "./partials/partials/api/app.ui.toolbox/directive/rvToolbox.html",
    "url": "/api/app.ui.toolbox/directive/rvToolbox"
  }
]);
