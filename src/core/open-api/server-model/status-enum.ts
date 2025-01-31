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



/**
 * * `PENDING` - در حال بررسی * `ACCEPTED` - تایید شده * `REJECTED` - رد شده * `DELETED` - حذف شده * `INACTIVE` - غیر فعال
 * @export
 * @enum {string}
 */

export const StatusEnum = {
    Pending: 'PENDING',
    Accepted: 'ACCEPTED',
    Rejected: 'REJECTED',
    Deleted: 'DELETED',
    Inactive: 'INACTIVE'
} as const;

export type StatusEnum = typeof StatusEnum[keyof typeof StatusEnum];



