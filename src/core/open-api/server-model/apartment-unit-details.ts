/* tslint:disable */
/* eslint-disable */
/**
 * Daftar File Project API
 * API List of Dafter-File Project
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UnitDirectionEnum } from './unit-direction-enum';

/**
 * 
 * @export
 * @interface ApartmentUnitDetails
 */
export interface ApartmentUnitDetails {
    /**
     * 
     * @type {number}
     * @memberof ApartmentUnitDetails
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof ApartmentUnitDetails
     */
    'floor_number': number;
    /**
     * 
     * @type {UnitDirectionEnum}
     * @memberof ApartmentUnitDetails
     */
    'unit_direction': UnitDirectionEnum;
    /**
     * 
     * @type {number}
     * @memberof ApartmentUnitDetails
     */
    'file_record': number;
}



