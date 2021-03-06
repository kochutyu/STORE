import {ITabLink} from "../../../shared/interfaces/components/tabs/tab-link.interface";

export class AppRoutingConstant {

  static get getHomeRoute(): ITabLink {
    return AppRoutingConstant.getDashboardRoute;
  }

  static get getPreviewRoute(): ITabLink {
    return {
      name: 'preview',
      route: ['preview-pattern'],
      path: 'preview-pattern'
    };
  }

  static get getDashboardRoute(): ITabLink {
    return {
      name: 'dashboard',
      route: ['dashboard'],
      path: 'dashboard'
    };
  }

  static get getSettingsRoute(): ITabLink {
    return {
      name: 'settings',
      route: ['settings'],
      path: 'settings'
    };
  }

}
