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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { City } from '../server-model';
// @ts-ignore
import type { District } from '../server-model';
// @ts-ignore
import type { Province } from '../server-model';
/**
 * LocationApi - axios parameter creator
 * @export
 */
export const LocationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [province] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        locationCityList: async (province?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/fa/api/location/city/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (province !== undefined) {
                localVarQueryParameter['province'] = province;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [city] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        locationDistrictList: async (city?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/fa/api/location/district/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (city !== undefined) {
                localVarQueryParameter['city'] = city;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        locationProvinceList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/fa/api/location/province/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwtAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LocationApi - functional programming interface
 * @export
 */
export const LocationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LocationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [province] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async locationCityList(province?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<City>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.locationCityList(province, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LocationApi.locationCityList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} [city] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async locationDistrictList(city?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<District>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.locationDistrictList(city, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LocationApi.locationDistrictList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async locationProvinceList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Province>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.locationProvinceList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LocationApi.locationProvinceList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LocationApi - factory interface
 * @export
 */
export const LocationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LocationApiFp(configuration)
    return {
        /**
         * 
         * @param {LocationApiLocationCityListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        locationCityList(requestParameters: LocationApiLocationCityListRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<City>> {
            return localVarFp.locationCityList(requestParameters.province, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {LocationApiLocationDistrictListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        locationDistrictList(requestParameters: LocationApiLocationDistrictListRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<District>> {
            return localVarFp.locationDistrictList(requestParameters.city, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        locationProvinceList(options?: RawAxiosRequestConfig): AxiosPromise<Array<Province>> {
            return localVarFp.locationProvinceList(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for locationCityList operation in LocationApi.
 * @export
 * @interface LocationApiLocationCityListRequest
 */
export interface LocationApiLocationCityListRequest {
    /**
     * 
     * @type {number}
     * @memberof LocationApiLocationCityList
     */
    readonly province?: number
}

/**
 * Request parameters for locationDistrictList operation in LocationApi.
 * @export
 * @interface LocationApiLocationDistrictListRequest
 */
export interface LocationApiLocationDistrictListRequest {
    /**
     * 
     * @type {number}
     * @memberof LocationApiLocationDistrictList
     */
    readonly city?: number
}

/**
 * LocationApi - object-oriented interface
 * @export
 * @class LocationApi
 * @extends {BaseAPI}
 */
export class LocationApi extends BaseAPI {
    /**
     * 
     * @param {LocationApiLocationCityListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationApi
     */
    public locationCityList(requestParameters: LocationApiLocationCityListRequest = {}, options?: RawAxiosRequestConfig) {
        return LocationApiFp(this.configuration).locationCityList(requestParameters.province, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {LocationApiLocationDistrictListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationApi
     */
    public locationDistrictList(requestParameters: LocationApiLocationDistrictListRequest = {}, options?: RawAxiosRequestConfig) {
        return LocationApiFp(this.configuration).locationDistrictList(requestParameters.city, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationApi
     */
    public locationProvinceList(options?: RawAxiosRequestConfig) {
        return LocationApiFp(this.configuration).locationProvinceList(options).then((request) => request(this.axios, this.basePath));
    }
}
