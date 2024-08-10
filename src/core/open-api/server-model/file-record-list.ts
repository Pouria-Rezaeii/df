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
import type { BuySellResponseSchema } from './buy-sell-response-schema';
// May contain unused imports in some cases
// @ts-ignore
import type { City } from './city';
// May contain unused imports in some cases
// @ts-ignore
import type { District } from './district';
// May contain unused imports in some cases
// @ts-ignore
import type { EstateTypeEnum } from './estate-type-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { FileSourceEnum } from './file-source-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { Image } from './image';
// May contain unused imports in some cases
// @ts-ignore
import type { OwnerStatusEnum } from './owner-status-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { Province } from './province';
// May contain unused imports in some cases
// @ts-ignore
import type { RentCreditResponseSchema } from './rent-credit-response-schema';
// May contain unused imports in some cases
// @ts-ignore
import type { TradeTypeEnum } from './trade-type-enum';

/**
 * 
 * @export
 * @interface FileRecordList
 */
export interface FileRecordList {
    /**
     * 
     * @type {number}
     * @memberof FileRecordList
     */
    'id': number;
    /**
     * 
     * @type {Image}
     * @memberof FileRecordList
     */
    'main_image': Image;
    /**
     * 
     * @type {number}
     * @memberof FileRecordList
     */
    'images_count': number;
    /**
     * 
     * @type {Province}
     * @memberof FileRecordList
     */
    'province': Province;
    /**
     * 
     * @type {City}
     * @memberof FileRecordList
     */
    'city': City;
    /**
     * 
     * @type {District}
     * @memberof FileRecordList
     */
    'district': District;
    /**
     * 
     * @type {TradeTypeEnum}
     * @memberof FileRecordList
     */
    'trade_type': TradeTypeEnum;
    /**
     * 
     * @type {EstateTypeEnum}
     * @memberof FileRecordList
     */
    'estate_type': EstateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FileRecordList
     */
    'file_title': string;
    /**
     * 
     * @type {number}
     * @memberof FileRecordList
     */
    'unit_meterage': number | null;
    /**
     * 
     * @type {number}
     * @memberof FileRecordList
     */
    'land_meterage': number | null;
    /**
     * 
     * @type {number}
     * @memberof FileRecordList
     */
    'construction_year': number | null;
    /**
     * 
     * @type {number}
     * @memberof FileRecordList
     */
    'rooms_count': number | null;
    /**
     * 
     * @type {RentCreditResponseSchema}
     * @memberof FileRecordList
     */
    'rent_and_credit': RentCreditResponseSchema | null;
    /**
     * 
     * @type {BuySellResponseSchema}
     * @memberof FileRecordList
     */
    'total_price_and_per_meter': BuySellResponseSchema | null;
    /**
     * 
     * @type {string}
     * @memberof FileRecordList
     */
    'estate_owner_name': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FileRecordList
     */
    'owner_phones': Array<string>;
    /**
     * 
     * @type {number}
     * @memberof FileRecordList
     */
    'file_number': number;
    /**
     * 
     * @type {string}
     * @memberof FileRecordList
     */
    'created_at'?: string;
    /**
     * 
     * @type {OwnerStatusEnum}
     * @memberof FileRecordList
     */
    'owner_status'?: OwnerStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FileRecordList
     */
    'is_marked': boolean;
    /**
     * 
     * @type {FileSourceEnum}
     * @memberof FileRecordList
     */
    'file_source': FileSourceEnum;
}



