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
import type { ApartmentDetails } from './apartment-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ApartmentUnitDetails } from './apartment-unit-details';
// May contain unused imports in some cases
// @ts-ignore
import type { BuildingDetails } from './building-details';
// May contain unused imports in some cases
// @ts-ignore
import type { BuySellPrice } from './buy-sell-price';
// May contain unused imports in some cases
// @ts-ignore
import type { EstateDirectionEnum } from './estate-direction-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { EstateTypeEnum } from './estate-type-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { FileSourceEnum } from './file-source-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { LandDetails } from './land-details';
// May contain unused imports in some cases
// @ts-ignore
import type { OwnerStatusEnum } from './owner-status-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { RentCreditPrice } from './rent-credit-price';
// May contain unused imports in some cases
// @ts-ignore
import type { StatusEnum } from './status-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { TradeTypeEnum } from './trade-type-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { UnitBase } from './unit-base';

/**
 * 
 * @export
 * @interface FileRecord
 */
export interface FileRecord {
    /**
     * 
     * @type {number}
     * @memberof FileRecord
     */
    'id': number;
    /**
     * 
     * @type {BuildingDetails}
     * @memberof FileRecord
     */
    'building_details'?: BuildingDetails;
    /**
     * 
     * @type {UnitBase}
     * @memberof FileRecord
     */
    'unit_base'?: UnitBase;
    /**
     * 
     * @type {ApartmentDetails}
     * @memberof FileRecord
     */
    'apartment_details'?: ApartmentDetails;
    /**
     * 
     * @type {ApartmentUnitDetails}
     * @memberof FileRecord
     */
    'apartment_unit_details'?: ApartmentUnitDetails;
    /**
     * 
     * @type {LandDetails}
     * @memberof FileRecord
     */
    'land_details'?: LandDetails;
    /**
     * 
     * @type {RentCreditPrice}
     * @memberof FileRecord
     */
    'rent_credit_price'?: RentCreditPrice;
    /**
     * 
     * @type {BuySellPrice}
     * @memberof FileRecord
     */
    'buy_sell_price'?: BuySellPrice;
    /**
     * 
     * @type {Array<string>}
     * @memberof FileRecord
     */
    'estate_owner_phones': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof FileRecord
     */
    'file_title': string;
    /**
     * 
     * @type {FileSourceEnum}
     * @memberof FileRecord
     */
    'file_source': FileSourceEnum;
    /**
     * 
     * @type {EstateTypeEnum}
     * @memberof FileRecord
     */
    'estate_type': EstateTypeEnum;
    /**
     * 
     * @type {TradeTypeEnum}
     * @memberof FileRecord
     */
    'trade_type': TradeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FileRecord
     */
    'address': string;
    /**
     * 
     * @type {EstateDirectionEnum}
     * @memberof FileRecord
     */
    'estate_direction': EstateDirectionEnum;
    /**
     * 
     * @type {string}
     * @memberof FileRecord
     */
    'estate_owner_name': string;
    /**
     * 
     * @type {string}
     * @memberof FileRecord
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof FileRecord
     */
    'created_at': string;
    /**
     * 
     * @type {number}
     * @memberof FileRecord
     */
    'file_number': number;
    /**
     * 
     * @type {boolean}
     * @memberof FileRecord
     */
    'has_document': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FileRecord
     */
    'has_termination': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FileRecord
     */
    'has_license': boolean;
    /**
     * 
     * @type {StatusEnum}
     * @memberof FileRecord
     */
    'status': StatusEnum;
    /**
     * 
     * @type {OwnerStatusEnum}
     * @memberof FileRecord
     */
    'owner_status'?: OwnerStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof FileRecord
     */
    'operator': number;
    /**
     * 
     * @type {number}
     * @memberof FileRecord
     */
    'district': number;
    /**
     * 
     * @type {number}
     * @memberof FileRecord
     */
    'main_image'?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof FileRecord
     */
    'estate_tags': Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof FileRecord
     */
    'images'?: Array<number>;
}


