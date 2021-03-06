import {ITabLink} from "../../../../shared/interfaces/components/tabs/tab-link.interface";
import {AppRoutingConstant} from "../app-routing.constant";

export class CreatePatternRoutingConstant {

  static get getAbstractFactory(): ITabLink {
    return {
      name: 'abstract factory',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'abstract-factory'],
      path: 'abstract-factory'
    };
  }

  static get getFactoryMethod(): ITabLink {
    return {
      name: 'factory method',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'factory-method'],
      path: 'factory-method'
    };
  }

  static get getBuilder(): ITabLink {
    return {
      name: 'builder',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'builder'],
      path: 'builder'
    };
  }

  static get getPrototype(): ITabLink {
    return {
      name: 'prototype',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'prototype'],
      path: 'prototype'
    };
  }

  static get getSingleton(): ITabLink {
    return {
      name: 'singleton',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'singleton'],
      path: 'singleton'
    };
  }

}
